// selector 
const hashGenerateBtn = document.getElementById("generateBtn");
const generatedHash = document.getElementById("generated-hash");

hashGenerateBtn.addEventListener("click", () => {
    let textString = document.getElementById("hashString").value;
    let generatedHashValue = CryptoJS.MD5(textString)
    generatedHash.innerHTML = generatedHashValue;
})