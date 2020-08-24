var template = require("./template.js").template;
template.info();
console.log(template.compile('{*data["foo"]*}' , 1)());


var tml5 = "{%\
	 var a = 10\
%}"
var tml6 = "condition {*a*}";
console.log( tml5 + tml6);
var a = template.compile(tml5 + tml6 , 2);
console.log("result:",a({"k1":2,"k2":"v2"}));