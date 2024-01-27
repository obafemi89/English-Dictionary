const btnEl = document.getElementById("btn");
const JokeEl = document.getElementById("joke")

const apikey = "oeorImGHbfhdVCwfEmVJRg==fhEs0y3fiNdpDqQ6";

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
   try{
    jokeEl.innerText = "Updating...";
    btnEl.disable = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disable = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
   } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disable = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
   }
};

btnEl.addEventListener("click", getJoke);