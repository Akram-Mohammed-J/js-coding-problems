// Define the different states a Promise can be in
const STATES = {
  PENDING: "PENDING", // Initial state, before resolve() or reject() is called
  FULFILLED: "FULFILLED", // State when resolve() is called successfully
  REJECTED: "REJECTED", // State when reject() is called
};

class MyPromise {
  constructor(execFn) {
    // Initial state of the Promise is PENDING
    this.internalState = STATES.PENDING;
    // Stores the resolved or rejected value
    this.response = undefined;
    // Stores the success callbacks attached via .then()
    this.successCallBacks = [];
    // Stores the failure callbacks attached via .catch()
    this.failureCallBacks = [];

    // Bind resolve and reject methods to ensure `this` refers to the instance
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    // Immediately execute the function passed to the constructor
    // Pass in resolve and reject as arguments to handle async behavior
    try {
      execFn(this.resolve, this.reject);
    } catch (error) {
      // If an error is thrown inside the executor function, reject the promise
      this.reject(error);
    }
  }

  resolve(value) {
    // Ensure that resolve is only called when the promise is still in PENDING state
    if (this.internalState !== STATES.PENDING) return;

    // Change the state to FULFILLED and store the resolved value
    this.internalState = STATES.FULFILLED;
    this.response = value;

    // Execute all stored success callbacks asynchronously using queueMicrotask
    queueMicrotask(() => {
      this.successCallBacks.forEach((callback) => callback(value));
      // Clear the callbacks after execution to avoid memory leaks
      this.successCallBacks = [];
    });
  }

  reject(value) {
    // Ensure that reject is only called when the promise is still in PENDING state
    if (this.internalState !== STATES.PENDING) return;

    // Change the state to REJECTED and store the rejection reason
    this.internalState = STATES.REJECTED;
    this.response = value;

    // Execute all stored failure callbacks asynchronously using queueMicrotask
    queueMicrotask(() => {
      this.failureCallBacks.forEach((callback) => callback(value));
      // Clear the callbacks after execution to avoid memory leaks
      this.failureCallBacks = [];
    });
  }

  then(
    onSuccessCb = (v) => v,
    onFailureCb = (err) => {
      throw err;
    }
  ) {
    // Returns a new Promise to allow chaining
    return new MyPromise((resolve, reject) => {
      // Function to handle the execution of a callback
      const handleCallback = (callback, value, resolver) => {
        queueMicrotask(() => {
          try {
            const result = callback(value); // Execute the provided callback

            // If the callback returns a Promise, resolve it asynchronously
            if (result instanceof MyPromise) {
              result.then(resolve, reject); // Chain the result to the new promise
            } else {
              resolve(result); // Resolve with the returned value
            }
          } catch (error) {
            reject(error); // If an error occurs, reject the new promise
          }
        });
      };

      // If the promise is already resolved, execute success callback
      if (this.internalState === STATES.FULFILLED) {
        handleCallback(onSuccessCb, this.response, resolve);
      }
      // If the promise is already rejected, execute failure callback
      else if (this.internalState === STATES.REJECTED) {
        handleCallback(onFailureCb, this.response, reject);
      }
      // If the promise is still pending, store callbacks to execute later
      else {
        this.successCallBacks.push(() =>
          handleCallback(onSuccessCb, this.response, resolve)
        );
        this.failureCallBacks.push(() =>
          handleCallback(onFailureCb, this.response, reject)
        );
      }
    });
  }

  catch(onFailureCb) {
    // Catch is just a shorthand for then() with only a failure handler
    return this.then(undefined, onFailureCb);
  }

  finally(onFinallyCb) {
    // Finally does not change the result of the promise; it just executes a callback
    return new MyPromise((resolve, reject) => {
      // Function to execute finally callback and forward the result
      const runFinally = () => {
        try {
          onFinallyCb(); // Execute the finally callback

          // Pass through the original result (whether resolved or rejected)
          if (this.internalState === STATES.FULFILLED) {
            resolve(this.response);
          } else {
            reject(this.response);
          }
        } catch (error) {
          reject(error); // If finally callback throws, reject with the error
        }
      };

      // If the promise is still pending, add the finally callback to both success & failure lists
      if (this.internalState === STATES.PENDING) {
        this.successCallBacks.push(runFinally);
        this.failureCallBacks.push(runFinally);
      }
      // If the promise has already settled, execute finally callback asynchronously
      else {
        queueMicrotask(runFinally);
      }
    });
  }
}
