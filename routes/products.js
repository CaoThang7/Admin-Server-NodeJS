var express = require('express');
var router = express.Router();
var auth=require('../utils/authen')
var upload=require('../utils/upLoad')
var productController =require('../controller/productController')
var categoryController=require('../controller/categoryController')


var loaiController =require('../controller/loaiController')
var loaicateController=require('../controller/loaicateController')





// var danhSach = [
//   { id: 1, hoten: 'Varsity Jacket 1', price: 2000, available: '2020-03-13',idLoaiSP:1 },
//   { id: 2, hoten: 'Varsity Jacket 2', price: 3000, available: '2020-03-14',idLoaiSP:2 },
//   { id: 3, hoten: 'Varsity Jacket 3', price: 4000, available: '2020-03-15' ,idLoaiSP:3},
//   { id: 4, hoten: 'Varsity Jacket 4', price: 5000, available: '2020-03-16',idLoaiSP:4 },
// ]

// var loaiSP = [
//   { mssv: 1, hoten: 'aaa '},
//   { mssv: 2, hoten: 'bbb'},
//   { mssv: 3, hoten: 'ccc ' },
//   { mssv: 4, hoten: 'ddd ' },
// ]


// var danhSachloaisp = [
//   { id: 001, name: 'Ao da 1', price: 2000, available: '2020-03-13',idLoaiSP:1 },
//   { id: 002, name: 'Ao da 2', price: 3000, available: '2020-03-14',idLoaiSP:2 },
//   { id: 003, name: 'Ao da 3', price: 4000, available: '2020-03-15' ,idLoaiSP:3},
//   { id: 004, name: 'Ao da 4', price: 5000, available: '2020-03-16',idLoaiSP:4 },
// ]

var middle=[auth.authenticate,upload.single('img')]



/* GET home page. */
router.get('/',auth.authenticate, async function(req, res, next) {
  let list = await productController.getListProducts()
  res.render('product',{list});
});

/* GET insert page. */
router.get('/insert',auth.authenticate, async function(req, res, next) {
  let sanpham = await categoryController.getListCategories()
  res.render('insertproduct',{sanpham});
});

/* POST insert page. */
router.post('/insert',middle, async function(req, res, next) {
  // req.body ={...req.body,img: 'images/'+ req.file.originalname}
  let { body } = req
  //Kiem tra co file thi up hinh len
  if (req.file) {
    let imgUrl =  req.file.originalname
    body = {...body, img: imgUrl}
  }
  console.log(body)
  await productController.insertProduct(body)
  // productController.insertProduct(req.body)
  res.redirect('/products');
});


/* Get Edit page. */
router.get('/editproduct/:id',auth.authenticate, async function (req, res, next) {
  let id= req.params.id
  // let pro = danhSach.find(sp => sp.id == id)
  let prod= await productController.getProductById(id)
  let loaiSP = await categoryController.getListCategories()

  res.render('editproduct', { product: prod,loaiSP });

});

/* Post Edit page. */
router.post('/editproduct/:id',middle, async function (req, res, next) {
  let {id}=req.params
  let { body } = req
  //Kiem tra co file thi up hinh len
  if (req.file) {
    let imgUrl = req.file.originalname
    body = {...body, img: imgUrl}
  }
  console.log(body)
  await productController.editProduct(id,body)
  // productController.editProduct(mssv,req.body)
  res.redirect('/products');
});
/* Get Delete page. */
router.delete('/delete/:id',auth.authenticate, async function (req, res, next) {
  let {id} = req.params
  await productController.remove(id)
  res.send({res:true})
});

/* Get Edit page. */
router.get('/detail/:id',auth.authenticate, async function (req, res, next) {
  let id= req.params.id
  // let pro = danhSach.find(sp => sp.id == id)
  let prod= await productController.getProductById(id)
  let loaiSP = await categoryController.getListCategories()

  res.render('Detail', { product: prod,loaiSP });

});






//Loai SP

// /* GET home page. */
// router.get('/loai', function(req, res, next) {
//   res.render('Loai');
// });

/* GET home page. */
router.get('/loai',auth.authenticate, async function(req, res, next) {
  let list = await loaiController.getListLoais()
  res.render('Loai',{list});
});

/* GET insert page. */
router.get('/insertloai',auth.authenticate, async function(req, res, next) {
  let sanpham = await loaicateController.getListloaicate()
  res.render('insertLoai',{sanpham});
});

/* POST insert page. */
router.post('/insertloai',middle, async function(req, res, next) {
  // req.body ={...req.body,img: 'images/'+ req.file.originalname}
  let { body } = req
  //Kiem tra co file thi up hinh len
  if (req.file) {
    let imgUrl =  req.file.originalname
    body = {...body, img: imgUrl}
  }
  console.log(body)
  await loaiController.insertLoai(body)
  // productController.insertProduct(req.body)
  res.redirect('/products/loai');
});


/* Get Edit page. */
router.get('/editloai/:id',auth.authenticate, async function (req, res, next) {
  let id= req.params.id
  // let pro = danhSach.find(sp => sp.id == id)
  let prod= await loaiController.getLoaiById(id)
  let loaiSP = await loaicateController.getListloaicate()

  res.render('editLoai', { product: prod,loaiSP });

});

/* Post Edit page. */
router.post('/editloai/:id',middle, async function (req, res, next) {
  let {id}=req.params
  let { body } = req
  //Kiem tra co file thi up hinh len
  if (req.file) {
    let imgUrl = req.file.originalname
    body = {...body, img: imgUrl}
  }
  console.log(body)
  await loaiController.editLoai(id,body)
  // productController.editProduct(mssv,req.body)
  res.redirect('/products/loai');
});
/* Get Delete page. */
router.delete('/deletee/:id',auth.authenticate, async function (req, res, next) {
  let {id} = req.params
  await loaiController.remove(id)
  res.send({res:true})
});

// /* Get Edit page. */
// router.get('/detail/:id',auth.authenticate, async function (req, res, next) {
//   let id= req.params.id
//   // let pro = danhSach.find(sp => sp.id == id)
//   let prod= await productController.getProductById(id)
//   let loaiSP = await categoryController.getListCategories()

//   res.render('Detail', { product: prod,loaiSP });

// });













module.exports = router;
