# jQuery的deferred对象详解


## 什么是deferred对象

开发网站的过程中，我们经常遇到某些耗时很长的javascript操作。其中，既有异步的操作（比如ajax读取服务器数据），也有同步的操作（比如遍历一个大型数组），它们都不是立即能得到结果的，通常的做法是，为它们指定回调函数（callback），但是在回调函数方面，jQuery的功能非常弱。为了改变这一点，jQuery开发团队就设计了deferred对象。

**简单说，deferred对象就是jQuery的回调函数解决方案**

## ajax操作的链式写法
首先，回顾下jQuery操作ajax的传统方法
```js
	$.ajax({
		url : "demo.html",
		data : {},
		success : function(){
			console.log("success");
		},
		error : function(){
			console.log("fail");
		}
	});
```
在上面的代码中，$.ajax()接受一个对象参数，对象包含两个方法，success方法指定操作成功后的回调函数，error方法指定失败后的回调函数
*******
操作完成后，如果是低于**1.5.0**的jquery，返回的是**XHR对象**，没法进行链式操作，否则返回的是deferred对象，可以进行链式操作，现在新的写法是
```js
	$.ajax({})
	.done(function(){
		console.log("success");
	}).fail(function(){
		console.log("fail");
	});
```
可以看到，done()相当于success(),fail()相当于error(),采用链式写法后，代码的阅读性大大提高

## 指定同一操作的多个回调函数
deferred对象的一大好处，就是它允许你自由添加多个回调函数
还是以上面的代码为例，如果ajax操作成功后，除了原来的回调函数，我还想再运行一个回调函数，怎么办？很简单，直接把它加在后面就行了
```js
	$.ajax("test.html")
　　.done(function(){ alert("success！");} )
　　.fail(function(){ alert("fail！"); } )
　　.done(function(){ alert("第二个回调函数！");} );
```
回调函数可以添加任意多个，它们按照**添加顺序**执行。

## 为多个操作指定回调函数
deferred对象的另一大好处，就是它允许你为多个事件指定一个回调函数，这是传统写法做不到的
```js
	$.when($.ajax("test1.html"), $.ajax("test2.html"))
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
```
这段代码的意思是，先执行两个操作$.ajax("test1.html")和$.ajax("test2.html")，如果**都成功了**，就运行done()指定的回调函数；如果有**一个失败或都失败了**，就执行fail()指定的回调函数
**$.when()的参数只能是deferred对象**

## deferred.resolve()方法和deferred.reject()方法

```js
	var wait = function(){
		var dfd = $.Deferred();
		setTimeout(function(){
			console.log("complete");
			dfd.resolve();
		},5000);
		return dfd.promise();
	};
	$.when(wait())   // var d = wait(); d.resovle(); --> promise()
	.done(function(){
		console.log("success");
	}).fail(function(){
		console.log("fail");
	});
```
jQuery规定，deferred对象有三种执行状态----**未完成，已完成和已失败**。如果执行状态是"已完成"（resolved）,deferred对象立刻调用done()方法指定的回调函数；如果执行状态是"已失败"，调用fail()方法指定的回调函数；如果执行状态是"未完成"，则继续等待，或者调用progress()方法指定的回调函数（jQuery1.7版本添加）

dtd.resolve()的意思是，将dtd对象的执行状态从"未完成"改为"已完成"，从而触发done()方法，deferred.reject()方法，作用是将dtd对象的执行状态从"未完成"改为"已失败"，从而触发fail()方法

## deferred.promise()方法
jQuery提供了deferred.promise()方法。它的作用是，在原来的deferred对象上返回另一个deferred对象，后者只开放**与改变执行状态无关**的方法（比如done()方法和fail()方法），屏蔽与改变执行状态有关的方法（比如resolve()方法和reject()方法），从而使得执行状态不能被改变
*******
另一种防止执行状态被外部改变的方法，是使用deferred对象的建构函数$.Deferred()
```js
	$.Deferred(wait).done().fail();
```
jQuery规定，$.Deferred()可以接受一个**函数名**（注意，是函数名）作为参数,$.Deferred()所生成的deferred对象将作为这个函数的默认参数


