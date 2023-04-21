const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=512c662b2b23e7b6588a269bf32277c9&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=512c662b2b23e7b6588a269bf32277c9&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(apiLink);

function returnMovies(url) {
    fetch(url).then(res => res.json()).then(function(data)) {
        console.log(data.results);
        data.results.forEach(element => {
            const divCard = document.createElement('div');
            divCard.setAttribute('class','card');
            const divRow = document.createElement('div');
            divRow.setAttribute('class','card');
            const divColumn = document.createElement('div');
            divColumn.setAttribute('class','card');
            const image = document.createElement('img');
            image.setAttribute('class','card');
            image.setAttribute('class','card');
            const title = document.createElement('h3');
            title.setAttribute('class','card');
            const center = document.createElement('center');
            center.setAttribute('class','card');

            title.innerHTML = `${element.title}`;
            image.scr = imgPath + element.poster_path;
            
            center.appendChild(image);
            divCard.appendChild(center);
            divCard.appendChild(title);
            divColumn.appendChild(divCard);
            divRow.appendChild(divColumn);

            main.appendChild(divRow);
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;
    returnMovies(searchApi + searchItem);
    search.value = "";
});