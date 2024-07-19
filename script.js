// color switch function
let colors = ["blue", "red", "violet", "orange", "green"];

let boxColor = document.querySelector(".box");
let body = document.querySelector(".colors");
let button = document.getElementById("colorButton");

button.addEventListener("click", () => {
    colorSelector = Math.floor(Math.random() * colors.length);
    boxColor.style.backgroundColor = colors[colorSelector];
    body.textContent = colors[colorSelector];
});

// counter function
let counter = 0;

const counterText = document.getElementById("counterTxt");
const counterButton = document.querySelectorAll(".counterBtn");

counterButton.forEach((btn) => {
    btn.addEventListener("click", function () {
        const styles = this.classList;
        if (styles.contains("increase")) {
            counter++;
        } else if (styles.contains("decrease")) {
            counter--;
        } else {
            counter = 0;
        }

        counterText.style.color =
            counter > 0 ? "green" : counter == 0 ? "white" : "red";
        counterText.textContent = counter;
    });
});

// Star wars card
let swIndex = 1;
let swNext = document.getElementById("swNext");
let swRand = document.getElementById("swRand");
let swPrev = document.getElementById("swPrev");
let swJpg = document.getElementById("swJpg");

function swFetch() {
    let starWarsRequest = "https://swapi.dev/api/people/" + swIndex + "/";
    swJpg.src = "starwars" + swIndex + ".jpg";

    fetch(starWarsRequest)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let name = document.getElementById("swName");
            let gender = document.getElementById("swGender");
            name.textContent = data.name;
            gender.textContent = "Gender: " + data.gender;

            fetch(data.films[Math.floor(Math.random() * data.films.length)])
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let quote = document.getElementById("starWarsQuote");
                    quote.textContent = data.opening_crawl;
                });
        });

    swPrev.disabled = swIndex <= 1 ? true : false;
    swNext.disabled = swIndex > 8 ? true : false;
}

swFetch();

const swButton = document.querySelectorAll(".swBtn");
swButton.forEach((btn) => {
    btn.addEventListener("click", function () {
        const styles = this.classList;
        if (styles.contains("is-success")) {
            swIndex++;
        } else if (styles.contains("is-danger")) {
            swIndex--;
        } else {
            swIndex = Math.floor(Math.random() * (8 - 1) + 1);
        }
        swFetch();
    });
});

let navBurger = document.querySelector(".navbar-burger");
navBurger.addEventListener("click", () => {
    const target = document.getElementById("navbarMenu");
    navBurger.classList.toggle("is-active");
    target.classList.toggle("is-active");
});

let navDropdown = document.querySelector(".navbar-link")
navDropdown.addEventListener("click", function() {
    const dropDown = document.querySelector(".navbar-dropdown")
    dropDown.classList.toggle("is-hidden");
});