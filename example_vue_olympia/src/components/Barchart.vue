<template>
    <PlotlyDark :data="data" :layout="layout" />
</template>
<script>
import PlotlyDark from './PlotlyDark.vue';
export default {
    name: 'BarChart',
    components: {
    PlotlyDark
    },
    props: {
        dataarr: {
            type: Array,
            required: true
        },
        layout: {
            type: Object
        }
    },
    data() {
        return {
            data: {
                x: this.dataarr.x,
                y: this.dataarr.y,
                type: 'bar'
            }
        }
    }
}
</script>