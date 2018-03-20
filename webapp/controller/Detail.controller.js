sap.ui.define([
	"Sanjeevani/controller/Base"
], function(Base) {
	"use strict";

	return Base.extend("Sanjeevani.controller.Detail", {
		goToUser: function() {
			this.getRouter().navTo("user");
		}
	});
});