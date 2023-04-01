// O(n)

(() => {
	function recursiveSum(list: number[]): number {
		if (list.length === 0) return 0;

		const [first, ...toProcess] = list;

		return first + recursiveSum(toProcess);
	}

	const toSum = [5, 10, 15, 20, 40]; // 90
	const result = recursiveSum(toSum);

	console.log(`RESULT: ${result}`);
})();
