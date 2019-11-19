const app = require("tns-core-modules/application");

const NewEventViewModel = require("./newEvent-view-model");
const { Frame } = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new NewEventViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onNavigationItemTap(args) {
    const component = args.object;
    const componentRoute = component.route;
    const componentTitle = component.title;
    const bindingContext = component.bindingContext;

    bindingContext.set("selectedPage", componentTitle);

    Frame.topmost().navigate({
                                 moduleName: componentRoute,
                                 transition: {
                                     name: "fade"
                                 }
                             });

    const drawerComponent = app.getRootView();
    drawerComponent.closeDrawer();
}

exports.onNavigationItemTap = onNavigationItemTap;

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
