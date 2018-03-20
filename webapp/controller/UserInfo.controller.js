sap.ui.define([
	"Sanjeevani/controller/Base"
], function(Base) {
	"use strict";

	return Base.extend("Sanjeevani.controller.UserInfo", {
		startCheck : function(){
			this.getRouter().navTo("check");
		}
	});
});