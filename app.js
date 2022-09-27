const fetchApiCountry = () => {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        renderError(`Something went wrong: ${res.status}`);
        throw new Error();
      } else {
        return res.json();
      }
    })
    .then((data) => renderCountries(data))
    .catch((e) => console.log(e));
};
const renderError = () => {
  const countriesDiv = document.querySelector(".countries");
  countriesDiv.innerHTML += `<h2>Country not found <img src="./img/404.jpg"/>`;
};

const renderCountries = (data) => {
  console.log(data);
  const selectDiv = document.querySelector(".selectDiv");
  console.log(selectDiv);
  data.forEach((country) => {
    selectDiv.innerHTML += `<option value="${country.name.common}">${country.name.common}</option>`;
  });
};
selectDiv.addEventListener("change", (e) => {
  updateDom(e.target.value, data);
});

fetchApiCountry();
const updateDom = (value, data) => {
  console.log(data[0].name.common);

  let country = data.filter((item) => {
    if (item.name.common == value) {
      return item.name.common;
    }
  });
  console.log(country);
};
