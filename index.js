function inOrder(node){
    if(node.left){
        inOrder(node.left)
    }
    console.log(node.data)
    if(node.right){
        inOrder(node.right)
    }
}

function findOrAdd(node, newNode){
    if(node.data === newNode.data){
        return true
    }
 if(newNode.data > node.data && node.right != null){
        findOrAdd(node.right, newNode)
    }
 if(newNode.data < node.data && node.left != null){
    findOrAdd(node.left, newNode)
    }
if(newNode.data > node.data && node.right === null){
    node.right = newNode
    return newNode
    }
if(newNode.data < node.data && node.left === null){
    node.left = newNode
    return newNode
    }
}

function max(node){
    if(node.right){
        return max(node.right)
    } else {
        return node
    }
}

function min(node){
    if(node.left){
        return max(node.left)
    } else {
        return node
    }
}