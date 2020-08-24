var template = require("./template.js").template;
template.info();


var tml8 = "{%\
	 foreach v in data do\
%}"
var tml9 = " {*v*} {%EOL%}";
var tml10 = "{%end%}"

var a = template.compile(tml8 + tml9 + tml10 , 3);
console.log("result:",a({"k1":"v1","k2":"v2"}));
