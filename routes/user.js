const router = require("express").Router();
const User = require("../models/UserSchema")

router.post("/register", (req, res)=>{
  User.register(req.body)
  .then(user=> {
      const token = user.generateJWT();
      res.cookie("auth", token).send(user);
    },
    err=> res.status(400).send(err)
  )
})

module.exports = router;
