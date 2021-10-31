import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const absPath = path.join(__dirname, '../../../', 'public/temp');
        cb(null, absPath);
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        cb(null, `tempImg${extension}`);
    },
});

const upload = multer({ storage: storage });

export default upload;
