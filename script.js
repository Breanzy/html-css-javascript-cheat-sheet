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

});

counterReset.addEventListener("click", () => {
    counterText.textContent = 0;
    counter = 0;
});

// Difference between queryselector and getelementbyid: The reason is because querySelector looks through multiple elements, as a
// result it will take a little longer to get the id that you want. So, if you know you are retrieving an id then you should use getElementById
// because it only looks at id's making it faster, more efficient and effective code
