var template = require("./template.js").template;
template.info();
var tml5 = "{%\
	 if (data['k1']==1) do\
%}"
var tml6 = "11111111{%else%}22222";
var tml7 = "{%end%}"
console.log( tml5 + tml6 + tml7 );
var a = template.compile(tml5 + tml6 + tml7 , 2);
console.log("result:",a({"k1":2,"k2":"v2"}));
