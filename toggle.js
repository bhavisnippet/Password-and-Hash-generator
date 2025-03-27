let passwordGeneratorAPP = document.getElementById("password-generator-app");
let hashGeneratorApp = document.getElementById("hash-generator-app");
let btn = document.getElementById('btn')

function leftClick() {
    btn.style.left = '0'
    passwordGeneratorAPP.classList.toggle("hide");
    hashGeneratorApp.classList.toggle("hide");
    btn.style.background = "linear-gradient(to left, #0968e5 0%, #095bd2 100%)";
}

function rightClick() {
    btn.style.left = '400px'
    hashGeneratorApp.classList.toggle("hide");
    passwordGeneratorAPP.classList.toggle("hide");
    btn.style.background="linear-gradient(to bottom, #3b094d 0%, #5c346b 100%)";
}