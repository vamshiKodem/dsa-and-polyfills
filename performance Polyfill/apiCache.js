class ApiCache {
  constructor() {
    this.cache = new Map();
    this.timers = new Map();
  }

  set(key, value, duration) {
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
    }

    this.cache.set(key, {
      value,
      expire: Date.now() + duration,
    });

    const timer = setTimeout(() => {
      this.cache.delete(key);
      this.timers.delete(key);
    }, duration);

    this.timers.set(key, timer);
  }

  get(key) {
    const data = this.cache.get(key);

    if (!data) {
      return null;
    }

    if (Date.now() > data.expire) {
      this.cache.delete(key);
      this.timers.delete(key);
      return null;
    }

    return data.value;
  }
}

// Usage
const cache = new ApiCache();
cache.set("user_101", { name: "Ankush" }, 5000);
console.log(cache.get("user_101")); // { name: "Ankush" }
setTimeout(() => {
  console.log(cache.get("user_101")); // null
}, 6000);

function ApiCache() {
  const map = new Map();
  const timerMap = new Map();

  function set(key, value, duration) {
    const currentTimer = timerMap.get(key);

    if (currentTimer) {
      clearTimeout(currentTimer);
    }

    map.set(key, {
      value,
      expire: Date.now() + duration,
    });

    const timer = setTimeout(() => {
      map.delete(key);
      timerMap.delete(key);
    }, duration);

    timerMap.set(key, timer);
  }

  function get(key) {
    const data = map.get(key);

    if (!data) return null;

    if (data.expire < Date.now()) {
      map.delete(key);
      timerMap.delete(key);
      return null;
    }

    return data.value;
  }

  function deleteKey(key) {
    if (timerMap.has(key)) {
      clearTimeout(timerMap.get(key));
      timerMap.delete(key);
    }

    return cache.delete(key);
  }

  function clear() {
    timerMap.forEach((timer) => {
      clearTimeout(timer);
    });

    timerMap.clear();
    cache.clear();
  }

  return {
    set,
    get,
    delete: deleteKey,
    clear,
  };
}

const cache = ApiCache();

cache.set("user_101", { name: "Ankush" }, 5000);

console.log(cache.get("user_101")); // { name: "Ankush" }

setTimeout(() => {
  console.log(cache.get("user_101")); // null (after 5 seconds)
}, 6000);
