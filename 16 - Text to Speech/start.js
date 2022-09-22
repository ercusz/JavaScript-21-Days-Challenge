(() => {
  // เริ่มเขียนโค้ด
  const message = new SpeechSynthesisUtterance();

  onVoicesChanged = () => {
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find((voice) => voice.lang === "th-TH");
    // thVoice will be undefined, if the Thai voice package is not installed in your OS
    message.voice = thVoice;
    console.log(voices);
  };

  onClick = (e) => {
    message.text = e.target.getAttribute("alt");
    speechSynthesis.speak(message);
  };

  run = () => {
    speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);

    const imgElems = Array.from(document.querySelectorAll("img"));
    imgElems.forEach((imgElem) => {
      imgElem.addEventListener("click", onClick);
    });
  };

  run();
})();
