function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(rootNode, newNode) {
  let match = false;
  if (rootNode.data === newNode.data) {
    return true;
  } else {
    if (rootNode.data > newNode.data) {
      if (rootNode.left) {
        match = findOrAdd(rootNode.left, newNode);
      } else {
        rootNode.left = newNode;
      }
    } else {
      if (rootNode.right) {
        match = findOrAdd(rootNode.right, newNode);
      } else {
        rootNode.right = newNode;
      }
    }
  }
  return match;
}

function max(node) {
  let maximum = node;
  if (node.right) {
    let currentNode = max(node.right);
    if (currentNode.data > maximum.data) {
      maximum = currentNode;
    }
  }
  return maximum;
}

// Since the last right node is the biggest, you don't need to do any comparison.
function max2(node) {
  if (node.right) {
    return max2(node.right);
  } else {
    return node;
  }
}

function min(node) {
  let minimum = node;
  if (node.left) {
    let currentNode = min(node.left);
    if (currentNode.data < minimum.data) {
      minimum = currentNode;
    }
  }
  return minimum;
}
// since the last element of the tree is the smallest, you don't need to do any comparison, just return it.
function min2(node) {
  if (node.left) {
    return min2(node.left);
  } else {
    return node;
  }
}
