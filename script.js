function convertCurrency() {
  // Get the input values from the user
  var amount = parseFloat(document.getElementById("amount").value);
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;

  // Define the exchange rates
  var usdToLbp = 96600;
  var lbpToUsd = 1 * usdToLbp;
  var euroToLbp = 0.00001;
  var lbpToEuro = 1 * euroToLbp;
  var usdToEuro = 1.2;
  var euroToUsd = 1 / usdToEuro;

  // Perform the conversion
  var result;

  if (fromCurrency === "LBP" && toCurrency === "USD") {
    result = amount * lbpToUsd;
  } else if (fromCurrency === "USD" && toCurrency === "LBP") {
    result = amount * usdToLbp;
  } else if (fromCurrency === "LBP" && toCurrency === "EUR") {
    result = amount * lbpToEuro;
  } else if (fromCurrency === "EUR" && toCurrency === "LBP") {
    result = amount * euroToLbp;
  } else if (fromCurrency === "USD" && toCurrency === "EUR") {
    result = amount * usdToEuro;
  } else if (fromCurrency === "EUR" && toCurrency === "USD") {
    result = amount * euroToUsd;
  }

  // Display the result
  document.getElementById("result").innerHTML = result;
}
