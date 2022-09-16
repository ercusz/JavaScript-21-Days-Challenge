(() => {
  // เริ่มเขียนโค้ด
  let draggingTask;

  function onDragStart() {
    draggingTask = this;
  }

  function onDrop() {
    this.append(draggingTask);
    draggingTask = null;
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragEnter(e) {
    e.preventDefault();
  }

  function run() {
    const taskElems = Array.from(document.querySelectorAll(".task"));
    const dzElems = Array.from(document.querySelectorAll(".drop-zone"));

    taskElems.forEach((task) => {
      task.addEventListener("dragstart", onDragStart);
    });

    dzElems.forEach((dz) => {
      dz.addEventListener("drop", onDrop);
      dz.addEventListener("dragover", onDragOver);
      dz.addEventListener("dragenter", onDragEnter);
    });
  }

  run();

  // * Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
  // Arrow Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  // Arrow functions return this as the window object: https://stackoverflow.com/questions/41690124/arrow-functions-return-this-as-the-window-object
})();
