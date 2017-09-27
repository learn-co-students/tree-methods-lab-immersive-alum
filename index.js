// let tree = {data: 6,
//   right: {data: 8, left: null, right: null},
//   left: {data: 1,
//   right: {data: 4, right: null, left: null},
//   left: null}
// }
//
//
// let newNode = {data: 3, leftChild: null, rightChild: null}

function inOrder(currentNode){
  if (currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(currentNode, node){
  if (currentNode.data === node.data){
    return true
  }
  if (node.data < currentNode.data){
    if (currentNode.left){
      return findOrAdd(currentNode.left, node)
    } else {
      currentNode.left = node
    }
  } else if (node.data > currentNode.data) {
    if(currentNode.right){
      return findOrAdd(currentNode.right, node)
    } else {
      currentNode.right = node
    }
  }
}

function max(tree){
    if (tree.right){
      return max(tree.right)
    } else {
      return tree
    }
}

function min(tree){
  if (tree.left){
    return min(tree.left)
  } else {
    return tree
  }
}
