/**
	 * 
	 * @param {number} min
	 * @param {number} max
	 * @returns {number} [A random number from min to max]
	 */
const random = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default random;