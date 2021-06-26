var loaicateServices = require('./loaicateSevices')
var loaiModels = require('../models/loaiModel')
var convertDate = require('../utils/convertDate')


exports.getListLoais = async function getListLoais() {
    let loais = await loaiModels.find().populate('loaisanpham')
    console.log('hahah', loais)

    return loais
}

exports.getLoaiById = async function getLoaiById(id) {
    let loai = await loaiModels.findById(id)
    return loai
}

exports.insertLoai = async function insertLoai(loai) {
    const p= new loaiModels(loai)
    await p.save()
}

exports.editLoai = async function editLoai(loai) {
    let pro = await loaiModels.findById(loai.id)
    if (pro) {
        pro.masoloai = loai.masoloai
        pro.name = loai.name
        if (loai.img) {
            pro.img = loai.img
        }
        // pro.maso = loai.maso
        pro.loaisanpham = loai.loaisanpham
    }
    await pro.save()
}

exports.remove = async function removeLoaiById(id) {
  await loaiModels.remove({_id: id})
}





