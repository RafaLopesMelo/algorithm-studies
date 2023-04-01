(() => {
	function binarySearch(
		list: number[],
		target: number,
		start: number = 0,
		end: number | null = null
	): number | null {
		const searchStart = start;
		const searchEnd = end || list.length;

		const middle = Math.round((searchStart + searchEnd) / 2);
		const value = list[middle];

		if (value === target) return middle;

		if (searchStart === searchEnd) return null;

		if (value > target)
			return binarySearch(list, target, searchStart, middle - 1);

		return binarySearch(list, target, searchStart + 1, searchEnd);
	}

	const orderedList = Array.from({ length: 32 }, (_, i) => i + 1);
	const toFind = 12;

	const result = binarySearch(orderedList, toFind);
	console.log(`RESULT: ${result}`);
})();
