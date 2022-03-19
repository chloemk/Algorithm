// # LeetCode #530 Minimum Absolute Difference in BST

class Solution {
    // 트리 순회(재귀)
    // preorder : self left right
    // inorder : left self right
    // postorder : left right self
    // 이진검색트리 성질 : inorder -> 오름차순 정렬이 된다.
    // 이진검색트리 : 왼쪽 섭트리는 본인보다 작고, 오른쪽 섭트리는 본인보다 크다. 
    // 재귀적으로 호출하게되면 inorder의 경우 나(self)보다 작은 친구들을 먼저 처리하고, 나(self)보다 큰 친구들을 나중에 처리한다
    
    boolean init; //이미 노드를 하나 발견한게 있는지 없는지
    int min;
    int prev; //직전에 발견한 노드값
    public int getMinimumDifference(TreeNode root) {
        //가장 처음은 노드를 발견했을 때는 하나밖에 없기 때문에 차이를 계산할 수 없다
        //차이가 가장 적은 것만 유지한다
        init = false;
        min = Integer.MAX_VALUE;
        inorder(root);
        return min;
    }
    
    public void inorder(TreeNode root) {
        //base case
        if(root == null) return;
        inorder(root.left);
        //self -> init이 없으면 = 노드를 아직 하나도 발견하지 못한 경우
        if (!init) {
            init = true;
            prev = root.val;
        } else {
            min = Math.min(min, root.val-prev);
        }
        prev = root.val;
        inorder(root.right);   
    }
}