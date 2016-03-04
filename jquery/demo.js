// pop.js
define(['jquery'],function($){

	function modal(){
		this.cfg = {}
		this.handlers = {}
	}

	modal.prototype = {
		alert : function(cfg){
			var that = this;
			var CFG = $.extend(this.cfg,cfg);
			xx.html()
			btn.click(function(){
				CFG.handler && CFG.handler();
			})
			that.fire('alert');
			return this;
		},
		on : function(type,handler){
			if(typeof this.handlers[type] == "undefined"){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},
		//自定义事件被触发的时候，事件名下的数组遍历一遍，里面保存的function依次执行一遍
		fire : function(type,data){
			if(this.handlers[type] instanceof Array){
				var tmpHandlers = this.handlers[type];
				for(var i=0 ; i<tmpHandlers.length; i++){
					tmpHandlers[i](data);
				}
			}
		}
	}

	return {
		modal : modal
	}
	
})


//绑定多个回调，多个模块绑定同一事件 ----- 自定义事件
//main.js
require.config({
	paths : {
		'jquery' : "./jquery.1.110.min"
	}
})

require(['pop'],function(p){
	new p.modal().alert(cfg);

	var a = new p.modal();
	a.on('alert',function(){

	}).on('close',function(){

	})
})