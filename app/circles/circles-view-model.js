const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");

function CirclesViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("MyCircles");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = CirclesViewModel;
