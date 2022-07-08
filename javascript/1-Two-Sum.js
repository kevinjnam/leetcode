/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time: O(n)
 * Space: O(n)
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target-nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
