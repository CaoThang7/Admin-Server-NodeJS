var categoryServices=require('../sevices/categorySevices')

exports.getListCategories=function getListCategories(){
    return categoryServices.getListCategories()
}

