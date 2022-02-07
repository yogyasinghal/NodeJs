const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






const pschema = new mongoose.Schema({
  name:{
    type:String,
  },
  author:String
})
const Pschema = new mongoose.model("Pschema",pschema);
// create doc
const rplay = new Pschema({
  name:"magic",
  author:"yogya singhal"
})
rplay.save();

// Pschema.insert(
//   {
//     name:"magic",
//     author:"insert"
//   }
// )

Pschema.updateMany(
  {name:"magic"},
  {$set :{author:"ironman"}}
).then(ans=>{
  console.log("ans update",ans);
})
.catch(err=>{
  console.log("err");
})

Pschema.find({name:"magic"},'author')
.then(ans=>{
  console.log("ans = ");
  console.log(ans);
})
.catch(err=>{
  console.log("err = ",err);
})

Pschema.deleteMany({
  name:"magic"
}).then(ans=>{
  console.log("del success",ans);
})
.catch(err=>{
  console.log("err delete",err);
})

Pschema.find({name:"magic"})
.then(ans=>{
  console.log("ans 2= ");
  console.log(ans);
})
.catch(err=>{
  console.log("err = ",err);
})



