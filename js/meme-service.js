'use strict'

const IMAGE_ID_KEY = 'image-Id'

let gImgs = [{ id: 1, url: 'img/1.jpg' }, { id: 2, url: 'img/2.jpg' }];
let gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'Text 1',
            size: 2,
            align: 'center',
            color: 'white',
        },
        {
            line: 'Text 2',
            size: 2,
            align: 'center',
            color: 'red',
        }
    ],
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
    if (txtIdx > -1 && txtIdx < txtsLength-1){
        gMeme.selectedTxtIdx++;
    } else {
        gMeme.selectedTxtIdx = 0;
    }
    return gMeme.txts[txtIdx];
    // (gMeme.selectedTxtIdx <  0 || gMeme.selectedTxtIdx > gMeme.txts.length-1)? gMeme.selectedTxtIdx = 0 : gMeme.selectedTxtIdx++;
}

function changeImgId(imgId) {
    console.log(imgId);
    gMeme.selectedImgId = imgId;
    saveImgIdToStorage()
}

function setSelectedImgId(){
    gMeme.selectedImgId = loadImgIdFromStorage();
}

function getImages() {
    return gImgs;
}

function saveImgIdToStorage (){
    saveToLocalStorage(IMAGE_ID_KEY, gMeme.selectedImgId);
}

function loadImgIdFromStorage(){
    return +loadFromLocalStorage(IMAGE_ID_KEY);
}