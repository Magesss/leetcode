const s = ["f","flow","flight"]

/*
 * ** 取出最短的遍历，下标对应的字符不一样时return之前的target
 * 80ms 超过 47.87%， 39.5M 超过 38.17%
 *  */

/**
 * **
 * @param s:string
 * @returns
 * */
function solution(strs) {
	strs = strs.sort((a, b) => a.length - b.length)
	let target = ''
	let t = strs.shift()
	for(let i = 0;i < t.length;i ++) {
		target += t[i]
		for(let k = 0; k < strs.length; k++) {
			if(strs[k][i] !== t[i]) {
				return target.substring(0, target.length - 1)
			}
		}
	}
	return target
}


function solution2(strs) {
	strs = strs.sort((a, b) => a.length - b.length)
	let t = strs.shift()
	for(let k = 0; k < strs.length; k++) {
		while(strs[k].indexOf(t) !== 0) {
			if(t.length === 0) {
				return ''
			}
			t = t.substring(0, t.length - 1)
		}
	}
	return t
}



console.log(solution(s))
