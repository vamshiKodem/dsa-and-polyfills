// This file contains most asked polyfill for promises

// Polyfill for Promise.resolve
const promiseResolve = (value) => {
  return new Promise((resolve) => resolve(value));
};

// Polyfill for Promise.reject
const promiseReject = (value) => {
  return new Promise((_resolve, reject) => reject(value));
};

// Polyfill for Promise.all
const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const output = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          output[index] = res;
          completed++;
          if (completed === promises.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

promiseAll([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve("not working"),
])
  .then((data) => {
    console.log(data);
  })
  .catch((data) => console.log(data));

// Polyfill for Promise.allSettled
const promiseAllSettled = (promises) => {
  const resolvedPromises = promises.map((promise) => {
    return promise
      .then((value) => ({
        status: "fulfilled",
        value: value,
      }))
      .catch((err) => ({
        status: "rejected",
        value: err,
      }));
  });
  return promiseAll(resolvedPromises);
};

promiseAllSettled([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.reject("not working"),
]).then((res) => console.log(res));

// Polyfill for Promise with out async
class MyPromise {
  isResolved = false;
  resolvedData;

  isRejected = false;
  rejectedData;

  constructor(executor) {
    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;
    };

    const reject = (value) => {
      this.isRejected = true;
      this.rejectedData = value;
    };

    executor(resolve, reject);
  }

  then(cb) {
    if (this.isResolved) {
      cb(this.resolvedData);
    }
    return this;
  }

  catch(cb) {
    if (this.isRejected) {
      cb(this.rejectedData);
    }
    return this;
  }
}

// Polyfill for Promise with async and without chaining
class MyPromiseWithOutChaining {
  isResolved = false;
  resolvedData;
  resolvedCb;

  isRejected = false;
  rejectedData;
  rejectedCb;

  constructor(executor) {
    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;
      if (typeof this.resolvedCb === "function") {
        this.resolvedCb(this.resolvedData);
      }
    };

    const reject = (value) => {
      this.isRejected = true;
      this.rejectedData = value;
      if (typeof this.rejectedCb === "function") {
        this.rejectedCb(this.rejectedData);
      }
    };

    executor(resolve, reject);
  }

  then(cb) {
    this.resolvedCb = cb;
    if (this.isResolved) {
      this.resolvedCb(this.resolvedData);
    }
    return this;
  }

  catch(cb) {
    this.rejectedCb = cb;
    if (this.isRejected) {
      this.rejectedCb(this.rejectedData);
    }
    return this;
  }
}

const myPromise = new MyPromiseWithOutChaining((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

myPromise.then((value) => console.log(value)).catch((err) => console.log(err));

// Polyfill for promise with async and chaining
class NewPromiseChaining {
  isResolved = false;
  isRejected = false;

  resolveData;
  rejectData;

  resolveChain = [];
  rejectChain = [];

  constructor(executor) {
    if (typeof executor !== "function") {
      new Error("executor should be type of function");
    }

    const resolve = (value) => {
      this.isResolved = true;
      this.resolveData = value;
      if (this.resolveChain.length) {
        this.resolveReducer();
      }
    };

    const reject = (value) => {
      this.isRejected = true;
      this.rejectData = value;
      if (this.rejectChain.length) {
        this.rejectReducer();
      }
    };

    executor(resolve, reject);
  }

  then(cb) {
    this.resolveChain.push(cb);
    if (this.isResolved) {
      this.resolveReducer();
    }
    return this;
  }

  catch(cb) {
    this.rejectChain.push(cb);
    if (this.isRejected) {
      this.rejectReducer();
    }
    return this;
  }

  finally(cb) {
    this.resolveChain.push(cb);
    this.rejectChain.push(cb);
    if (this.isRejected) {
      this.rejectReducer();
    }
    if (this.isResolved) {
      this.resolveReducer();
    }
  }

  resolveReducer() {
    return this.resolveChain.reduce((acc, cb) => cb(acc), this.resolveData);
  }

  rejectReducer() {
    return this.rejectChain.reduce((acc, cb) => cb(acc), this.rejectData);
  }
}

const newPromiseChaining = new NewPromiseChaining((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
})
  .then((data) => {
    return data * 10;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    return data * 2;
  })
  .catch((data) => console.log(data));
