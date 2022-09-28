const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  console.log(data);
  box(data);
};

const box = (data) => {
  const selectDiv = document.querySelector(".selectDiv");
  console.log(selectDiv);
  data.forEach((item) => {
    selectDiv.innerHTML += `<option value="${item.name.common}">${item.name.common}</option>`;
  });
};

window.addEventListener("load", fetchCountries());
