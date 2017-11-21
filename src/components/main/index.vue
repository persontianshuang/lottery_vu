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
      <v-btn icon large to='/province_bar1'>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>

    <!-- <router-view></router-view> -->
    <main_content></main_content>


    
  </v-app>
</template>

<script>
  import Content from './content/index'
  import Toolbar from './toolbar/index'

  export default {
    name: 'maina',

    components: {
      'main_content': Content,
      'main_toolbar': Toolbar,
    },

    data: () => ({
      drawer: false,

    }),



  }
</script>
