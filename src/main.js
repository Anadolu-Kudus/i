import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// *********************************
import { createI18n } from 'vue-i18n'
import { languages } from './assets/i18n/i18n'
import { defaultLocale } from './assets/i18n/i18n'


const messages = Object.assign(languages)
const i18n = createI18n({
	locale: defaultLocale,
	messages
})

// *********************************

createApp(App).use(store).use(router).use(i18n).mount("#app");

