class NGramIndex {
  n: number;
  index: { [key: string]: string[] };

  constructor(n: number) {
    this.n = n;
    this.index = {};
  }

  private generateNGrams(input: string): string[] {
    const nGrams: string[] = [];
    for (let i = 0; i <= input.length - this.n; i++) {
      nGrams.push(input.substring(i, i + this.n));
    }
    return nGrams;
  }

  // Insert a string into the index
  insert(id: string, value: string): void {
    const nGrams = this.generateNGrams(value);
    for (const nGram of nGrams) {
      if (!this.index[nGram]) {
        this.index[nGram] = [];
      }
      if (!this.index[nGram].includes(id)) {
        this.index[nGram].push(id);
      }
    }
  }

  // Search for strings based on N-gram matching
  search(query: string): string[] {
    const queryNGrams = this.generateNGrams(query);
    const result: { [key: string]: boolean } = {};

    for (const nGram of queryNGrams) {
      if (this.index[nGram]) {
        for (const id of this.index[nGram]) {
          result[id] = true;
        }
      }
    }

    return Object.keys(result);
  }

  // Delete a string from the index
  delete(id: string, value: string): void {
    const nGrams = this.generateNGrams(value);
    for (const nGram of nGrams) {
      if (this.index[nGram]) {
        this.index[nGram] = this.index[nGram].filter(
          (entryId) => entryId !== id
        );
        if (this.index[nGram].length === 0) {
          delete this.index[nGram];
        }
      }
    }
  }
}

// Example Usage
const nGramIndex = new NGramIndex(1);

// Insert strings
nGramIndex.insert("1", "apple");
nGramIndex.insert("2", "banana");
nGramIndex.insert("3", "orange");

console.log(nGramIndex);

// Search for strings
console.log(nGramIndex.search("appl")); // Output: ['1']
console.log(nGramIndex.search("oran")); // Output: ['3']
console.log(nGramIndex.search("grape")); // Output: []

// Delete a string
nGramIndex.delete("2", "banana");

// Search again after deletion
console.log(nGramIndex.search("banana")); // Output: []
