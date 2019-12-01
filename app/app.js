import Vue from "nativescript-vue";

import App from "./components/App";

new Vue({
    render: h => h(App)
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
