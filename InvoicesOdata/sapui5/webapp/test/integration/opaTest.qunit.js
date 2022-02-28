/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "logaligroup/sapui5/test/integracion/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});