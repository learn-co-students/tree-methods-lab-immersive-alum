function inOrder(node){
  if(node.left){
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right){
    inOrder(node.right)
  }
}

function findOrAdd(root, adding){
  if(root.data === adding.data){
    return true
  }
  if(root.data > adding.data){
    if(root.left){
      return findOrAdd(root.left, adding)
    }else{
      root.left = adding
    }
  }
  if(root.data < adding.data){
    if(root.right){
        return findOrAdd(root.right, adding)
    }else{
      root.right = adding
    }
  }
}



function max(node){
  if(node.right){
    return max(node.right)
  }else{
    return node
  }
}

function min(node){
  if(node.left){
    return max(node.left)
  }else{
    return node
  }
}
