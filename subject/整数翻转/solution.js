let nums = 123
/*
 * 将数字通过split截开再翻转
 *  */

/**
* 整数翻转
* @param n:number
* @returns
* */
function solution(n) {
	let s = parseInt(n.toString().split('').reverse().join(''))
	let max = Math.pow(2, 31) - 1
	let min = -Math.pow(2, 31)
	if(n < 0) {
		s = -s
	}
	return (s > max || s < min) ? 0 : s
}



console.log(solution(nums))
