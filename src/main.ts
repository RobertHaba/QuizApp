import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";

import App from "./App.vue";
import router from "./router";
import AppLayoutSimple from "@/layouts/AppLayoutSimple.vue";

import "./assets/main.css";
import BaseButton from "./components/UI/buttons/BaseButton.vue";
import BaseIcon from "./components/UI/icons/BaseIcon.vue";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.component("AppLayoutSimple", AppLayoutSimple);
app.component("BaseButton", BaseButton);
app.component("BaseIcon", BaseIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
