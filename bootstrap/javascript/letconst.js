var   // We can redeclare and can reassign
let   // we cannot redeclare but can reassign
const  //we can redeclare nor reassign

     // var

> var a = 10
> a
10
> var a = 20
> a
20
> a = 30
30
> a
30

    //   let

> let b = 10
> b
10
> let b = 11    //Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11

       // const
> const c = 10
> c
10
> const c = 11  //Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11        //Uncaught TypeError: Assignment to constant variable.