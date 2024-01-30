<script>
import {VuePlotly} from 'vue3-plotly';
export default {
    name: 'PlotlyDark',
    components: {
        VuePlotly
    },
    props: {
        data: {
            type: Array,
            required: true
        },
        width: {
            type: Number,
            default: 720
        },
        height: {
            type: Number,
            default: 720
        },
        title: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            data: this.data,
            layout: {
                width: this.width,
                height: this.height,
                title: this.title,
                showlegend: true,
                paper_bgcolor: '#343a40',
                plot_bgcolor: '#212529',
                font: {
                    family: 'Courier New, monospace',
                    color: '#dee2e6'
                }
            },
        }
    }
}
</script>
<template>
<VuePlotly :data="data" :layout="layout"></VuePlotly>
</template>