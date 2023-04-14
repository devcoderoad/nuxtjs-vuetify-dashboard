<template>
  <v-row>
    <v-col class="text-center">
      <PageHeader title="Forms" />
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="px-4 py-4">
              <v-card-text>
                <h2 class="title-page-sub">Register</h2>
                <v-form name="form-register">
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
                    :items="itemRegister"
                    :error-messages="selectErrors"
                    label="Registrant"
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

                  <v-btn tile color="primary" class="mr-4" @click="submit">
                    submit
                  </v-btn>
                  <v-btn tile @click="clear"> clear </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Register</h2>
            <v-form class="my-6">
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="Password"
                    type="password"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="passwordConfirm"
                    :error-messages="passwordConfirmErrors"
                    label="Confirmation"
                    type="password"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select> -->
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
            </v-form>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Register</h2>
            <v-card light>
              <v-form>
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
                    :items="items"
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
              </v-form>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Register</h2>
            <v-card ref="form" light>
              <v-form>
                <v-card-text>
                  <v-row>
                    <v-col
                      ><v-text-field
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Full Name"
                        placeholder="John Doe"
                        required
                      ></v-text-field
                    ></v-col>
                    <v-col
                      ><v-text-field
                        ref="email"
                        v-model="email"
                        :rules="[() => !!email || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Email"
                        placeholder="email@email.com"
                        required
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-autocomplete
                        ref="country"
                        v-model="country"
                        :rules="[() => !!country || 'This field is required']"
                        :items="items"
                        label="Country"
                        placeholder="Select..."
                        required
                      ></v-autocomplete>
                    </v-col>
                    <v-col
                      ><v-text-field
                        ref="city"
                        v-model="city"
                        :rules="[
                          () => !!city || 'This field is required',
                          addressCheck
                        ]"
                        label="City"
                        placeholder="El Paso"
                        required
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      ><v-text-field
                        ref="state"
                        v-model="state"
                        :rules="[() => !!state || 'This field is required']"
                        label="State/Province/Region"
                        required
                        placeholder="TX"
                      ></v-text-field
                    ></v-col>
                    <v-col
                      ><v-text-field
                        ref="zip"
                        v-model="zip"
                        :rules="[() => !!zip || 'This field is required']"
                        label="ZIP / Postal Code"
                        required
                        placeholder="79938"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-row
                    ><v-col>
                      <v-textarea
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
                        rows="4"
                        required
                      ></v-textarea> </v-col
                  ></v-row>
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
              </v-form>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Register</h2>
            <v-form class="my-6">
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6">
                    <v-text-field
                      v-model="first"
                      dense
                      prepend-icon="mdi-account-box"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-text-field
                      v-model="last"
                      dense
                      prepend-icon="mdi-account-box-multiple"
                      label="Last Name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="first"
                      dense
                      prepend-icon="mdi-email-outline"
                      label="Email Account"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="last"
                      dense
                      prepend-icon="mdi-phone"
                      label="Phone Number"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-textarea
                      prepend-icon="mdi-message-outline"
                      placeholder="Biograpy"
                      rows="2"
                      dense
                      >Biograpy</v-textarea
                    ></v-col
                  >
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn x-large block tile type="submit" color="primary"
                      >Register</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Buttons</h2>
            <v-row class="my-6">
              <v-container>
                <v-btn rounded color="primary">Button</v-btn>
                <v-btn rounded color="secondary">Button</v-btn>
                <v-btn rounded color="warning">Button</v-btn>
                <v-btn rounded color="success">Button</v-btn>
                <v-btn rounded color="info">Button</v-btn>
                <v-btn rounded>Button</v-btn>
                <v-divider />
                <v-btn rounded tile color="primary">Button</v-btn>
                <v-btn rounded tile color="secondary">Button</v-btn>
                <v-btn rounded tile color="warning">Button</v-btn>
                <v-btn rounded tile color="success">Button</v-btn>
                <v-btn rounded tile color="info">Button</v-btn>
                <v-btn rounded tile>Button</v-btn>
                <v-divider />
                <v-btn rounded small outlined color="primary">Button</v-btn>
                <v-btn rounded small outlined color="secondary">Button</v-btn>
                <v-btn rounded small outlined color="warning">Button</v-btn>
                <v-btn rounded small outlined color="success">Button</v-btn>
                <v-btn rounded small outlined color="info">Button</v-btn>
                <v-divider />
                <v-btn rounded tile block large color="primary">Button</v-btn>
                <v-btn rounded tile block large color="secondary">Button</v-btn>
                <v-btn rounded tile block large color="warning">Button</v-btn>
                <v-btn rounded tile block large color="success">Button</v-btn>
                <v-btn rounded tile block large color="info">Button</v-btn>
                <v-btn rounded tile block large>Button</v-btn>
              </v-container>
            </v-row>
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
import PageHeader from '@/components/Header/PageHeader.vue'

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormsPage',

  components: {
    PageHeader
  },

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required },
    passwordConfirm: { required },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },

  data: () => ({
    first: '',
    last: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    select: null,
    formHasErrors: '',
    itemRegister: ['Administrator', 'Editor', 'Publisher', 'Reviewer'],
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    errorMessages: [],
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
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    passwordConfirmErrors() {
      const errors = []
      if (!this.$v.passwordConfirm.$dirty) return errors
      !this.$v.passwordConfirm.required &&
        errors.push('Password Confirmation is required')
      return errors
    },
    addressCheck() {
      return true
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
