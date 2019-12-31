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
          xData: [
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周"
          ],
          serverData: [
            [102, 52, 200, 334, 90, 100, 220],
            [12, 52, 20, 124, 190, 10, 22]
          ]
        };
      }
    },
    chartsOption: {
      type: Object,
      default: () => {
        return {
          className: "", //类名
          isRow: true, // x轴标签横向纵向显示，true为横向，false为纵向
          legendName: ["北京地区10kv线路同期线损率(%)"], //图例显示文字
          tableName: "图1 北京地区同期线损率周趋势" //表格名称
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
          legend: {
            data: this.chartsOption.legendName?"":this.chartsOption.legendName,
            bottom:"0",
            textStyle: {
              color: "#000",
              fontSize: 14,
              fontFamily: "PingFangSC",
              fontWeight: 300
            }
          },
          calculable: false,
          grid: [
            {
              // height: 378,
              left:"2%",
              right:"20%",
              top: 18,
              bottom:30,
              containLabel: true
              // width: 478
            },
            {
              // height: 378,
              // width: 500,
              bottom:50,
              top: 15
            }
          ],
          xAxis: [
            {
              // max: 500,
              splitNumber: 8,
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#10899A"
                }
              },
              axisTick: {
                show: false,
                inside: true,
                lineStyle: {
                  color: "#10899A",
                  fontSize: 14,
                  fontWeight: 300
                }
              },
              splitLine: {
                show: true
              },
              axisLabel: {
                formatter: params => {
                  return "{marginTop|" + params + "}";
                },
                rich: {
                  marginTop: {
                    padding: [0, 0, 0, 0],
                    color: "#000",
                    fontSize: 14,
                    fontWeight: 300
                  }
                }
              }
            },
            {
              gridIndex: 1,
              show: false,
              offset: 13,
              axisLine: {
                lineStyle: {
                  color: "#10899A"
                }
              }
            }
          ],
          yAxis: [
            {
              name: "",
              data: [
                "<-100",
                "[-100,-90)",
                "2019/03",
                "2019/04",
                "2019/05",
                "2019/06",
                "2019/07",
                "2019/08",
                "2019/09",
                "2019/10",
                "2019/11",
                "2019/12"
              ],
              axisLabel: {
                show: true,
                formatter: params => {
                  return "{marginTop|" + params + "}";
                },
                rich: {
                  marginTop: {
                    padding: [0, 0, 0, 0],
                    color: "#000",
                    fontSize: 14,
                    fontFamily: "PingFangSC",
                    fontWeight: 300
                  }
                }
              },

              axisLine: {
                lineStyle: {
                  color: "#ccc"
                }
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: "#000",
                  fontSize: 14,
                  fontFamily: "PingFangSC",
                  fontWeight: 300
                }
              }
            },
            {
              gridIndex: 1,
              position: "left",
              nameTextStyle: {
                color: "#06D3CD",
                padding: [0, 0, 0, 8],
                fontSize: 14,
                fontFamily: "PingFangSC",
                fontWeight: 300
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#10899A"
                }
              },
              splitLine: {
                show: false
              }
            }
          ],
          series: [
            {
              name: this.chartsOption.legendName && this.chartsOption.legendName[0],
              type: "bar",
              itemStyle: {
                barBorderRadius: 0,
                color: "rgba(79,129,189,1)"
              },
              label: {
                show: true,
                color: "#000",
                position: ["100%", "0%"],
                formatter: p => {
                  return p.value + ` (${p.value}%)`;
                }
              },
              barWidth: 10,
              data: [482, 378, 446, 518, 238, 358, 312, 378, 220, 452, 302, 600]
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