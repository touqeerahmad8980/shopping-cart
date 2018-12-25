"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AppPage.prototype.getTitleText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWtEO0FBRWxEO0lBQUE7SUFRQSxDQUFDO0lBUEMsNEJBQVUsR0FBVjtRQUNFLE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDRSxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJyb3dzZXIsIGJ5LCBlbGVtZW50IH0gZnJvbSAncHJvdHJhY3Rvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwUGFnZSB7XHJcbiAgbmF2aWdhdGVUbygpIHtcclxuICAgIHJldHVybiBicm93c2VyLmdldCgnLycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGVUZXh0KCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQoYnkuY3NzKCdhcHAtcm9vdCBoMScpKS5nZXRUZXh0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==