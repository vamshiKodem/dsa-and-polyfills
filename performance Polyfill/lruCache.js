function LRUCache(capacity) {
  const map = new Map();

  function get(key) {
    if (!map.has(key)) return -1;

    const value = map.get(key);

    map.delete(key);
    map.set(key, value);
    return value;
  }

  function put(key, value) {
    if (map.has(key)) {
      map.delete(key);
    }

    map.set(key, value);
    if (map.size > capacity) {
      const lruKey = Array.from(map.keys());
      map.delete(lruKey[0]);
    }
  }

  return {
    get,
    put,
  };
}

const lru = new LRUCache(2);

console.log(lru.put(1, 1));
lru.put(2, 2);
console.log(lru.get(1)); // returns 1
lru.put(3, 3); // evicts key 2
console.log(lru.get(2)); // returns -1
lru.put(4, 4); // evicts key 1
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4));
