function throttle(func, wait) {
  let lastCall = 0;
  let timeout;

  return function (...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCall);
    const context = this;

    if (remaining <= 0) {
      // Execute immediately
      func.apply(context, args);
      lastCall = now;
    } else {
      // Ensure trailing execution (last call is not lost)
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
        lastCall = Date.now();
      }, remaining);
    }
  };
}
