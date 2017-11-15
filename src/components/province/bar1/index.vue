<template>
<div>
    <bar1_table1></bar1_table1> 
    <bar1_table2></bar1_table2> 
    <div class="pad">
        <bar1_table3></bar1_table3> 
    </div>
</div>

</template>

<script>

    import bar1_table1 from './table1'
    import bar1_table2 from './table2'
    import bar1_table3 from './table3'

    name: 'province_bar1'

    export default {
    components: {
        bar1_table1,
        bar1_table2,
        bar1_table3,
    },


    data: () => ({

    }),

    }
</script>


<style>

.pad{
  padding-top: 20px;
}

</style>
