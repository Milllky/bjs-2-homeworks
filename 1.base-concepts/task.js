"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthPer = (percent / 100) / 12;
	let crBody = amount - contribution;
	if (crBody <= 0) {
		return 0;
	}
	let monthPay = crBody * (monthPer + (monthPer / (((1 + monthPer) ** countMonths) - 1)));
	let totalPay = monthPay * countMonths;
	return Math.round(totalPay * 100) / 100
}