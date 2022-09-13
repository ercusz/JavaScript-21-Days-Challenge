(() => {
  // เริ่มเขียนโค้ด
  const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  let idx = 0;

  onKeyDown = (e) => {
    // use regex for insensitive string comparison
    // can also use both .toUpperCase() OR both .toLowerCase()
    // OR a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
    new RegExp(KONAMI_CODE[idx], "i").test(e.key) ? idx++ : (idx = 0);

    console.log(e.key);

    if (idx === KONAMI_CODE.length) {
      startSnowing();
    }
  };

  run = () => {
    document.addEventListener("keydown", onKeyDown);
  };

  run();
})();
