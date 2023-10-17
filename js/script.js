function getQuote() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((json) => {
      const idQuote = document.getElementById('idQuote');
      idQuote.innerHTML = json.slip.id;

      const textQuote = document.getElementById('textQuote');
      textQuote.innerHTML = json.slip.advice;
    });
}

getQuote();
