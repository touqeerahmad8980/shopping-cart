"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var mobiles_component_1 = require("./components/shopping-store/mobiles/mobiles.component");
var features_component_1 = require("./components/shopping-store/mobiles/features/features.component");
var add_cart_component_1 = require("./components/add-cart/add-cart.component");
var routes = [
    { path: '', redirectTo: '/mobiles', pathMatch: 'full' },
    { path: 'mobiles', component: mobiles_component_1.MobilesComponent },
    { path: 'mobile-features/:id', component: features_component_1.FeaturesComponent },
    { path: 'my-carts', component: add_cart_component_1.AddCartComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBdUQ7QUFFdkQsMkZBQXlGO0FBQ3pGLHNHQUFvRztBQUNwRywrRUFBNEU7QUFFNUUsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQy9DLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUM3RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO0NBQ2xELENBQUM7QUFVRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBUjVCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDN0I7WUFDRCxPQUFPLEVBQUMsQ0FBQyxxQkFBWSxDQUFDO1NBQ3ZCLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTW9iaWxlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaG9wcGluZy1zdG9yZS9tb2JpbGVzL21vYmlsZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmVhdHVyZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hvcHBpbmctc3RvcmUvbW9iaWxlcy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRDYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FkZC1jYXJ0L2FkZC1jYXJ0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL21vYmlsZXMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ21vYmlsZXMnLCBjb21wb25lbnQ6IE1vYmlsZXNDb21wb25lbnR9LFxyXG4gIHsgcGF0aDogJ21vYmlsZS1mZWF0dXJlcy86aWQnLCBjb21wb25lbnQ6IEZlYXR1cmVzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnbXktY2FydHMnLCBjb21wb25lbnQ6IEFkZENhcnRDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gIF0sXHJcbiAgZXhwb3J0czpbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19