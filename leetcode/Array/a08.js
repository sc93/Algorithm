/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroIndex = nums.indexOf(0);
    let zeroCnt = 0;
    while(zeroIndex !== -1) {
        nums.splice(zeroIndex,1);
        zeroIndex = nums.indexOf(0);
        zeroCnt++;
    } 
    for(let i = 0; i < zeroCnt; i++) {
        nums.push(0);
    }
    return nums;
};

console.log(moveZeroes([1,0,3,0,12,0]));