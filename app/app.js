import Vue from "nativescript-vue";
import App from "./components/App";
import store from "./store/index.js";

Vue.config.silent = false;

Vue.registerElement(
    'CheckBox',
    () => require('@nstudio/nativescript-checkbox').CheckBox,
    {
        model: {
            prop: 'checked',
            event: 'checkedChange'
        }
    }
);

Vue.registerElement(
    'CardView',
    () => require('@nstudio/nativescript-cardview').CardView
  );

new Vue({
    render: h => h(App),
    store
}).$start();
