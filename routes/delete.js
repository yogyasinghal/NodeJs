var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var User = require("../models/user.js");

router.get('/:id',(req,res)=>{
    console.log("hello delete");
    console.log(req.params.id);
    User.deleteOne({_id:req.params.id})
    .exec()
    .then((data)=>{
        console.log("data=",data);
        res.redirect('/users');
    })
    .catch((err)=>{
        console.log("err",err);
        res.redirect('error')
    })
    // res.send("hello");
})
router.get('/',(req,res)=>{
    console.log("yo");
    res.send("get of delete")
})
module.exports = router;