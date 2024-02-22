 var mname="Avenger";
 var rating=6.5
 var type="action"
 var ind = "hollywood";

 // es5
 var out="An "+mname+" is an "+type+" movie with rating of "+rating+" from "+ind+"  "
 console.log(out);
 "An Avengers is an Action movie with rating of 4.5 from ind Hollywood.";

 //es6
 var out =`An ${mname} is an ${type} movie with rating of ${rating} from ${ind} .`
 console.log(out);
 "An Avengers is an Action movie with rating of 4.5 from ind Hollywood.";