## Leetcode 589. N-ary Tree Preorder Traversal

class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> ret = new ArrayList<>();

        traverse(root, ret);

        return ret;
    }

    public void traverse(Node root, List<Integer> ret) {
        //base case
        if(root == null) retrun;
        ret.add(root.val);
        for(Node child: root.childeren) {
            traverse(child, ret);
        }
    }
}