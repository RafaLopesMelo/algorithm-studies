// O(log n)

(() => {
	function binarySearch(list: number[], target: number): number | null {
		let executions = 0;

		let start = 0;
		let end = list.length - 1;

		while (start <= end) {
			console.log(`EXECUTION: ${++executions}`);

			const middle = Math.floor((start + end) / 2);

			const element = list[middle];

			if (target < element) {
				end = middle - 1;
			} else if (target > element) {
				start = middle + 1;
			} else {
				return list[middle];
			}
		}

		return null;
	}

	const orderedList = Array.from({ length: 32 }, (_, i) => i + 1);
	const toFind = 38;

	const result = binarySearch(orderedList, toFind);
	console.log(`RESULT: ${result}`);
})();
