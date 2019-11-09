// var $ = require("jquery");

// On thumbnail Click Change Main Image.
function changeMainImage(img_src, id) {
    document.getElementById('img_l').src = img_src;
    let elements = document.getElementsByClassName('active-img');
    let length = elements.length;
    for (let i = 0; i < length; i++) {
        let element = elements[0];
        element.classList.remove('active-img');
    }
    document.getElementById(id).classList.add('active-img');
}
window.changeMainImage = changeMainImage

