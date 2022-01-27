sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.core.Fragment} Fragment
     */
    function (Controller, MessageToast, Fragment) {
        "use strict";
        return Controller.extend("logaligroup.sapui5.controller.HelloPanel", {

            onInit: function () {

            },

            onShowHello: function () {

                //Read from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMesg = oBundle.getText("helloMsg", [sRecipient]);

                MessageToast.show(sMesg);
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            },

        });
    });