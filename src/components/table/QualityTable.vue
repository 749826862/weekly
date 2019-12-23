<template lang="pug">
  .table_main
    h3 表1 配变电压质量综合措施分析
    table.tborder(border="1")
      thead
        th(style="width:80px;") 序号
        th(colspan="2") 治理措施
        th
          span 11月治理
          p （台）
        th
          span 累计治理
          p （台）
        th
          span 构成占比
          p （%）
      tbody
        tr
          td(rowspan="5")
          td(rowspan="5" style="width:90px;") 治理变压器本体
          td 调整分接头
          td 69
          td 1139
          td 9.26%
        tr
          td 更换高、低压保险器
          td 33
          td 691
          td 5.62%
        tr
          td 更换开关
          td 1
          td 8
          td 0.07%
        tr
          td 分装变压器
          td 1
          td 14
          td 0.11%
        tr
          td 更换变压器
          td 0
          td 27
          td 0.22%
        tr
          td 2
          td 调整低压负荷
          td 
          td 15
          td 349
          td 2.84%
        tr
          td 3
          td 治理表计问题
          td 
          td 29
          td 581
          td 4.72%
        tr
          td 4
          td 治理二次回路
          td 
          td 159
          td 3331
          td 27.08%
        tr
          td 5
          td 治理通讯及采集器
          td 
          td 19
          td 469
          td 3.81%
        tr
          td 6
          td 调整台账
          td 
          td 4
          td 83
          td 0.67%
        tr
          td 7
          td 不需治理（局部故障自行恢复、无原因自行恢复）
          td 
          td 237
          td 5067
          td 45.59%
        tr
          th 
          th 合计
          th 
          th 567
          th 12299
          th 100.00%
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
.table_main {
  margin-bottom: 10px;
  h3 {
    text-align: center;
    font-family: "黑体";
    font-size: 18px;
    color: #000;
  }
  .tborder {
    border: 1px solid #000;
    // border-collapse:collapse;
    th {
      font-weight: bold;
      background: #ccc;
      padding: 10px 7px;
      font-size: 16px;
    }
    td,
    th {
      text-align: center;
      font-family: "宋体";
      color: #000;
    }
    td {
      padding: 5px 20px;
    }
  }
}
</style>