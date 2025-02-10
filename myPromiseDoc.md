# Custom Promise Implementation (MyPromise) - In-Depth Documentation

## Introduction

This document provides an in-depth explanation of our custom JavaScript `Promise` implementation, called `MyPromise`. It mimics the behavior of native JavaScript Promises, supporting asynchronous execution, chaining, and error handling with `then`, `catch`, and `finally` methods.

---

## 1\. Understanding Promise States

A Promise in JavaScript can have three states:

- `PENDING`: The initial state before the asynchronous operation is completed.
- `FULFILLED`: The state when the operation is completed successfully.
- `REJECTED`: The state when the operation fails.

We define these states as constants:

    const STATES = {
      PENDING: "PENDING",
      FULFILLED: "FULFILLED",
      REJECTED: "REJECTED",
    };

---

## 2\. MyPromise Class Implementation

### 2.1 Constructor

The constructor initializes the Promise with an executor function (`execFn`). It sets the initial state to `PENDING`, and initializes storage for callbacks:

    class MyPromise {
      constructor(execFn) {
        this.internalState = STATES.PENDING;
        this.response = undefined;
        this.successCallBacks = [];
        this.failureCallBacks = [];

        // Binding resolve and reject methods to the instance
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        // Execute the function passed to the constructor
        try {
          execFn(this.resolve, this.reject);
        } catch (error) {
          this.reject(error);
        }
      }

- If an error occurs inside `execFn`, `reject` is called immediately.

---

### 2.2 The `resolve` Method

This method transitions the Promise from `PENDING` to `FULFILLED`, stores the resolved value, and executes all success callbacks asynchronously.

      resolve(value) {
        if (this.internalState !== STATES.PENDING) return;
        this.internalState = STATES.FULFILLED;
        this.response = value;

        queueMicrotask(() => {
          this.successCallBacks.forEach((callback) => callback(value));
          this.successCallBacks = [];
        });
      }

- Ensures `resolve` executes only once.
- Uses `queueMicrotask()` to ensure the callbacks run asynchronously.
- Clears the callback queue after execution.

---

### 2.3 The `reject` Method

This method transitions the Promise from `PENDING` to `REJECTED`, stores the rejection reason, and executes all failure callbacks asynchronously.

      reject(value) {
        if (this.internalState !== STATES.PENDING) return;
        this.internalState = STATES.REJECTED;
        this.response = value;

        queueMicrotask(() => {
          this.failureCallBacks.forEach((callback) => callback(value));
          this.failureCallBacks = [];
        });
      }

- Ensures `reject` executes only once.
- Uses `queueMicrotask()` for asynchronous execution.
- Clears the callback queue after execution.

---

### 2.4 The `then` Method

Handles success and failure callbacks, returning a new `MyPromise` for chaining.

      then(onSuccessCb = (v) => v, onFailureCb = (err) => { throw err; }) {
        return new MyPromise((resolve, reject) => {
          const handleCallback = (callback, value, resolver) => {
            queueMicrotask(() => {
              try {
                const result = callback(value);
                if (result instanceof MyPromise) {
                  result.then(resolve, reject);
                } else {
                  resolve(result);
                }
              } catch (error) {
                reject(error);
              }
            });
          };

          if (this.internalState === STATES.FULFILLED) {
            handleCallback(onSuccessCb, this.response, resolve);
          } else if (this.internalState === STATES.REJECTED) {
            handleCallback(onFailureCb, this.response, reject);
          } else {
            this.successCallBacks.push(() => handleCallback(onSuccessCb, this.response, resolve));
            this.failureCallBacks.push(() => handleCallback(onFailureCb, this.response, reject));
          }
        });
      }

- Ensures `then` **returns a new `MyPromise`** for chaining.
- Handles both resolved and rejected states immediately if applicable.
- If still `PENDING`, it stores callbacks for later execution.

---

### 2.5 The `catch` Method

A shorthand for handling rejected promises:

      catch(onFailureCb) {
        return this.then(undefined, onFailureCb);
      }

- Equivalent to `.then(undefined, onFailureCb)`.
- Allows chaining error handling functions.

---

### 2.6 The `finally` Method

Executes a callback regardless of whether the Promise is fulfilled or rejected.

      finally(onFinallyCb) {
        return new MyPromise((resolve, reject) => {
          const runFinally = () => {
            try {
              onFinallyCb();
              if (this.internalState === STATES.FULFILLED) {
                resolve(this.response);
              } else {
                reject(this.response);
              }
            } catch (error) {
              reject(error);
            }
          };
          if (this.internalState === STATES.PENDING) {
            this.successCallBacks.push(runFinally);
            this.failureCallBacks.push(runFinally);
          } else {
            queueMicrotask(runFinally);
          }
        });
      }

- Ensures `finally` does **not change the value** of the promise.
- If `finally` throws an error, the promise is rejected with that error.

---

## 3\. Example Usage

    const promise = new MyPromise((resolve, reject) => {
      setTimeout(() => resolve("Data loaded!"), 1000);
    });

    promise
      .then((value) => {
        console.log("Success:", value);
        return "New Value";
      })
      .then((value) => {
        console.log("Chained Value:", value);
        throw new Error("Something went wrong");
      })
      .catch((error) => {
        console.log("Caught Error:", error);
      })
      .finally(() => {
        console.log("Finally executed!");
      });

**Expected Output:**

    Success: Data loaded!
    Chained Value: New Value
    Caught Error: Error: Something went wrong
    Finally executed!

---

## 4\. Conclusion

✅ **Implements a fully functional custom Promise**.  
✅ **Supports `then`, `catch`, and `finally`** for chaining.  
✅ **Ensures asynchronous execution** using `queueMicrotask()`.  
✅ **Properly handles errors** inside callbacks.

This `MyPromise` behaves just like JavaScript’s built-in `Promise`! 🚀
