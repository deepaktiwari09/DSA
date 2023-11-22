class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false; // Prefix not found
      }
      node = node.children[char];
    }
    return node.isEndOfWord; // Check if the word exists in the trie
  }

  // Delete a word from the trie
  delete(word: string): boolean {
    const deleteHelper = (node: TrieNode, index: number): boolean => {
      if (index === word.length) {
        // If end of the word is reached
        if (!node.isEndOfWord) {
          return false; // Word not found
        }
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0; // Delete node if it has no children
      }

      const char = word[index];
      if (!node.children[char]) {
        return false; // Word not found
      }

      const shouldDeleteCurrentNode = deleteHelper(
        node.children[char],
        index + 1
      );

      if (shouldDeleteCurrentNode) {
        delete node.children[char];
        return Object.keys(node.children).length === 0; // Delete node if it has no children
      }

      return false;
    };

    return deleteHelper(this.root, 0);
  }
}

// Example Usage
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
console.log(trie);

// Search words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("orange")); // Output: false

// Delete words
trie.delete("app");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
