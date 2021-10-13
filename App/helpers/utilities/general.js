import sharp from 'sharp';


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


export { compressImage }