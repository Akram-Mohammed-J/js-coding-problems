# Debounce in JavaScript with Explanation

## ✨ Understanding Debounce

#

Debouncing is a technique that delays the execution of a function until after a specified time interval has passed since the last time it was invoked. It is useful for optimizing performance in scenarios such as handling user input, resizing windows, or triggering API calls.

---

## 🔖 JavaScript Debounce Code with Comments

#

    /**
     * Creates a debounced function that delays invoking `func` until after `wait` milliseconds
     * have elapsed since the last time the debounced function was called.
     *
     * @param {Function} func - The function to debounce.
     * @param {number} wait - The number of milliseconds to wait before executing `func`.
     * @param {Object} [options] - Optional configuration object.
     * @param {boolean} [options.leading=false] - If `true`, invoke `func` on the leading edge.
     * @param {boolean} [options.trailing=true] - If `true`, invoke `func` on the trailing edge.
     *
     * @returns {Function} - The debounced function.
     */
    function debounce(func, wait, options = { leading: false, trailing: true }) {
      let timeout; // Holds the timeout reference for delaying function execution
      let isLeadingInvoked = false; // Tracks if the function was invoked on the leading edge

      return function (...args) {
        const context = this;

        // Clear any existing timeout to reset the debounce timer
        if (timeout) {
          clearTimeout(timeout);
        }

        // Handle the leading invocation (execute immediately if no timeout exists)
        if (options.leading && !timeout) {
          func.apply(context, args);
          isLeadingInvoked = true; // Mark that the function has executed on the leading edge
        } else {
          isLeadingInvoked = false; // Ensure it is reset for the trailing execution
        }

        // Schedule the function execution on the trailing edge
        timeout = setTimeout(() => {
          // Only execute on the trailing edge if the function was **not** called on the leading edge
          if (options.trailing && !isLeadingInvoked) {
            func.apply(context, args);
          }
          timeout = null; // Reset timeout reference
        }, wait);
      };
    }

---

## 📈 How Debounce Works

#

Imagine a user typing in a search box, and we want to execute an API request only after they stop typing for **500ms**.

| Time (ms) | Event (User Typing) | Function Execution |
| --------- | ------------------- | ------------------ |
| 0         | H                   | Not executed       |
| 100       | He                  | Not executed       |
| 200       | Hel                 | Not executed       |
| 500       | Hello               | Executed           |
| 700       | Hello W             | Not executed       |
| 1200      | Hello Wo            | Executed           |

### Key Points

#

- If `leading: true`, the function runs **immediately on the first call**.
- If `trailing: true`, the function runs **after the user stops triggering events**.
- Prevents unnecessary repeated executions.

---

## 🔍 Example Usage

#

    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", debounce((event) => {
      console.log("Searching for:", event.target.value);
    }, 500));

---

## 👉 Throttling vs. Debouncing

# | Feature | Debounce | Throttle |

| --- | --- | --- |
| Execution | Runs only after delay | Runs at a fixed interval |
| Best Use Cases | Search bar, Auto-save | Scroll, Resize, Keypress |
| Example | Waiting for user to stop typing | Executing every 1 sec |

---

## 🔥 Why This Implementation is Effective

#

✅ **Prevents excessive calls** while keeping the function responsive. ✅ **Handles both leading and trailing executions correctly**. ✅ **Optimized for event listeners, API calls, and performance tuning**.
