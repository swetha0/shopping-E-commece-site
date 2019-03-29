// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDsSNkf1S2LsaeR8vr6Y5N7kxcOwSzJSOQ",
    authDomain: "shopping-ecommerce-site.firebaseapp.com",
    databaseURL: "https://shopping-ecommerce-site.firebaseio.com",
    projectId: "shopping-ecommerce-site",
    storageBucket: "shopping-ecommerce-site.appspot.com",
    messagingSenderId: "832831837044"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
