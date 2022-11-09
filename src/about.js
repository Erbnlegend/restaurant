import { DOMElements } from "./dom.js"
import {swipeRight} from './index.js'

function aboutTab() {
    setTimeout(() => {
        DOMElements.description.innerHTML = "About Us"
        const createDiv = document.createElement('div')
        createDiv.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        DOMElements.newContent.append(createDiv)
    }, 100);

}

export { aboutTab }