const myArr = []
// %DebugPrint(myArr)

// continious, Holey

// SMI (small integer)
// Packed element
// Double (float, sting, function)

const array = [1, 2, 3, 4, 5] // PACKED_SMI_ELEMENTS

array.push(6.0) // PACKED_DOUBLE_ELEMENTS
array.push('7') // PACKED_ELEMENTS
array[10] = 7 // HOLEY_ELEMENTS

console.log(array);
console.log(array.length);
console.log(array[9]);

// bouned check
// hasOwnProperty(array, 9)
// hasOwnProperty(array.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in JavaScript

const array_one = [1, 2, 3, 4]
console.log(array_one[2]);

// PACKED_SMI ELEMENTS > PACKED_DOUBLE ELEMENTS > PACKED
// HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED


const array_two = new Array(3) // just 3 holes, HOLEY_SMI_ELEMENTS
array_two[0] = '1' // HOLEY_ELEMENTS
array_two[1] = '2' // HOLEY_ELEMENTS
array_two[2] = '3' // HOLEY_ELEMENTS

const array_three = []
array_three.push('1') // PACKED_ELEMENTS
array_three.push('2') // PACKED_ELEMENTS
array_three.push('3') // PACKED_ELEMENTS






