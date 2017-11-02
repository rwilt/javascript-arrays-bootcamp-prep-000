var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var element
  var array
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array
  var element
  array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  var array
  var element
  [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
var array
var element
array.push(element)
}

function accessElementInArray (array, element) {
  var element = "friend"
  var array = ["hello," "my", element]
  console.log(array[3]);
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  var element = "2"
  var array = [element, "4", "bye"]
  array.shift(element)
}

function removeElementFromBeginningOfArray(array, element) {
var element = "hello"
var array = ["hello", "I", "love"]
array.slice([0])
console.log(array)
}

function removeElementFromEndOfArray(array, element) {
  var element = "fish"
  var array = ["my", "name" "fish"]
  array.slice(0, array.length -1)
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  var element = "hello"
  var array = ["hello", "good", "friend"]
  array.pop()
  console.log(array)
}
