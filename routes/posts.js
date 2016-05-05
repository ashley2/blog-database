const router = require("express").Router();
const Post = require("../models/PostSchema");
const User = require("../models/UserSchema");

router.get("/all/:name/", (req, res)=>{
  User.findOne({username: req.params.name})
  .populate("posts")
  .exec( (err, user)=>{
    err ? res.status(400).send(err) : res.send(user)
  })
})

router.post("/", User.middleware, (req, res)=>{
  req.body.author = req.user._id;
  Post.create(req.body, (err, post)=>{
    if (err) return res.status(400).send(err)

    req.user.posts.push(post._id);
    req.user.save(
      err=> err ? res.status(400).send(err) : res.end()
    )
  })
})

router.get("/one/:id", (req, res)=>{

})


module.exports = router;
