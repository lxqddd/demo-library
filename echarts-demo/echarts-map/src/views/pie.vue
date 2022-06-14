
<template>
  <div>
    <echars :options="pie" width="100vw" height="100vh" />
  </div>
</template>

<script>

import echars from '@com/echars'
export default {
  name: 'App',
  components: { echars },
  data() {
    return {
      pie: {
        title: {
          text: '主标题',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left'
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }

}
</script>
<style>
</style>
