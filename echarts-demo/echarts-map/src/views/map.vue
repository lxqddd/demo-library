<template>
  <div class="content" ref="content" @dblclick="reverMap"></div>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
import "@/assets/theme/chalk";
import { getProvinceMapInfo, getQueryContainProvince } from "@/utils/map_utils";
export default {
  data() {
    return {
      mCharts: null,
      mapData: {},
    };
  },
  methods: {
    getinit() {
      this.mCharts = echarts.init(this.$refs.content, "chalk");
      var scatterData = [
        {
          name: "医院",
          children: [
            {
              name: "武汉",
              value: [114, 30.5],
            },
            {
              name: "合肥",
              value: [117.4, 31.5],
            },
            {
              name: "北京",
              value: [116, 40],
            },
            {
              name: "呼和浩特",
              value: [111, 40.8],
            },
            {
              name: "拉萨",
              value: [91.1, 29.8],
            },
          ],
        },
        {
          name: "诊所",
          children: [
            {
              name: "深圳",
              value: [114, 22.6],
            },
            {
              name: "三亚",
              value: [109.5, 18.2],
            },
            {
              name: "沈阳",
              value: [122.8, 42],
            },
          ],
        },
      ];
      const seriesArr = scatterData.map((item) => {
        return {
          type: "effectScatter",
          name: item.name,
          data: item.children,
          coordinateSystem: "geo",
          symbolSize: 3,
          label: {
            show: true,
            formatter: '{b}'
          },
          rippleEffect: {
            scale: 10, // 设置涟漪动画的缩放比例
            color: item.name === "医院" ? "#DDD" : "#86D80F",
          },
        };
      });
      const legendArr = scatterData.map((item) => {
        return {
          name: item.name,
          itemStyle: {
            color: item.name === "医院" ? "#DDD" : "#86D80F",
          },
        };
      });
      axios.get("maps/china.json").then((res) => {
        echarts.registerMap("china", res.data);
        var option = {
          geo: {
            type: "map",
            map: "china", // chinaMap需要和registerMap中的第一个参数保持一致
            roam: true, // 设置允许缩放以及拖动的效果
            zoom: 1, // 设置初始化的缩放比例
            top: "10%",
            bottom: "0%",
            itemStyle: {
              areaColor: "#2E72BF",
              borderColor: "#333",
            },
          },
          legend: {
            data: legendArr,
            left: "5%",
            bottom: "5%",
            orient: "vertical",
          },
          title: {
            text: "▍医院分布",
            left: 20,
            top: 20,
          },
        };
        option.series = seriesArr;
        this.mCharts.setOption(option);
        // 单击事件
        this.addChartClick();
      });
    },
    scrrenAdapter() {
      console.log(113213);
      const titleFontSize = (this.$refs.content.offsetWidth / 100) * 2;
      const option = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        legend: {
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          itemGap: titleFontSize / 2,
          textStyle: {
            fontSize: titleFontSize / 2.4,
          },
        },
      };
      this.mCharts.setOption(option);
      this.mCharts.resize();
    },
    // 双击事件
    reverMap() {
      const reverOption = {
        geo: {
          map: "china",
        },
      };
      this.mCharts.setOption(reverOption);
    },
    addChartClick() {
      this.mCharts.on("click", async (arg) => {
        console.log(arg.name)
        // 当所点击城市名字，不被map_utils中的对象包括，则终止执行
        if (!getQueryContainProvince(arg.name)) return
        const provinceInfo = getProvinceMapInfo(arg.name);
        if (!this.mapData[provinceInfo.key]) {
          await axios.get(provinceInfo.path).then((res) => {
            this.mapData[provinceInfo.key] = res.data;
            echarts.registerMap(provinceInfo.key, res.data);
          });
        }
        const changeOption = {
          geo: {
            map: provinceInfo.key,
          },
        };
        this.mCharts.setOption(changeOption);
      });
    },
  },
  mounted() {
    this.getinit();
    // 窗口发生改变调用
    window.addEventListener("resize", this.scrrenAdapter);
    this.scrrenAdapter();
  },
};
</script>
<style lang="scss">
.content {
  width: 100%;
  height: 100%;
}
</style>