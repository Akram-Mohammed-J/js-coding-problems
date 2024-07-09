const cachedApiCall = (milliSeconds) => {
  let cache = {};

  return (url) => {
    if (cache[url]) {
      console.log("reached", cache);
      return Promise.resolve(cache[url]);
    } else {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: "GET",
        })
          .then((res) => {
            res.json().then((data) => {
              cache[url] = data;
              setTimeout(() => {
                delete cache[url];
              }, milliSeconds);

              resolve(data);
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  };
};

const call = cachedApiCall(5000);
call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
  console.log(data)
);

call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
  console.log(data)
);
call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
  console.log(data)
);
