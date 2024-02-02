function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unitFrom = document.getElementById('unitFrom').value;
    var unitTo = document.getElementById('unitTo').value;

    var result;
    switch (unitFrom) {
        case 'C':
            result = convertFromCelsius(temperature, unitTo);
            break;
        case 'F':
            result = convertFromFahrenheit(temperature, unitTo);
            break;
        case 'K':
            result = convertFromKelvin(temperature, unitTo);
            break;
    }

    var resultText = `${result.toFixed(2)}&deg;${unitTo.toUpperCase()}`;
    document.getElementById('result').innerHTML = resultText;

    
}

function convertFromCelsius(temperature, unitTo) {
    switch (unitTo) {
        case 'C':
            return temperature;
        case 'F':
            return (temperature * 9/5) + 32;
        case 'K':
            return temperature + 273.15;
    }
}

function convertFromFahrenheit(temperature, unitTo) {
    switch (unitTo) {
        case 'C':
            return (temperature - 32) * 5/9;
        case 'F':
            return temperature;
        case 'K':
            return (temperature - 32) * 5/9 + 273.15;
    }
}

function convertFromKelvin(temperature, unitTo) {
    switch (unitTo) {
        case 'C':
            return temperature - 273.15;
        case 'F':
            return (temperature - 273.15) * 9/5 + 32;
        case 'K':
            return temperature;
    }
}
