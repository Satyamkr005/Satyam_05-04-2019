var expr=require('express');
const hbs=require('hbs');
const fs=require('fs');
const port=process.env.PORT||3000;

var app =expr();
hbs.registerPartials(__dirname + '/Views/partials')     /* this is advanced templates */
app.set('View engine','hbs');
hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear()
});
hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});
/*hbs.registerHelper(name()=>{
	return name();
});      
hbs.registerHelper(registration_no()=>{
	return registration_no();
});
*/
app.use((req,res,next)=>{                                /* this is middleware function */
var now=new Date().toString();
var log=`${now}:${req.method} ${req.url} ${req.path} ${req.ip} ${req.host}`;
console.log(log);
fs.appendFile('app.log',log + '/n');
next();
});	                                                         
//app.use(expr.static(__dirname + '/Public'));
app.get('/',(req,res)=>{
//res.send('<h1>This is the Introduction pages</h1>');
 /* var Introduction={
	  'name':'Satyam',
	  'Section':'D1619'
  }
  
  res.send(Introduction);*/
  res.render('home.hbs',{
	  pageTitle:'Home Page',
	  welcomeMessage:'Welcome to my website',
	  currentYear:new Date().getFullYear()
  });
});
app.get('/about',(req,res)=>{
/*app.get('/Courses',(req,res)=>{
	//res.send('<h1>This is Courses page</h1>');
	 var course={
	  'CAP906':'Python',
	  'CAP918':'Multiplatform Mobile APP',
	  'CAP907':'Information System'
  }
  res.send(course);*/
  res.render('about.hbs',{
	  pageTitle:'About Page',
	  currentYear:new Date().getFullYear()
  });
});
app.get('/contact-details',(req,res)=>{
	
	  res.render('contact-details.hbs',{
	  emailid:'satyam94302@gmail.com',
	  contact:8010980961,
	  address:'7A/140,Near katwarai sarai ,New delhi [110016]'  
  });
});
app.get('/examination',(req,res)=>{
	
	  res.render('examination.hbs',{
	  CAP907:'O',
	  CAP906:'A+',
	  CAP918:'A'
  });
});
app.get('/academic',(req,res)=>{
	
	  res.render('academic.hbs',{
	  CAP907:'Information System',
	  CAP906:'Python',
	  CAP918:'Node js'
  });
});

app.get('/self_details',(req,res)=>{
	
	  res.render('self_details.hbs',{
	  name:'satyam kumar',
	  registration_no:11609548,
	  section:'D1619',
	  batch:'2016-2019'
  });
});

app.use(expr.static(__dirname + '/Private'));
app.get('/Grades',(req,res)=>{
	//res.send('<h1>This is Grades pages</h1>');
	var grades={
	  'CAP906':'A',
	  'CAP918':'B+',
	  'CAP907':'A+'
  }
  res.send(grades);
});
app.get('/Marks',(req,res)=>{
	//res.send('<h1>This is Marks pages</h1>');
	var marks={
	  'CAP906':'70',
	  'CAP918':'80',
	  'CAP907':'90'
  }
  res.send(marks);
});
app.get('/Attendance',(req,res)=>{
	//res.send('<h1>This is Marks pages</h1>');
	var attendance={
	  'CAP906':'70%',
	  'CAP918':'80%',
	  'CAP907':'90%'
  }
  res.send(attendance);
});
app.listen(port,()=>{
	console.log('server is up on port${3000}');
});