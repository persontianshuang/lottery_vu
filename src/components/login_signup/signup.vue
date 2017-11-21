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
            <span class="title">注册</span>

            <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="手机号"
              class="mt-5"
              v-model="first" 
              :rules="[() => first.length == 11 || '请输入正确的手机号码']"
              required
            ></v-text-field>

            <v-text-field
              label="用户名"
              class="mt-5"
              v-model="middle" 
              :rules="[() => middle.length > 1 || '请输入你的用户名']"
              required
            ></v-text-field>


            <v-text-field
              label="密码"
              class="mt-5"
              v-model="password" 
              type="password"
              :rules="[() => password.length>6 || '密码至少要6位']"
              required
            ></v-text-field>

            <v-text-field
              label=" 再次输入密码"
              class="mt-5"
              v-model="r_password" 
              type="password"
              :rules="[() => password==r_password || '密码与上面的输入不一致']"
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
  export default {

    name: 'signup',
    data: () => ({
        first: '',
        middle: '',
        password: '',
        r_password: '',

        valid: true,
    }),


    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          // axios.post('/api/submit', {
          //   name: this.name,
          //   email: this.email,
          //   select: this.select,
          // })

          console.log('yes')
        }
      },

    }
     



  }
</script>