最快的js 模板引擎，  每秒可达500万次渲染
可在node和浏览器端使用。

## node批量编译示例 ##
    -------------
    m1.html 模板文件
    {#
       m1 hbox 横向滚动抽屉
    #}

    <div class="heading">
        <div class="title" style="padding:0.5rem;"><h3>{*data.name*}</h3></div>
        <nav class="nav">
            <a><i class="icon icon-sort-by-attributes-alt"></i></a>
        </nav>
    </div>

    {%foreach v in data.data do%}
    <a class="item with-avatar multi-lines" data-item="{*v.book_id*}">
        <div class="avatar rounded yellow" style="pointer-events:none;width:3.6rem;height:4.5rem">
            <img src="res/{*v.book_id*}/icon.jpg">
        </div>
        <div class="content" style="pointer-events:none;">
            <div class="title" style="color:#000;pointer-events:none; font-bold:100; padding-left:5px; font-size:0.7rem">{*v.name*}</div>
            <div class="subtitle" style="padding-left:5px;pointer-events:none; font-size:0.6rem;line-height:0.8rem;">
            {%if (v.keyword.length>50) do%}
                {*v.keyword.substring(0,50)*} ...
            {%else%}
                {*v.keyword*}
            {%end%}<br>
                <span>{*v.author*} | {*v.book_type*} | {*v.status*}</span>
            </div>
        </div>
    </a>
    {%end%}
    m3.html 模板
    {#
       m3有图标也有简介的模块视图
    #}

    <div class="heading">
        <div class="title" style="padding:0.5rem;"><h3>{*data.name*}</h3></div>
        <nav class="nav">
            <a><i class="icon icon-sort-by-attributes-alt"></i></a>
        </nav>
    </div>

    {%foreach v in data.data do%}
    <a class="item with-avatar multi-lines" data-item="{*v.book_id*}">
        <div class="avatar rounded yellow" style="pointer-events:none;width:3.6rem;height:4.5rem">
            <img src="res/{*v.book_id*}/icon.jpg">
        </div>
        <div class="content" style="pointer-events:none;">
            <div class="title" style="color:#000;pointer-events:none; font-bold:100; padding-left:5px; font-size:0.7rem">{*v.name*}</div>
            <div class="subtitle" style="padding-left:5px;pointer-events:none; font-size:0.6rem;line-height:0.8rem;">
            {%if (v.keyword.length>50) do%}
                {*v.keyword.substring(0,50)*} ...
            {%else%}
                {*v.keyword*}
            {%end%}<br>
                <span>{*v.author*} | {*v.book_type*} | {*v.status*}</span>
            </div>
        </div>
    </a>
    {%end%}
    
    m4.html 模板文件
    {#
       m4是首元素权限其余元素只显示图标
    #}

    <div class="heading">
        <div class="title" style="padding:0.5rem;"><h3>{*data.name*}</h3></div>
        <nav class="nav">
            <a><i class="icon icon-sort-by-attributes-alt"></i></a>
        </nav>
    </div>
    {%header = true;%}
    {%foreach v in data.data do%}

    {%if (header==true) do%}
    <a class="item with-avatar multi-lines" data-item="{*v.book_id*}">
        <div class="avatar rounded yellow" style="pointer-events:none;width:3.6rem;height:4.5rem">
            <img src="res/{*v.book_id*}/icon.jpg">
        </div>
        <div class="content" style="pointer-events:none;">
            <div class="title" style="color:#000;pointer-events:none; font-bold:100; padding-left:5px; font-size:0.7rem">{*v.name*}</div>
            <div class="subtitle" style="padding-left:5px;pointer-events:none; font-size:0.6rem;line-height:0.8rem;">
            {%if (v.keyword.length>50) do%}
                {*v.keyword.substring(0,50)*} ...
            {%else%}
                {*v.keyword*}
            {%end%}<br>
                <span>{*v.author*} | {*v.book_type*} | {*v.status*}</span>
            </div>
        </div>
    </a>
    {%header = false%}
    <div class="row">
    {%else%}
        <div class="cell-3" style="padding:.7rem ;">
            <a class="item with-avatar multi-lines" data-item="{*v.book_id*}">
                <div class="avatar rounded yellow" style="pointer-events:none;width:3.6rem;height:4.5rem">
                    <img src="res/{*v.book_id*}/icon.jpg">
                </div>
                <div class="content" style="pointer-events:none;">
                    <div class="subtitle" style="font-size:0.6rem;line-height:0.8rem; padding-top:0.5rem;">{*v.name*}</div>
                </div>
            </a>
        </div>

    {%end%} 
    {%end%}

    </div>
    -------------
    
    //生成一个二进制的模板代码压缩文件
    var template = require("./template.js").template;
    template.info();
    var a = template.precompile("./" , "a.out");
    template.load("a.out");

输入文件夹 输出2进制文件，输出2进制文件可通过浏览器示例处理。

    
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

    <header>
    	<div id="{{name}}">
    		""
    	</div>
    	<div id="{{name}}">
    		""
    	</div>
    	<div id="{{name}}" >
    		"{{ddd}}"
    	</div>
    </header>


## 2. `{*expression*}` 变量语法 ##
    var template = require("./template.js").template;
    template.info();
    console.log(template.compile('{*data["foo"]*}' , 1)());
    
    
    var tml5 = "{%\
    	 var a = 10\
    %}"
    var tml6 = "condition {*a*}";
    console.log( tml5 + tml6);
    var a = template.compile(tml5 + tml6 , 2);
    console.log("result:",a({"k1":2,"k2":"v2"}));

## 3. `{%expression%}` 逻辑语法 ##
if 语句
    
    var template = require("./template.js").template;
    template.info();
    var tml5 = "{%\
    	 if (data['k1']==1) do\
    %}"
    var tml6 = "11111111{%else%}22222";
    var tml7 = "{%end%}"
    console.log( tml5 + tml6 + tml7 );
    var a = template.compile(tml5 + tml6 + tml7 , 2);
    console.log("result:",a({"k1":2,"k2":"v2"}));


for each

    var template = require("./template.js").template;
    template.info();
    
    
    var tml8 = "{%\
    	 foreach v in data do\
    %}"
    var tml9 = " {*v*} {%EOL%}";
    var tml10 = "{%end%}"
    
    var a = template.compile(tml8 + tml9 + tml10 , 3);
    console.log("result:",a({"k1":"v1","k2":"v2"}));


for in
    
    var template = require("./template.js").template;
    template.info();
    
    
    var tml5 = "{%\
    	 for d in data do\
    %}"
    var tml6 = "zxczxczx {*d*} ={*data[d]*} asdasdas {%EOL%}";
    var tml7 = "{%end%}"
    console.log( tml5 + tml6 + tml7 );
    var a = template.compile(tml5 + tml6 + tml7 , 2);
    console.log("result:",a({"k1":"v1","k2":"v2"}));

ipairs 语法
    
    var template = require("./template.js").template;
    template.info();
    
    
    var tml8 = "{%\
    	ipairs i,v in data do\
    %}"
    var tml9 = " {*i*} {*v.k1*} {%EOL%}";
    var tml10 = "{%end%}"
    
    var a = template.compile(tml8 + tml9 + tml10 , 3);
    console.log("result:",a([{"k1":"v1"},{"k1":"v2"},{"k1":"v3"} ]));
## 4. `{#expression#}` 注释语法 ##

注释语法

    var template = require("./template.js").template;
    template.info();
    
    
    var tml8 = "{# \
      this is a note !!!\
    #} hello {# this is note !!!#}222"
    
    
    var a = template.compile(tml8 , 3);
    console.log("result:",a({"k1":"v1","k2":"v2"}));

## 5. `{#expression#}` 继承语法 ##

模板继承语法 组合
    
    var template = require("./template.js").template;
    template.info();
    
    var tml8 = "{(head.html)} TML {# this is note !!!#}222 TML"
    var a = template.compile(tml8 , 3);
    console.log("result=",a({"name":"v1","k2":"v2"}));

