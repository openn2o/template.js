var template = require("./template.js").template;
template.info();

var test = [];

for(var i = 0; i < 100; i ++) {
	test [i] = "test " + i;
}
var str = `
{%  foreach v in data do %}
		{*v*} 
{%end%}
`

console.log( "tml=" , str );
var a = template.compile(str , 2);
console.time("t")
for(var i = 0; i< 10000; i++) {
	a(test);
}
console.timeEnd("t")
console.log("===============");
console.log("result:", a({"k1":2,"k2":"v2"}));

