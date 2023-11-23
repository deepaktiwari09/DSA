class LinkNode<T> {
  value: T;
  childNode: LinkNode<T> | null;

  constructor(value) {
    this.value = value;
    this.childNode = null;
  }
}

class LinkedList<T> {
  head: LinkNode<T> | null = null;

  append(value: T) {
    if (!this.head) {
      this.head = new LinkNode(value);
      return;
    }

    let current = this.head;
    while (current) {
      if (current.childNode != null) {
        current = current.childNode;
      } else {
        current.childNode = new LinkNode(value);
        return;
      }
    }
  }

  remove(value: T) {
    if (!this.head) {
      return;
    }

    if (this.head.value == value) {
      this.head = this.head.childNode;
      return;
    }

    let current = this.head;
    while (current.childNode) {
      if (current.childNode.value == value) {
        current.childNode = current.childNode.childNode;
        return;
      } else {
        current = current.childNode;
      }
    }
  }

  update(oldValue: T, newValue: T) {
    let current = this.head;
    while (current) {
      if (current.value == oldValue) {
        current.value = newValue;
        return;
      }
      current = current.childNode;
    }
  }

  display() {
    let result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.childNode;
    }

    return result;
  }
}

// // Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.update(3, 20);
linkedList.remove(1);
linkedList.remove(2);
linkedList.remove(20);
console.log(linkedList);
console.log("Original Linked List:", linkedList.display());

// // CRUD operations
// linkedList.append(4); // Create (Append)
// console.log("After Append:", linkedList.display());

// linkedList.remove(1);
// linkedList.remove(2);// Delete
// linkedList.update(4, 20); // Update
// console.log("After Update:", linkedList.display());

// console.log("After Delete:", linkedList.display());
// console.log("After Delete:", linkedList.find(20));

// Appending Elements:
// Test that the list is initially empty.
// Append one element and check if the head is updated correctly.
// Append multiple elements and check if they are added in the correct order.

// console.log(linkedList.display()); // Should print: []

// linkedList.append(1);
// console.log(linkedList.display()); // Should print: [1]

// linkedList.append(2);
// linkedList.append(3);
// console.log(linkedList.display()); // Should print: [1, 2, 3]

// Finding Elements:
// Test finding an element that exists in the list.
// Test finding an element that does not exist in the list.

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// console.log(linkedList.find(2)); // Should return the node with value 2
// console.log(linkedList.find(4)); // Should return null

// Updating Elements:
// Test updating the head of the list.
// Test updating an element in the middle of the list.
// Test updating the last element of the list.

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// linkedList.update(1, 10);
// console.log("Original Linked List:", linkedList); // Should print: [10, 2, 3]

// linkedList.update(2, 20);
// console.log("Original Linked List:", linkedList);// Should print: [10, 20, 3]

// linkedList.update(3, 30);
// console.log("Original Linked List:", linkedList);// Should print: [10, 20, 30]

// Deleting Elements:
// Test deleting the head of the list.
// Test deleting an element in the middle of the list.
// Test deleting the last element of the list.
// Test deleting an element that doesn't exist in the list.

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// linkedList.remove(1);
// console.log(linkedList); // Should print: [2, 3]

// linkedList.remove(2);
// console.log(linkedList); // Should print: [3]

// linkedList.remove(3);
// console.log(linkedList); // Should print: []

// linkedList.remove(4);
// console.log(linkedList); // Should print: []

// Edge Cases:
// Test with an empty list for update and delete operations.

// linkedList.update(1, 10); // Should do nothing
// linkedList.remove(1); // Should do nothing
// console.log(linkedList); // Should print: []
