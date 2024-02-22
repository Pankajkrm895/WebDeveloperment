// upper and LowerCase
var city = "lOndON"

city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6

// CharAt method
var city="lOnDOn"

city.charAt(0)
'l'
city.charAt(1)
'O'
city.charAt(2)
'n'
city.charAt(3)
'D'
city.charAt(4)
'O'

city.charAt(5)
'n'
city.charAt(3).toUpperCase()
'D'
city.charAt(3).toLowerCase()
'd'
city.at(2)
'n'
city.at(-1)
'n'
city.at(-2)
'O'
city[0]
'l'
city[city.length-1]
'n'
city[city.length-2]
'O'

// trim methode
var name = "  Nikita  ";
name.length;
10;
name.trim();
("Nikita");
var name = "  Nikita .  ";
undefined;
name.trim();
("Nikita .");

var a = "John";
var b = "john";

a == b;
false;
a.toUpperCase() == b.toUpperCase();
true;

//  slice methode
var city = "amStErDAm"

city.slice(1)
'mStErDAm'
city.slice(2)
'StErDAm'
city.slice(2,5)
'StE'
city.slice(1,6)
'mStEr'
city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,-1)
'amStErDA'
city.slice(0,-2)
'amStErD'
city.slice(1,-2)
'mStErD'
city.slice(-2,1)

var city = "amStErDAm";

city.charAt(0);
("a");
city.charAt(0).toUpperCase();
("A");
city.slice(1).toLowerCase();
("msterdam");
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
("Amsterdam");

var city = "pARiS";
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
("Paris");

// replace methode
var a = "I am learning Javascript";

a.replace("Javascript", "JS");
("I am learning JS");
var a = "Javascript I am learning Javascript";
undefined;
a.replace("Javascript", "JS");
("JS I am learning Javascript");
a.replaceAll("Javascript", "JS");
("JS I am learning JS");
a.replaceAll(/Javascript/g, "JS");
("JS I am learning JS");

var name = "  Nikita .  ";
name.replaceAll(" ", "");
("Nikita.");
name.replaceAll(/ /g, "");
("Nikita.");
name.replace(/ /g, "");
("Nikita.");


//  split methode
var url = "https://github.com/Aakashdeveloper/Apiwithgo";

url.split("/")
(5)[("https:", "", "github.com", "Aakashdeveloper", "Apiwithgo")];

var a = url.split("/");
a(5)[("https:", "", "github.com", "Aakashdeveloper", "Apiwithgo")];
a[a.length - 1];
("Apiwithgo");

var url = "https://github.com/Aakashdeveloper/PythonWithFlask";
var a = url.split("/");
a(5)[("https:", "", "github.com", "Aakashdeveloper", "PythonWithFlask")];
a[a.length - 1];
("PythonWithFlask");

var a = "Javascript I am learning Javascript";
a.split(" ")(5)[("Javascript", "I", "am", "learning", "Javascript")];

var a = "Javascript";
a.split("")(10)[("J", "a", "v", "a", "s", "c", "r", "i", "p", "t")];
var a = ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
undefined;
a.toString();
("J,a,v,a,s,c,r,i,p,t");
a.toString().replaceAll(",", "");
("Javascript");

// toString methode
var a = 10;
a.toString();
("10");
"" + a;
("10");


      //Splice
splice(indexNumber,delete count,values)

var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

// remove 1 value from index number 2
city.splice(2,1)
['Amsterdam']

// Add 2 value on index number 4
city.splice(4,0,'Hongkong','Keev')


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

// remove 1 value from index number 2
city.splice(2,1)
['Amsterdam']
16Third-party cookie will be blocked. Learn more in the Issues tab.
city.splice(4,0,'Hongkong','Keev')
[]
city
(8) ['Delhi', 'Mumbai', 'Helsinki', 'Venice', 'Hongkong', 'Keev', 'Boston', 'Pune']
city.slice(3,2,'Dublin')
[]
city
(8) ['Delhi', 'Mumbai', 'Helsinki', 'Venice', 'Hongkong', 'Keev', 'Boston', 'Pune']
city.splice(3,2,'Dublin')
(2) ['Venice', 'Hongkong']
city
(7) ['Delhi', 'Mumbai', 'Helsinki', 'Dublin', 'Keev', 'Boston', 'Pune']


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

city.indexOf('London')
-1
city.indexOf('Delhi')
0
city.indexOf('Boston')
5
city.indexOf('Dublin')
-1

var a = ['a','b','c']
var b = [1,2,3,4]
undefined
a+b
'a,b,c1,2,3,4'
a.concat(b)
(7) ['a', 'b', 'c', 1, 2, 3, 4]

[...a,...b]
(7) ['a', 'b', 'c', 1, 2, 3, 4]

var c = [9,4,2,4]
var a = ['a','b',...c,'c']
a
(7) ['a', 'b', 9, 4,]