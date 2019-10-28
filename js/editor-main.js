'use strict'


const gCanvas = document.querySelector('#main-canvas');
const gCtx = gCanvas.getContext('2d');


function init() {
    resizeCanvas(gCanvas)
    setSelectedImgId();
    renderMeme()
}

function resizeCanvas(canvas) {
    var elContainer = document.querySelector('.canvas-container');
    console.log(elContainer.offsetWidth);

    canvas.width = elContainer.offsetWidth;
    canvas.height = elContainer.offsetWidth;
    // let aspectRatio
    // canvas.width = image.naturalWidth;
    // canvas.height = window.innerHeight
}

function renderMeme() {
    // let meme = getMeme();
    var imgUrl = getImgUrl();
    var image = new Image();
    image.src = imgUrl;
    image.onload = function () {
        // Draw Image and text
        gCtx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height);
        drawTxts();
    }

    console.log(image.width);
}

function drawTxts() {
    let txts = getMeme().txts;
    txts.forEach(function (txt) {
        let fontSize = '' + txt.size;
        gCtx.font = fontSize + 'em impact';
        gCtx.lineWidth = 2;
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.strokeStyle = 'black';
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
    if (elBtn.classList.contains('up-btn')) {
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

function onAlignTxt(elBtn) {
    setAlignTxt(elBtn.id);
    renderMeme();
}

function onAddLine() {
    createTxtLine(gCanvas.width);
    renderMeme();
}

function onRemoveLine() {
    removeLine();
    renderMeme();
}

function onDownloadMeme(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

// function onShareMeme(width, height) {
//     var leftPosition, topPosition;
//     //Allow for borders.
//     leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
//     //Allow for title and status bars.
//     topPosition = (window.screen.height / 2) - ((height / 2) + 50);
//     var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
//     u=location.href;
//     t=document.title;
//     window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer', windowFeatures);
//     return false;
// }

// function onShareMeme(elShareBtn) {
//     console.log(elShareBtn);
//     var imgContent = gCanvas.toDataURL('image/jpeg');
//     elShareBtn.innerHtml = `<a class="w-inline-block social-share-btn btn fb" href="https://www.facebook.com/sharer/sharer.php?u=${imgContent}&t=${imgContent}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${imgContent}&t=${imgContent}'); return false;">
//     </a>`
//     // var imgContent = gCanvas.toDataURL('image/jpeg');

//     (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));
// }

// Share meme -

// function uploadImg(elForm, ev) {
//     ev.preventDefault();
//     document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");
//     // A function to be called if request succeeds
//     function onSuccess(uploadedImgUrl) {
//         uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
//         document.querySelector('.share-container').innerHTML = `
//         <a class="w-inline-block social-share-btn btn fb" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
//            Share   
//         </a>`
//     }
//     doUploadImg(elForm, onSuccess);
// }

// function doUploadImg(elForm, onSuccess) {
//     var formData = new FormData(elForm);
//     fetch('http://ca-upload.com/here/upload.php', {
//         method: 'POST',
//         body: formData
//     })
//         .then(function (response) {
//             return response.text()
//         })
//         .then(onSuccess)
//         .catch(function (error) {
//             console.error(error)
//         })
// }

// // facebook api
// (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// // The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
// function onImgInput(ev) {
//     loadImageFromInput(ev, renderCanvas)
// }
// function loadImageFromInput(ev, onImageReady) {
//     document.querySelector('.share-container').innerHTML = ''
//     var reader = new FileReader();

//     reader.onload = function (event) {
//         var img = new Image();
//         img.onload = onImageReady.bind(null, img)
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(ev.target.files[0]);
// }