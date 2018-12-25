"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phone_service_service_1 = require("../../../services/phone-service.service");
var firestore_1 = require("@angular/fire/firestore");
var MobilesComponent = /** @class */ (function () {
    function MobilesComponent(service, firestore) {
        this.service = service;
        this.firestore = firestore;
    }
    MobilesComponent.prototype.ngOnInit = function () {
        this.getPhones();
    };
    MobilesComponent.prototype.getPhones = function () {
        var _this = this;
        this.service.getPhonesData().subscribe(function (phone) { return _this.phones = phone; });
    };
    MobilesComponent.prototype.onItemClick = function (data) {
        this.firestore.collection("add-to-cart").add({
            imageUrl: data.imageUrl,
            name: data.name,
            price: data.price,
        });
    };
    MobilesComponent = __decorate([
        core_1.Component({
            selector: 'app-mobiles',
            templateUrl: './mobiles.component.html',
            styleUrls: ['./mobiles.component.scss']
        }),
        __metadata("design:paramtypes", [phone_service_service_1.PhoneServiceService,
            firestore_1.AngularFirestore])
    ], MobilesComponent);
    return MobilesComponent;
}());
exports.MobilesComponent = MobilesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2JpbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxpRkFBOEU7QUFFOUUscURBQTJEO0FBTzNEO0lBR0UsMEJBQW9CLE9BQTRCLEVBQ3RDLFNBQTRCO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQ3RDLGNBQVMsR0FBVCxTQUFTLENBQW1CO0lBQ2pDLENBQUM7SUFFTixtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFuQixDQUFtQixDQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQztJQUNILENBQUM7SUFyQlUsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBSTZCLDJDQUFtQjtZQUMxQiw0QkFBZ0I7T0FKM0IsZ0JBQWdCLENBdUI1QjtJQUFELHVCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaG9uZVNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcGhvbmUtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGhvbmVzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1pbnRlcmZhY2UtdHlwZXMvcGhvbmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbW9iaWxlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vYmlsZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vYmlsZXMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9iaWxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgcGhvbmVzIDogUGhvbmVzW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBQaG9uZVNlcnZpY2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmUgOiBBbmd1bGFyRmlyZXN0b3JlXHJcbiAgICApIHt9XHJcbiAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldFBob25lcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGhvbmVzKCl7XHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0UGhvbmVzRGF0YSgpLnN1YnNjcmliZShwaG9uZSA9PiB0aGlzLnBob25lcyA9IHBob25lICk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGljayhkYXRhIDogUGhvbmVzKXtcclxuICAgIHRoaXMuZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJhZGQtdG8tY2FydFwiKS5hZGQoe1xyXG4gICAgICBpbWFnZVVybDogZGF0YS5pbWFnZVVybCxcclxuICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICBwcmljZTogZGF0YS5wcmljZSxcclxuICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==