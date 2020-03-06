<template lang="pug">
  .guanlian
    diguibintu(:option="{names:value.names,counts:value.counts}")
    div(v-if="value.childs" class="child")
     div(v-for="(item,index) in value.childs" :key="index" )
      guanlianbintu( v-model="value.childs[index]" v-if="value.childs[index]")
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
        }
      }
    },

  },
  data() {
    return {};
  },
  created() {},
  mounted() {

  },
  methods: {

  }
};
</script>
<style lang='less' scoped>
    .child{
        display: flex;
        justify-content: space-between;
    }
</style>