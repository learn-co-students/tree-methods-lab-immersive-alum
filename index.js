function inOrder(currentNode) {
	if (currentNode.left) {
		inOrder(currentNode.left);
	}
	console.log(currentNode.data);
	if (currentNode.right) {
		inOrder(currentNode.right);
	}
}

function findOrAdd(currentNode, newNode) {
	if (currentNode.data === newNode.data) {
		return true;
	}
	if (newNode.data < currentNode.data) {
		if (currentNode.left) {
			return findOrAdd(currentNode.left, newNode);
		} else {
			currentNode.left = newNode;
		}
	} else if (newNode.data > currentNode.data) {
		if (currentNode.right) {
			return findOrAdd(currentNode.right, newNode);
		} else {
			currentNode.right = newNode;
		}
	}
}

function max(tree) {
	if (tree.right) {
		return max(tree.right);
	} else {
		return tree;
	}
}

function min(tree) {
	if (tree.right) {
		return min(tree.left);
	} else {
		return tree;
	}
}