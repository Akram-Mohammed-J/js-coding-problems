// classic debounce
function debounceClassic(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    } else {
      setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

// debounce with leading and trailing options
/**
 * leading: invoking at start
 * trailing: invoking at end
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
