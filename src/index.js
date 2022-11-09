import { aboutTab } from "./about.js"
import { menuTab } from "./menu.js"
import { contactTab } from "./contact.js"
import { DOMElements } from "./dom.js"
import './style.css'


function menuHandler(e) {
    if(DOMElements.content.classList.contains('startAnimationRight') && !DOMElements.content.classList.toggle('startAnimationLeft')) {
        DOMElements.content.classList.toggle('startAnimationLeft')
    }
    if(DOMElements.content.classList.contains('startAnimationLeft') && !DOMElements.content.classList.toggle('startAnimationRight')) {
        DOMElements.content.classList.toggle('startAnimationRight')
    }
    if(DOMElements.content.classList.contains('startAnimationLeft') && DOMElements.content.classList.contains('startAnimationRight')) {
        DOMElements.content.classList.toggle('startAnimationRight')
        DOMElements.content.classList.toggle('startAnimationLeft')
        setTimeout(() => {
            DOMElements.content.classList.toggle('startAnimationRight')
            setTimeout(() => {
                DOMElements.content.classList.toggle('startAnimationLeft')
            }, 600);
        }, 600);
    }
    if(!DOMElements.content.classList.contains('startAnimationRight') || !DOMElements.content.classList.toggle('startAnimationLeft')) {
        DOMElements.content.classList.toggle('startAnimationRight')
        setTimeout(() => {
            DOMElements.content.classList.toggle('startAnimationLeft')
        }, 600);
    }
    if(e.target.id === 'about') {
        e.target.classList.add('selected')
        DOMElements.menu.classList.remove('selected')
        DOMElements.contact.classList.remove('selected')
    }
    if(e.target.id === 'menu') {
        e.target.classList.add('selected')
        DOMElements.about.classList.remove('selected')
        DOMElements.contact.classList.remove('selected')
    }
    if(e.target.id === 'contact') {
        e.target.classList.add('selected')
        DOMElements.menu.classList.remove('selected')
        DOMElements.about.classList.remove('selected')
    }
}

DOMElements.about.addEventListener('click', (e) => {
    menuHandler(e)
    aboutTab()
})
DOMElements.menu.addEventListener('click', (e) => {
    menuHandler(e)
    menuTab()
})
DOMElements.contact.addEventListener('click', (e) => {
    menuHandler(e)
    contactTab()
})
DOMElements.callToAction.addEventListener('click', (e) => {
    menuHandler(e)
    contactTab()
})

export {menuHandler}

