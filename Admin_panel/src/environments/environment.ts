// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAGtW9TlX0l4SDmNyMv5EuZnbJ2FWP9OPQ",
  authDomain: "foodie-5f111.firebaseapp.com",
  databaseURL: "https://foodie-5f111-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodie-5f111",
  storageBucket: "foodie-5f111.appspot.com",
  messagingSenderId: "536453044515",
  appId: "1:536453044515:web:026284da15f5de3d611496",
  measurementId: "G-PTV4XEX2C8"
  },
  onesignal: {
    appId: '',
    googleProjectNumber: '',
    restKey: ''
  },
  stripe: {
    sk: ''
  },
  general: {
    symbol: '$',
    code: 'USD'
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
