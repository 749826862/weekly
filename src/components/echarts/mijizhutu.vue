<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="this.chartsOption.className")
    p {{ chartsOption.tableName }}
    p.titleLeft 过电压异常(台)
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
          isRow:true,
          tableName:""
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
            right:"5%",
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            bottom: "0%",
            left: "40%",
            itemWidth: 30,
            itemHeight: 10,
            itemGap:40,
            borderRadius: 0,
            textStyle: {
              color: "#000"
            },
            data: ["异动总时长(小时)"]
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
                show: true,
                alignWithLabel:true
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
              data: ["10", "20", "30", "40"]
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
              name: "异动总时长(小时)",
              type: "bar",
              yAxisIndex: 0,
              stack: "总量",
              barMaxWidth: 3,
              barGap:"0%",
              barCategoryGap:"0%",
              itemStyle: {
                normal: {
                  color: "orange",
                  barBorderRadius: 0,
                  label: {
                    show: false,
                    position: "top"
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
  height: 303px;
  // flex: 1;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
}
.zhuzhuangtu {
  width: 90%;
  height: 99%;
   border: 1px solid #ccc;
  margin: 0 auto;
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
  left: -3%;
  top: 24%;
  font-size: 12px;
  transform: rotate(-90deg) translate(-50%, 0%);
}
</style>