const joke=document.getElementById('joke');
const btn=document.getElementById('jokeBtn');

btn.addEventListener('click',generateJokes)

generateJokes()

async function generateJokes()
{
const resp=await fetch('https://icanhazdadjoke.com',{
    headers:
    {
        Accept:'application/json'
    }
})
console.log(resp)
const data=await resp.json();
console.log(data)
joke.innerHTML=data.joke;
}