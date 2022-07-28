<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Forms</h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Register</h2>
            <form name="form-register">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn class="mr-4" @click="submit"> submit </v-btn>
              <v-btn @click="clear"> clear </v-btn>
            </form>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Register</h2>
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn class="mr-4" @click="submit"> submit </v-btn>
              <v-btn @click="clear"> clear </v-btn>
            </form>
          </v-col>
          <v-col cols="12" md="6">
            <v-card ref="form">
              <v-card-text>
                <v-text-field
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Full Name"
                  placeholder="John Doe"
                  required
                ></v-text-field>
                <v-text-field
                  ref="address"
                  v-model="address"
                  :rules="[
                    () => !!address || 'This field is required',
                    () =>
                      (!!address && address.length <= 25) ||
                      'Address must be less than 25 characters',
                    addressCheck
                  ]"
                  label="Address Line"
                  placeholder="Snowy Rock Pl"
                  counter="25"
                  required
                ></v-text-field>
                <v-text-field
                  ref="city"
                  v-model="city"
                  :rules="[
                    () => !!city || 'This field is required',
                    addressCheck
                  ]"
                  label="City"
                  placeholder="El Paso"
                  required
                ></v-text-field>
                <v-text-field
                  ref="state"
                  v-model="state"
                  :rules="[() => !!state || 'This field is required']"
                  label="State/Province/Region"
                  required
                  placeholder="TX"
                ></v-text-field>
                <v-text-field
                  ref="zip"
                  v-model="zip"
                  :rules="[() => !!zip || 'This field is required']"
                  label="ZIP / Postal Code"
                  required
                  placeholder="79938"
                ></v-text-field>
                <v-autocomplete
                  ref="country"
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="Country"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-card-text>
              <v-divider class="mt-12"></v-divider>
              <v-card-actions>
                <v-btn text> Cancel </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                  <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                    </template>
                    <span>Refresh form</span>
                  </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary" text @click="submit"> Submit </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card ref="form">
              <v-card-text>
                <v-text-field
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Full Name"
                  placeholder="John Doe"
                  required
                ></v-text-field>
                <v-text-field
                  ref="address"
                  v-model="address"
                  :rules="[
                    () => !!address || 'This field is required',
                    () =>
                      (!!address && address.length <= 25) ||
                      'Address must be less than 25 characters',
                    addressCheck
                  ]"
                  label="Address Line"
                  placeholder="Snowy Rock Pl"
                  counter="25"
                  required
                ></v-text-field>
                <v-text-field
                  ref="city"
                  v-model="city"
                  :rules="[
                    () => !!city || 'This field is required',
                    addressCheck
                  ]"
                  label="City"
                  placeholder="El Paso"
                  required
                ></v-text-field>
                <v-text-field
                  ref="state"
                  v-model="state"
                  :rules="[() => !!state || 'This field is required']"
                  label="State/Province/Region"
                  required
                  placeholder="TX"
                ></v-text-field>
                <v-text-field
                  ref="zip"
                  v-model="zip"
                  :rules="[() => !!zip || 'This field is required']"
                  label="ZIP / Postal Code"
                  required
                  placeholder="79938"
                ></v-text-field>
                <v-autocomplete
                  ref="country"
                  v-model="country"
                  :rules="[() => !!country || 'This field is required']"
                  :items="countries"
                  label="Country"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-card-text>
              <v-divider class="mt-12"></v-divider>
              <v-card-actions>
                <v-btn text> Cancel </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                  <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                    </template>
                    <span>Refresh form</span>
                  </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary" text @click="submit"> Submit </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <img src="/v.png" alt="Vuetify.js" class="mt-8" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormsPage',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
