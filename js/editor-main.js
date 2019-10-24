'use strict'


const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');


function init() {
    resizeCanvas(gCanvas);
    setSelectedImgId();
    renderMeme()
}

function resizeCanvas(canvas) {
    var elContainer = document.querySelector('.canvas-container');
    canvas.height = elContainer.offsetHeight;
    // canvas.width = elContainer.offsetWidth
    // let aspectRatio
    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight
}

function renderMeme(){
    let meme = getMeme();
    var imgUrl = getImgUrl();
    var image = new Image();
    image.onload = function () {
        // Draw Image and text
        gCtx.drawImage(image, 0, 0, gCanvas.width ,gCanvas.height );
        drawTxts();
    }
    image.src = imgUrl;
}

function drawTxts() {
    let txts = getMeme().txts;
    txts.forEach(function(txt){
        let fontSize = '' + txt.size;
        // let fontFamily = gTxt.fontFamily;
        gCtx.font = fontSize + 'em impact';
        gCtx.lineWidth = 2;
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.strokeStyle = 'black';
        // let txtLine = txt[txtIdx].line
        gCtx.fillText(txt.line, txt.x, txt.y);
        gCtx.strokeText(txt.line, txt.x, txt.y);
    })

}

function onChangeTxt(input) {
    let txt = input.value;
    changeTxt(txt);
    renderMeme();
}

function onChangeFontSize(elBtn) {
    let fontChange = (elBtn.classList.contains('up-btn')) ? true : false;
    changeFontSize(fontChange);
    renderMeme();
}

function onMoveLine(elBtn) {
    let direction
    if (elBtn.classList.contains('up-btn')){
        direction = 'up'
    } else {
        direction = 'down'
    }
    moveLine(direction)
    renderMeme();
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
}

function onAlignTxt(elBtn){
    setAlignTxt(elBtn.id);
    renderMeme();
}

function onAddLine(params) {
    console.log('Adding a line');
}

function onRemoveLine(params) {
    console.log('Removing');
    removeLine();
    renderMeme();
}