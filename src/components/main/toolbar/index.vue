<template>

  <v-list dense>
        <template v-for="(item, i) in items">
          <!-- <router-link to="/foo"> -->

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

          <!-- </router-link> -->
        </template>
      </v-list>

</template>

<script>

  export default {
    components: {

    },

    data: () => ({
      items: [
        { icon: 'contacts', text: '实时销售数据' },
        { icon: 'history', text: '历史销售数据' },
        { icon: 'content_copy', text: '下属管理' },
        
      ]
    }),

  }
</script>
