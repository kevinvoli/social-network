let createError = require('http-errors');
let bodyParser = require('body-parser') 
let express = require('express');
let path = require('path');
multer=require('multer')
const session= require('express-session')
Promise = require('bluebird');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
mongoose= require('mongoose')
relationship = require("mongoose-relationship")




const storage= multer.diskStorage({
  destination:"./public/images/",
  filename:(req,file,cb)=>{
  cb(null,file.fieldname + '-'+ Date.now()+
  path.extname(file.originalname)  
    )
  }
})

upload=multer({
  storage: storage
}).single('image')

mongoose.connect('mongodb://127.0.0.1:27017/whatscool',
{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})

// LES SCHEMA ET LES MODEL
models=require('./models')

let users= new models.User
let messages=new models.Message

let reponse= new models.Reponse

console.log(users)
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users')
let usersPostRouter = require('./routes/post')
let app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}))
		app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(session({
  'secret':'cfvh75fv-8dvf6eivazeze00f',
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false}
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', usersPostRouter)

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
module.exports = app;