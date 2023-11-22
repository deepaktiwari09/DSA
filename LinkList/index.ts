class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
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
linkedList.append(3);

console.log("Original Linked List:", linkedList.display());

// CRUD operations
linkedList.append(4); // Create (Append)
console.log("After Append:", linkedList.display());

linkedList.update(2, 20); // Update
console.log("After Update:", linkedList.display());

linkedList.delete(3); // Delete
console.log("After Delete:", linkedList.display());
console.log("After Delete:", linkedList.find(20));
