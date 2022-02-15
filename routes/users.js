var express = require('express');
var router = express.Router();
var User = require("../models/user.js");

/* GET users listing. */
// const middleware = (req,res,next)=>{
//   console.log("hello from middleware");
//   next();
// }

router.get('/', function(req, res, next) {
 
  User.find({},['_id','name','email']) 
  .exec()  
  .then((users)=>{
    console.log("all users = ",users);
    res.render('users.ejs',{users:users}); 
  })
  .catch((err)=>{ 
    console.log("err=",err);
  })

  console.log("from users.js");
  // res.send('respond with a user route');
});
router.post('/', function(req, res, next) {
  console.log("from users.js");
  res.send('respond with a resource');
});
module.exports = router;

