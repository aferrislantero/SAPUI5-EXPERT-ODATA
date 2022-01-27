sap.ui.define([
    'sap/ui/core/UIComponent',
    "sap/ui/model/resource/ResourceModel",
    "logaligroup/sapui5/model/Models",
    "./controller/HelloDialog"
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.resource.ResourceModel} ResourceModel
     */
], function (UIComponent, ResourceModel, Models, HelloDialog) {

    return UIComponent.extend("logaligroup.sapui5.Component", {

        metadata: {
            manifest : "json"
        },

        init: function () {

            //Call the init of the parent
            UIComponent.prototype.init.apply(this, arguments);

            //Set data model on the view
            this.setModel(Models.createRecipient());

            //Set i18n model on the view
            var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
            this.setModel(i18nModel, "i18n");

            this._HelloDialog = new HelloDialog(this.getRootControl());

        },

        exit: function() {
            this._HelloDialog.destroy();
            delete this._HelloDialog;
        },

        openHelloDialog: function() {
            this._HelloDialog.open();
        },

    });

});