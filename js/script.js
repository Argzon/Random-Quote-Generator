/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

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
    year: 2010
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
    year: 2000
  },
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let rQuote = getRandomQuote();
  let html = `
              <p class="quote">${rQuote.quote}</p>
              <p class="source">${rQuote.source}`;

  if ( rQuote.citation ) {
    html += `<span class="citation">${rQuote.citation}</span>`;
  }
  if ( rQuote.year ) {
    html += `<span class="year">${rQuote.year}</span>`;
  }

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);