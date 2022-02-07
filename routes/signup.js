var express = require('express');
var router = express.Router();
const user = require("../models/user.js");

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
  const myuser = new user({
    name: req.body.name,
    email:req.body.email,
    password:req.body.password,
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
  
});
module.exports = router;

