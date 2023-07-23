/*
** STACK ORDER
*/

console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');

/* Results:
  1
  3
  2

setTimeout goes from the Stack to the Web API, then to the Callback Queue, then to the Stack.
Even though the timer is set to 0, the browser will wait until the rest of the code has executed before executing the function.
The browser will execute the function after the timer expires, but not before the rest of the code has executed.
*/
