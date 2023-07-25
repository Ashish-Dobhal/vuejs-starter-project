// GOTCHA: https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-eslint-delete-cr-prettier-prettier?page=1&tab=scoredesc#tab-top
const fruits = ["Apple", "Banana", "Orange"]
const vegetables = ["Cucumber", "Cabbage"]
const fruitsAndVegetables = [...fruits, ...vegetables]
console.log(fruitsAndVegetables)
