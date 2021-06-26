// var express = require('express');
// var router = express.Router();
// var jwt=require('jsonwebtoken');
// var auth=require('../utils/authen')

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Express' });
// // });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.redirect('/products');
// });

// module.exports = router;





var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var auth=require('../utils/authen')

/* GET home page. */
router.get('/',auth.authenticate, function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // Kiem tra login

  // Neu chua login >>> chay login

  // da login >>> products
  res.redirect('/products');
});



var users=[
  {id:1,username:'1',password:'1'},
  {id:2,username:'2',password:'2'},
  {id:3,username:'ngoisao10vn',password:'baovup9xpro'}
]

/* GET Login page. */
router.get('/login', function(req, res, next) {
   res.render('login')
});

/* POST Login page. */
router.post('/login', function(req, res, next) {
  let{username,password}= req.body
  let user =users.find(us => us.username == username && us.password ==password)
  if(user){
    //Tao Token
    var token=jwt.sign({user},process.env.JWT_KEY);
    console.log('token',token);
    //Luu token trong session
    req.session.token=token
     res.redirect('/products')
  }else{
    res.redirect('/login')
  }
});


/* GET Logout. */
router.get('/logout', function(req, res, next) {
  //Khi dang xuat se xoa session chua du lieu user
  req.session.destroy(function(err) {
    res.redirect('/login')
  })
});





module.exports = router;