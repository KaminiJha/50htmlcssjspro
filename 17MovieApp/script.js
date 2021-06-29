const API_KEY='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=37c00605bb1eadfbfb5b8ccdb9f8d88d&page=1';

const IMG_PATH='https://image.tmdb.org/t/p/w500';

const SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=37c00605bb1eadfbfb5b8ccdb9f8d88d&language=en-US&page=1&include_adult=false&query="';

const search=document.querySelector('.search');

const form=document.querySelector('.form');
const main=document.querySelector('.main');

//get movies initial

getMovies(API_KEY);

async function getMovies(url)
{
    const res=await fetch(url);
    const data= await res.json();
    showMovies(data);
    
}

function showMovies(data)
{
    main.innerHTML='';
    data=data.results;
    data.forEach(el=>{
        const {title,poster_path,vote_average,overview}=el;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
       
        movieEl.innerHTML=`
        <img src=${IMG_PATH+poster_path} alt="${title}">
            <div class="movie-info">
                <h3 class="movie-title">${title}</h3>
                <span class=${getClassRate(vote_average)}>${vote_average}</span>
            </div>
            <div class="overview">
                <h3 class="overview-title">Overview</h3>
                <p class="overview-text">${overview}</p>
            </div>
        `
        main.appendChild(movieEl)
    })
}
function getClassRate(vote)
{
    if(vote>=8)
    {
        return 'green';
    }
    else if (vote>=5)
    {
        return 'orange'
    }
    else{
        return 'red'
    }
}

//search movies
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchMov=search.value;
    if(searchMov !== '')
    {
        searchMovies(SEARCH_URL+searchMov);
        search.value='';
        
    }
    else
    {
        window.location.reload();
    }

})

async function searchMovies(url)
{
    const resp=await fetch(url);
    const data=await resp.json();
    showMovies(data);
}
