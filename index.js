// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const symDiff = (arr1, arr2) => {
  let unique1 = arr1.filter(item => arr2.indexOf(item) === -1)
  let unique2 = arr2.filter(item => arr1.indexOf(item) === -1)

  const uniqueArr = unique1.concat(unique2)
  console.log(uniqueArr)
  return uniqueArr
}

symDiff([1, 2, 3], [5, 2, 1, 4]) // working

function sym(args) {
  const argArr = [].slice.call(arguments)

  console.log(argArr)
  
  args.reduce(symDiff)
}

sym([1, 2, 3], [5, 2, 1, 4]);