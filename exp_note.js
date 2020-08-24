var template = require("./template.js").template;
template.info();


var tml8 = "{# \
  this is a note !!!\
#} hello {# this is note !!!#}222"


var a = template.compile(tml8 , 3);
console.log("result:",a({"k1":"v1","k2":"v2"}));
