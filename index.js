function inOrder(rootNode){
  let currentNode = rootNode
  console.log(rootNode.data);
  if (rootNode.right){
    inOrder(rootNode.right)
  }
  if (rootNode.left){
    inOrder(rootNode.left)
  }
}

function findOrAdd(rootNode, newNode){
  if (rootNode.data===newNode.data){
    return true
  }
  if (rootNode.data > newNode.data){
    if (rootNode.left===null) {
      console.log("called!");
      rootNode.left = newNode
    } else {
      return findOrAdd(rootNode.left, newNode)
    }
  } else if (rootNode.data < newNode.data){
    if (rootNode.right===null){
      console.log("called!");
      rootNode.right = newNode
    } else {
      return findOrAdd(rootNode.right, newNode)
    }
  }
}

function max(rootNode){
  let currentMax = rootNode
  if (rootNode.right){
    return max(rootNode.right)
  }
  return currentMax
}

function min(rootNode){
  let currentMin = rootNode
  if (rootNode.left){
    return max(rootNode.left)
  }
  return currentMin
}
