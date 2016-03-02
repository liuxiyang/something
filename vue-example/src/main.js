var Vue = require("vue");
var VueAsyncData = require("vue-async-data");
var VueRouter = require("vue-router");

var App = require("./App.vue");

Vue.use(VueAsyncData);
Vue.use(VueRouter);

var router = new VueRouter({
	transitionOnLoad : true
});

router.map({
	"*" : {
		component : require("./components/index.vue")
	},
	"/" : {
		component : require("./components/index.vue")
	},
	"/list" : {
		component : require("./components/list.vue")
	}
});

router.start(App, "app");

