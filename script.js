function convertToCelsius() {
    let fahrenheitInput = document.getElementById("fahrenheit");
    let celsiusOutput = document.getElementById("celsius");
    let fahrenheitValue = fahrenheitInput.value;
    let celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    celsiusOutput.value = celsiusValue.toFixed(2);
  }
  
  function convertToFahrenheit() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitOutput = document.getElementById("fahrenheit");
    let celsiusValue = celsiusInput.value;
    let fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    fahrenheitOutput.value = fahrenheitValue.toFixed(2);
  }