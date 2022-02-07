var express = require('express');
var router = express.Router();

var data = [
    {
    "movie":"ironman",
    "rating": 10
    },
]


router.get('/',(req,res)=>{
    console.log("get");
    res.send(data);
})

router.post('/',(req,res)=>{
    console.log("post");
    console.log(req.body);
    const temp = {
        movie:req.body.movie,
        rating:req.body.rating
    }
    data.push(temp);
    // // console.log(req.body);
    res.send("POST REQUEST");
})

router.put('/:movie',(req,res)=>{
    console.log("put");
    console.log(req.params.movie);

  let index = data.findIndex((val)=>{
      console.log("val = ",val);
       return (val.movie == req.params.movie)
   })
   if(index>=0){
      let val = data[index];
      console.log("val if = ",val);
       val.rating = req.body.rating;
   }
   else{
       console.log("error");
   }
    res.send("PUT REQUEST");
})

router.delete('/:movie',(req,res)=>{
    console.log("delete");
    // let mov = req.params.movie;
    let index = data.findIndex((val)=>{
        console.log("val = ",val);
         return (val.movie == req.params.movie)
     })
     if(index>=0){
        data.splice(index,1);
     }
     else{
         console.log("error");
     }
    res.send("DELETE REQUEST");
})

module.exports = router;






// for put and delete
// http://localhost:8000/methods/avengers
// {
//     "rating": 2
// }

// for get and post
// http://localhost:8000/methods
// {
//     "movie":"avengers",
//     "rating": 9
// }