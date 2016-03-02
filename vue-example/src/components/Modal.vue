<style scoped>
	.modal-mask{
      position: fixed;
      z-index: 100;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.7);
      display: table;
    }
    .modal-wrap{
      display: table-cell;
      vertical-align: middle;
    }
    .modal-container{
      color: #42b983;
      border-radius: 5px;
      text-align: center;
      padding: 10px;
      margin : 0 auto;
      background-color: #fff;
      width:85%;
      -webkit-transition : all 0.2s ease;
    }
    .modal-body{
      padding: 20px 0;
    }
    .modal-transition{
      opacity: 1;
      -webkit-transition : all 0.2s ease;
    }
    .modal-enter,.modal-leave{
      opacity: 0;
    }
    .modal-enter .modal-container,.modal-leave .modal-container {
      -webkit-transform: scale(0.8);
    }
    .modal-default-button{
      margin-top: 20px;
      border-radius: 3px;
      width: 65%;
      height: 40px;
      background-color: #42b983;
      border: none;
      color: #fff;
    }
</style>

<template>
	<div class="modal-mask" v-show="show" transition="modal">
		<div class="modal-wrap">
		  <div class="modal-container">
		    <div class="modal-header">
		      <slot name="header">default header</slot>
		    </div>
		    <div class="modal-body">
		      <slot></slot>
		    </div>
		    <div class="modal-footer">
		      <div>
		        <!-- <slot name="footer">default footer</slot> -->
		        <button v-on:click="emitEvent" class="modal-default-button">确定</button>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
    props : ['show'],
    methods : {
      emitEvent : function(){
        console.log(this)
        this.show = false;
        this.$dispatch('emit-modal-event',"已经关闭弹窗");
      }
    }
	}
</script>