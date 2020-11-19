var template = require("./template.js").template;
template.info();
var str = `
{% if (data['k1']==1) do %}
		value eq 1 out
{%else%}
		value neq 1 out
{%end%}
`

console.log( "tml=" , str );
var a = template.compile(str , 2);
console.time("t")
for(var i = 0; i< 12000000; i++) {
	a({"k1":2,"k2":"v2"})
}
console.timeEnd("t")
console.log("===============");
console.log("result:", a({"k1":2,"k2":"v2"}));

