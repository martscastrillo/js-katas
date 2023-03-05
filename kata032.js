/* Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */

let arr =  [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false,  true,  false, false, true ,
  true,  true,  true,  true ,  false, false, true,  true];

function countsheep(array) {
 let j = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  
   
    if (element == false || element == true)
    {
      if (element == true)
      {
        j++;
      }
    }
    else
    {
      return null;
    }
  }
  return j;
}

console.log(countsheep(arr));