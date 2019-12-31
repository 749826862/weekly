<template lang="pug">
  .login 
    h3 
      img(src="~@assets/baobiao.png")
      span  报表
    .login_content
      
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='less' scoped>
.login{
 h3{
  //  display: flex;
  //  align-items: center;
   img{
     width: 60px;
     height: 60px;
     margin-right: 10px;
   }
   span{
     margin-left: 14px;
     display: block;
     font-size: 15px;
     font-family: "黑体";
   }
 }
}
</style>