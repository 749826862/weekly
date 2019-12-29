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
            [10, 152, 100, 34, 390, 330, 20]
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
          legendName: ["统计线损率累计值(%)", "同期线损率(%)"], //图例显示文字
          tableName: "图1 北京地区同期线损率周趋势", //表格名称
          isMarkline: true //是否显示辅助线
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
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: "5%",
            left: "3%",
            right: "4%",
            bottom: "9%",
            containLabel: true
          },
          legend: {
            show: true,
            bottom: 0
          },
          xAxis: [
            {
              type: "category",
              data: this.value.xData,
              axisTick: {
                alignWithLabel: false
              },
              axisLabel: {
                interval: 0,
                formatter: value => {
                  return this.chartsOption.isRow
                    ? value
                    : value.split("").join("\n");
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                //y轴
                show: false
              },
              axisTick: {
                //y轴刻度线
                show: false
              }
            }
          ],
          series: [
            {
              name: "统计线损率累计值(%)",
              type: "bar",
              barWidth: "20%",
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: "top"
                  },
                  color: "rgba(79,129,189,1)"
                }
              },
              data: this.value.serverData[0]
            },
            {
              name: "同期线损率(%)",
              type: "bar",
              barWidth: "20%",
              barGap: "0%",
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: "top"
                  },
                  color: "rgba(192,80,77,1)"
                }
              },
              data: this.value.serverData[1]
            }
          ]
        };

        // 辅助线
        let markline = {
          name: "本周北京地区同期线损率(6.51%)",
          type: "line",
          barGap: "0%",
          itemStyle: {
            normal: {
              type: "dashed",
              color: "rgba(155,187,89,1)"
            }
          },
          markLine: {
            symbol: "none",
            data: [
              {
                name: "Y 轴值为 100 的水平线",
                yAxis: 300,
                lineStyle: {
                  width: 3,
                  show: false,
                  color: "rgba(155,187,89,1)"
                },
                label: {
                  show: false
                }
              }
            ]
          }
        };
        this.chartsOption.isMarkline ? option.series.push(markline) : "";
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