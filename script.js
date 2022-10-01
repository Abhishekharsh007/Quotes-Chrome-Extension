// https://zenquotes.io/api/random
 
fetch("https://zenquotes.io/api/random")
    .then(data=>data.json())
    .then((quotesData)=>{
        const QuotesText = quotesData[0].q;
        const quotesElement = document.getElementById('quotesElement');

        quotesElement.innerHTML = QuotesText;
    });
