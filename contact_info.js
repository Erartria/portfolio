let contactButton = document.querySelector(".contactMe")
let darknessPopup = document.querySelector(".darkness")
let closeButton = document.querySelector('.closeButton')
contactButton.addEventListener('click', function (evt) {
    console.log('Popup_show added')
    darknessPopup.classList.add('popup_show')
})
closeButton.addEventListener('click', function () {
    console.log('Popup_show removed')
    darknessPopup.classList.remove('popup_show')
})
document.addEventListener('keydown', function (evt) {
    if (evt.code === 'Escape' && darknessPopup.classList.contains('popup_show')) {
        console.log('Popup_show removed with button ' + evt.code)
        darknessPopup.classList.remove('popup_show')
    }
})
console.log(contactButton)