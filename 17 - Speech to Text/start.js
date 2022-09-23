(() => {
  // เริ่มเขียนโค้ด
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const controlBtnElem = document.querySelector(".control");

  isPause = () => {
    return controlBtnElem.classList.contains("record");
  };

  onEnd = () => {
    if (!isPause()) {
      recognition.start();
    }
  };

  onResult = (e) => {
    const textElem = document.querySelector(".text");
    const { transcript } = e.results[0][0];
    textElem.innerText += transcript;
  };

  onClick = (e) => {
    if (isPause()) {
      recognition.start();
      e.target.classList.remove("record");
      e.target.classList.add("pause");
    } else {
      recognition.stop();
      e.target.classList.remove("pause");
      e.target.classList.add("record");
    }
  };

  run = () => {
    recognition.lang = "th-TH";
    recognition.addEventListener("end", onEnd);
    recognition.addEventListener("result", onResult);

    controlBtnElem.addEventListener("click", onClick);
  };

  run();
})();
