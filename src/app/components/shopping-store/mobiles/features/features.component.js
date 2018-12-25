"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    FeaturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.mobile_features = this.getPhonesFeatures();
    };
    FeaturesComponent.prototype.getPhonesFeatures = function () {
        return this.http.get("assets/phones/details/" + this.id + ".json");
    };
    FeaturesComponent = __decorate([
        core_1.Component({
            selector: 'app-features',
            templateUrl: './features.component.html',
            styleUrls: ['./features.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.HttpClient])
    ], FeaturesComponent);
    return FeaturesComponent;
}());
exports.FeaturesComponent = FeaturesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCw2Q0FBa0Q7QUFPbEQ7SUFJRSwyQkFBb0IsS0FBcUIsRUFBVSxJQUFnQjtRQUEvQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXhFLG9DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDJCQUF5QixJQUFJLENBQUMsRUFBRSxVQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBZFUsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBSzJCLHVCQUFjLEVBQWdCLGlCQUFVO09BSnhELGlCQUFpQixDQWdCN0I7SUFBRCx3QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mZWF0dXJlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmVzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBzdWI6IGFueTtcclxuICBtb2JpbGVfZmVhdHVyZXM7ICAgIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ10pO1xyXG5cclxuICAgIHRoaXMubW9iaWxlX2ZlYXR1cmVzID0gdGhpcy5nZXRQaG9uZXNGZWF0dXJlcygpOyAgICBcclxuICB9XHJcblxyXG4gIGdldFBob25lc0ZlYXR1cmVzKCk6T2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgYXNzZXRzL3Bob25lcy9kZXRhaWxzLyR7dGhpcy5pZH0uanNvbmApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19