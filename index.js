function findOrAdd(node, newNode){
  if(node.data < newNode.data){
    if(node.right){
      findOrAdd(node.right, newNode)
    } else {
      node.right = newNode
    }
  } else {
    if(node.left){
      findOrAdd(node.left, newNode)
    } else {
      node.left = newNode
    }
  }
  return true
}

function inOrder(node){
  if(node.left) inOrder(node.left)
  console.log(node.data)
  if(node.right) inOrder(node.right)
}

function max(node){
  if(node.right) return max(node.right)
  return node
}

function min(node){
  if(node.left) return min(node.left)
  return node
}
