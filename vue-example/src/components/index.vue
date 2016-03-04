
<style src="../assets/css/index.css" scoped></style>
<template>
  <section class="sec-index">
  	<div class="header" v-text="title"></div>
  	<div class="content"></div>
  	<div class="footer">
  		<button v-link="{path : '/list'}">{{ btnmMg }}</button>
  	</div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    	title : "入雪逢春",
    	btnmMg: '--选择角色--'
    }
  }
}
</script>
