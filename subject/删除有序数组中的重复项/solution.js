
/*
 * **
 *  1180ms 超过 8.82%，41M 超过 27.75%
 *  */

/**
 * **
 * @param nums:Array
 * @returns
 * */
var removeDuplicates = function(nums) {
	for(let i = 0;i < nums.length;i ++) {
		if(nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1)
		}
		if(nums[i] === nums[i - 1]) {
			nums.splice(i, 1)
			i -= 1
		}
	}
	return nums.length
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if(nums.length < 2) return nums.length;
	let j = 0;
	for(let i = 1;i < nums.length;i ++) {
		if(nums[j] !== nums[i]) {
			nums[++j] = nums[i]
		}
	}
	return ++j
};


console.log(solution(s))
