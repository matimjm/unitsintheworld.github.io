// Conversion factors for units
const conversionFactors = {
  // Conversion factors for SI units (meter, kilogram, second)
  meter: {
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    inch: 39.3701,
    foot: 3.28084,
    yard: 1.09361,
    mile: 0.000621371
  },
  kilometer: {
    meter: 1000,
    centimeter: 100000,
    millimeter: 1000000,
    inch: 39370.1,
    foot: 3280.84,
    yard: 1093.61,
    mile: 0.621371
  },
  centimeter: {
    meter: 0.01,
    kilometer: 0.00001,
    millimeter: 10,
    inch: 0.393701,
    foot: 0.0328084,
    yard: 0.0109361,
    mile: 0.0000062137
  },
  millimeter: {
    meter: 0.001,
    kilometer: 0.000001,
    centimeter: 0.1,
    inch: 0.0393701,
    foot: 0.00328084,
    yard: 0.00109361,
    mile: 0.00000062137
  },
  inch: {
    meter: 0.0254,
    kilometer: 0.0000254,
    centimeter: 2.54,
    millimeter: 25.4,
    foot: 0.0833333,
    yard: 0.0277778,
    mile: 0.000015783
  },
  foot: {
    meter: 0.3048,
    kilometer: 0.0003048,
    centimeter: 30.48,
    millimeter: 304.8,
    inch: 12,
    yard: 0.333333,
    mile: 0.000189394
  },
  yard: {
    meter: 0.9144,
    kilometer: 0.0009144,
    centimeter: 91.44,
    millimeter: 914.4,
    inch: 36,
    foot: 3,
    mile: 0.000568182
  },
  mile: {
    meter: 1609.34,
    kilometer: 1.60934,
    centimeter: 160934,
    millimeter: 1609340,
    inch: 63360,
    foot: 5280,
    yard: 1760
  },
  kilogram: {
    gram: 1000,
    pound: 2.20462,
    ounce: 35.274
  },
  gram: {
    kilogram: 0.001,
    pound: 0.00220462,
    ounce: 0.035274
  },
  pound: {
    kilogram: 0.453592,
    gram: 453.592,
    ounce: 16
  },
  ounce: {
    kilogram: 0.0283495,
    gram: 28.3495,
    pound: 0.0625
  },
  second: {
    minute: 0.0166667,
    hour: 0.000277778,
    day: 0.0000115741,
    week: 0.00000165344,
    month: 0.000000380517,
    year: 0.0000000317098
  },
  minute: {
    second: 60,
    hour: 0.0166667,
    day: 0.000694444,
    week: 0.0000992063,
    month: 0.000022831,
    year: 0.00000190256
  },
  hour: {
    second: 3600,
    minute: 60,
    day: 0.0416667,
    week: 0.00595238,
    month: 0.00136986,
    year: 0.000114155
  },
  day: {
    second: 86400,
    minute: 1440,
    hour: 24,
    week: 0.142857,
    month: 0.0328767,
    year: 0.00273973
  },
  week: {
    second: 604800,
    minute: 10080,
    hour: 168,
    day: 7,
    month: 0.229979,
    year: 0.0191654
  },
  month: {
    second: 2592000,
    minute: 43200,
    hour: 720,
    day: 30,
    week: 4.34812,
    year: 0.0833333
  },
  year: {
    second: 31536000,
    minute: 525600,
    hour: 8760,
    day: 365,
    week: 52.1429,
    month: 12
  }
};

// Function to convert units
function convertUnits() {
  const inputValue = document.getElementById("input-value").value;
  const inputUnit = document.getElementById("input-unit").value;
  const outputUnit = document.getElementById("output-unit").value;

  // Checking if the conversion factor exists
  if (conversionFactors.hasOwnProperty(inputUnit) && conversionFactors[inputUnit].hasOwnProperty(outputUnit)) {
    const conversionFactor = conversionFactors[inputUnit][outputUnit];
    const result = inputValue * conversionFactor;
    document.getElementById("result").textContent = result.toFixed(2);
  } else {
    document.getElementById("result").textContent = "Invalid conversion";
  }
}

// Event listener for the convert button
document.getElementById("convert-btn").addEventListener("click", convertUnits);
