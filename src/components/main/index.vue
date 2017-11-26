<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <main_toolbar></main_toolbar>
    </v-navigation-drawer>
    <v-toolbar
      color="grey darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        天天500
      </v-toolbar-title>

      <v-spacer></v-spacer>
    
      </v-btn>
      
      <logout></logout>


    </v-toolbar>
    <!-- <div>
      <router-view></router-view>
    </div> -->
    <main_content></main_content>


    
  </v-app>
</template>

<script>
  import storage from 'good-storage'

  import Content from './content/index'
  import Toolbar from './toolbar/index'
  import logout from '@/components/login_signup/logout'

  export default {
    name: 'maina',

    components: {
      'main_content': Content,
      'main_toolbar': Toolbar,
      logout
    },

    data: () => ({
      drawer: false,


    }),





  }
</script>
