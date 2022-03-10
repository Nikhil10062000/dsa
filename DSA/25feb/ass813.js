
	let array = [0, 1, 2, 6, 9, 11, 15];
	let nums = array.length;
	function missing(array, first, target)
	{
		if (first > target)
			return target + 1;
		if (first != array[first])
			return first;
		let mid = parseInt((first + target) / 2, 10);

		if (array[mid] == mid)
			return missing(array, mid+1, target);

		return missing(array, first, mid);
	}
	document.write("ANSWER is "+missing(array, 0, nums - 1));
	

