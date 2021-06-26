// var loaiSP =[
//     {id:1,hoten:'LT15301'},
//     {id:2,hoten:'LT15302'},
//     {id:3,hoten:'LT15303'},
//     {id:4,hoten:'LT15304'}
// ]

var categoryModel=require('../models/categoryModel')

exports.getListCategories =async function getListCategories(){
    return await categoryModel.find()
}