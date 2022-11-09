import { DOMElements } from "./dom.js"
import {swipeRight} from './index.js'

function contactTab() {
    setTimeout(() => {
        DOMElements.description.innerHTML = "Contact Us"
        DOMElements.newContent.innerHTML = "Example Form goes here"
    }, 100);

}

export { contactTab }