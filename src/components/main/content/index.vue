<template>
<main>
    <v-content>
      <v-container>
        <!-- <province_bar1></province_bar1> -->
        <!-- <city_bar1></city_bar1> -->
        <!-- <agent1_bar1></agent1_bar1> -->
        <agent2_bar1></agent2_bar1>
      </v-container>
    </v-content>

</main>


</template>

<script>
  import province_bar1 from '../../province/bar1/index'
  import city_bar1 from '../../city/bar1/index'
  import agent1_bar1 from '../../agent.1/bar1/index'
  import agent2_bar1 from '../../agent.2/bar1/index'

  export default {
    components: {
      province_bar1,
      city_bar1,
      agent1_bar1,
      agent2_bar1
    },


    data: () => ({
      

    }),



  }
</script>


<style>



</style>
