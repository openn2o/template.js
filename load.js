var template = require("./template.js").template;
template.info();

var a = template.load_file("head2.bin");


console.time("t");
for(var i = 0; i< 1000000; i++) {
a({name:"hello"})
}
console.timeEnd("t");
console.log("data=>", a({name:"hello"}));
