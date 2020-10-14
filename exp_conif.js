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
console.log("===============");
console.log("result:", a({"k1":2,"k2":"v2"}));
