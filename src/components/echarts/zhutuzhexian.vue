<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="className")
    p {{ title.tableName }}
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
          xData:["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          serverData:[
            [120, 132, 101, 134, 90, 230, 210],
            [220, 182, 191, 234, 290, 330, 310],
            [10, 93, 26, 38, 51, 15, 48]
          ]
        };
      }
    },
    title:{
      type: Object,
      default: () => {
        return {
          tableName:"图6 各单位配变电压合格率分布",
          legendName:["电压合格配变数(台)", "电压不合格配变数(台)", "配变电压合格率(%)"]
        };
      }
    },
    className: {
      type: String,
      default: () => {
        return "";
      }
    },
    isRow:{
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
            top: "10%",
            bottom: "25%",
            left: "10%",
            right:"10%",
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            bottom: "0%",
            left:"14%",
            itemWidth:30,
            itemHeight:10,
            borderRadius:0,
            textStyle: {
              color: "#000"
            },
            data: this.title.legendName
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
                formatter:(value) => {
                  return this.isRow? value:value.split("").join("\n")
                }
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
              name: this.title.legendName[0],
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
              data: this.value.xValues1
            },

            {
              name: this.title.legendName[1],
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
              data: this.value.xValues2
            },
            {
              name: this.title.legendName[2],
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
  height: 300px;
  // flex: 1;
  // padding-bottom: 20px;
  
  box-sizing: border-box;
  position: relative;
}
.zhuzhuangtu {
  width: 90%;
  // margin:0 5px;
  height: 99%;
  border: 2px solid #ccc;
  margin: 0 auto;
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