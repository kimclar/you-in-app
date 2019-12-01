import Vue from "nativescript-vue";
import App from "./components/App";
import store from "store.js";

new Vue({
    render: h => h(App),
    store: store
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
