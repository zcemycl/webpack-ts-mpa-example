import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://zcemycl.github.io/webpack-ts-mpa-example',
    // baseUrl: 'http://localhost:8081/',
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
  },
})
