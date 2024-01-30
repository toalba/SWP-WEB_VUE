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

<template>
    <PlotlyDark :data="data" />
</template>