"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var firestore_1 = require("@angular/fire/firestore");
var PhoneServiceService = /** @class */ (function () {
    function PhoneServiceService(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        this.phoneDataUrl = "assets/phones/phones.json";
    }
    PhoneServiceService.prototype.getPhonesData = function () {
        return this.http.get(this.phoneDataUrl);
    };
    PhoneServiceService.prototype.getCartData = function () {
        return this.firestore.collection('add-to-cart').snapshotChanges();
    };
    PhoneServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, firestore_1.AngularFirestore])
    ], PhoneServiceService);
    return PhoneServiceService;
}());
exports.PhoneServiceService = PhoneServiceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGhvbmUtc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUdsRCxxREFBMkQ7QUFLM0Q7SUFNRSw2QkFBb0IsSUFBZ0IsRUFBVSxTQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFGMUUsaUJBQVksR0FBRywyQkFBMkIsQ0FBQztJQUVtQyxDQUFDO0lBRS9FLDJDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQWRVLG1CQUFtQjtRQUgvQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FPMEIsaUJBQVUsRUFBc0IsNEJBQWdCO09BTi9ELG1CQUFtQixDQWdCL0I7SUFBRCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQaG9uZXMgfSBmcm9tICcuLi9kYXRhLWludGVyZmFjZS10eXBlcy9waG9uZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZVNlcnZpY2VTZXJ2aWNlIHtcclxuXHJcbiAgZm9ybURhdGE6IFBob25lcztcclxuXHJcbiAgcGhvbmVEYXRhVXJsID0gYGFzc2V0cy9waG9uZXMvcGhvbmVzLmpzb25gO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZmlyZXN0b3JlIDogQW5ndWxhckZpcmVzdG9yZSkgeyB9XHJcblxyXG4gIGdldFBob25lc0RhdGEoKTpPYnNlcnZhYmxlPFBob25lc1tdPntcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBob25lc1tdPih0aGlzLnBob25lRGF0YVVybCk7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJ0RGF0YSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ2FkZC10by1jYXJ0Jykuc25hcHNob3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=