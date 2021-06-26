var productServices =require('../sevices/productSevices')
var convertDate=require('../utils/convertDate')


exports.getListProducts = async function getListProducts() {
    return await productServices.getListProducts()
}

exports.getProductById = async function getProductById(id) {
    return await productServices.getProductById(id)
}

exports.insertProduct = async function insertProduct(params) {
    let { maso,name, price,img, ngay,sanpham} = params

    let product = {
      maso: maso,
      name: name,
      price: price,
      img:img,
      ngay: ngay,
      sanpham:sanpham,
      
    }

   await productServices.insertProduct(product)
}

exports.editProduct = async function editProduct(id,params) {
    let { maso,name, price,img, ngay,sanpham } = params
    let product = {id,maso,name,price,img,ngay,sanpham}
    await productServices.editProduct(product)

}



exports.remove = async function removeProductById(id) {
    await productServices.remove(id)
}