<template>
  <div class="d-flex justify-center align-center min-h-100vh">
    <v-flex lg6>
      <v-col>
        <v-card elevation="2" light>
          <v-card-title> Sign Up </v-card-title>
          <v-form v-model="valid" name="form-login" @submit="onSubmit()">
            <v-container>
              <v-row>
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

<script lang="ts">
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
