
  /*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * QUERY: What's the time complexity of your algorithm?
 * 
 * o(n)
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *o(1)

 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 * no
*/

// input, outputs, constraints, space & time complexity
// sorted array is being built up from the right side
// quadratic (n^2) time complexity (essentially 2 for loops)

var bubbleSort = function(array) {
  let prem = array.length;
    for (let i = 0; i < prem; i++) {
        for (let j = 0; j < prem; j++) {
                      if (array[j] > array[j + 1]) {
                          let deux = array[j];
                          array[j] = array[j + 1];
                          array[j + 1] = deux;
                      }
                  }
              }
              return array;
          };
 

//   var sorted = false;
//   while (!sorted) {
//     sorted = true;
//     for (var i=0; i<array.length; i++) {
//       if (array[i] > array[i+1]) {
//         sorted = false;
//         var temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp;
//       }
//     }
//   }
//   return array;
// }

console.log(bubbleSort([4,3,2,1]));