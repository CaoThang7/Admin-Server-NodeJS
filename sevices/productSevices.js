var categoryServices = require('./categorySevices')
var productModels = require('../models/productModels')
var convertDate = require('../utils/convertDate')

var danhSach = [
    { id: 1, name: 'gaaa', price: 0934135394, img: 'http://localhost:3000/images/icon.png', ngay: '2020-03-13', sanpham: 1 },
    { id: 2, name: 'ggg', price: 0934135394, img: 'http://localhost:3000/images/icon2.png', ngay: '2020-03-14', sanpham: 2 },
    { id: 3, name: 'ggg', price: 0934135394, img: 'http://localhost:3000/images/icon3.png', ngay: '2020-03-15', sanpham: 3 },
    { id: 4, name: 'hhh', price: 0934135394, img: 'http://localhost:3000/images/icon4.png', ngay: '2020-03-16', sanpham: 4 },
]

exports.getListProducts = async function getListProducts() {
    let products = await productModels.find().populate('sanpham')
    console.log('hahah', products)
    //     let list =danhSach.map(sp =>{
    //     return{
    //         id:sp.id,
    //         hoten:sp.hoten,
    //         dienthoai:sp.dienthoai,
    //         img:sp.img,
    //         ngaynhaphoc:convertDate.execute(sp.ngaynhaphoc),
    //         loaiSP:categoryServices.getListCategories().find(loai => loai.id == sp.lophoc),

    //     }
    // });

    console.log(products.ngay)
    return products
}

// exports.getProductById = function getProductById(id) {
//     let product = danhSach.find(sp => sp.id == id) || {}
//     return product
// }

exports.getProductById = async function getProductById(id) {
    let product = await productModels.findById(id)
    return product
}

exports.insertProduct = async function insertProduct(product) {
    // danhSach.push(product)
    const p= new productModels(product)
    await p.save()
}

exports.editProduct = async function editProduct(product) {
    let pro = await productModels.findById(product.id)
    if (pro) {
        pro.maso = product.maso
        pro.name = product.name
        pro.price = product.price
        if (product.img) {
            pro.img = product.img
        }
        pro.ngay = product.ngay
        pro.sanpham = product.sanpham
    }
    await pro.save()
}

exports.remove = async function removeProductById(id) {
  await productModels.remove({_id: id})
}





