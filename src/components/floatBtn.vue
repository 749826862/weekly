
<template>
  <div class="float_main">
    <div class="btn setTop" title="回到顶部" ref="setTop" @click="setTop">
      <span class="iconfont icon-tubiao102"></span>
    </div>
    <div class="btn print_btn" title="打印" @click="print">
      <span class="iconfont icon-dayin"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted(){
    this.listenScoll()
  },
  methods: {
    // 监听滚动条
    listenScoll(){
      window.onscroll = ()=>{
        let scrollTop =  document.documentElement.scrollTop ?document.documentElement.scrollTop :document.body.scrollTop
        if (scrollTop > 300) {
          this.$refs.setTop.style.display = "block"
        }else{
          this.$refs.setTop.style.display = "none"
        }
      }
    },
    setTop(){
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    },
    print(){
      this.$emit("print")
    }
  }
};
</script>
<style lang='less' scoped>
.float_main{
  width: 200px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  // height: 300px;
  .btn{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #eee;
    text-align: center;
    line-height: 50px;
    margin-bottom: 20px;
    cursor: pointer;
    span{
      font-size: 25px;
    }
    
    &:hover{
      background: #999;
      color: #fff;
    }
  }
  .setTop{
      display: none;
    }
}
</style>