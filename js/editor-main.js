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


function init() {
    resizeCanvas(gCanvas);
    setSelectedImgId();
    createMeme()
}



function resizeCanvas(canvas) {
    var elContainer = document.querySelector('.canvas-container');
    // canvas.width = elContainer.offsetWidth
    // let aspectRatio
    canvas.height = elContainer.offsetHeight;
    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight
}

function createMeme() {
    var imgUrl = getImgUrl();
    loadAndDrawImage(imgUrl);
}


function loadAndDrawImage(url) {
    var image = new Image();
    image.onload = function () {
        // gCanvas.width = image.width;
        // image.width=gCanvas.width;
        // gCanvas.height = image.height;
        // image.height = gCanvas.height;
        gCtx.drawImage(image, 0, 0, gCanvas.width ,gCanvas.height );

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

// function onPickImage(elImage) {
//     createMeme();
// }

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
    var activeTxt = switchLines();
    console.log(activeTxt);
    // TODO - change text in input according to activeTxt;
    // let elTxtBox = document.getElementById('#txt-box-input');
    // elTxtBox.innerText = activeTxt.line;
}

function toggleMenu() {
    let elMenu = document.querySelector('.nav-bar');
    elMenu.classList.toggle('open-menu');
    let elMenuBtn = document.querySelector('.menu-btn');
    elMenuBtn.classList.toggle('open-menu');
    // document.body.classList.toggle('open-menu');
}