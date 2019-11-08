const app = require("tns-core-modules/application");

const CirclesViewModel = require("./circles-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new CirclesViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
