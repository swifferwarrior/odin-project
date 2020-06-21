function add(a, b) {
		return a + b;
}


function subtract(a, b) {
	return a - b;
}

function sum(array) {
	 return array.reduce(add, 0);
}

function multiply(array) {
	return array.reduce((a,b) => {
		return a * b;
	}, 1);
}

function power(a, b) {
	return a **= b;
}

function factorial(n) {
	if (n === 0){
		return 1;
	}

	let sum = n;
	for (i = 1; i < n; i++) {
		sum *= n-i;
	};

	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}