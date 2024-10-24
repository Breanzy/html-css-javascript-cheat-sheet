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

// countdown
let countdownTxt = document.getElementById("cdTxt");
let countdownBtn = document.getElementById("project3");
let countdownTime = 0;
let countdownStart = false;

function cdTxtState() {
    countdownTxt.textContent = countdownTime;
    countdownTxt.style.color = countdownTime <= 0 ? "red" : "white";
}

countdownBtn.addEventListener("click", function (e) {
    if (e.target.matches(".cdAdd")) {
        const disableCdBtn = countdownBtn.querySelector(".cdStrt");
        disableCdBtn.disabled = countdownStart && true;
        countdownTime += 10;
        cdTxtState();
    } else if (e.target.matches(".cdStrt")) {
        countdownStart = true;
        e.target.disabled = true;
        let countdownInterval = setInterval(() => {
            countdownTime--;
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownStart = false;
            }
            cdTxtState();
        }, 1000);
    }
});

// Star wars card
let swIndex = 1;
let swJpg = document.getElementById("swJpg");

function swFetch() {
    let starWarsRequest = "https://swapi.dev/api/people/" + swIndex + "/";
    swJpg.src = "assets/images/starwars" + swIndex + ".jpg";

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
}

swFetch();

//uses event delegation instead of for each loop which is apparently the most optimal way of doing things
const swButton = document.getElementById("swBtns");
swButton.addEventListener("click", function (e) {
    if (e.target.matches(".button")) {
        if (e.target.matches(".is-success")) {
            swIndex = swIndex > 8 ? 1 : swIndex + 1;
        } else if (e.target.matches(".is-danger")) {
            swIndex = swIndex <= 1 ? 9 : swIndex - 1;
        } else {
            swIndex = Math.floor(Math.random() * (8 - 1) + 1);
        }
        swFetch();
    }
});

// Navivation Bar
let navBurger = document.querySelector(".navbar-burger");
navBurger.addEventListener("click", () => {
    const target = document.getElementById("navbarMenu");
    navBurger.classList.toggle("is-active");
    target.classList.toggle("is-active");
});

let navDropdown = document.querySelector(".navbar-link");
navDropdown.addEventListener("click", function () {
    const dropDown = document.querySelector(".navbar-dropdown");
    dropDown.classList.toggle("is-hidden");
});
