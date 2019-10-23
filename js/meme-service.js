'use strict'

let gImgs = [{id: 1, url:'img/1.jpg'}, {id: 2, url:'img/2.jpg'}];
let gMeme = {
    selectedImgId: 1, 
    selectedTxtIdx: 0, 
    txts: [
        {line: '',
         size: 1,
         align: 'left',
         color: 'black',
        }
    ],
}

function getImgUrl() {
    let img = gImgs.find(function(img){
        return img.id === gMeme.selectedImgId;
    })
    return img.url;
}

function getMemeTxt(){
    let txtIdx = gMeme.selectedTxtIdx
    return gMeme.txts[txtIdx]
}

function changeTxt(txtsIdx, txt){
    gMeme.selectedTxtIdx = txtsIdx;
    gMeme.txts[txtsIdx].line = txt;
}

function changeImg(imgId){
    gMeme.selectedImgId = +imgId;
}


function getImages(){
    return gImgs;
}