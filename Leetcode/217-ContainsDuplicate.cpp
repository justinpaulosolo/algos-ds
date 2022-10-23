#include <iostream>
#include <set>
#include <vector>

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> bucket;
        for(int i =0;i<nums.size();i++){
            bucket.insert(nums[i]);
        };
        
        if (bucket.size() == nums.size()) {
            return false;
        } else {
            return true;
        }
    }
};

int main() {
}
