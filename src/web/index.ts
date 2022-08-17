import copyToClipBoard from "./copyToClipboard.js"
import randomHexColor from "./randomHexColor.js"
import Scroll from "./scroll.js"

const Web = {
	copyToClipBoard,
	scroll: (htmlElement: HTMLElement) => new Scroll(htmlElement),
	randomHexColor
}

export default Web