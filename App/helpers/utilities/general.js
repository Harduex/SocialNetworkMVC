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

function generateRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export { compressImage, generateRandomHexColor }