var template = require("./template.js").template;
template.info();


var tml5 = "{%\
	 for d in data do\
%}"
var tml6 = "zxczxczx {*d*} ={*data[d]*} asdasdas {%EOL%}";
var tml7 = "{%end%}"
console.log( tml5 + tml6 + tml7 );
var a = template.compile(tml5 + tml6 + tml7 , 2);
console.log("result:",a({"k1":"v1","k2":"v2"}));
