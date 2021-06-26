const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const loaiSchema = new Schema({
    id: { type: ObjectId },
    masoloai: { type: Number },
    name: { type: String },
    img: { type: String },
    // maso: { type: String },
    loaisanpham: { type: Schema.Types.ObjectId, ref: 'Loaicate' },
    
})

module.exports = mongoose.model('Loai', 
loaiSchema)