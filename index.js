function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)

  if (currentNode.right) {
    inOrder(currentNode.right)
  }
  console.log(currentNode.data)
}

function findOrAdd(rootNode, newNode) {
  if (newNode.data < rootNode.data) {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, newNode)
    } else {
      return rootNode.left = newNode
    }
  } else if (newNode.data > rootNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, newNode)
    } else {
      return rootNode.right = newNode
    }
  } else if (rootNode.data === newNode.data) {
    return true
  }
}

function max(rootNode) {
  let highest = rootNode
  while (highest.right) {
    highest = highest.right
  }
  return highest
}

function min(rootNode) {
  let lowest = rootNode
  while (lowest.left) {
    lowest = lowest.left
  }
  return lowest
}
