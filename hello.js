var template = require("./template.js").template;
var helloPtr = template.compile("{{name}}, welcome!");
console.log(helloPtr({ name : "agent.zy" }));
