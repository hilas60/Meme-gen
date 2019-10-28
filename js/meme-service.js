'use strict'

const IMAGE_ID_KEY = 'image-Id'
            
let gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'Text 1',
            size: 2,
            align: 'right',
            color: 'white',
            x: 200,
            y: 100,
        },
        {
            line: 'Text 2',
            size: 2,
            align: 'left',
            color: 'red',
            x: 200,
            y: 350,
        }
    ],
}

// function getImagesFromFolder (){

// }

function createTxtLine(width) {
    var newLine = {
        line: 'Enter text here',
        size: 2,
        align: 'center',
        color: 'white',
        x: 200,
        y: 200,
    }
    gMeme.txts.push(newLine);
}

function getImgUrl() {
    let img = gImgs.find(function (image) {
        return image.id === gMeme.selectedImgId;
    })
    return img.url;
}

function getMeme() {
    return gMeme;
}

function changeTxt(txt) {
    let txtIdx = gMeme.selectedTxtIdx;
    gMeme.txts[txtIdx].line = txt;
}

function changeFontSize(fontChange) {
    let txtIdx = gMeme.selectedTxtIdx;
    let txtObj = gMeme.txts[txtIdx];
    (fontChange) ? txtObj.size++ : txtObj.size--;
}

function switchLines() {
    let txtIdx = gMeme.selectedTxtIdx;
    let txtsLength = gMeme.txts.length;
    if (txtIdx > -1 && txtIdx < txtsLength - 1) {
        gMeme.selectedTxtIdx++;
    } else {
        gMeme.selectedTxtIdx = 0;
    }
    return gMeme.txts[txtIdx];
}

function changeImgId(imgId) {
    gMeme.selectedImgId = imgId;
    saveImgIdToStorage()
}

function setSelectedImgId() {
    gMeme.selectedImgId = loadImgIdFromStorage();
}

function getImages() {
    return gImgs;
}

function saveImgIdToStorage() {
    saveToLocalStorage(IMAGE_ID_KEY, gMeme.selectedImgId);
}

function loadImgIdFromStorage() {
    return +loadFromLocalStorage(IMAGE_ID_KEY);
}

function setAlignTxt(alignment) {
    let txtIdx = gMeme.selectedTxtIdx
    gMeme.txts[txtIdx].align = alignment;
}

function removeLine() {
    var txtIdx = gMeme.selectedTxtIdx;
    gMeme.txts.splice(txtIdx, 1);
    (gMeme.selectedTxtIdx !== 0) ? gMeme.selectedTxtIdx-- : gMeme.selectedTxtIdx = 0
}

function moveLine(direction) {
    let txtIdx = gMeme.selectedTxtIdx;
    let txt = gMeme.txts[txtIdx];
    (direction === 'up') ? (txt.y -= 5) : (txt.y += 5);
}

let gImgs = [{ id: 1, url: 'img/1.jpg' }, 
             { id: 2, url: 'img/2.jpg' },
             { id: 3, url: 'img/3.jpg' },
             { id: 4, url: 'img/4.jpg' },
             { id: 5, url: 'img/5.jpg' },
             { id: 6, url: 'img/6.jpg' },
             { id: 7, url: 'img/7.jpg' },
             { id: 8, url: 'img/8.jpg' },
             { id: 9, url: 'img/9.jpg' },
             { id: 10, url: 'img/10.jpg' },
             { id: 11, url: 'img/11.jpg' },
             { id: 12, url: 'img/12.jpg' },
             { id: 13, url: 'img/13.jpg' },
             { id: 14, url: 'img/14.jpg' },
             { id: 15, url: 'img/15.jpg' },
             { id: 16, url: 'img/16.jpg' },
             { id: 17, url: 'img/17.jpg' },
             { id: 18, url: 'img/18.jpg' },
             { id: 19, url: 'img/19.jpg' },
             { id: 20, url: 'img/20.jpg' },
             { id: 21, url: 'img/21.jpg' },
             { id: 22, url: 'img/22.jpg' },
             { id: 23, url: 'img/23.jpg' },
             { id: 24, url: 'img/24.jpg' },
            //  { id: 25, url: 'img/25.jpg' },
            ];
