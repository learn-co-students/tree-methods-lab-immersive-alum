function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
  console.log(currentNode.data);
}

function findOrAdd(currentNode, newNode) {
  if (currentNode.data == newNode.data) {
    return true;
  }
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      currentNode = currentNode.left;
      findOrAdd(currentNode, newNode);
    } else {
      currentNode.left = newNode;
    }
  } else if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      currentNode = currentNode.right;
      findOrAdd(currentNode, newNode);
    } else {
      currentNode.right = newNode;
    }
  }
}

function max(currentNode){
    if (currentNode.right){
        return max(currentNode.right)
    } else {
        return currentNode
    }
}

function min(currentNode){
    if (currentNode.left){
        return min(currentNode.left)
    } else {
        return currentNode
    }
}