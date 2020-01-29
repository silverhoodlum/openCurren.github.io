//fill the select options with the available currencies      

fetch("https://api.exchangeratesapi.io/latest?base=")
      .then((resp) => resp.json())
      .then(function(data){
        var allRates = data.rates;
        var selectA = document.getElementById("from");
         var selectB = document.getElementById("to");
         allRates = Object.entries(allRates)

        function getLookUp(input) {
                
        }

         
         for(var i = 0; i < allRates.length; i++) {
            var opt = allRates[i][0];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
             
            var lookUp=document.createAttribute("data-lookup");
                var inputMap = {
                    "USD": "United States of America Dollar USA",
                    "CAD": "Canada",
                    "HKD": "Hong Kong",
                    "ISK": "Iceland Krona",
                    "PHP": "Phillippines Peso",
                    "DKK": "Denmark Krone",
                    "HUF": "Hungary Forint",
                    "CZK": "Czech Koruna",
                    "AUD": "Australia",
                    "RON": "Leu",
                    "SEK": "Sweden Krona",
                    "IDR": "Indonesia Rupiah",
                    "INR": "India Rupee",
                    "BRL": "Brazil Real",
                    "RUB": "Russia Ruble",
                    "HRK": "Croatia Kuna",
                    "JPY": "Japan Yen",
                    "THB": "Thailand Baht",
                    "CHF": "Swiss Switzerland Franc",
                    "SGD": "Singapore",
                    "PLN": "Poland Zloty",
                    "BGN": "Bulgaria Lev",
                    "TRY": "Turkey Lira",
                    "CNY": "China Yuan",
                    "NOK": "Norway Krone",
                    "NZD": "New Zealand ",
                    "ZAR": "South Africa Rand",
                    "MXN": "Mexico Peso",
                    "ILS": "Israel Shekel",
                    "KRW": "South Korea Won",
                    "MYR": "Malaysia Ringgit"
                };
            lookUp.value= inputMap[opt];
            el.setAttributeNode(lookUp);
             
            selectA.appendChild(el);
             
            var la = document.createElement("option");
             la.textContent = opt;
             la.value = opt;
             
             var lookUp=document.createAttribute("data-lookup");
                var inputMap = {
                    "CAD": "Canada",
                    "HKD": "Hong Kong",
                    "ISK": "Iceland Krona",
                    "PHP": "Phillippines Peso",
                    "DKK": "Denmark Krone",
                    "HUF": "Hungary Forint",
                    "CZK": "Czech Koruna",
                    "GBP": "England, UK, Britain, Pound",
                    "AUD": "Australia",
                    "RON": "Leu",
                    "SEK": "Sweden Krona",
                    "IDR": "Indonesia Rupiah",
                    "INR": "India Rupee",
                    "BRL": "Brazil Real",
                    "RUB": "Russia Ruble",
                    "HRK": "Croatia Kuna",
                    "JPY": "Japan Yen",
                    "THB": "Thailand Baht",
                    "CHF": "Swiss Switzerland Franc",
                    "SGD": "Singapore",
                    "PLN": "Poland Zloty",
                    "BGN": "Bulgaria Lev",
                    "TRY": "Turkey Lira",
                    "CNY": "China Yuan",
                    "NOK": "Norway Krone",
                    "NZD": "New Zealand ",
                    "ZAR": "South Africa Rand",
                    "MXN": "Mexico Peso",
                    "ILS": "Israel Shekel",
                    "KRW": "South Korea Won",
                    "MYR": "Malaysia Ringgit"
                };
            lookUp.value= inputMap[opt];
            la.setAttributeNode(lookUp);
             
             selectB.appendChild(la);
        }   
     
        })
        
        .catch(function(error) {
        console.log(error);
        });

/* height background*/

var background = document.getElementsByTagName("body")[0];

resizeBackground ()


function resizeBackground (){
    background.style.height=  (window.innerHeight -20)  + "px";
}

window.addEventListener("resize", resizeBackground);  
