function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.left = newNode
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode){
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  }
  return true;
}

var currentNode;
function max(node){
  currentNode = node;

  if(currentNode && currentNode.left){
    if(currentNode.data < currentNode.left.data){
      max(currentNode.left)
    }
  }

  if(currentNode && currentNode.right){
    if(currentNode.data < currentNode.right.data){
      max(currentNode.right)
    }
  }
  return currentNode;
}

function min(node){
  currentNode = node;

  if(currentNode && currentNode.left){
    if(currentNode.data > currentNode.left.data){
      min(currentNode.left)
    }
  }

  if(currentNode && currentNode.right){
    if(currentNode.data > currentNode.right.data){
      min(currentNode.right)
    }
  }
  return currentNode;
}
