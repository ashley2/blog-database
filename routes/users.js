const router = require("express").Router();
const User = require("../models/UserSchema")

router.post("/register", (req, res)=>{
  User.register(req.body)
  .then(
    user=> {
      const token = user.generateJWT();
      user.password = null;
      res.cookie("auth", token).send(user);
    },
    err=> res.status(400).send(err)
  )
})

router.post("/login", (req, res)=>{
  User.validatePassword(req.body)
  .then(
    user=> {
      const token = user.generateJWT();
      res.cookie("auth", token).send(user);
    },
    err=> res.status(401).send()
  )
})

router.get("/me", User.middleware, (req, res)=>{
  res.send(req.user);
})

module.exports = router;
