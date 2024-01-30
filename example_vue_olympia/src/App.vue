<script setup>
import PlotlyDark from './components/PlotlyDark.vue';
</script>

<script>
  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
    };
    var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'};
export default {
  components: {
    PlotlyDark
  },
  data() {
    return {
      pltdata: [trace1, trace2],
      layout: {
        barmode: 'stack'
      }
    }
  }
}
</script>


<template>
  <header>
    <h1>Vue Olympia</h1>
  </header>

  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <PlotlyDark :data="pltdata" :layout="layout" />
        </div>
      </div>
    </div>
  </main>
</template>
