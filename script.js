fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.then((data) =>{
    data.forEach(element => {
        const country = {
            ...element,
            name: element.name.common,
            flag: element.flags.png,
            population: element.population,
            region: element.region,
            capital: element.capital,
            latittude: element.capitalInfo.latlng[0],
            langititude: element.capitalInfo.latlng[1]
        }
        createcountry(country)
    });
}).catch((error => console.log("error")));

function createcountry({name,flag,population,region,capital,latittude,langititude}){
    document.body.innerHTML +=`
    <div class ="container">
    <div class ="row-col-3">
    <div class = "card">
    <h2>${name}</h2>
    </div>
    <div class ="info">
    <img src="${flag}" alt="${name}" class="flag"/>
    <p><span>Region : <span/>${region}</p>
    <p><span>Capital : <span/>${capital}</p>
    <p><span>Population : <span/>${population}</p>
    <a href=https://api.openweathermap.org/data/2.5/weather?lat=3.7&lon=100.7&appid=0288d08075f77e09b9036291aa92f491> click to weather </a>
    </div>
    </div>
    </div>
    </div>
    `
}