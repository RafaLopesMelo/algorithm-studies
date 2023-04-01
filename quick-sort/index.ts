(() => {
	function quickSort(list: number[]): number[] {
		if (list.length < 2) return list;

		const pivot = Math.round(list.length / 2);
		const pivotValue = list[pivot];

		const greater: number[] = [];
		const minor: number[] = [];

		for (let i = 0; i < list.length; i++) {
			if (pivot === i) continue;

			if (list[i] > pivotValue) {
				greater.push(list[i]);
				continue;
			}

			minor.push(list[i]);
		}

		return [...quickSort(minor), pivotValue, ...quickSort(greater)];
	}

	const unorderedList = Array.from({ length: 100 }).map(() =>
		Math.floor(Math.random() * 1000)
	);

	const result = quickSort(unorderedList);
	console.log(`RESULT: ${result}`);
})();
