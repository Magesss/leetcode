let n = 12321

/*
 *  将 n split 切割 resver 再转 number
 *  */

/**
* 回文数
* @param n number
* @returns
* */
// function solution(n) {
// 	if(n >= 0) {
// 		let m = Number(n.toString().split('').reverse().join(''))
// 		let max = Math.pow(2, 31) - 1
// 		if(m > max) {
// 			return false
// 		} else {
// 			return n === m
// 		}
// 	} else {
// 		return false
// 	}
// }   12321
// 将 参数分为两种情况-偶数位和奇数位，从末尾依次往出取值，相当于把数倒过来，判断参数不大于倒过来的数时，说明循环了最少一半，此时判断条件就已经够了，判断两数相等，回文数，不等说明倒过来的数比参数多一位，除10看两数是否相等-相等-回文数
function solution(n) {
	if(n === 0) return true
	if(n < 0 || n % 10 === 0) return false
	let r = 0
	while (n > r) {
		r = r * 10 + n % 10
		n = parseInt(n / 10)
	}
	return n === r || n === parseInt(r / 10)
}

console.log(solution(n))
