import sharp from 'sharp';
import fs from 'fs';
import cloudinary from 'cloudinary';


function compressImage(img) {

    return sharp(img)
        .resize({
            height: 720,
        })
        .jpeg({
            quality: 50
        })
        .toBuffer();
}

function generateRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function uploadImage(path) {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(path, (error, result) => {
            if (error) return reject(error);

            if (fs.existsSync(path)) {
                fs.unlinkSync(path);
            }

            return resolve(result);
        })
    });
}

function deleteImage(public_id) {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.destroy(public_id, (error, result) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
}


export { compressImage, generateRandomHexColor, uploadImage, deleteImage }