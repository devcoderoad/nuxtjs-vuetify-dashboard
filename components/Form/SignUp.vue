<template>
  <div class="d-flex justify-center align-center min-h-100vh">
    <v-flex lg6>
      <v-row no-gutters>
        <v-container fluid class="pb-12">
          <h1 align="center">Sign Up your account</h1>
          <v-col cols="12" align="center">
            to enjoy all of our cool
            <a class="primary--text">features</a> ✌️
          </v-col>
        </v-container>
      </v-row>
      <v-col>
        <v-card elevation="2" light class="bg-wave rounded-0 px-4 py-4">
          <v-card-title class="px-3"> Sign Up </v-card-title>
          <v-form v-model="valid" name="form-login" @submit="onSubmit()">
            <v-container>
              <v-row align="left">
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model.trim="vemail"
                    type="text"
                    label="Email"
                    flat
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model.trim="vpassword"
                    type="password"
                    name="password"
                    label="Password"
                    flat
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn type="submit" color="primary">Sign Up</v-btn>
                </v-col>
                <v-col cols="12" md="6" align="right">
                  <nuxt-link to="/sign-in">Login</nuxt-link>
                  or
                  <nuxt-link to="/">Back</nuxt-link>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-flex>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'FormSignUp',
  props: {
    email: { type: String, default: '', required: true },
    password: { type: String, default: '', required: true }
  },
  data() {
    const { email, password } = this
    return { vemail: email, vpassword: password, valid: false }
  },
  methods: {
    onSubmit() {
      return console.log('submit')
    },
    onSubmitSuccess() {
      return console.log('success')
    },
    onSubmitError() {
      return console.log('error')
    }
  }
})
</script>
