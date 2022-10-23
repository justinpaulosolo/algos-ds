#include <iostream>
#inlcude <vector>

using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        for (int i = 0; i < nums.size(); i++) {
            result ^= nums[i];
            cout << result << endl;
        }
        return result;
    }
};

int main() {
}

