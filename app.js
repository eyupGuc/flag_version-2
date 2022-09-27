const fetchCountryByName = async (name) => {
  const url = `https://restcountries.com/v3.1/all`;

  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data);
  //   console.log(data[0].name.common);
  //   console.log(data[0].fifa);
  updateDOM(data);
};
fetchCountryByName();

const updateDOM = (countries) => {
  console.log(countries);
  console.log(countries[0].maps.googleMaps);
  countriesDiv.innerHTML = `<div class="card text-center m-4" style="width: 18rem;">
  <img src="${countries[0].flags.svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h2 class="card-title">${countries[0].name.common}</h2>
    <h5>${countries[0].capital}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${countries[0].population}</li>
    <li class="list-group-item">${countries[0].borders}</li>
    <li class="list-group-item">${Object.values(countries[0].languages)}</li>
  </ul>
  <div class="card-body">
  <a href="${countries[0].maps.googleMaps}" >google maps </a>
  </div>
</div>`;
};

const countriesDiv = document.querySelector(".countries");
