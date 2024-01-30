<script setup>
import PlotlyDark from './components/darktheme_chart.vue';
</script>

<script>
export default {
  components: {
    datagrid
  },
  data() {
    return {
      data: [
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter'
        },
        {
          x: [1, 2, 3],
          y: [2, 5, 3],
          type: 'scatter'
        }
      ]
    }
  }
}
</script>


<template>
  <header>
    <h1>Vue Olympia</h1>
  </header>

  <main>
      <PlotlyDark :data="data" />
  </main>
</template>
