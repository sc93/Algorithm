/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for(var i =0; i<k; i++) {
//         var last = nums[nums.length-1];
//         for(var j = nums.length-1; j>0; j--) {
//             nums[j] = nums[j-1];
//         }
//         nums[0] = last;
//     }
//     console.log(nums)
// };

var rotate = function(nums, k) {
    for(var i = 0; i<k; i++) {
        nums.unshift(nums.pop());  
    }
};
rotate([1,2,3,4,5,6,7],3);