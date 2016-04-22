"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONSTANTS = require('../config/constants')

let User;
const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, enum: ["austin", "plaything"], unique: true},
  password: {type: String, required: true, select: false},
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}]
})

UserSchema.statics.register = (user) => {
  return new Promise((resolve, reject)=>{
    bcrypt.hash(user.password, 16, function(err, hash) {
      if(err) reject(err);
      user.password = hash;
      console.log(user);
      User.create(user, function(err, user) {
        console.log(err || user);
        err ? reject(err) : resolve(user);
      });
    });
  })
};

UserSchema.statics.validatePassword = (user) => {
  return new Promise((resolve, reject)=>{
    User.findOne({username: user.usernmae})
    .populate("+password")
    .exec((err, foundUser)=>{
      if (err || !user) reject(err || "No user found");
      bcrypt.compare(user.password, foundUser.password, (err, isValid)=>{
        if (err || !isValid) reject(err || "Invalid Password");

        resolve();
      })
    })
  })
}

UserSchema.statics.middleware = (req, res, next)=>{
  jwt.verify(req.cookies.auth, (err, payload)=>{
    if (err) return res.status(401).send(err);

    User.findById(payload._id)
    .populate("posts")
    .exec((err, user)=>{
      if (err) return res.status(400).send(err);

      req.user = user;
      next();
    })
  })
}

UserSchema.methods.generateJWT = ()=> {
  const today = new Date();
  const exp = new Date(today);

  exp.setDate(today.getDate() + 60);
  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, CONSTANTS.SECRET)
}



User = mongoose.model("User", UserSchema);
module.exports = User;
