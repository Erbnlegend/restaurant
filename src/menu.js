import { DOMElements } from "./dom.js"
import {swipeRight} from './index.js'

function menuTab() {
    setTimeout(() => {
        DOMElements.description.innerHTML = "Our Menu"
        DOMElements.newContent.innerHTML = "Example Menu goes Here"
    }, 100);
}

export { menuTab }