// fetch with retry

let attempts = 0;
const fetchWithRetry = (callback, limit = 3, duration = 2000) => {
  return new Promise((resolve, reject) => {
    const attempt = (counter) => {
      callback()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log("Failed to fetch", counter);

          if (counter <= 0) {
            reject(err);
            return;
          }

          setTimeout(() => {
            attempt(counter - 1);
          }, duration);
        });
    };

    attempt(limit);
  });
};

fetchWithRetry(
  () => {
    attempts++;
    return Promise.reject("Server Down");
  },
  2,
  500,
)
  .then(console.log)
  .catch(console.error);

// Expected:
// error fetching 2
// error fetching 1
// error fetching 0
// Server Down
// attempts === 3
