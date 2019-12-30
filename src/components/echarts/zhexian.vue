<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="className")
    p.titleLeft 配变台区数(台)
    //- img.canvasImg(ref="echartsImg")
    //- p 配电自动化故障自愈实现率周趋势
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      }
    },
    className: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.setChart().then(
        option => {
          let myChart = echarts.init(
            document.querySelector("." + this.className)
          );
          myChart.setOption(option);
          window.addEventListener("resize", () => {
            myChart.resize();
          });
        },
        error => {
          console.log(error);
        }
      );
    },
    setChart() {
      return new Promise((resolve, reject) => {
        let option = {
          title: {
            // text: "折线图堆叠"
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            show:false,
            data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
          },
          grid: {
            borderWidth: 0,
            top: 10,
            right:10,
            bottom: 0,
            left:70,
            containLabel: true
          },
          // toolbox: {
          //   feature: {
          //     saveAsImage: {}
          //   }
          // },
          xAxis: {
            show:false,
            type: "category",
            boundaryGap: true,
            axisLabel:{
              align:"center"
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "邮件营销",
              type: "line",
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#f7bc82",
                  barBorderRadius: 0,
                  label: {
                    color: "#000",
                    show: true,
                    position: "left",
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            }
          ]
        };
        resolve(option);
      }).catch(err => {
        reject(err);
      });
    }
  }
};
</script>
<style lang='less' scoped>
.chartMain {
  width: 100%;
  height: 150px;
  // flex: 1;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  position: relative;
  // margin-bottom: 20px;
}
.zhuzhuangtu,
.canvasImg {
  width: 92%;
  height: 99%;
}
p {
  text-align: center;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%);
}
.titleLeft{
  height: 20px;
  color: #000;
  position: absolute;
  left: -2%;
  top: 10%;
  transform: rotate(-90deg) translate(-50%,0%);
}
</style>