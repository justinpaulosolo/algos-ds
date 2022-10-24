#include <iostream>
#include <vector>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
};

class Solution {
public:
    void inorderHelp(TreeNode* root, vector<int>& x) {
        if (root == NULL) return;

        inorderHelp(root->left, x);
        x.push_back(root->val);
        inorderHelp(root->right, x);
    }

    vector<int> inorderTraversal(TreeNode* root){
        vector<int>x;
        inorderHelp(root, x);
        return x;
    }
};

int main() {
    return 0;
}
