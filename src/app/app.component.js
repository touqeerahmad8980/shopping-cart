"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitizer) {
        this.title = 'Shooping-Cart-Application';
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('/assets/phones/svg/shopping_cart.svg'));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatIconRegistry, platform_browser_1.DomSanitizer])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsOERBQXVEO0FBQ3ZELDhDQUFrRDtBQU9sRDtJQUlFLHNCQUFZLFlBQTZCLEVBQUUsU0FBdUI7UUFGbEUsVUFBSyxHQUFHLDJCQUEyQixDQUFDO1FBSXBDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7SUFBQyxDQUFDO0lBRXpILCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBVFUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQUswQiwwQkFBZSxFQUFhLCtCQUFZO09BSnZELFlBQVksQ0FVeEI7SUFBRCxtQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge01hdEljb25SZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgdGl0bGUgPSAnU2hvb3BpbmctQ2FydC1BcHBsaWNhdGlvbic7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcblxyXG4gIGljb25SZWdpc3RyeS5hZGRTdmdJY29uKCd0aHVtYnMtdXAnLCBzYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCcvYXNzZXRzL3Bob25lcy9zdmcvc2hvcHBpbmdfY2FydC5zdmcnKSk7IH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICB9XHJcbn1cclxuIl19