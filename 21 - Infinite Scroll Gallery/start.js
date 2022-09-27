(() => {
  // เริ่มเขียนโค้ด
  const KEY = "REDACTED";
  const loaderElem = document.querySelector(".loader");

  let page = 1;

  showLoader = () => {
    loaderElem.classList.add("visible");
  };

  hideLoader = () => {
    loaderElem.classList.remove("visible");
  };

  getImages = async (page) => {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
    );

    return await res.json();
  };

  appendImageElem = async (image) => {
    const imgElem = document.createElement("img");
    imgElem.src = image.urls.small;

    const galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(imgElem);
  };

  displayImages = async () => {
    showLoader();

    const images = await getImages(page);
    images.forEach(appendImageElem);

    hideLoader();
    page += 1;
  };

  onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages();
    }
  };

  run = () => {
    document.addEventListener("scroll", onScroll);

    displayImages();
  };

  run();
})();
