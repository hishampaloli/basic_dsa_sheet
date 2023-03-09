// TODO: find the hight of the tree

// height(root);
// {
//   let height = 0;
//   const queue = [root];

//   while (queue.length > 0) {
//     let levelSize = queue.length;
//     height++;
//     while (levelSize > 0) {
//       const currentNode = queue.shift();
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//       levelSize--;
//     }
//   }

//   return height;
// }

// TODO: check if two trees are identical

// class Solution {
//   //Function to check if two trees are identical.
//   isIdentical(root1, root2) {
//     if (root1 === null && root2 === null) {
//       return true;
//     }
//     if (root1 === null || root2 === null) {
//       return false;
//     }
//     if (root1.val !== root2.val) {
//       return false;
//     }
//     return (
//       this.isIdentical(root1.left, root2.left) &&
//       this.isIdentical(root1.right, root2.right)
//     );
//   }
// }

// TODO: get all the nodes that does not have siblings

// function noSibling(node) {
//   const result = [];

//   function traverse(node) {
//     if (node === null) {
//       return;
//     }
//     if (node.left === null && node.right !== null) {
//       result.push(node.right.data);
//     }
//     if (node.left !== null && node.right === null) {
//       result.push(node.left.data);
//     }
//     traverse(node.left);
//     traverse(node.right);
//   }
//   traverse(node);
//   result.sort((a, b) => a - b);

//   return result.length == 0 ? [-1] : result;
// }
