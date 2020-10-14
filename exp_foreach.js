var template = require("./template.js").template;
template.info();

var str = `
	{%foreach v in data do%}
		{*v*} {%EOL%}
	{%end%}
`


var a = template.compile(str , 3);
console.log("result:",a({"k1":"v1","k2":"v2"}));
