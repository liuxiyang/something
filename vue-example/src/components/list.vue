<style src="../assets/css/list.css" scoped></style>
<style lang="less" scoped>
  .add-box{
    &:hover{
      color: red;
    }
  }
</style>

<template>
	<section class="sec-list">
    <div class="box" v-if="!$loadingAsyncData">
      <ul>
        <li v-for="item in list" @click="broadcast()" :class="item.img">
        </li>
      </ul>
      <div class="add-box" @click="addActor()">
        <span>＋</span>
      </div>
    </div>
    <div class="loading" v-if="$loadingAsyncData">
      请稍后...
    </div>
	</section>
	<modal v-bind:show.sync="showModal">
    <div slot="header">{{{ modalTemplate.header }}}</div> 
    <div>{{{ modalTemplate.content }}}</div>
  </modal>
</template>

<script>


// var STORAGE_KEY = 'todos-vuejs';

// exports.todoStorage = {
//   fetch: function () {
//     return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
//   },
//   save: function (todos) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
//   }
// };

import modal from './Modal.vue'
export default {
  data () {
  	var list = [];
  	if(localStorage.list){
  		if(JSON.parse(localStorage.list).length){
  			list = JSON.parse(localStorage.list);
  		}
  	}
    return {
      showModal : false,
      addedName : "lxy",
      list: list,
      modalTemplate: {
        header :"",
        content : ""
      }
    }
  },
  asyncData : function(resolve,reject){
    var tmpList = []
    setTimeout(function(){
      for(var i=0;i<4;i++){
        var rand = Math.ceil(Math.random()*4);
        tmpList.push({'id':i,'img':'bg'+rand});
      }
      resolve({
        list : tmpList
      });
    },1000);
  },
  components : {
  	// modal : require("./Modal.vue")
    modal
  },
  methods : {
  	broadcast : function(){
      this.showModal = true;
      this.modalTemplate = {
        header : "",
        content : "<div>确认删除吗?</div>"
      };
  		this.$broadcast('modalEvent',true);
  	},
    addActor : function(){
      this.showModal = true;
      this.modalTemplate ={
        header :"<div>确认增加吗?</div>",
        content : "<div><input class='add-input' autofocus='autofocus' value='addedName'></div>"
      };
      console.log(this.addedName)
      this.$broadcast('modalEvent',true);
    }
  },
  events : {
    'emit-modal-event' (msg){
      console.log(msg);
    },
  }
}
</script>