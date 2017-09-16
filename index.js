let rootNode = {data: 5, left: null, right: null}
let firstNewNode = {data: 3, left: null, right: null}
let secondNewNode = {data: 7, left: null, right: null}
let thirdNewNode = {data: 9, left: null, right: null}
let fourthNewNode = {data: 2, left: null, right: null}
findOrAdd(rootNode, firstNewNode)
findOrAdd(rootNode, secondNewNode)
findOrAdd(rootNode, thirdNewNode)
findOrAdd(rootNode, fourthNewNode)

function findOrAdd(currentNode, newNode) {
  if (currentNode.data == newNode.data) {
    return true
  }

  if (currentNode.data < newNode.data) {
    if (!currentNode.right) {
      return currentNode.right = newNode
    } else {
      return findOrAdd(currentNode.right, newNode)
    }
  }

  if (currentNode.data > newNode.data) {
    if (!currentNode.left) {
      return currentNode.left = newNode
    } else {
      return findOrAdd(currentNode.left, newNode)
    }
  }
}


function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }

  console.log(node.data);

  if (node.right) {
    inOrder(node.right)
  }
}


function min(node) {
  if (node.left) {
    return min(node.left)
  } else {
    return node
  }
}

function max(node) {
  if (node.right) {
    return max(node.right)
  } else {
    return node
  }
}

console.log(min(rootNode).data)
console.log(max(rootNode).data)
