// color switch function

colors = ["blue", "red", "yellow", "orange", "green"];

body = document.querySelector(".colors");
button = document.getElementById("colorButton");

button.addEventListener("click", () => {
    colorSelector = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorSelector];
    body.textContent = colors[colorSelector];
});


// counter function

counter = 0;
counterText = document.getElementById("counterTxt");
counterButtonInc = document.getElementById("counterBtnInc");
counterButtonDec = document.getElementById("counterBtnDec");
counterReset = document.getElementById("counterReset");

counterButtonInc.addEventListener("click", () => {
    counterText.textContent = counter + 1;
    counter++;
});

counterButtonDec.addEventListener("click", () => {
    counterText.textContent = counter - 1;
    counter--;
});

counterReset.addEventListener("click", () => {
    counterText.textContent = 0;
    counter = 0;
});

// Difference between queryselector and getelementbyid: The reason is because querySelector looks through multiple elements, as a
// result it will take a little longer to get the id that you want. So, if you know you are retrieving an id then you should use getElementById
// because it only looks at id's making it faster, more efficient and effective code
