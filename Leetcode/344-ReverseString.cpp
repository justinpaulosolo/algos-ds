#include <iostream>
#include <vector>

usign namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        int l, r=s.size()-1; 
        
        while (l < r) {
            char temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
        
    }
};

int main() {
    return 0;
}

