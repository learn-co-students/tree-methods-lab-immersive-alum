const inOrder = node => {
  if(node.left){
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right){
    inOrder(node.right)
  }
}

const findOrAdd = (currentNode, newNode) => {
  if (currentNode.data === newNode.data) {
    return true
  }

  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode)
    } else {
      return currentNode.left = newNode
    }
  }

  if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode)
    } else {
      return currentNode.right = newNode
    }
  }
}

const max = currentNode => {
  if (currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode
  }
}

const min = currentNode => {
  if (currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}
