<script>
import {VuePlotly} from 'vue3-plotly';
export default {
    components: {
        VuePlotly
    },
    data() {
        return {
            data: [
                {x: [1, 2, 3], y: [2, 4, 6], type: 'scatter'},
            ],
            layout: {
                width: 320,
                height: 240,
                title: 'A Fancy Plot',
                showlegend: true,
                paper_bgcolor: '#343a40',
                plot_bgcolor: '#212529',
            },
        }
    }
}
</script>
<template>

<VuePlotly :data="data" :layout="layout"></VuePlotly>
</template>