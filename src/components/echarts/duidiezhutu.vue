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
          company:"",
          tableName:"图6  国网一次办结工单在各单位的分布情况",
          legendName:[]
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
            top: 40,
            right:"4%",
            bottom: 70,
            left: 60,
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            bottom: "0%",
            left: "35%",
            itemWidth: 30,
            itemHeight: 10,
            itemGap:40,
            borderRadius: 0,
            textStyle: {
              color: "#000"
            },
            data: this.chartsOption.legendName
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
              data: this.value.xNames
            }
          ],
          yAxis: [
            {
              type: "value",
              name:this.chartsOption.company?this.chartsOption.company:"",
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
              name: this.chartsOption.legendName[0],
              type: "bar",
              yAxisIndex: 0,
              stack: "总量",
              barMaxWidth: 15,
              itemStyle: {
                normal: {
                  color: "#4f81bd",
                  barBorderRadius: 0,
                  label: {
                    show: false,
                    position: "top",
                    color:"#000"
                  }
                }
              },
              data: this.value.xValues2
            },
            {
              name: this.chartsOption.legendName[1],
              type: "bar",
              yAxisIndex: 0,
              stack: "总量",
              barMaxWidth: 15,
              itemStyle: {
                normal: {
                  color: "#c0504d",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    color:"#000",
                    formatter:(parms)=>{  
                      return parms.value+this.value.xValues2[parms.dataIndex]
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
  height: 303px;
  // flex: 1;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
}
.zhuzhuangtu {
  width: 100%;
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
  white-space: nowrap;
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