"use strict";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyANybcDno1V20b_OhSyXhYm-B6FsrDaODs",
        authDomain: "angular-7-and-firebase.firebaseapp.com",
        databaseURL: "https://angular-7-and-firebase.firebaseio.com",
        projectId: "angular-7-and-firebase",
        storageBucket: "angular-7-and-firebase.appspot.com",
        messagingSenderId: "851978881914"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0ZBQWdGO0FBQ2hGLDBFQUEwRTtBQUMxRSxnRUFBZ0U7O0FBRW5ELFFBQUEsV0FBVyxHQUFHO0lBQ3pCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGNBQWMsRUFBRztRQUNmLE1BQU0sRUFBRSx5Q0FBeUM7UUFDakQsVUFBVSxFQUFFLHdDQUF3QztRQUNwRCxXQUFXLEVBQUUsK0NBQStDO1FBQzVELFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsYUFBYSxFQUFFLG9DQUFvQztRQUNuRCxpQkFBaUIsRUFBRSxjQUFjO0tBQ2xDO0NBQ0YsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILG1FQUFtRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVwbGFjZWQgZHVyaW5nIGJ1aWxkIGJ5IHVzaW5nIHRoZSBgZmlsZVJlcGxhY2VtZW50c2AgYXJyYXkuXHJcbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXHJcbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBwcm9kdWN0aW9uOiBmYWxzZSxcclxuICBmaXJlYmFzZUNvbmZpZyA6IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBTnliY0RubzFWMjBiX09oU3lYaFltLUI2RnNyRGFPRHNcIixcclxuICAgIGF1dGhEb21haW46IFwiYW5ndWxhci03LWFuZC1maXJlYmFzZS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vYW5ndWxhci03LWFuZC1maXJlYmFzZS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImFuZ3VsYXItNy1hbmQtZmlyZWJhc2VcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYW5ndWxhci03LWFuZC1maXJlYmFzZS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODUxOTc4ODgxOTE0XCJcclxuICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcclxuICogdG8gaWdub3JlIHpvbmUgcmVsYXRlZCBlcnJvciBzdGFjayBmcmFtZXMgc3VjaCBhcyBgem9uZS5ydW5gLCBgem9uZURlbGVnYXRlLmludm9rZVRhc2tgLlxyXG4gKlxyXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcclxuICogb24gcGVyZm9ybWFuY2UgaWYgYW4gZXJyb3IgaXMgdGhyb3duLlxyXG4gKi9cclxuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxyXG4iXX0=