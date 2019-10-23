'use strict'

let gImgs = [{id: 1, url:'img/1.jpg'}, {id: 2, url:'img/2.jpg'}];
let gMeme = {
    selectedImgId: 1, 
    selectedTxtId: 1, 
    txts: [
        {line: 'I love dogs',
         size: 1,
         align: 'left',
         color: 'black',
        }
    ],
}

function getImg() {
    let img = gImgs.find(function(img){
        return img.id === gMeme.selectedImgId;
    })
    return img.url;
}