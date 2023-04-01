(() => {
	function findGreater(list: number[], lastGreater: number = 0): number {
		if (list.length === 0) return lastGreater;

		const [first, ...toProcess] = list;

		return findGreater(
			toProcess,
			first > lastGreater ? first : lastGreater
		);
	}

	const input = [7, 2, 19, 29, 13, 2];
	const result = findGreater(input);

	console.log(`RESULT: ${result}`);
})();
