var loaiServices =require('../sevices/loaiSevices')
var convertDate=require('../utils/convertDate')


exports.getListLoais = async function getListLoais() {
    return await loaiServices.getListLoais()
}

exports.getLoaiById = async function getLoaiById(id) {
    return await loaiServices.getLoaiById(id)
}

exports.insertLoai = async function insertLoai(params) {
    let { masoloai,name,img,loaisanpham} = params

    let loai = {
      masoloai: masoloai,
      name: name,
      img:img,
      loaisanpham:loaisanpham,
      
    }

   await loaiServices.insertLoai(loai)
}

exports.editLoai = async function editLoai(id,params) {
    let { masoloai,name,img,loaisanpham } = params
    let loai = {id,masoloai,name,img,loaisanpham}
    await loaiServices.editLoai(loai)

}



exports.remove = async function removeLoaiById(id) {
    await loaiServices.remove(id)
}