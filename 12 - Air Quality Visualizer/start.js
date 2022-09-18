(() => {
  // เริ่มเขียนโค้ด
  fetchData = async ({ city, state, country }) => {
    const API_KEY = "MY_API_KEY";
    const res = await fetch(
      `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
    );
    const {
      data: { current },
    } = await res.json();
    const { pollution, weather } = current;

    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws,
    };
  };

  displayData = ({
    city,
    state,
    country,
    aqi,
    temperature,
    humidity,
    wind,
  }) => {
    const cityElem = document.querySelector(".city");
    const stateCountryElem = document.querySelector(".state-country");
    const aqiElem = document.querySelector(".aqi > h1");
    const tpElem = document.querySelector(".temperature");
    const huElem = document.querySelector(".humidity");
    const wsElem = document.querySelector(".wind");

    cityElem.innerHTML = city;
    stateCountryElem.innerHTML = `${state}, ${country}`;
    aqiElem.innerHTML = aqi;
    tpElem.innerHTML = temperature;
    huElem.innerHTML = humidity;
    wsElem.innerHTML = wind;
  };

  setAqiColor = (aqi) => {
    const setter = (colorVar) => {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        `var(${colorVar})`
      );
    };

    if (aqi <= 50) {
      return;
    } else if (aqi <= 100) {
      setter("--medium-aqi-color");
    } else {
      setter("--bad-aqi-color");
    }
  };

  run = async () => {
    const city = "Khon Kaen";
    const state = "Khon Kaen";
    const country = "Thailand";

    const data = await fetchData({ city, state, country });
    const { aqi } = data;
    displayData({ ...data, city, state, country });
    setAqiColor(aqi);
  };

  run();
})();
