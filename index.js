

function inOrder(node){
  let values = []

  function getValues(node){
    if(!node)return
    values.push(node.data)
    getValues(node.left)
    getValues(node.right)
  }

  getValues(node)

  let sorted = values.sort(function(a, b){ return a - b})

  sorted.forEach(function(value){
    console.log(value)
  })
}

function findOrAdd(root, newNode){
    if(root.data == newNode.data){
      return true
    }
    if(root.data > newNode.data){
      if(root.left){
        return findOrAdd(root.left, newNode)
      } else {
        root.left = newNode
      }
    }
    if(root.data < newNode.data){
      if(root.right){
        return findOrAdd(root.right, newNode)
      } else {
        root.right = newNode
      }
    }
 }

 function max(root){
   if(root.right !== null){
     return max(root.right)
   } else {
     return root
   }
 }

 function min(root){
   if(root.left === null){
     return root
   } else {
     return min(root.left)
   }
 }
