function convert() {
    let inputValue = document.getElementById("userInput").value;
    let unit = document.getElementById("unit").value;
    console.log(unit);
    
    
    let milesToKm = "milesToKm";

    let result = 0;

    if (unit === milesToKm) {
        result = inputValue * 1.60934;
        console.log(result);
    } else {
        result = inputValue / 1.60934;
    }

    const resultString = inputValue + " miles are " + result + " km";
    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
}