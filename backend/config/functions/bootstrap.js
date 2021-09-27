'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  cb();
};

// const admin = require("firebase-admin");
// const serviceAccount = require("../../../serviceAccountKey.json"); // add serviceAccountKey from firebase to root directory
// module.exports = () => {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
//   strapi.firebase = admin;
// };