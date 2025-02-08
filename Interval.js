function intervalExecution() {
  let i = 5;
  let intervalId = setInterval(() => {
    if (i > 0) {
      console.log(i);
      i--;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

intervalExecution();
