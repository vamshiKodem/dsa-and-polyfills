const retryAPI = async (callback, limit) => {
  try {
    return await callback();
  } catch (err) {
    if (limit === 0) throw err;
    return retryAPI(callback, limit - 1);
  }
};

let attempts = 0;

const failedAPI = async () => {
  attempts++;

  console.log("Attempt:", attempts);

  throw new Error("Server down");
};

retryAPI(failedAPI, 3)
  .then(console.log)
  .catch((err) => {
    console.log("Final Error:", err.message);
  });
