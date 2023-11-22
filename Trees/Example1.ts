interface Person {
  name: string;
  age: number;
}

class NodeClassC<Person> {
  left: NodeClassC<Person> | null = null;
  right: NodeClassC<Person> | null = null;
  value: Person | null = null;

  constructor(value: Person) {
    this.value = value;
  }
}

class BinaryTree2<T> {
  node: NodeClassC<Person> | null = null;

  insert(newValue: Person) {
    this.node = this.createNode(this.node, newValue);
  }

  private createNode(node: NodeClassC<Person> | null, value: Person) {
    if (!node) {
      return new NodeClassC(value);
    }

    if (value.age < node?.value.age) {
      node.left = this.createNode(node?.left, value);
    } else if (value.age > node?.value.age) {
      node.right = this.createNode(node?.right, value);
    }

    return node;
  }

  delete(value: T): void {
    this.node = this.deleteNode(this.node, value);
  }

  private deleteNode(
    node: NodeClassC<Person> | null,
    value: T
  ): NodeClassC<Person> | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
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

let BT = new BinaryTree2();

BT.insert({ name: "deepak", age: 1 });
BT.insert({ name: "deepak", age: 2 });
BT.insert({ name: "deepak", age: 3 });
BT.insert({ name: "deepak", age: 5 });
BT.insert({ name: "deepak", age: 6 });
BT.insert({ name: "deepak", age: 7 });
BT.insert({ name: "deepak", age: 8 });
BT.insert({ name: "deepak", age: 9 });

BT.delete(7);
console.log(BT);
