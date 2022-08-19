/**
	 * 
	 * @param {number[]} arr 
	 * @returns {number[]} [Return an array: [min, max]] 
	 */
const findMinMax = (arr: number[]): number[] => {
	if (arr) {
		let maxNum = Math.max.apply(Math, arr)
		let minNum = Math.min.apply(Math, arr)
		return [minNum, maxNum]
	}
	throw new Error("No input array")
}
export default findMinMax;