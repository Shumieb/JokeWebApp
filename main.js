const punchlineSection = document.getElementById("punchlineSect");
const punchlineBtn = document.getElementById("punchlineBtn");
const nextJokeBtn = document.getElementById("nextJokeBtn");
const setupText = document.getElementById("setupText");
const punchlineText = document.getElementById("punchlineText");
const typeText = document.getElementById("typeText");

// global variables
let showPunchline = false;

window.addEventListener("load", (event) => {
    getJokeData();
});

// event listeners for punchline and nextJoke button
document.getElementById("punchlineBtn").addEventListener("click", function () {

    showPunchline = !showPunchline;

    // display punchline section
    punchlineSection.classList.remove("d-none");
    punchlineSection.classList.add("d-block");

    // display next joke button
    nextJokeBtn.classList.remove("d-none");
    nextJokeBtn.classList.add("d-block");

    //hide punchline button    
    this.classList.remove("d-block");
    this.classList.add("d-none");

    //console.log(showPunchline);
})

document.getElementById("nextJokeBtn").addEventListener("click", function () {

    showPunchline = !showPunchline;

    // display punchline section
    punchlineSection.classList.remove("d-block");
    punchlineSection.classList.add("d-none");

    //display punchline button    
    punchlineBtn.classList.remove("d-none");
    punchlineBtn.classList.add("d-block");

    // Todo: get new setup and display the setup 
    getJokeData();

    // hide next joke button
    this.classList.remove("d-block");
    this.classList.add("d-none");

    //console.log(showPunchline);
})

async function getJokeData() {
    // api url
    const url = "https://official-joke-api.appspot.com/random_joke";

    try {
        //get data
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        //console.log(json.type, json.punchline, json.setup);

        setupText.innerText = json.setup;
        punchlineText.innerText = json.punchline;
        typeText.innerText = json.type + " Joke";

        //console.log(jokeType, setup, punchline);

    } catch (error) {
        console.error(error.message);
    }
}