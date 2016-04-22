const router = require("express").Router();
const User = require("../models/UserSchema")

router.post("/register", (req, res)=>{
  User.register(req.body)
  .then(
    user=> res.send(user),
    err=> res.status(400).send(err)
  )
})

module.exports = router;
