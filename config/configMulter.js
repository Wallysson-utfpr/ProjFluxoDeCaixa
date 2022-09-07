// midleware para upload das imagens

const multer = require('multer');

var storage = multer.diskStorage({
    filename: function (req, file, callback) {
        let nomeArq = Date.now() + "-" + file.originalname;
        callback(null, nomeArq);

    },

    destination: function (req, file, callback) {
        let path = "public/fotos";
        callback(null, path);

    }
})

var upload = multer({ storage });
module.exports = upload;