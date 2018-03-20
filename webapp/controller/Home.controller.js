sap.ui.define([
	"Sanjeevani/controller/Base"
], function(Base) {
	"use strict";

	return Base.extend("Sanjeevani.controller.Home", {
		onLoginPress: function(oEvent) {
			this.getRouter().navTo("detail");
		}
	});
});