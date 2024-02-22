// for loop
for(i=0; i<5; i++){
console.log(i);
}
0
1
2
3
4

for(i=0; i<=5; i++){
console.log(i);
}
0
1
2
3
4
5

for(i=0; i<10; i+=2){
    console.log(i);
}
0
2
4
6
8

var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
 Delhi
 Mumbai
 Amsterdam
 Helsinki
 Venice

//  while loop
let i=0;
while(i<5){
    console.log(i);
    i++;
}
0
1
2
3 
4

// for of 

var city = ["Delhi", "Mumbai", "Amsterdam", "Helsinki", "Venice"];
for(myCity of city){
    console.log(myCity);
}

Delhi;
Mumbai;
Amsterdam;
Helsinki;
Venice;