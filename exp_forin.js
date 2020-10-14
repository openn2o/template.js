var template = require("./template.js").template;
template.info();

var str = `
	{%for d in data do%}
		key 是{*d*} 并且元素是 {*data[d]*} 换行 {%EOL%}
	{%end%}
`

console.log( str );
var a = template.compile(str , 2);
console.log("result:",a({"k1":"frist","k2":"second"}));
