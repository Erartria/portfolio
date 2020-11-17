const fullPhotos = [
    "img/Gallery/Code-2.jpg",
    "img/Gallery/Code-3.jpg",
    "img/Gallery/data-center-1.jpg",
    "img/Gallery/data-center-2.jpg",
    "img/Gallery/internet.jpg"
]
const fullPhoto = document.querySelector(".full-photo-img")
const previews = document.querySelectorAll(".gallery-photo_preview")
for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener('click', function (){
        console.log('click')
        fullPhoto.src = fullPhotos[i]
    })
}
/*
const addPreviewClickHandler = function (preview, photo) {
    preview.addEventListener('click', function (){
        console.log('clicked')
        fullPhoto.src = photo
    })
}

for (var i = 0; i < previews.length; i++) {
    addPreviewClickHandler(previews[i], fullPhotos[i])
}
*/

console.log(previews)