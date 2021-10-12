import sharp from 'sharp';


function compressImage(img) {

    return sharp(img)
        .resize({
            height: 720,
        })
        .toBuffer();
}


export { compressImage }