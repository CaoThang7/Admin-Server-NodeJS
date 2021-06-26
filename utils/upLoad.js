const multer =require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

module.exports=multer({storage:storage,limits:{fieldSize:4* 1024 *1024}})  