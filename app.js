var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var methodsRouter = require('./routes/methods');
var loginRouter = require('./routes/login');
var deleteRouter = require('./routes/delete');
var updateRouter = require('./routes/update');

var app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://yogya:${process.env.DB_PASS}@cluster0.ebsn2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var u = db.users;
// console.log("u = ",u);


// view engine setup
app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views');

app.set('view engine','ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
// app.all('/users',(req,res,next)=>{
//   // res.statusCode = 200;
//   // res.send("hello app all");
//   console.log("app.all");
//   // console.log(req);
//   next();
// })

app.use('/users', usersRouter);
app.use('/signup',signupRouter);
app.use('/methods',methodsRouter);
app.use('/login',loginRouter);
app.use('/delete',deleteRouter); 
app.use('/update',updateRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8000,()=>{
  console.log("listening on port 8000");
})

module.exports = app;
