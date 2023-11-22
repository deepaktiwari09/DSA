class TreeNodeB<T> {
  value: T;
  left: TreeNodeB<T> | null;
  right: TreeNodeB<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNodeB<T> | null;

  constructor() {
    this.root = null;
  }

  // Create (Insert)
  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: TreeNodeB<T> | null, value: T): TreeNodeB<T> {
    if (!node) {
      return new TreeNodeB(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  // Read (Inorder Traversal)
  display(): T[] {
    const result: T[] = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  private inorderTraversal(node: TreeNodeB<T> | null, result: T[]): void {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
  }

  // Update (Search + Delete + Insert)
  update(oldValue: T, newValue: T): void {
    this.root = this.deleteNode(this.root, oldValue);
    this.root = this.insertNode(this.root, newValue);
  }

  // Delete
  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: TreeNodeB<T> | null, value: T): TreeNodeB<T> | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      //go to depth
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      //go to depth
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // Node with two children: Find the inorder successor (smallest node in the right subtree)
      const successor = this.findMin(node.right);
      node.value = successor.value;
      node.right = this.deleteNode(node.right, successor.value);
    }

    return node;
  }

  findMin(node: TreeNodeB<T>): TreeNodeB<T> {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

// Example usage:
const binaryTree = new BinaryTree<number>();
// binaryTree.insert(Date.now());
// binaryTree.insert(Date.now()+1);
// binaryTree.insert(Date.now()+2);
// binaryTree.insert(Date.now()+3);
// binaryTree.insert(Date.now()-4);
// binaryTree.insert(Date.now()-5);
// binaryTree.insert(Date.now()-6);
// binaryTree.insert(Date.now()+7);
// binaryTree.insert(Date.now()+8);
// binaryTree.insert(Date.now()+9);

// // CRUD operations
// binaryTree.insert(90); // Create (Insert)
// console.log("After Insert:", binaryTree.display());

// binaryTree.update(40, 45); // Update (Search + Delete + Insert)
// console.log("After Update:", binaryTree.display());
console.log("Original Binary Tree:", binaryTree);

binaryTree.delete(Date.now() + 9); // Delete
console.log("After Delete:", binaryTree.display());

// console.log("Original Binary Tree:", binaryTree);
