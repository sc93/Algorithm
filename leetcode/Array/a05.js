/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    let cnt = 0;
    let num = nums[0];
    for(var i = 0; i<nums.length; i++) {
        if(num === nums[i+1]) {
            cnt++;
        } else {
            if(cnt === 0) {
                return num;
            } else {
                num = nums[i+1];
                cnt = 0;
            }
        }
    }
};