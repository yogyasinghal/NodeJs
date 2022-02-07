var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // console.log(req.headers);
  
  res.send("hello from index.js");

  console.log(req.method);
  console.log(req.params);
  console.log(req.query);
  // res.render('home.ejs');
});
router.post("/", (req, res) => {
  console.log("......");
  console.log(req.method);
  console.log(req.body.hi);
  console.log("......");
  res.send("post");
});

// router.get('/',(req,res)=>{
//   res.send("hello");
// })

module.exports = router;