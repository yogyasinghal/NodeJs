var express = require('express');
var router = express.Router();
const user = require("../models/user.js");
const bcrypt = require('bcrypt');
const e = require('express');

/* GET users listing. */
const middleware = (req,res,next)=>{
  console.log("hello from middleware");
  next();
}

router.get('/',middleware, function(req, res, next) {
    console.log("in routs signup ");
    res.render('signup.ejs');



//   console.log("from users.js");
//   res.send('respond with a resource');
});



router.post('/', function(req, res, next) {
  console.log("from signup.js");
  console.log(req.body);
  console.log(req.body.name);

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    // Store hash in your password DB.
    if (err){
      console.log("error in hashing");
      return res.status(500).json({error:err});
    }
    else{
      const myuser = new user({
        name: req.body.name,
        email:req.body.email,
        password:hash,
        admin: req.body.admin,
      });
      myuser
        .save()
        .then((result) => {
          console.log("success ");
          console.log(result);
          res.send('data successfully added to database');
        })
        .catch((err) => {
          console.log("error signup.js");
          console.log(err);
          res.send('Error inserting the data');
        });
    }
  });

 
  
});
module.exports = router;

