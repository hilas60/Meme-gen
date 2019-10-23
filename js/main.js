'use strict'

const image = document.querySelector('#img-source');
const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');



function init(){
    resizeCanvas();
    drawImg()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth
    // console.log(gCanvas.width);
    gCanvas.height = elContainer.offsetHeight
    // console.log(gCanvas.height);
}

function drawImg() {
    let imgUrl = getImg(1);
    image.src = imgUrl;
    gCanvas.width = image.width;
    gCanvas.height = image.height;
    // var img = document.querySelector('img');
    image.onload = gCtx.drawImage(image, 0, 0);
}