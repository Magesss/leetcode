const nums = [3, 3]
const target = 6

/*
 * 对 nums 遍历，把每一项当做对象键存起来，达到 '同一元素不能重复出现'，
 *  */

/**
* 计算
* @param target 目标值
* @param nums 目标数组
* @returns 相加为 nums 的下标
* */
function solution(target, nums) {
	const b = {}
	let l = nums.length
	while (l){
		let i = nums.length - l
		let x = target - nums[i]
		if(b[x] || b[x] === 0) {
			return [b[x], i]
		}
		b[nums[i]] = i
		l = l - 1
	}
}



console.log(solution(target, nums))
