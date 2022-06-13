function getImageData(image) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = image.width;
    canvas.height = image.height;

    context.drawImage(image, 0, 0, image.width, image.height);

    const imageDataObj = context.getImageData(0, 0, image.width, image.height);
    
    return imageDataObj;
}

function imageDataToImage(imagedata) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);

    let image = new Image();
    image.src = canvas.toDataURL();

    return image;
}

function truncateValues(value) {
    return value > 255 ? 255 : value;
}

function resolveOverflowToMinimun(value) {
    return value > 255 ? 0 : value;
}

function resolveOverflow(value){
    if(value === Infinity) {
        return 255;
    }

    return value > 255 ? value % 255 : value;
}

function resolveUnderflow(value) {
    return value < 0 ? 0 : value;
}