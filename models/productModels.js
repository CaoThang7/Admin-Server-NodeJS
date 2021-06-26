const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    maso: { type: Number },
    name: { type: String },
    price: { type: String },
    img: { type: String },
    ngay: { type: Date },
    sanpham: { type: Schema.Types.ObjectId, ref: 'Category' },
    
})

module.exports = mongoose.model('Product', 
productSchema)