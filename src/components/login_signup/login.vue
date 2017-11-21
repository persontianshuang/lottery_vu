<template>

<div>
 <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
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

  import { login } from '@/components/api/user'

  name: 'login'

  export default {

    
    data: () => ({

        middle: '',
        password: '',


        valid: true,
    }),


    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          login(this.middle,this.password)
          .then((response) => {
              console.log(response.data)
              this.$router.push({ path: '/province_bar1' })

                    Cookies.set('Token', response.data.token); //登录成功后将token存储在cookie之中
      commit('SET_TOKEN', data.token);
      commit('SET_EMAIL', email);



            })

        }
      },

    }
     



  }
</script>