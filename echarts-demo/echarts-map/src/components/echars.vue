<template>
  <div ref="wrapper" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Chart",
  props: {
    options: {
      type: Object,
      default() {
        return undefined;
      },
    },
    height: {
      type: String,
      default: "380px",
    },
    width: {
      type: String,
      default: "600px",
    },
    chinaJson:{
       type: Array,
       default:null
    }
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    options: {
      deep: true,
      handler(value) {
        this.chart.setOption(value);
      },
    },
  },
  mounted() {
    if (this.options === undefined) {
      return console.error("options 为空");
    }
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.wrapper);
   console.log(61245341313,this.chinaJson)
      // this.chart.registerMap("china", chinaJson);
      this.chart.setOption(this.options);
    },
  },
};
</script>
