/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
let odd = 'odd';
let even = 'even';
let evenTrue = true;
function integer(number) {
    if(number%2!==0){
        evenTrue =false;
        console.log('odd');
        return odd;
    }
    else{
        evenTrue =true;
        console.log('even');

        return even;
    }
}

integer(3);
console.log(evenTrue);