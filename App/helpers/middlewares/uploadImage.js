import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const tempDir = path.join(__dirname, '../../../public/temp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir)
        }
        cb(null, tempDir);
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        cb(null, `tempImg${extension}`);
    },
});

const upload = multer({ storage: storage });

export default upload;
