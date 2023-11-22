class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];

  constructor(value: T) {
    this.value = value;
    this.children = [];
  }

  addChild(child: TreeNode<T>): void {
    this.children.push(child);
  }
}

// Example usage:
const treeRoot = new TreeNode<string>("Root");
const child1 = new TreeNode<string>("Child 1");
const child2 = new TreeNode<string>("Child 2");

treeRoot.addChild(child1);
treeRoot.addChild(child2);

console.log(treeRoot);
