// 1) #inOrder prints out the data in the node from lowest to highest:
// let node = {data: 5, left:
//                   {data: 3, left: null, right: null},
//                     right: {data: 7, left: null,
//                     right: {data: 9, left: null, right: null}
//                   }}
let inOrder = (root)=>{
  console.log(root.data);
  if(root.left){inOrder(root.left)}

  if(root.right){inOrder(root.right)}
}
// inOrder(node)
// **************************************************************
// it("should add the presented node if the data does not already exist", function() {
// let rootNode = {data: 5, left: null, right: null}
// let firstNewNode = {data: 3, left: null, right: null}
// let secondNewNode = {data: 7, left: null, right: null}
let findOrAdd=(root,newNode)=>{
// function findOrAdd(root,newNode){
  if( root.data === newNode.data) {return true}
  if(newNode.data < root.data){
    if(!root.left){root.left = newNode} //if left was null
    else {return findOrAdd(root.left,newNode)}
  }
  else if(newNode.data > root.data){
    if(!root.right){root.right = newNode}
    else {return findOrAdd(root.right, newNode)}
  }
  // else if(root.data == newNode.data) {
  //   console.log("we have a match");
  //   return true                           //why iz this not returning? because we are not returning the
  //   console.log("why didnt we ");         //not print as expected
  // } //node already exists
  else {return "error"}
  // return "ok"                             //instead this returnd
}
// console.log(rootNode);
// findOrAdd(rootNode, firstNewNode)
// findOrAdd(rootNode, secondNewNode)
// expect(rootNode.left).toEqual(firstNewNode)
// expect(rootNode.right).toEqual(secondNewNode)
// console.log(rootNode);
// let rootNode = {data: 5, left: null, right: null}
// let firstNewNode = {data: 3, left: null, right: null}
// let secondNewNode = {data: 7, left: null, right: null}
// let thirdNewNode = {data: 9, left: null, right: null}
// findOrAdd(rootNode, firstNewNode)
// findOrAdd(rootNode, secondNewNode)
// findOrAdd(rootNode, thirdNewNode)
// // let result = "ok"
// // result = findOrAdd(rootNode, thirdNewNode)
// // expect(result).toEqual(true)
// // console.log(rootNode);
// // console.log(`result is ${result}`);
// console.log(findOrAdd(rootNode, thirdNewNode));
// **************************************************************

// 1) #max should return the maximum element in a tree:
let max = (root)=>{
  // let currentMax  = root.data
  if(!root.right){return root}
  return max(root.right)
  // return Math.max(root.data, max(root).data)
}
// let node = {data: 5, left:
//                   {data: 3, left: null, right: null},
//                     right: {data: 7, left: null,
//                     right: {data: 9, left: null, right: null}
//                   }}
// console.log(max(node))//.toEqual(9)

// 2) #min should return the minimum element in a tree:
let min = (root)=>{
  if(!root.left){return root}
  return min(root.left)
}
