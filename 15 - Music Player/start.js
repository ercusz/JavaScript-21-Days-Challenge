(() => {
  // เริ่มเขียนโค้ด
  const startTimeElem = document.querySelector(".start-time");
  const endTimeElem = document.querySelector(".end-time");
  const audioElem = document.querySelector("audio");
  const playBtnElem = document.querySelector(".play");
  const progressBarElem = document.querySelector(".progress-bar");

  formatTime = (time) => {
    const minute = Math.floor((time / 60) % 60);
    const second = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minute}:${second}`;
  };

  onAudioTimeUpdate = () => {
    startTimeElem.innerHTML = formatTime(audioElem.currentTime);
    progressBarElem.value = audioElem.currentTime;
  };

  onAudioLoaded = () => {
    endTimeElem.innerHTML = formatTime(audioElem.duration);
    progressBarElem.max = audioElem.duration;
  };

  onAudioEnded = () => {
    playBtnElem.className = "play";
    audioElem.currentTime = 0;
  };

  onPlayBtnClick = () => {
    if (audioElem.paused) {
      playBtnElem.className = "pause";
      audioElem.play();
    } else {
      playBtnElem.className = "play";
      audioElem.pause();
    }
  };

  onProgressBarInput = () => {
    audioElem.currentTime = progressBarElem.value;
  };

  run = () => {
    playBtnElem.addEventListener("click", onPlayBtnClick);
    audioElem.addEventListener("loadeddata", onAudioLoaded);
    audioElem.addEventListener("timeupdate", onAudioTimeUpdate);
    audioElem.addEventListener("ended", onAudioEnded);
    progressBarElem.addEventListener("input", onProgressBarInput);
  };

  run();
})();
