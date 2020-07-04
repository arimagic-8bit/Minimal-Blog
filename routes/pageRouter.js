const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.render('index');
});

router.get("/about", function (req, res, next){
    res.render('about');
});

router.get("/posts", function (req,res,next){
    res.render('posts')
})



module.exports = router;