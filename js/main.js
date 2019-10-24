'use strict'

const gTxt = {
    fontFamily: 'Impact',
    top: {
        x: 0,
        y: 0,
    },
    bottom: {
        x: 0,
        y: -10,
    },
}

const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');
// in case another canvas will be added -
// const gTopTxtCanvas = document.querySelector('#top-txt-canvas');
// const gTopTxtCtx = gTopTxtCanvas.getContext('2d');


function init() {
    renderImages()
    resizeCanvas(gCanvas);
    // resizeCanvas(gTopTxtCanvas);
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
    var elContainer = document.querySelector('.canvas-container');
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
        
        let topTxt = gTxt.top
        let bottomTxt = gTxt.bottom
        let canWidth = gCanvas.width
        let canHeight = gCanvas.height
        drawTxt(0, canWidth/2 - topTxt.x, canHeight/4 + topTxt.y);
        drawTxt(1, canWidth/2 - bottomTxt.x, canHeight + bottomTxt.y);
        // drawTxt(2, canWidth/2 - middleTxt.x, canHeight/2 + middleTxt.y)); - middle line to be added
    }
    image.src = url;
}

function drawTxt(txtIdx, x, y) {
    let meme = getMeme();
    let fontSize = '' + meme.txts[txtIdx].size;
    let fontFamily = gTxt.fontFamily;
    gCtx.font = fontSize + 'em ' + fontFamily;
    gCtx.lineWidth = 2;
    gCtx.textAlign = meme.txts[txtIdx].align;
    gCtx.fillStyle = meme.txts[txtIdx].color;
    gCtx.strokeStyle = 'black';

    let txt = meme.txts[txtIdx].line
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);

}

function onChangeTxt(input) {
    let txt = input.value;
    changeTxt(txt);
    createMeme();
}

function onPickImage(elImage) {
    let imgId = elImage.dataset.id;
    changeImg(imgId);
    createMeme();
}

function onChangeFontSize(elBtn) {
    let fontChange = (elBtn.classList.contains('up-btn')) ? true : false;
    changeFontSize(fontChange);
    createMeme();
}

function onMoveLine(elBtn) {
    let meme = getMeme();
    let txtLine = meme.selectedTxtIdx;
    let activeLine;
    if (txtLine === 0) {
        activeLine = gTxt.top;
    } else if (txtLine === 1) {
        activeLine = gTxt.bottom;
    } else {
        activeLine = gTxt.middle;
    }
    (elBtn.classList.contains('up-btn')) ? activeLine.y-- : activeLine.y++;
    createMeme();
}

function onSwitchLines() {
    // ADD WHICH LINE IS FOCUSED
    switchLines();
}