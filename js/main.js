'use strict'

const gTxt = {
    fontSize: 40,
    fontFamily: 'Impact',
    xTop: 100,
    yTop: 75,
    // xBottom: 100,
    // yBottom: 75,
}

const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');
const gTopTxtCanvas = document.querySelector('#top-txt-canvas');
const gTopTxtCtx = gTopTxtCanvas.getContext('2d');


function init() {
    renderImages()
    resizeCanvas(gCanvas);
    resizeCanvas(gTopTxtCanvas);
    createMeme()
}

function renderImages() {
    let images = getImages();
    let strHtmls = images.map(function (image) {
        return `<div class="card" data-id="${image.id}" onclick="onPickImage(this)">
                    <img src="${image.url}">
                </div>`
    })
    document.querySelector('.image-container').innerHTML = strHtmls.join('');
}

function resizeCanvas(canvas) {
    var elContainer;
    if (canvas === gCanvas) {
        elContainer = document.querySelector('.main-canvas-container');
    } else if (canvas === gTopTxtCanvas){
        elContainer = document.querySelector('.top-txt-canvas-container')
    }
    canvas.width = elContainer.offsetWidth
    canvas.height = elContainer.offsetHeight
}

function createMeme() {
    var imgUrl = getImgUrl();
    loadAndDrawImage(imgUrl);
}


function loadAndDrawImage(url) {
    var image = new Image();
    image.onload = function () {
        gCanvas.width = image.width;
        gCanvas.height = image.height;
        gCtx.drawImage(image, 0, 0);
        drawTxt();
    }
    image.src = url;
}

function drawTxt() {
    let fontSize = '' + gTxt.fontSize;
    let fontFamily = gTxt.fontFamily;
    gCtx.font = fontSize + 'px ' + fontFamily;
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.strokeStyle = 'black';
    
    let x = gTxt.xTop
    let y = gTxt.yTop

    let userChoice = getMemeTxt();
    let txt = userChoice.line
    
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);

}

function onChangeTxt(input, ev) {
    var txtIdx;
    if (input.id === 'top-txt') txtIdx = 0;
    else if (input.id === 'bottom-txt') txtIdx = 1;
    let txt = input.value;
    // console.log(ev.target.value);
    // console.log(ev);
    changeTxt(txtIdx, txt);
    createMeme();
}

function onPickImage(elImage) {
    let imgId = elImage.dataset.id;
    changeImg(imgId);
    createMeme();
    // console.log(imgId);    
}

function onChangeFontSize(elBtn) {
    (elBtn.classList.contains('up-btn')) ? gTxt.fontSize++ : gTxt.fontSize-- ;
    createMeme();
    // console.log('Changing font-size');
}

function onMoveLine(elBtn) {
    (elBtn.classList.contains('up-btn')) ? gTxt.yTop-- : gTxt.yTop++ ;
    createMeme();
    // console.log('Moving line');
}

