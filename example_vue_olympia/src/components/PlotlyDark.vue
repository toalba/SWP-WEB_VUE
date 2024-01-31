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
        layout: {
            type: Object
        }
    },
    mounted() {
        let darkmode = {
            paper_bgcolor: '#343a40',
            plot_bgcolor: '#212529',
            font: {
                family: 'Courier New, monospace',
                color: '#dee2e6'
            }
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.pltlayout = Object.assign(this.pltlayout, darkmode)
        }
        this.pltlayout = Object.assign(this.pltlayout, this.layout)
    },

    data() {
        return {
            pltdata: this.data,
            pltlayout: {
                width: this.width,
                height: this.height,
                title: this.title,
            }
        }
    }
}
</script>
<template>
<VuePlotly :data="pltdata" :layout="pltlayout"></VuePlotly>
<span v-if="layout">{{pltlayout}}</span>
</template>