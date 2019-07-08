function inOrder (node) {
  node.left && inOrder(node.left)
  console.log(node.data)
  node.right && inOrder(node.right)
}

function findOrAdd (node, newNode) {
  if (newNode === node) {
    return true
  } else if (newNode.data <= node.data) {
    return node.left
    ? findOrAdd(node.left, newNode)
    : node.left = newNode
  } else {
    return node.right
    ? findOrAdd(node.right, newNode)
    : node.right = newNode
  }
}

function max (node) {
  return node.right
  ? max(node.right)
  : node
}

function min (node) {
  return node.left
  ? min(node.left)
  : node
}
