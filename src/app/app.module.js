"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var shopping_store_component_1 = require("./components/shopping-store/shopping-store.component");
var mobiles_component_1 = require("./components/shopping-store/mobiles/mobiles.component");
var features_component_1 = require("./components/shopping-store/mobiles/features/features.component");
var add_cart_component_1 = require("./components/add-cart/add-cart.component");
var phone_service_service_1 = require("./services/phone-service.service");
// material design modules
var material_1 = require("@angular/material");
var app_routing_module_1 = require("./app-routing.module");
var fire_1 = require("@angular/fire");
var firestore_1 = require("@angular/fire/firestore");
var environment_1 = require("../environments/environment");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                shopping_store_component_1.ShoppingStoreComponent,
                mobiles_component_1.MobilesComponent,
                features_component_1.FeaturesComponent,
                add_cart_component_1.AddCartComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                material_1.MatBadgeModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                app_routing_module_1.AppRoutingModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                firestore_1.AngularFirestoreModule
            ],
            providers: [phone_service_service_1.PhoneServiceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQXlDO0FBQ3pDLDZDQUF3RDtBQUd4RCxpREFBK0M7QUFDL0MsaUdBQThGO0FBQzlGLDJGQUF5RjtBQUN6RixzR0FBb0c7QUFDcEcsK0VBQTRFO0FBRTVFLDBFQUF1RTtBQUN2RSwwQkFBMEI7QUFDMUIsOENBQWdGO0FBQ2hGLDJEQUF3RDtBQUN4RCxzQ0FBa0Q7QUFDbEQscURBQWlFO0FBQ2pFLDJEQUEwRDtBQXlCMUQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZCckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLGlEQUFzQjtnQkFDdEIsb0NBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLHFDQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYix1QkFBZ0I7Z0JBRWhCLHlCQUFjO2dCQUNkLHdCQUFhO2dCQUNiLDBCQUFlO2dCQUNmLHFDQUFnQjtnQkFDaEIsd0JBQWlCLENBQUMsYUFBYSxDQUFDLHlCQUFXLENBQUMsY0FBYyxDQUFDO2dCQUMzRCxrQ0FBc0I7YUFFdkI7WUFDRCxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hvcHBpbmdTdG9yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaG9wcGluZy1zdG9yZS9zaG9wcGluZy1zdG9yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2JpbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Nob3BwaW5nLXN0b3JlL21vYmlsZXMvbW9iaWxlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaG9wcGluZy1zdG9yZS9tb2JpbGVzL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZENhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRkLWNhcnQvYWRkLWNhcnQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFBob25lU2VydmljZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Bob25lLXNlcnZpY2Uuc2VydmljZSc7XHJcbi8vIG1hdGVyaWFsIGRlc2lnbiBtb2R1bGVzXHJcbmltcG9ydCB7TWF0QmFkZ2VNb2R1bGUgLE1hdEljb25Nb2R1bGUsTWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmVcIjtcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgU2hvcHBpbmdTdG9yZUNvbXBvbmVudCxcclxuICAgIE1vYmlsZXNDb21wb25lbnQsXHJcbiAgICBGZWF0dXJlc0NvbXBvbmVudCxcclxuICAgIEFkZENhcnRDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG5cclxuICAgIE1hdEJhZGdlTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGVudmlyb25tZW50LmZpcmViYXNlQ29uZmlnKSxcclxuICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGVcclxuICAgIFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUGhvbmVTZXJ2aWNlU2VydmljZV0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=