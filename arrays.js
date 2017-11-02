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

function accessElementInArray(array, element) {
  var element = "6"
  var array = ["4","5", element]
  console.log(array[3])
}
