function invertTree(root) {
	DFS(root);
	return root;
}

function DFS(node) {
	//base case
	if (!node) return;

	//recursive case
	let temp = node.left;
	node.left = node.right;
	node.right = temp;

	DFS(node.left);
	DFS(node.right);
}

const root = [4, 2, 7, 1, 3, 6, 9];
console.log(invertTree(root));
