function getQuote() {
  const idQuote = document.getElementById('idQuote');
  const textQuote = document.getElementById('textQuote');
  idQuote.innerHTML = '...';
  textQuote.innerHTML = 'Loading...';

  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((json) => {
      idQuote.innerHTML = json.slip.id;
      textQuote.innerHTML = json.slip.advice;
    });
}

getQuote();

function handleNewAdvice() {
  getQuote();
}
