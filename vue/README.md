## vuejs学习笔记

### vue核心 **数据驱动，组件化**

### es5 Object.defineProperty  观察和收集依赖，不受制于watcher

###　*首次插值
```html
	<div v-cloak id="item{{id}}">{{{*msg}}}</div>
```
### v-show不支持template
```html
	<template v-if="a">
		<p>111</p>
		<p>222</p>
	</template>
```

### 修饰符可以串联，可以只有修饰符，不让方法处理dom细节更好
```html
	<div v-cloak v-on:click.prevent.stop="greet($event)">{{computedA}}</div>
```

### 组件
```html
	<!-- 名字形式为 camelCase 的 prop 用作特性时，需要转为 kebab-case -->
	<parent :msg="lxy" v-bind:second-msg="5>4"></parent>
	<!-- 字面量语法传递字符串如“5>4”，动态语法（v-bind）传递表达式“true” -->
```