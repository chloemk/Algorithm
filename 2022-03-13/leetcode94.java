class Solution {
    //멤버변수로 선언
    List<Integer> ret;
    public List<Integer> inorderTraversal(TreeNode root) {
        ret = new ArrayList<Integer>();
        traverse(root);
        return ret;
    }
    public void traverse(TreeNode self) {
        if(self == null) return;
        traverse(self.left);
        ret.add(self.val);
        traverse(self.right);
    }
}