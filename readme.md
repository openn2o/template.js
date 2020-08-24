## hello World示例 ##
    var template = require("./template.js").template;
    var helloPtr = template.compile("{{name}}, welcome!");
    console.log(helloPtr({ name : "agent.zy" }));

## 模板语法 ##
## 1. `{{expression}}` 内容语法 ##
## 2. `{*expression*}` 变量语法 ##
## 3. `{%expression%}` 逻辑语法 ##
## 4. `{#expression#}` 注释语法 ##
## 5. `{#expression#}` 继承语法 ##