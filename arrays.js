var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
console.log(array)
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  console.log(array)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  console.log(array)
}

function removeElementFromEndOfArray(array){
  array.slice(0,array.length -1)
  console.log(array)
}

function accessElementInArray(array, index){
  array[index]
  console.log(array[index])
}
