var template = require("./template.js").template;
template.info();

///加载生成的2进制文件
template.load("head2.bin");
console.time("t");
for(var i = 0; i< 1000000; i++) {
	template.render("head.html", {name:"hello"})
}
console.timeEnd("t");
console.log("data=>", template.render("head.html", {name:"hello"}));
