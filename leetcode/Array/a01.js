/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var obj = {};
    var len = 0;
    nums.forEach((num,i) => {
        obj[num] = obj[num] == undefined ? 0 : obj[num]+1;
        len = obj[num] == 1 ? len+1 : len;
    });
    return len;
};

var nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));