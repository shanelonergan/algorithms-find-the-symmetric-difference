// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function sym(args) {
  console.log([...args]);
}

sym([1, 2, 3], [5, 2, 1, 4]);