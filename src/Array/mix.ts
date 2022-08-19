/**
	 * 
	 * @param {number[]} arr [An array of number]
	 * @returns {number[]} [Mixed array]
	 */
const mix = (arr: number[]): number[] => {
	return arr.sort(() => Math.random() - 0.5)
}

export default mix;