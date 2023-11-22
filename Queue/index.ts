interface ItemType {
  id: number;
}

class AsyncStorage {
  private storage = new Map<string, string>();

  set(key: string, value: string) {
    this.storage.set(key, value);
  }

  get(key: string) {
    let value = this.storage.get(key);
    if (value) {
      return value;
    } else {
      return null;
    }
  }
}

class Queue<T> {
  protected item: T[] = [];

  enqueue(item: T): void {
    this.item.push(item);
  }

  dequeue(): T | undefined {
    return this.item.shift();
  }

  peek(): T | null {
    return this.item.length > 0 ? this.item[0] : null;
  }

  clear(): void {
    this.item = [];
  }

  size(): number {
    return this.item.length;
  }

  isEmpty(): boolean {
    return this.item.length == 0;
  }
}

class TwitterDataRetrieval<T> extends Queue<T> {
  constructor() {
    super();
  }

  getCurrentPosition() {}

  getCurrentPosts() {}
}

class AsyncQueue<T> extends TwitterDataRetrieval<T> {
  constructor(key: string) {
    super();
    this.initial(key);
  }

  initial(key: string) {
    let data = appStore.get(key);
    if (data) {
      let list = JSON.parse(data);
      for (let i = 0; i < list.length; i++) {
        this.enqueue(list[i]);
      }
    }
  }

  closeQueue() {
    appStore.set("cacheQueue", JSON.stringify(this.item));
    this.clear();
  }

  consoleValue() {
    return this.item;
  }
}

let appStore = new AsyncStorage();
let W = new AsyncQueue("cacheQueue");

W.enqueue({ id: 1 });
W.enqueue({ id: 2 });
W.closeQueue();
console.log(W.consoleValue());
W.initial("cacheQueue");
W.enqueue({ id: 3 });
W.enqueue({ id: 4 });

console.log(W.consoleValue());
