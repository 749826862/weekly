<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="className")
    p(v-if="isTitle") 配电自动化故障自愈实现率周趋势
    p.titleLeft 配变台区数(台)
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          xData:["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          serverData:[
            [120, 132, 101, 134, 90, 230, 210],
            [220, 182, 191, 234, 290, 330, 310],
            [1036, 3693, 2962, 3810, 2519, 1915, 1748]
          ]
        };
      }
    },
    className: {
      type: String,
      default: () => {
        return "";
      }
    },
    isTitle: {
      type: Boolean,
      default: false
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
          backgroundColor: "#fff",
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              textStyle: {
                color: "#fff"
              }
            }
          },
          grid: {
            borderWidth: 0,
            top: 20,
            bottom: 5,
            left:100,
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            top: "5%",
            left:"15%",
            orient:"vertical",
            itemWidth:10,
            itemHeight:10,
            borderRadius:0,
            textStyle: {
              fontSize:10,
              color: "#000"
            },
            data: ["不合格配变数(台)","合格配变数(台)"]
          },

          calculable: true,
          xAxis: [
            {
              show:false,
              type: "category",
              axisLine: {
                lineStyle: {
                  color: "#000"
                }
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitArea: {
                show: false
              },
              axisLabel: {
                interval: 0
              },
              data: this.value.xNames
            }
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: true
              },
              axisLine: {
                lineStyle: {
                  color: "#000"
                }
              },
              axisTick: {
                show: true
              },
              axisLabel: {
                interval: 0
              },
              splitArea: {
                show: false
              }
            }
          ],
          series: [
            {
              name: "不合格配变数(台)",
              type: "bar",
              stack: "总量",
              barMaxWidth: 25,
              barGap: "10%",
              itemStyle: {
                normal: {
                  color: "#4e79a7",
                  label: {
                    show: false,
                    textStyle: {
                      color: "#fff"
                    },
                    position: "insideTop",
                    formatter: function(p) {
                      return p.value > 0 ? p.value : "";
                    }
                  }
                }
              },
              data: this.value.xValues1
            },
            {
              name: "合格配变数(台)",
              type: "bar",
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#e15759",
                  barBorderRadius: 0,
                  label: {
                    show: false,
                    position: "top",
                  }
                }
              },
              data: this.value.xValues2
            },
            {
              name: "总数",
              type: "line",
              stack: "总量",
              symbolSize: 10,
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "#008080",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter: function(p) {
                      return p.value > 0 ? p.value : "";
                    }
                  }
                }
              },
              data: this.value.xValues3
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
.titleLeft{
  height: 20px;
  color: #000;
  position: absolute;
  left: -2%;
  top: 10%;
  transform: rotate(-90deg) translate(-50%,0%);
}
</style>