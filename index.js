function inOrder(current) {
  current.left ? inOrder(current.left) : null
  console.log(current.data)
  current.right ? inOrder(current.right) : null
}

function findOrAdd(current, node) {
  if (current.data == node.data) { return true }
  if (node.data < current.data) {
    if (current.left) {
      return findOrAdd(current.left, node)
    } else {
      current.left = node
    }
  }
  if (node.data > current.data) {
    if (current.right) {
      return findOrAdd(current.right, node)
    } else {
      current.right = node
    }
  }
}

function max(current) {
  return current.right ? max(current.right) : current
}

function min(current) {
  return current.left ? min(current.left) : current
}
