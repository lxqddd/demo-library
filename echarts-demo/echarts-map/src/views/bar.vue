
<template>
  <div>
    <echars :options="bar" width="100vw" height="100vh" />
  </div>
</template>

<script>

import echars from '@com/echars'
export default {
  name: 'App',
  components: { echars },
  data() {
    return {
      bar: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }}
  }

}
</script>
<style>
</style>
