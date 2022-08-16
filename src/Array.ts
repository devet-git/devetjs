const Array = {
	/**
	 * 
	 * @param {number[]} arr [An array of number]
	 * @returns {number[]} [Mixed array]
	 */
	mix: (arr: number[]): number[] => {
		return arr.sort(() => Math.random() - 0.5)
	},

	/**
	 * 
	 * @param {number[]} arr 
	 * @returns {number[]} [Return an array: [min, max]] 
	 */
	findMinMax: (arr: number[]): number[] => {
		if (arr) {
			let maxNum = Math.max.apply(Math, arr)
			let minNum = Math.min.apply(Math, arr)
			return [minNum, maxNum]
		}
		throw new Error("No input array")
	}
}
export default Array