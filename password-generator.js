const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.querySelector("#password");
const totalChar = document.querySelector("#total-characters");
const charactersText = document.querySelector(".characters");
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const regenrateBtn = document.querySelector(".regenerate-btn");
const passSecurityMsg = document.querySelector("#security-msg");
const samplePassbox = document.querySelector(".samplePass");
const charvalue = document.querySelector("#charvalue");
const secureBtn = document.querySelector("#secureBtn");
const copyBtn = document.querySelector(".copy-btn");

charvalue.textContent = totalChar.value;
totalChar.addEventListener("input", (event) => {
    charvalue.textContent = event.target.value;
  });

// Generating random checkboxs value 
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
};

// Generating Random Password based on checkboxs 
let finalPass;
const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    finalPass = truncateString(password, totalChar.value);
    passBox.innerText = finalPass
    securityMsgFunc(finalPass)
}
generatePassword();

// Trim password based on characters lenght
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// Generating Random Sample Passwords On Load 
(function samplePassFunc(){
    for (let i = 1; i <= 5; i++) {
        const randompasswordbox = document.createElement("div");
        const samplepassword = document.createElement("span");
        const copyIcon = document.createElement("i");
        randompasswordbox.className = "random-password";
        samplepassword.className = "sampleTextPass";
        copyIcon.className = "fa-solid fa-copy passIcon";
        generatePassword()
        samplepassword.innerText = finalPass;
        samplePassbox.appendChild(randompasswordbox);
        randompasswordbox.appendChild(samplepassword);
        randompasswordbox.appendChild(copyIcon);

    }
})()

// Generating security message based on password strength 
function securityMsgFunc (finalpassword) {
    if (finalpassword.length <10) {
        passSecurityMsg.innerText = "A few minutes to hack this password";
        secureBtn.style.backgroundColor = "red";
        secureBtn.textContent="Weak!"
    }
    if (finalpassword.length >= 10 && finalpassword.length < 20) {
        passSecurityMsg.innerText = "Days to hack this password"
        secureBtn.style.backgroundColor = "rgb(250, 221, 0)";
        secureBtn.textContent="Good!"
    }
    if (finalpassword.length >=20){
        passSecurityMsg.innerText = "Years to hack this password";
        secureBtn.style.backgroundColor = "rgb(0, 225, 53)";
        secureBtn.textContent="Strong!"
    }
}

// Adding click event on COPY and REGENERATE Btn 
regenrateBtn.addEventListener("click", function () {generatePassword()})
copyBtn.addEventListener("click", copyBtnFunction);

// copy btn function
function copyBtnFunction() {
    let text = passBox.innerHTML;
    // Copy the text to the clipboard
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Copied: " + text); // Success message
    })
    .catch(err => console.error("Error copying text: ", err));
};
// Adding click event on COPY Icons 
document.addEventListener("DOMContentLoaded", function () {
    // Select all copy icons
    const copyButtons = document.querySelectorAll(".passIcon");

    copyButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the password text (previous sibling element)
            const passwordText = this.previousElementSibling.textContent.trim();

            // Copy the text to the clipboard
            navigator.clipboard.writeText(passwordText)
                .then(() => {
                    alert("Copied: " + passwordText); // Success message
                })
                .catch(err => console.error("Error copying text: ", err));
        });
    });
});
