(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    "BMW",
    "Maserati",
    "Mercedes Benz",
    "Ferrari",
    "Toyota",
    "Honda",
    "Hyundai",
  ];

  const searchElem = document.querySelector(".search");

  clearResults = () => {
    const ulElem = document.querySelector(".results");
    if (ulElem) document.body.removeChild(ulElem);
  };

  selectResult = (e) => {
    searchElem.value = e.target.innerText;
    clearResults();
  };

  createUlElem = () => {
    const ulElem = document.createElement("ul");
    ulElem.classList.add("results");
    return ulElem;
  };

  createLiElem = (result) => {
    const liElem = document.createElement("li");
    liElem.innerText = result;
    liElem.onclick = selectResult;
    return liElem;
  };

  showResults = (e) => {
    clearResults();

    const inputText = e.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter((brand) =>
      brand.toLowerCase().startsWith(inputText)
    );

    const ulElem = createUlElem();
    matchedCarBrands.forEach((result) => {
      const liElem = createLiElem(result);
      ulElem.appendChild(liElem);
    });

    document.body.appendChild(ulElem);
  };

  run = () => {
    searchElem.addEventListener("input", showResults);
    document.addEventListener("click", clearResults);
  };

  run();
})();
