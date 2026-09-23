// Javascript goes here

// Calculate wind chill factor

// Let's read data from our page, extract the 'textContent'
// and parse into a floating point number.

let airTemp = parseFloat(document.getElementById("air-temp").textContent);
let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

// Compare the input variables to set values; if 'true',
// call the 'calculateWindChill' function.

if (airTemp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(airTemp, windSpeed);
    windChillDisplay = windChill.toFixed(2) + "\u00B0C";
} else {
    windChillDisplay = "N/A";
}

document.getElementById("wind-chill").textContent = windChillDisplay;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * airTemp - (11.37 - 0.3965 * airTemp) * (windSpeed ** 0.16);
}