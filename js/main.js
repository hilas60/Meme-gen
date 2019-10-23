'use strict'

const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');
// const gTopTxtCanvas = document.querySelector('#top-txt-canvas');
// const gTopTxtCtx = gTopTxtCanvas.getContext('2d');


function init() {
    renderImages()
    resizeCanvas();
    createMeme()
}

function renderImages() {
    let images = getImages();
    let strHtmls = images.map(function(image){
        return `<div class="card" data-id="${image.id}" onclick="onPickImage(this)">
                    <img src="${image.url}">
                </div>`
    })
    document.querySelector('.image-container').innerHTML = strHtmls.join('');
    
    
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
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
    let userChoice = getMemeTxt();
    let txt = userChoice.line
    console.log(userChoice);
    console.log(txt);
    gCtx.font = '40px Impact';
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.fillText(txt, 100, 75);
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, 100, 75)
    // gCtx.strokeText("Hello", 10, 50)
    // gCtx.textAlign = "center";
    // for top line -
    // gCtx.fillStyle = 'orange'
    // gCtx.fillRect(0, 0, 100, 100)
    // for bottom line -
}

function onChangeTxt(input){
    var txtIdx;
    if (input.id === 'top-txt') txtIdx = 0;
    else if (input.id === 'bottom-txt') txtIdx = 1;
    let txt = input.value;
    changeTxt(txtIdx, txt);
    // drawTxt()
    createMeme();
}

function onPickImage(elImage){
    let imgId = elImage.dataset.id;
    changeImg(imgId);
    createMeme();
    console.log(imgId);
    
}