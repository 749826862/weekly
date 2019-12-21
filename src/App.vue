<template>
  <div id="app">
    <input type="button" name="button_export" title="打印1" @click="preview()" value="打印">
    <section ref="print">
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
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
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  background: #fff;
}
</style>
