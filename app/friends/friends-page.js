const app = require("tns-core-modules/application");

const SearchViewModel = require("./friends-view-model");

const { Frame } = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new SearchViewModel();
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

exports.onNavigatingTo = onNavigatingTo;
exports.onNavigationItemTap = onNavigationItemTap;
exports.onDrawerButtonTap = onDrawerButtonTap;
