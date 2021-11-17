const s = "IV"

/*
 * 通过键值对映射，遍历每个字符，对比右面字符在映射中的值，小 右面减去左面 （循环次数加一！！），大正常加
 * 124ms 超过 93%，43.8M 超过 60.50%
 *  */

/**
* 罗马数转整数
* @param s:string
* @returns
* */
function solution(s) {
	let o = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	let arr = s.split('')
	let tar = 0
	for(let i = 0;i < arr.length; i++) {
		if(o[arr[i]] < o[arr[i + 1]]) {
			tar += o[arr[i + 1]] - o[arr[i]]
			i += 1
		} else {
			tar += o[arr[i]]
		}
	}
	return tar
}



console.log(solution(s))
