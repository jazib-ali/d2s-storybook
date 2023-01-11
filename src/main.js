import { createApp } from 'vue'
import App from './App.vue'
const kamil = createApp(App)
import vuetify from './test'
vuetify(kamil)
import router from './router'
import store from './store'
import "./assets/index.css"
// element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { loadFonts } from './plugins/webfontloader'
import "desk-design-system/dist/style.css"
import {Field as  ValidationProvider} from "vee-validate"
import {Form as ValidationObserver} from "vee-validate"
import {ErrorMessage} from "vee-validate"
kamil.component("ValidationProvider", ValidationProvider)
  kamil.component("ValidationObserver", ValidationObserver)
  kamil.component("ErrorMessage", ErrorMessage)
loadFonts()
// kamil.component(RdButton)

// console.log(RdButton, "RdButton")

import { defineRule,configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

import AllRules from '@vee-validate/rules';
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  // create and set a localization handler
  generateMessage: localize('en', {
    messages: {
      required: 'This {field} is required',
      alpha: 'Only alphabetic characters allowed',
      alpha_num: 'Only alphabetic and numeric characters allowed',
      alpha_spaces: 'Only alphabetic characters allowed',
      confirmed: "The {field} confirmation does not match",
      email: "The {field} must be a valid email",
      integer: "The {field} must be an integer",
      max: "The {field} not be greater than 0:{max} characters",
      min: "The {field}  must be at least 0:{min} characters",
      numeric: "The {field} fmay only contain numeric characters",
    },
  }),
});

kamil
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
