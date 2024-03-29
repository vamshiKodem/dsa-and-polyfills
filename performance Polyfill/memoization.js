// Here i have implemented the memoization wrapper to cache the output and
// return the value from cache if function is called multiple times with same parameters

const addNumber = (a, b) => {
  return a + b;
};

const memoizationWrapper = () => {
  const cache = {};
  const memoization = (callback) => {
    return (...args) => {
      const stringifyArgs = args.toString();
      if (stringifyArgs in cache) {
        return cache[stringifyArgs];
      } else {
        const result = callback(...args);
        cache[stringifyArgs] = result;
        return result;
      }
    };
  };

  return {
    memoization,
  };
};

const { memoization } = memoizationWrapper();

memoization(addNumber)(1, 2);
memoization(addNumber)(1, 2);
memoization(addNumber)(1, 2);
