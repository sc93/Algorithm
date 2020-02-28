/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        const tmp_value = (target - nums[i]);
        const second_idx = nums.indexOf(tmp_value,i+1);
        if(second_idx > 0) return [i,second_idx];
    }
};