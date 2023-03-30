(() => {
	function selectionSort(list: number[]): number[] {
		let executions = 0;
		const result: number[] = [];

		const order = () => {
			let maxIndex = 0;
			let max = 0;
			for (let i = 0; i < list.length; i++) {
				console.log(`EXECUTION: ${++executions}`);

				const element = list[i];
				if (element > max) {
					max = element;
					maxIndex = i;
				}
			}

			delete list[maxIndex];
			result.unshift(max);
		};

		for (let i = 0; i < list.length; i++) {
			order();
		}

		return result;
	}

	const unorderedList = Array.from({ length: 100 }).map(() =>
		Math.floor(Math.random() * 1000)
	);

	const result = selectionSort(unorderedList);
	console.log(`RESULT: ${result}`);
})();
