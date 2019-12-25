<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="this.chartsOption.className")
    p(v-if="this.chartsOption.isTitle") 图7 电压不合格配变周趋势
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
          data1:[27, 32, 10, 13],
          data2:[20, 18, 9, 24],
          data3:[20, 18, 19, 34]
        };
      }
    },
    chartsOption:{
      type: Object,
      default:()=>{
        return {
          className:"",
          isTitle:true,
          isRow:true
        }
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
            top: 30,
            bottom: 50,
            left: 60,
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            bottom: "0%",
            left: "20%",
            itemWidth: 30,
            itemHeight: 10,
            borderRadius: 0,
            textStyle: {
              color: "#000"
            },
            data: ["低电压异常(台)", "过电压异常(台)", "数据异常(台)"]
          },
          calculable: true,
          xAxis: [
            {
              show: true,
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
                formatter:(value) => {
                  return this.chartsOption.isRow? value:value.split("").join("\n")
                }
              },
              data: ["1106", "1113", "1120", "1127"]
            }
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "#333"
                }
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
              name: "低电压异常(台)",
              type: "bar",
              stack: "总量",
              yAxisIndex: 0,
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
              data: this.value.data1
            },
            {
              name: "过电压异常(台)",
              type: "bar",
              yAxisIndex: 0,
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#e15759",
                  barBorderRadius: 0,
                  label: {
                    show: false,
                    position: "top"
                  }
                }
              },
              data: this.value.data2
            },
            {
              name: "数据异常(台)",
              type: "bar",
              yAxisIndex: 0,
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#9bbb59",
                  barBorderRadius: 0,
                  label: {
                    show: false,
                    position: "top",
                    color:"#000"
                  }
                }
              },
              data: this.value.data3
            },
            {
              name: "过电压异常(台)",
              type: "bar",
              yAxisIndex: 0,
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#8064a2",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter:(parms)=>{  
                      return parms.value+this.value.data1[parms.dataIndex]+this.value.data2[parms.dataIndex]+this.value.data2[parms.dataIndex]
                    }
                  }
                }
              },
              data: this.value.data2
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
  border: 1px solid #ccc;
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