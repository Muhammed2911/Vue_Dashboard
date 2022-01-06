import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerModules } from "./register-modules";

// Import Modules
import homeModule from "./modules/home";

// Registering Modules
registerModules({
    home: homeModule,
});

const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");
