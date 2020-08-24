最快的js 模板引擎，  每秒可达500万次渲染
可在node和浏览器端使用。

## 浏览器示例 ##
    
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title></title>
    		<script src="template.js"></script>
    	</head>
    	<body>
    		<script>
    			template.load("a.out", function (){
    				console.time ("t")
    				for(var i = 0; i< 1000000; i++) {
    					template.render("head.html" , {name:"agent.zy"});
    				}
    				console.timeEnd ("t")
    			});
    			console.log(template)
    		</script>
    	</body>
    </html>
    

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