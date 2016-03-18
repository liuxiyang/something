## Object.defineProperty
```js
	var a = {};
	Object.defineProperty(a,"b",{
		value : 123
	});
	console.log(a.b)  //123
```
三个参数，都是必填

### 传入参数
* 第一个参数：目标对象
* 第二个参数：需要定义的属性或方法的名字
* 第三个参数：目标属性所拥有的特性(descriptor)

### descriptor
* value:属性的值
* writable:如果设为false，属性的值为只读，不能重写
* configurable:总开关，一旦为false，就不能再设置(value,writable,configurable)
* enumerable:是否能在for in循环中遍历出来或在Object.keys中列举出来

### set和get
> 在descriptor中不能同时设置访问器(set,get)和writable或value,否则会报错，也就是说想用set,get就不能用writable和value中的任何一个

```js
	var a = {};
	Object.defineProperty(a,"b",{
		set:function(newvalue){

		},
		get:function(){
			return 2;
		}
	});
	a.b = 1; //赋值为1
	console.log(a.b) //2
```
> "b"的赋值和取值的时候会分别触发set和get对应的函数