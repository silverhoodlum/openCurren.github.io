function convertCurrencyRight() {
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;


    fetch("https://api.exchangeratesapi.io/latest?base=" + fromCurrency)
      .then((resp) => resp.json())
      .then(function(data){
        //if both currencies are the same return identical values
        (fromCurrency===toCurrency) ? 
        (document.getElementById("toQuantity").value = document.getElementById("fromQuantity").value,
        document.getElementById("currentRateA").textContent= "1 " + fromCurrency + " = " + "...",
        document.getElementById("currentRateB").textContent= "")
        :
        //otherwise return the top value as the multiplication of top currency rate by the amount specied below
        (document.getElementById("toQuantity").value = (data.rates[toCurrency]*document.getElementById("fromQuantity").value).toFixed(3),
        //change the single amount values
        document.getElementById("currentRateA").textContent= "1 " + fromCurrency + " = " + (data.rates[toCurrency]).toFixed(6) + " " + toCurrency,
        document.getElementById("currentRateB").textContent= "1 " + toCurrency + " = " + (1/data.rates[toCurrency]).toFixed(6) + " " + fromCurrency)
        //load the date of the current rates
        var date = document.getElementById("date");
        date.innerHTML = "LAST UPDATED " +
        data.date.split("-").reverse().join("-");
        

        })
    
        .catch(function(error) {
        console.log(error);
        });
}


function convertCurrencyLeft() {
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;
    console.log(toCurrency);
    fetch("https://api.exchangeratesapi.io/latest?base=" + toCurrency)
        .then((resp) => resp.json())
        .then(function(data){
        //if both currencies are the same return identical values
        (toCurrency===fromCurrency) ?
        (document.getElementById("fromQuantity").value = document.getElementById("toQuantity").value,
        document.getElementById("currentRateA").textContent= "1 " + fromCurrency + " = " + "...",
        document.getElementById("currentRateB").textContent= "") 
        :
        //otherwise return the top value as the multiplication of top currency rate by the amount specied below
        (document.getElementById("fromQuantity").value = (data.rates[fromCurrency]*document.getElementById("toQuantity").value).toFixed(3),
        //change the single amount values
        document.getElementById("currentRateA").textContent= "1 " + fromCurrency + " = " + (1/data.rates[fromCurrency]).toFixed(6) + " " + toCurrency,
        document.getElementById("currentRateB").textContent= "1 " + toCurrency + " = " + (data.rates[fromCurrency]).toFixed(6) + " " + fromCurrency)
        //load the date of the current rates
        var date = document.getElementById("date");
        date.innerHTML = "LAST UPDATED " +
        data.date.split("-").reverse().join("-");
        })
    
        .catch(function(error) {
        console.log(error);
        });
}

