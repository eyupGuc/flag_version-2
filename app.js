const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  console.log(data);
  box(data);
};

const box = (data) => {
  const selectDiv = document.querySelector(".selectDiv");
  // console.log(selectDiv);
  data.forEach((item) => {
    selectDiv.innerHTML += `<option value="${item.name.common}">${item.name.common}</option>`;
  });
  selectDiv.addEventListener("change", (e) => {
    updateDOM(e.target.value, data);
  });
};

const updateDOM = (value, data) => {
  // console.log(data[0].name.common);
  let country = data.filter((item) => {
    if (item.name.common == value) {
      console.log(item.name.common);
      return item.name.common;
    }
  });
  const {
    region,
    capital,
    population,
    flags: { svg: flag },
    languages,
    borders,
    area,
  } = country[0];
  document.querySelector(
    ".countries"
  ).innerHTML = `  <div class="card mx-auto mt-3" style="width: 18rem;">
    <img src="${flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">${value}</h5>
      <p class="card-text"><b>Capital: </b>${capital}</p>
    </div>
    <ul class="list-group list-group-flush">
    
      <li class="list-group-item"><b>Languages: </b>${Object.values(
        languages
      )}</li>
      <li class="list-group-item"><b>Region: </b>${region}</li>
      <li class="list-group-item"><b>Population: </b>${population}</li>
      <li class="list-group-item"><b>Area: </b>${area} KM<sup>2</sup></li>
      <li class="list-group-item"><b>Borders: </b> ${borders}</li>
    </ul>

  </div>`;
};

window.addEventListener("load", fetchCountries());
