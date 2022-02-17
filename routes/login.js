var express = require('express');
var router = express.Router();
const User = require("../models/user.js");
const bcrypt = require('bcrypt');



router.get('/', function(req, res, next) {
    console.log("in routs login");
    res.render('login.ejs',{msg:0});


//   console.log("from users.js");
//   res.send('respond with a resource');
});



router.post('/', function(req, res, next) {

    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        console.log(user);
        // console.log(req.body.password,user[0].password);
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            console.log("inside bcrypt");
            console.log(err,result);
            if (err){
            console.log("password failed");
            res.send("login failed");
            }
            if (result){
                console.log("success");
                // res.send("login successfull");
                res.redirect('/users');
            }
            else{
                res.render('login.ejs', {msg:1} );
            }
            // res.send("login failed");
        });
    })
    .catch(err=>{
        
        console.log("err",err);
        res.send("invalid user");
    })
//   console.log("from signup.js");
//   console.log(req.body);
//   console.log(req.body.name);

 
  
});
module.exports = router;

