// Array is a collection of homogeneous data type as well as hetrogenious.


var a = [1,3,3532,354,2345,2,546] //array of number
var b = ["dvd","fsev","SD","wer"] // array of string
var c = [true,true,false,true,false] // array of boolean
var d = ["dd",35,true,"Dvd","rwf",4,false,2]


var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]

city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Venice'

var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]
city.push("Boston")
6
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.push("Pune")
7
city
(7) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']

city.pop()
'Pune'
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.pop(2)
'Boston'
city.pop(100)
'Venice'
city
(4) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki']
var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston', 'Pune']
'Delhi'
city.unshift('London')
7


push > add in the end
unshift > Add in the beginning
pop > remove last value
shift > remove the first value