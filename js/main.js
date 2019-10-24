function init() {
    renderImages();
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

function onPickImage(elImage) {
    let imgId = +elImage.dataset.id;
    changeImgId(imgId);
    window.location.href = "editor.html";
}

function toggleMenu() {
    let elMenu = document.querySelector('.nav-bar');
    elMenu.classList.toggle('open-menu');
    let elMenuBtn = document.querySelector('.menu-btn');
    elMenuBtn.classList.toggle('open-menu');
    
}