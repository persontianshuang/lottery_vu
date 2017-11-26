<template>

<div>
 <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>

     <v-snackbar
      :timeout="timeout"
      v-model="snackbar"
    >
      {{ text }}
    </v-snackbar>

        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>天天500</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span class="title">登录</span>

            <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="手机号"
              class="mt-5"
              v-model="middle" 
              :rules="[() => middle.length == 11 || '请输入正确的手机号码']"
              required
            ></v-text-field>



            <v-text-field
              label="密码"
              class="mt-5"
              v-model="password" 
              type="password"
              :rules="[() => password.length>6 || '请输入正确的密码']"
              required
            ></v-text-field>

                <v-btn
                @click="submit"
                :disabled="!valid"
              >
                submit
              </v-btn>
            </v-form>

 
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>


</template>


<script>
  import storage from 'good-storage'

  import { login } from '@/components/api/user'
  

  name: 'login'

  export default {

    
    data: () => ({

        middle: '',
        password: '',


        valid: true,


        snackbar: false,
        timeout: 6000,
        text: '手机号或密码不正确，请重新确认'
    }),


    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          login(this.middle,this.password)
          .then((response) => {
              // console.log(response.data)
              //登录成功后将token存储在localstorage中
              const tk = response.data.token
              const name = response.data.name
              const role = response.data.role
              if(tk){
                storage.set('FS_token', tk); 
                storage.set('FS_name', name); 
                storage.set('FS_role', role); 
                // 跳转到对应的主页
                this.$router.push({ path: `/${role}_bar1` })
              }

              else{
                this.snackbar = true
              }
              

            })

        }
      },
      

    },

    mounted() {
      console.log('1')
      console.log(storage.get('FS_token'))
      console.log('2')
      if(storage.get('FS_token')){
        const role = storage.get('FS_role')
        this.$router.push({ path: `/${role}_bar1` })
      }


    }
     



  }
</script>


