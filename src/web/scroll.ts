class Scroll {
	htmlElement: HTMLElement;
	constructor(htmlElement: HTMLElement) {
		this.htmlElement = htmlElement
	}
	toTop() {
		this.htmlElement.scrollIntoView({ behavior: "smooth", block: "start" });
	}
	toBottom() {
		this.htmlElement.scrollIntoView({ behavior: "smooth", block: "end" });
	}
}

export default Scroll

