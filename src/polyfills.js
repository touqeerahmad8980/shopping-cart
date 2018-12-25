"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/**
 * If the application will be indexed by Google Search, the following is required.
 * Googlebot uses a renderer based on Chrome 41.
 * https://developers.google.com/search/docs/guides/rendering
 **/
// import 'core-js/es6/array';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDs7R0FFRztBQUVILG1FQUFtRTtBQUNuRSwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMsNEJBQTRCO0FBRTVCOzs7O0lBSUk7QUFDSiw4QkFBOEI7QUFFOUIsK0VBQStFO0FBQy9FLG9FQUFvRTtBQUVwRSxnRUFBZ0U7QUFDaEUsZ0NBQWdDO0FBRWhDOzs7O0lBSUk7QUFDSiw4RUFBOEU7QUFFOUU7OztHQUdHO0FBRUYsc0dBQXNHO0FBQ3RHLGlHQUFpRztBQUNqRyxzSEFBc0g7QUFFdEg7OztFQUdFO0FBQ0gsNERBQTREO0FBRTVEOztHQUVHO0FBQ0gsNkJBQTJCLENBQUUsNkJBQTZCO0FBRzFEOztHQUVHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgYW5kIGlzIGxvYWRlZCBiZWZvcmUgdGhlIGFwcC5cclxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuICpcclxuICogVGhpcyBmaWxlIGlzIGRpdmlkZWQgaW50byAyIHNlY3Rpb25zOlxyXG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXHJcbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXHJcbiAqICAgICAgZmlsZS5cclxuICpcclxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XHJcbiAqIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZW1zZWx2ZXMuIFRoaXMgaW5jbHVkZXMgU2FmYXJpID49IDEwLCBDaHJvbWUgPj0gNTUgKGluY2x1ZGluZyBPcGVyYSksXHJcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Jyb3dzZXItc3VwcG9ydFxyXG4gKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQlJPV1NFUiBQT0xZRklMTFNcclxuICovXHJcblxyXG4vKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuXHJcbi8qKlxyXG4gKiBJZiB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSBpbmRleGVkIGJ5IEdvb2dsZSBTZWFyY2gsIHRoZSBmb2xsb3dpbmcgaXMgcmVxdWlyZWQuXHJcbiAqIEdvb2dsZWJvdCB1c2VzIGEgcmVuZGVyZXIgYmFzZWQgb24gQ2hyb21lIDQxLlxyXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9zZWFyY2gvZG9jcy9ndWlkZXMvcmVuZGVyaW5nXHJcbiAqKi9cclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XHJcblxyXG4vKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciBOZ0NsYXNzIHN1cHBvcnQgb24gU1ZHIGVsZW1lbnRzICovXHJcbi8vIGltcG9ydCAnY2xhc3NsaXN0LmpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIGNsYXNzbGlzdC5qc2AuXHJcblxyXG4vKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciB0aGUgUmVmbGVjdCBBUEkuICovXHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XHJcblxyXG4vKipcclxuICogV2ViIEFuaW1hdGlvbnMgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc2BcclxuICogT25seSByZXF1aXJlZCBpZiBBbmltYXRpb25CdWlsZGVyIGlzIHVzZWQgd2l0aGluIHRoZSBhcHBsaWNhdGlvbiBhbmQgdXNpbmcgSUUvRWRnZSBvciBTYWZhcmkuXHJcbiAqIFN0YW5kYXJkIGFuaW1hdGlvbiBzdXBwb3J0IGluIEFuZ3VsYXIgRE9FUyBOT1QgcmVxdWlyZSBhbnkgcG9seWZpbGxzIChhcyBvZiBBbmd1bGFyIDYuMCkuXHJcbiAqKi9cclxuLy8gaW1wb3J0ICd3ZWItYW5pbWF0aW9ucy1qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSB3ZWItYW5pbWF0aW9ucy1qc2AuXHJcblxyXG4vKipcclxuICogQnkgZGVmYXVsdCwgem9uZS5qcyB3aWxsIHBhdGNoIGFsbCBwb3NzaWJsZSBtYWNyb1Rhc2sgYW5kIERvbUV2ZW50c1xyXG4gKiB1c2VyIGNhbiBkaXNhYmxlIHBhcnRzIG9mIG1hY3JvVGFzay9Eb21FdmVudHMgcGF0Y2ggYnkgc2V0dGluZyBmb2xsb3dpbmcgZmxhZ3NcclxuICovXHJcblxyXG4gLy8gKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAvLyAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfb25fcHJvcGVydHkgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIG9uUHJvcGVydHkgc3VjaCBhcyBvbmNsaWNrXHJcbiAvLyAod2luZG93IGFzIGFueSkuX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UUyA9IFsnc2Nyb2xsJywgJ21vdXNlbW92ZSddOyAvLyBkaXNhYmxlIHBhdGNoIHNwZWNpZmllZCBldmVudE5hbWVzXHJcblxyXG4gLypcclxuICogaW4gSUUvRWRnZSBkZXZlbG9wZXIgdG9vbHMsIHRoZSBhZGRFdmVudExpc3RlbmVyIHdpbGwgYWxzbyBiZSB3cmFwcGVkIGJ5IHpvbmUuanNcclxuICogd2l0aCB0aGUgZm9sbG93aW5nIGZsYWcsIGl0IHdpbGwgYnlwYXNzIGB6b25lLmpzYCBwYXRjaCBmb3IgSUUvRWRnZVxyXG4gKi9cclxuLy8gKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9lbmFibGVfY3Jvc3NfY29udGV4dF9jaGVjayA9IHRydWU7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFpvbmUgSlMgaXMgcmVxdWlyZWQgYnkgZGVmYXVsdCBmb3IgQW5ndWxhciBpdHNlbGYuXHJcbiAqL1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBBUFBMSUNBVElPTiBJTVBPUlRTXHJcbiAqL1xyXG4iXX0=