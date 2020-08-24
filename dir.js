var template = require("./template.js").template;
template.info();
var a = template.precompile("./" , "a.out");
template.load("a.out");