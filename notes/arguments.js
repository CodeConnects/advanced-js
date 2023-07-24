/*
** ARGUMENTS

Arguments are not actually arrays, but only array-like objects.
They don't have any of the array methods and are not iterable.
A best practice is converting them to arrays before use, so the compiler can optimize them.

Array.from(arguments) is the best way to do this.

*/