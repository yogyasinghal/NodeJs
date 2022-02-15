var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var User = require("../models/user.js");

router.get('/:id',(req,res)=>{
    console.log("hello update");
    console.log(req.params);
    console.log(req.params.id);
    User.findById(req.params.id)
    .exec()
    .then((data)=>{
        console.log("data=",data);
        res.render('update.ejs',{id:req.params.id})
    })
    .catch((err)=>{
        console.log("error in update.js get");
        // res.redirect('error')
        res.send("error");
    })
    // res.send("hello");
})
router.post('/:id',(req,res)=>{
    console.log("yo");
    console.log(req.params.id);
    User.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,result){
        if (err){
            console.log("error in post ");
        }
        console.log("res=",result);
        res.redirect('/users');
    })
    // res.send("post of delete")
})
module.exports = router;