var express = require('express');
var router = express.Router();

/* GET users listing. */
const middleware = (req,res,next)=>{
  console.log("hello from middleware");
  next();
}

router.get('/',middleware, function(req, res, next) {
  console.log("from users.js");
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log("from users.js");
  res.send('respond with a resource');
});
module.exports = router;



