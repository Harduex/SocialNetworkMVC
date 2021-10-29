import sharp from 'sharp';
import fs from 'fs';
import cloudinary from 'cloudinary';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

function compressImage(img, path) {

    return sharp(img)
        .resize({
            height: 720,
        })
        .jpeg({
            quality: 50
        })
        .toFile(path);
}

function generateRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Cloud CDN Version
// function uploadImage(path) {
//     return new Promise((resolve, reject) => {
//         cloudinary.v2.uploader.upload(path, (error, result) => {
//             if (error) return reject(error);

//             if (fs.existsSync(path)) {
//                 fs.unlinkSync(path);
//             }

//             return resolve(result);
//         })
//     });
// }

// Cloud CDN Version
// function deleteImage(public_id) {
//     return new Promise((resolve, reject) => {
//         cloudinary.v2.uploader.destroy(public_id, (error, result) => {
//             if (error) return reject(error);
//             return resolve(result);
//         });
//     });
// }

async function uploadImage(tempPath) {
    const imgName = uuidv4();
    const uploadPath = `public/images/${imgName}.png`;
    const imgPath = `images/${imgName}.png`;

    await compressImage(tempPath, uploadPath);

    if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
    }

    return {
        url: imgPath,
        public_id: imgName,
    }
}

function deleteImage(public_id) {
    const path = `public/images/${public_id}.png`;
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}

export { compressImage, generateRandomHexColor, uploadImage, deleteImage }