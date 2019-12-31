<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="this.chartsOption.className")
    p {{ chartsOption.tableName }}
    //- p.titleLeft 配变台区数(台)
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          data1: [27, 32, 10, 13],
          data2: [20, 18, 9, 24],
          data3: [20, 18, 19, 34]
        };
      }
    },
    chartsOption: {
      type: Object,
      default: () => {
        return {
          className: "",
          tableName:"",
          isRow: true
        };
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
            document.querySelector("." + this.chartsOption.className)
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
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            show:false,
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: "",
              type: "pie",
              radius: "55%",
              center: ["50%", "45%"],
              data: [
                { value: 335, name: "电能表缺失电压曲线数据" },
                { value: 310, name: "变压器与营销台区关系缺失" },
                { value: 234, name: "台区与电能表存在1对多问题" },
                { value: 135, name: "台区与电能表关系缺失" }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              },
              label:{
                normal: {
                  formatter:'{b|{b}}\n{c|{d}%}',
                  rich: {
                    b: {
                        fontSize: 12,
                        color: '#000',
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 12,
                        align: 'center',
                        padding: 4,
                        color:'#000'
                    }
                }
                }
              }
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
  height: 250px;
  // flex: 1;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
}
.zhuzhuangtu {
  width: 100%;
  height: 99%;
}
p {
  text-align: center;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%);
}
.titleLeft {
  height: 20px;
  color: #000;
  position: absolute;
  left: -2%;
  top: 10%;
  transform: rotate(-90deg) translate(-50%, 0%);
}
</style>