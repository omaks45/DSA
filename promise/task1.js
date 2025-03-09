const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello, world!"), 1000);
  });
  
  // Use .then() to print the message