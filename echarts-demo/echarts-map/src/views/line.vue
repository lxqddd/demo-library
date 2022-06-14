<template>
  <div class="content">
    <echars :options="line" width="1000px" height="500px" />
  </div>
</template>

<script>
import echars from '@com/echars'
export default {
  name: 'App',
  components: { echars },
  data() {
    return {
      line: {
        title: {
          text: '主标题',
          link: 'http://www.baidu.com',
          textStyle: {
            color: '#018AFF'
          },
          top: '20',
          left: '48%'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    }
  }
}
</script>
<style>
.content {
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
}
</style>
