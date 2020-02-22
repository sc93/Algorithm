var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var tmp_value = (target - value);
        var second_idx = nums.indexOf(tmp_value,i+1);
        if(second_idx > 0) return [i,second_idx];
    }
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,3],6));