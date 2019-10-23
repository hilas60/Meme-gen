'use strict'

const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');

function init() {
    resizeCanvas();
    createMeme()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth
    // console.log(gCanvas.width);
    gCanvas.height = elContainer.offsetHeight
    // console.log(gCanvas.height);
}

function createMeme() {
    drawImg();
    // drawTxt();

}

function drawImg() {
    let imgUrl = getImg();
    loadAndDrawImage(imgUrl)
    // drawTxt()
}

function loadAndDrawImage(url) {
    var image = new Image();
    image.onload = function() {
        gCanvas.width = image.width;
        gCanvas.height = image.height;
        gCtx.drawImage(image, 0, 0);
    }
    image.src = url;
}

function drawTxt() {
    gCanvas.font = "400px Impact"
    gCtx.fillStyle = "red";
    // gCtx.textAlign = "center";
    // for top line -
    gCtx.fillText("Hello", gCanvas.width / 2, 50);
    gCtx.strokeText("Hello", 10, 50)
    // for bottom line -
    // gCanvas.strokeText("Hello", 10, 50)

}