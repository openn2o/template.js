var template = require("./template.js").template;
template.info();


var tml8 = "{%\
	ipairs i,v in data do\
%}"
var tml9 = " {*i*} {*v.k1*} {%EOL%}";
var tml10 = "{%end%}"

var a = template.compile(tml8 + tml9 + tml10 , 3);
console.log("result:",a([{"k1":"v1"},{"k1":"v2"},{"k1":"v3"} ]));