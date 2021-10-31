import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        const extArray = file.mimetype.split("/");
        const extension = extArray[extArray.length - 1];

        cb(null, `${file.filename}.${extension}`);
    },
});

const upload = multer({ storage: storage });

export default upload;
