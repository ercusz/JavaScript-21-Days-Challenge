(() => {
  // เริ่มเขียนโค้ด

  setElementInnerText = (elemId, text) => {
    const elem = document.getElementById(elemId);
    elem.innerText = text;
  };

  countDown = () => {
    const SECOND = 1000; // 1000ms = 1s
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    const today = new Date().getTime(); // time value in ms
    const newYear = new Date("January 1, 2023 00:00:00");

    const timeDiff = newYear - today;

    setElementInnerText("days", Math.floor(timeDiff / DAY));
    setElementInnerText("hours", Math.floor((timeDiff % DAY) / HOUR));
    setElementInnerText("minutes", Math.floor((timeDiff % HOUR) / MINUTE));
    setElementInnerText("seconds", Math.floor((timeDiff % MINUTE) / SECOND));
  };

  run = () => {
    setInterval(() => {
      countDown();
    }, 1000);
  };

  run();
})();
