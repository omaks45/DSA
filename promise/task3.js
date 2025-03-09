function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log("Error:", error));
  }

  //  Rewrite the function using async-await.