import '../../css/common.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import fetchCountries from '../fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs={
    searchBox:document.querySelector('#search-box'),
    countriesList:document.querySelector('.country-list'),
    countryInfo:document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(fetchCountry, DEBOUNCE_DELAY));

function fetchCountry(e){

    const searchQuery=e.target.value.trim();

    if(searchQuery===''){
        clearUI();
        return;
    };

    fetchCountries(searchQuery).then(
        countries=>{ 
            if(countries.length===0||countries.length>10){
            Notify.info("Too many matches found. Please enter a more specific name.");
            // refs.countriesList.innerHTML='';
            clearUI();
            return;
        };
        // if(countries.length===0&&countries.length>10){
        //     ;
        //     return;
        // };

            renderMarkUp(countries);
    }).catch(error=>{
        Notify.failure(`Oops, there is no country with ${searchQuery} name`);
        clearUI();
        console.log('Error ', error);
    });     
};

function renderMarkUp(countries){
    if(countries.length>1){
        refs.countriesList.innerHTML=renderCountriesList(countries);
        refs.countryInfo.innerHTML='';  
    }
    else if(countries.length===1){
        refs.countryInfo.innerHTML=renderCountryCard(countries);
        refs.countriesList.innerHTML='';
    }
};

function renderCountryCard(countries){
    return  countries.map(({flags,name,capital, population,languages}={})=>`
    <div>
        <img src="${flags.svg}" alt="${flags.alt}" width="60" height="40"/>
        <h2>${name.official}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages)}</p>
    </div>`
    ).join("");
};

function renderCountriesList(countries){
    return   countries.map(({flags,name})=>
        `<li>
            <img src="${flags.svg}" alt="${flags.alt}" width="60" height="40"/>
            <h2>${name.official}</h2>
        </li>`
         ).join("");
    };

    function clearUI(){
        refs.countryInfo.innerHTML='';
        refs.countriesList.innerHTML='';
    }


