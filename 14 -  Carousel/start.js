(() => {
  // เริ่มเขียนโค้ด
  let currentIndex = 0;

  slideImage = (imageElem) => {
    imageElem.scrollIntoView({ behavior: "smooth" });
  };

  displayImage = (imageElems, newIndex) => {
    const lastIndex = imageElems.length - 1;

    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }

    currentIndex = newIndex;
    slideImage(imageElems[currentIndex]);
  };

  run = () => {
    const imageElems = document.querySelectorAll(".carousel > img");
    const prevBtnElem = document.querySelector(".previous");
    const nextBtnElem = document.querySelector(".next");

    prevBtnElem.addEventListener("click", () =>
      displayImage(imageElems, currentIndex - 1)
    );
    nextBtnElem.addEventListener("click", () =>
      displayImage(imageElems, currentIndex + 1)
    );
  };

  run();
})();
