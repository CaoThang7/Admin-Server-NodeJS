var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var auth=require('../utils/authen')
var productController =require('../controller/productController')
// var loaiController =require('../controller/loaiController')
var categoryController =require('../controller/loaiController')
// var loaicateController =require('../controller/loaicateController')

// var danhSach = [
//   { id: 1, name: 'Varsity ', price: 2000, available: '2020-03-13' },
//   { id: 2, name: 'Varsity ', price: 3000, available: '2020-03-14' },
//   { id: 3, name: 'Varsity ', price: 4000, available: '2020-03-15' },
//   { id: 4, name: 'Varsity ', price: 5000, available: '2020-03-16' },
// ]




/* GET Product list. */
router.get('/products', async function(req, res, next) {
  // let loai=await loaiController.getListLoais()
  let danhSach=await productController.getListProducts()
  let danhSachloai=await categoryController.getListLoais()
  res.send({danhSach,danhSachloai});
});

// /* GET Product list. */
// router.get('/products', async function(req, res, next) {
//   // let loaicate=await loaiController.getListLoais()
//   let danhSachloai=await categoryController.getListCategories()
//   res.send({danhSachloai});
// });

// /* GET product detail. */
// router.get('/products/:id', async function(req, res, next) {
//   let{id}=req.params
//   let product = await productController.getProductById(id)
//   res.json({product})
// });



module.exports = router;