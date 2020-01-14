<template>
  <div id="app">
    <floatBtn @print="preview" v-if="$route.meta.isPrint" />
    <section ref="print" class="print_size" >
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
  },
  methods: {
    preview() {
     this.$print(this.$refs.print) // 使用
    }
  }
};
</script>

<style lang="less">
@import "~@assets/css/normalize.less";
@import "~@assets/css/globalStyle.less";
#app {
  width: 100%;
  height: 100%;
  // margin: 0 auto;
  // background: #fff;
  .print_size{
    width: 100%;

    height: 100%;
    // padding: 0 80px;
  }
}
</style>
