<script>
export default {
    name: 'datagrid',
    components: {
        DataTable
    },
    props: {
        datacolumns: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <table>
        <thead>
        <tr>
            <th v-for="column in datacolumns" :key="column.field">
            {{ column.label }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in rows" :key="row.id">
            <td v-for="column in datacolumns" :key="column.field">
            {{ row[column.field] }}
            </td>
        </tr>
        </tbody>
    </table>
</template>