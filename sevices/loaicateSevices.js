var loaicateModel=require('../models/loaicateModel')

exports.getListloaicate =async function getListloaicate(){
    return await loaicateModel.find()
}