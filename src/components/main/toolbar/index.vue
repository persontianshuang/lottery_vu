<template>

  <v-list dense>
        <template v-for="(item, i) in items">
          <!-- <router-link to="/foo"> -->

            <v-list-tile @click="push(item.to)">
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
  import storage from 'good-storage'

  export default {
    components: {

    },

    data: () => ({
      items: []
    }),

    methods: {

      push(data) {
        // console.log(data)
        this.$router.push(data)
      },

      get_items() {
          const role =  storage.get('FS_role')
          // console.log(role)
          if(role=='agent2') {
                        
            const to = [{ icon: 'contacts', text: '实时销售数据',to:'/agent2_bar1' },
            { icon: 'history', text: '历史销售数据',to:'/agent2_bar2' },]

            return to
          }

          else{

            
            const to = [{ icon: 'contacts', text: '实时销售数据',to:`/${role}_bar1` },
            { icon: 'history', text: '历史销售数据',to:`/${role}_bar2` },
            { icon: 'content_copy', text: '下属管理',to:`/${role}_bar3` },]
        
            return to
          }

      }

    },

    beforeMount () {
      this.items = this.get_items()
    }




  }
</script>
