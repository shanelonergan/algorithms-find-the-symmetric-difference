const symDiff = (arr1, arr2) => {
  console.log(...arr2.filter(item => !arr1.includes(item)))
  return [
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
  ]
};

const sym = (...args) => {
  console.log([...new Set(args.reduce(symDiff))])
  return [...new Set(args.reduce(symDiff))]
}

sym([1, 2, 3], [5, 2, 1, 4]);