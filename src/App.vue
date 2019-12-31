<template>
  <div id="app">
    <!-- <input type="button" name="button_export" title="打印1" @click="preview()" value="打印" v-if="$route.meta.isPrint"> -->
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
    console.log(this.$route.meta)
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
  width: 210mm;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  .print_size{
    width: 100%;
    // padding: 0 80px;
  }
}
</style>
