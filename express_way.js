var express = require('express');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'pug'));
app.set('view engine', 'pug');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

app.get('/about', (req, res,next)=>{
  res.render('about',{ title: 'About me'})
});

app.get('/contact-me', (req,res,next)=>{
  res.render('contact-me', { title: 'Contact me'})
});

app.get("/*", (req,res,next)=>{
  res.render('404', {title: '404 Error'})
});

app.listen(3000, ()=>{
  console.log('server running at 3000');
})