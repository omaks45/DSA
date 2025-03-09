const myPromise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("Success!") : reject("Failure!");
    }, 1500);
  });
  
  // Handle success and failure cases using .then() and .catch()