<template>
  <div class="d-flex justify-center align-center min-h-100vh">
    <v-flex lg6>
      <v-row no-gutters>
        <v-container fluid class="pb-12">
          <h1 align="center">Sign in to your account</h1>
          <v-col cols="12" align="center">
            to enjoy all of our cool
            <a class="primary--text">features</a> ✌️
          </v-col>
        </v-container>
      </v-row>
      <v-col>
        <v-card elevation="2" light>
          <v-card-title> Login to Your Account </v-card-title>
          <v-form v-model="valid" name="form-login" @submit="onSubmit()">
            <v-container>
              <v-row align="left">
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model.trim="vemail"
                    type="text"
                    label="Email"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model.trim="vpassword"
                    type="password"
                    name="password"
                    label="Password"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-col>
                <v-col cols="12" md="6" align="right">
                  <nuxt-link to="/forgot-password">Forgot Password</nuxt-link>
                  or
                  <nuxt-link to="/">Back</nuxt-link>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <v-col>
        Don't have an account?
        <nuxt-link to="/sign-up">Sign Up</nuxt-link>
      </v-col>
    </v-flex>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FormSignIn',
  props: {
    email: { type: String, default: '' },
    password: { type: String, default: '' }
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
