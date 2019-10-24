'use strict'

let gImgs = [{ id: 1, url: 'img/1.jpg' }, { id: 2, url: 'img/2.jpg' }];
let gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'Text 1',
            size: 2,
            align: 'center',
            color: 'black',
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
    let img = gImgs.find(function (img) {
        return img.id === gMeme.selectedImgId;
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
    
    // (gMeme.selectedTxtIdx <  0 || gMeme.selectedTxtIdx > gMeme.txts.length-1)? gMeme.selectedTxtIdx = 0 : gMeme.selectedTxtIdx++;
}

function changeImg(imgId) {
    gMeme.selectedImgId = +imgId;
}

function getImages() {
    return gImgs;
}