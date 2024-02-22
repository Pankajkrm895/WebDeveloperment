// Es5
function add(a,b){
    return(a+b)
    console.log(a=b);
}
add(10,55);

// Es6
let add = (a,b) => {
    return(a+b)
}
add(15,10)

// Rest

function add(...args){
    console.log(args);

}
add(2,7,5,3)