<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~@assets/css/normalize.less';
@import '~@assets/css/globalStyle.less';
#app {
  width: 100%;
  height: 100%;
}
</style>
