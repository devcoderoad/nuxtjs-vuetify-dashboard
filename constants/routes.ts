const AUTH = {
  SIGNIN: {
    href: '/auth/signIn.vue',
    route: '/sign-in',
    url: '/sign-in'
  },
  SIGNUP: {
    href: '/auth/signUp.vue',
    route: '/sign-up',
    url: '/sign-up'
  },
  FORGOTPASSWORD: {
    href: '/auth/forgotPassword.vue',
    route: '/forgot-password',
    url: '/forgot-password'
  }
}

const DASHBOARD = {
  HOME: {
    href: '/index.vue',
    route: '/',
    url: '/'
  },
  FORM: {
    href: '/forms.vue',
    route: '/forms',
    url: '/forms'
  },
  TYPOGRAPHY: {
    href: '/typography.vue',
    route: '/typography',
    url: '/typography'
  },
  TABLE: {
    href: '/tables.vue',
    route: '/tables',
    url: '/tables'
  },
  CHART: {
    href: '/charts.vue',
    route: '/charts',
    url: '/charts'
  },
  CARD: { href: '/cards.vue', route: '/cards', url: '/cards' },
  ICON: { href: '/icons.vue', route: '/icons', url: '/icons' }
}

module.exports = { ...AUTH, ...DASHBOARD }
