## LeetCode 144. Binary Tree Preorder Traversal

class Solution {
    List<Integer> ret;
    
    public List<Integer> preorderTraversal(TreeNode root) {
        ret = new ArrayList<Integer>();
        traversal(root);
        return ret;
    }
    
    public void traversal(TreeNode root) {
        if (root == null) return;
        //self left right
        ret.add(root.val);
        traversal(root.left);
        traversal(root.right);
    }
}