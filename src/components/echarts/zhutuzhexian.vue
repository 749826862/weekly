<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="className")
    p(v-if="isTitle") 配电自动化故障自愈实现率周趋势
    //- p.titleLeft 配变台区数(台)
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
          console.log(document.querySelector("." + this.className), 888);
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
            bottom: 45,
            left:100,
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            top: "5%",
            left:"15%",
            itemWidth:10,
            itemHeight:10,
            borderRadius:0,
            textStyle: {
              color: "#90979c"
            },
            data: ["女", "男", "平均"]
          },
          calculable: true,
          xAxis: [
            {
              show:true,
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
                interval: 0,
                formatter:function(value){
                    return value.split("").join("\n")
                }
              },
              data: ["周一", "周二", "周三", "周四", "周五", "石景山", "周日"]
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
            },
            {
              type: "value",
              min:0,
              max:100,
              splitLine: {
                show: false
              },
              position: "right",
              axisLine: {
                lineStyle: {
                  color: "#000"
                }
              },
              axisTick: {
                show: true
              },
              axisLabel: {
                interval: 0,
                formatter: "{value} %", //右侧Y轴文字显示
              },
              splitArea: {
                show: false
              }
            }
          ],
          series: [
            {
              name: "女",
              type: "bar",
              stack: "总量",
              yAxisIndex: 0,
              barMaxWidth: 15,
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
              data: [120, 132, 101, 134, 90, 230, 210]
            },

            {
              name: "男",
              type: "bar",
              yAxisIndex: 0,
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
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: "总数",
              type: "line",
              symbolSize: 10,
              yAxisIndex: 1,
              smooth: true, //平滑曲线显示
              showAllSymbol: true, //显示所有图形。
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "#9bbb59",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    color: "#000",
                    position: "top"
                  }
                }
              },
              data: [10, 93, 26, 38, 51, 15, 48]
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
  height: 300px;
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