(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // setTimeout() is an asynchronous function
  setTimeout(() => console.log("First"), 1000);
  setTimeout(() => console.log("Second"), 500);
  setTimeout(() => console.log("Third"), 100);
  // the result should be...
  //      Third
  //      Second
  //      First


  // 2. Callback
  // pass callback function as an argument to another function
  greeting = (name) => {
    console.log("Hello ", name);
  };

  registerUser = (name, callback) => {
    console.log("Registering new user as ", name);
    callback(name);
  };

  // A callback function(greeting)
  // can run after another function(registerUser) has finished
  registerUser("John", greeting); 


  // 3. Promise
  promiseFunc = (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "Prayuth") reject("reject profanity");

        resolve(text);
      }, 1000)
    })
  }

  promiseFunc("John").then((value) => {
    console.log("Hello ", value);
    return promiseFunc("Bob");
  })
  .then((value) => {
    console.log("Hello ", value);
    return promiseFunc("Prayuth");
  })
  .catch((error) => {
    console.error(error);
  })


  // 4. Async/Await
  promiseFunc = (text, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "Prayuth") reject("reject profanity");
        
        if (text === "Bob") console.log("Bob here!");
        console.log("Hi, I'm ", text);
        resolve();
      }, time)
    })
  }

  run = async() => {
    try {
      await promiseFunc("John", 1000);
      await promiseFunc("Prayuth", 500);
      await promiseFunc("Bob", 100); // this line will not execute because "Prayuth" throw Error then program jump to catch statement
    } catch (error) {
      console.error(error);
    }
  }

  run();
})();
