/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**
 * Store quotes into an array
 */

const quotes = [
  {
    quote: "Act first, explain later.",
    source: "Dan Brown",
    citation: "Digital Fortress",
    year: 1998
  },
  {
    quote: "Luck is not as random as you think. Before that lottery ticket won the jackpot, someone had to buy it.",
    source: "Vera Nazarian",
    citation: "The Perpetual Calendar of Inspiration",
    year: 2010,
    tags: '#book'
  },
  {
    quote: "Did you ever wish you had a book that would explain the full meaning of life's random happenings to you?",
    source: "Mariko Tamaki",
    citation: "Emiko Superstar",
    year: 2008
  },
  {
    quote: "Seeing is believing",
    source: "Alyson Noel",
    citation: "Blue Moon",
    year: 2009
  },
  {
    quote: "If it doesn't sweat, jiggle, or pant, it's not alive.",
    source: "Phyllis Reynolds Naylor",
    citation: "The Grooming of Alice",
    year: 2000,
    tags: '#movie'
  },
  {
    quote: "Nothing says work efficiency like panic mode.",
    source: "Don Roff"
  },
  {
    quote: "'Chance' is just a word expressing ignorance”",
    source: "Richard Dawkins",
    citation: "The Selfish Gene",
    year: 1976,
    tags: '#book'
  }
];



/***
 * Generate a random quote from quote array.
***/
function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

/**
 * Generate a random number from 0 to 256
 * @returns Random Number to randomColor var
 */
 const randomColor = () => Math.floor(Math.random() * 256);

/**
 * Generate a random RGB Color
 * @param {randomColor} value 
 * @returns rgb(color, color, color)
 */
function randomRGB(value) {
  const RGB = `rgb(${value()}, ${value()}, ${value()})`;
  return RGB;
}

/**
 * Generate a random RGB value and assign it to body element
 * @param {color} 
 * @returns randomRGB to body element
 */
function changeBackgroundColor(color) {
  let body = document.querySelector('body');
  body.style.backgroundColor = randomRGB(randomColor);
  return body;
}

/***
 * Display a random quote with its HTML code and print it to the page.
 * Check if the fields citation and year are filled and display the values if yes
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
              <p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;

  if ( randomQuote.citation ) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if ( randomQuote.tags ) {
    html += `<span class="tags">${randomQuote.tags}</span>`;
  }
  
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  changeBackgroundColor();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener(setInterval(printQuote, 1000 * 10), printQuote);