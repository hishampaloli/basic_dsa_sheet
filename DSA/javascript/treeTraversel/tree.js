// TODO: find the hight of the tree

// height(root);
// {
//   if (!root) {
//     return 0;
//   }
//   let leftHeight = this.height(root.left);
//   let rightHeight = this.height(root.right);
//   return Math.max(leftHeight, rightHeight) + 1;
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
