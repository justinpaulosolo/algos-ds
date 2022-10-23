#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> ump;

        for (int i = 0; i < nums.size(); i++) {
            int remaining = target - nums[i];

            if (ump.find(remaining) != ump.end()) {
                return {ump.find(remaining)->second, i};
            }
            ump[nums[i]] = i;
        }
        return {-1, -1};
    }
};

int main() {
}
