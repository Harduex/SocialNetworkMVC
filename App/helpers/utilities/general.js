import sharp from 'sharp';
import fs from 'fs';
import cloudinary from 'cloudinary';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import FormData from 'form-data';

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

async function uploadImage(tempPath) {
    const imagesProvider = process.env.IMAGES_PROVIDER || 'cloudinary';

    if (imagesProvider === 'cloudinary') {
        return new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload(tempPath, (error, result) => {
                if (error) return reject(error);

                if (fs.existsSync(tempPath)) {
                    fs.unlinkSync(tempPath);
                }

                return resolve(result);
            })
        });
    }

    if (imagesProvider === 'custom_cdn') {
        const imageCdnUrl = `${process.env.IMAGES_CDN_API_URL}/image/upload`;
        const imageCdnApiKey = process.env.IMAGES_CDN_API_KEY;

        try {
            let form = new FormData();
            form.append('image', fs.createReadStream(tempPath));

            const options = {
                headers: {
                    'api-key': imageCdnApiKey,
                    ...form.getHeaders()
                }
            };

            const resp = await axios.post(imageCdnUrl, form, options);
            console.log(resp.data);
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
            return {
                url: resp.data.url,
                public_id: resp.data.filename,
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (imagesProvider === 'local_folder') {
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

}

async function deleteImage(public_id) {
    const imagesProvider = process.env.IMAGES_PROVIDER || 'local_folder';

    if (imagesProvider === 'cloudinary') {
        return new Promise((resolve, reject) => {
            cloudinary.v2.uploader.destroy(public_id, (error, result) => {
                if (error) return reject(error);
                return resolve(result);
            });
        });
    }

    if (imagesProvider === 'custom_cdn') {
        const imageCdnUrl = `${process.env.IMAGES_CDN_API_URL}/image/delete`;
        const imageCdnApiKey = process.env.IMAGES_CDN_API_KEY;

        const form = {
            image: public_id,
        }

        const options = {
            headers: {
                'api-key': imageCdnApiKey,
            }
        }

        try {
            const resp = await axios.post(imageCdnUrl, form, options);
            return resp.data;
        } catch (err) {
            console.error(err);
        }
    }

    if (imagesProvider === 'local_folder') {
        const path = `public/images/${public_id}.png`;
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
            return true;
        }
    }

}

export { compressImage, generateRandomHexColor, uploadImage, deleteImage }