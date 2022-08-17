const copyToClipBoard = (text: string): void => {
	navigator.clipboard?.writeText && navigator.clipboard.writeText(text)
}
export default copyToClipBoard