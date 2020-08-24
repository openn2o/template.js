var template = require("./template.js").template;
template.info();
var a = template.precompile_file("head.html", "head2.bin");
