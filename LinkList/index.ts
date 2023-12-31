class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  // Create (Append)
  append(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Read
  display(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  find(value: T): ListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null; // Value not found
  }

  // Update
  update(oldValue: T, newValue: T): void {
    let current = this.head;
    while (current) {
      if (current.value === oldValue) {
        current.value = newValue;
        return;
      }
      current = current.next;
    }
  }

  // Delete
  delete(value: T): void {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

// console.log("Original Linked List:", linkedList.display());

// // CRUD operations
// linkedList.append(4); // Create (Append)
// console.log("After Append:", linkedList.display());

// linkedList.update(2, 20); // Update
// console.log("After Update:", linkedList.display());

linkedList.delete(3); // Delete
console.log("After Delete:", linkedList);
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
// console.log(linkedList.display()); // Should print: [10, 2, 3]

// linkedList.update(2, 20);
// console.log(linkedList.display()); // Should print: [10, 20, 3]

// linkedList.update(3, 30);
// console.log(linkedList.display()); // Should print: [10, 20, 30]

// Deleting Elements:
// Test deleting the head of the list.
// Test deleting an element in the middle of the list.
// Test deleting the last element of the list.
// Test deleting an element that doesn't exist in the list.

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// linkedList.delete(1);
// console.log(linkedList.display()); // Should print: [2, 3]

// linkedList.delete(2);
// console.log(linkedList.display()); // Should print: [3]

// linkedList.delete(3);
// console.log(linkedList.display()); // Should print: []

// linkedList.delete(4);
// console.log(linkedList.display()); // Should print: []

// Edge Cases:
// Test with an empty list for update and delete operations.

// linkedList.update(1, 10); // Should do nothing
// linkedList.delete(1); // Should do nothing
// console.log(linkedList.display()); // Should print: []
