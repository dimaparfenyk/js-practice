export default async function fetchCountries(name) {
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

    const response = await fetch(url);
    if (response.ok) {
    const countries = await response.json();
    return countries;
    };
    throw new Error('Error fetching countries');
  };

