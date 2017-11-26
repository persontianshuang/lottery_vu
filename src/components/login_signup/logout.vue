<template>

<div>
<v-btn @click.native.stop="dialog = true">{{ username }}</v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        
        <v-card-text>确定要退出账号吗 ?</v-card-text>   
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">取消</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="logout()">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</div>


</template>


<script>
  import storage from 'good-storage'
  

  name: 'logout'

  export default {

    
    data: () => ({
        username: '未登录',
        dialog: false

    }),


    methods: {
      logout() {
          storage.remove('FS_token')
          storage.remove('FS_role')
          storage.remove('FS_name')
          this.dialog = false
          this.$router.push({ path: `/login` })
      }

    },
    beforeMount () {
        const un = storage.get('FS_name')
        this.username = un
    }
     



  }
</script>