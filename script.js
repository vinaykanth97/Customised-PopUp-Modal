let PopButton = document.querySelectorAll('.popbtn')
let OverLay = document.querySelectorAll('.fly-cont,.close,.modal-btn')
let PopBoxOverall = document.querySelectorAll('.pop-box-overall')
let Classes = {
    show: {
        animation: "ease-down",
        showPop: "show"
    },
    hide: {
        animation: "ease-up",
        hidePop: "ease-up"
    }
}

function OpenPop() {
    let btnData = this.getAttribute('data-target')
    let ModalTrigger = document.querySelector(`.fly-cont[data-target="${btnData}"]`)
    ModalTrigger.classList.add(`${Classes.show.showPop}`)
    let PopBox = document.querySelector(`.pop-box-overall[data-target="${btnData}"]`)
    PopBox.classList.add(`${Classes.show.animation}`)
    PopBox.classList.remove(`${Classes.hide.hidePop}`)
}

function ClosePop() {
    let OverlayData = this.getAttribute('data-target')
    let OverallClose = document.querySelector(`.fly-cont[data-target="${OverlayData}"]`)
    OverallClose.classList.remove(`${Classes.show.showPop}`)
    let PopBox = document.querySelector(`.pop-box-overall[data-target="${OverlayData}"]`)
    PopBox.classList.add(`${Classes.hide.hidePop}`)
    PopBox.classList.remove(`${Classes.show.animation}`)
}

PopButton.forEach(btn => btn.addEventListener('click', OpenPop))
OverLay.forEach(lay => lay.addEventListener('click', ClosePop))
PopBoxOverall.forEach(overall => overall.addEventListener('click', (e) => e.stopPropagation()))
