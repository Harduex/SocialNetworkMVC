import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        cb(null, `temp${extension}`);
    },
});

const upload = multer({ storage: storage });

export default upload;
