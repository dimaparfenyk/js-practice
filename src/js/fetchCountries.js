export default class CountriesApiService{
  constructor(){
    this._name='';
  }
  async  fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this._name}?fields=name,capital,population,flags,languages`;

    const response = await fetch(url);
    if (response.ok) {
    const countries = await response.json();
    return countries;
    };
    throw new Error('Error fetching countries');
  };

  get name(){
    return this._name;
  };

  set name(newName){
    this._name=newName;
  };
};