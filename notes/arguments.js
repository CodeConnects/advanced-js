/*
** ARGUMENTS

Arguments are not actually arrays, but only array-like objects.
They don't have any of the array methods and are not iterable.
A best practice is converting them to arrays before use, so the compiler can optimize them.

Array.from(arguments) is one way to convert them to arrays.

Another way is using the spread operator: [...args]
This is the preferred way, as it is more readable and concise.
It makes a copy of the arguments with the spread operator, and then converts them to an array.

Arguments exist as an empty object even if no arguments are passed to the function.
In the console this appears as {} instead of undefined.

*/