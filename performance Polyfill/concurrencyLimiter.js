// concurrencyLimiter

const concurrencyLimiter = (tasks, limit = 2) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let counter = 0;
    let completed = 0;

    const runTask = () => {
      if (counter >= tasks.length) {
        return;
      }

      let current = counter++;

      tasks[current]()
        .then((res) => {
          result[current] = res;
        })
        .catch(reject)
        .finally(() => {
          completed++;

          if (completed === tasks.length) {
            resolve(result);
            return;
          }
          runTask();
        });
    };

    const worker = Math.min(tasks.length, limit);
    for (let i = 0; i < worker; i++) {
      runTask();
    }
  });
};

const delay = (id, ms) => () =>
  new Promise((resolve) => {
    console.log("Start", id);

    setTimeout(() => {
      console.log("End", id);
      resolve(id);
    }, ms);
  });

const tasks = [
  delay(1, 3000),
  delay(2, 1000),
  delay(3, 2000),
  delay(4, 500),
  delay(5, 1000),
];

concurrencyLimiter(tasks, 2).then(console.log);
