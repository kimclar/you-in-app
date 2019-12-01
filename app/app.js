import Vue from "nativescript-vue";
import App from "./components/App";
import store from "./store/index.js";

Vue.config.silent = false;

new Vue({
    render: h => h(App),
    store
}).$start();

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
