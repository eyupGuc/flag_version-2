const fetchCountryByName = async (name) => {
  const url = `https://restcountries.com/v3.1/all`;

  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data);
  //   console.log(data[0].name.common);
};
fetchCountryByName();
