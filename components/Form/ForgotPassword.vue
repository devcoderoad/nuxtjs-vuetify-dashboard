<template>
  <v-card elevation="2">
    <v-form v-model="valid" name="form-login" @submit="onSubmit()">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.trim="vemail"
            type="text"
            label="Email"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-btn type="submit">Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FormForgotPassword',
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
