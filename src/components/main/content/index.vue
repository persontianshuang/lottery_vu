<template>
<main>
    <v-content>
      <v-container>
<!-- <router-link to="/province_bar1">Go to Foo</router-link>
    <router-link to="/city_bar1">Go to Bar</router-link> -->

    <keep-alive>
<router-view></router-view>
</keep-alive>
        <!-- <province_bar2></province_bar2> -->
        <!-- <province_bar1></province_bar1> -->
        <!-- <city_bar1></city_bar1> -->
        <!-- <agent1_bar1></agent1_bar1> -->
        <!-- <agent2_bar1></agent2_bar1> -->
      </v-container>
    </v-content>

</main>


</template>

<script>
  import province_bar1 from '../../province/bar1/index'
  import city_bar1 from '../../city/bar1/index'
  import agent1_bar1 from '../../agent.1/bar1/index'
  import agent2_bar1 from '../../agent.2/bar1/index'

  import province_bar2 from '../../province/bar2/index'

  export default {
    components: {
      province_bar1,
      city_bar1,
      agent1_bar1,
      agent2_bar1,

      province_bar2
    },


    data: () => ({
      

    }),



  }
</script>


<style>



</style>
