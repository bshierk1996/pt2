
const functions = require('firebase-functions')
const { Storage } = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
const Busboy = require('busboy');
const fs = require('fs');
const cors = require("cors")({ origin: true });
const keyFilename="keisha-fitness-firebase-adminsdk-fwmia-45ae69a6fa.json"
const projectId = 'gs://keisha-fitness.appspot.com';

const storage = new Storage ({
    projectId,
    keyFilename
  });


exports.onFileChange = functions.storage.object().onFinalize(event => {
  console.log(event);
  const bucket = storage.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log('file detected')

if(path.basename(filePath).startsWith('renamed-')){
  console.log('already renamed this file')
  return;
}

  const destBucket = storage.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType : contentType }
  return destBucket.file(filePath).download({
    destination : tmpFilePath
  }).then(() => {
   return destBucket.upload(tmpFilePath, {
    destination:'renamed-'+ path.basename(filePath),
    metadata: metadata
  }) 

 
  });

},
exports.uploadFile = functions.https.onRequest((req, res) => {
       cors(req, res, () => {
         if (req.method == "POST") {
           return res.status(500).json({
             message: "Not allowed"
           })
         }
         const busboy = new Busboy({ headers: req.headers });
         let uploadData = null;
    
         busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
           const filepath = path.join(os.tmpdir(), filename);
           uploadData = { file: filepath, type: mimetype };
           file.pipe(fs.createWriteStream(filepath));
         });
    
         busboy.on("finish", () => {
           const bucket = storage.bucket("gs://keisha-fitness.appspot.com");
           bucket
             .upload(uploadData.file, {
               uploadType: "media",
               metadata: {
                 metadata: {
                   contentType: uploadData.type
                 }
               }
             })
             .then(() => {
               res.status(200).json({
                 message: "It worked!"
               });
             })
             .catch(err => {
               res.status(500).json({
                 error: err
               });
             });
         });
         busboy.end();
         //const bucket = storage.bucket('gs://keisha-fitness.appspot.com')


       });
    }));


// const functions = require("firebase-functions");
// const os = require("os");
// const path = require("path");
// const spawn = require("child-process-promise").spawn;
// const cors = require("cors")({ origin: true });
// const Busboy = require("busboy");
// const fs = require("fs");

// const gcconfig = {
//   projectId: "keisha-fitness-firebase-adminsdk-fwmia-45ae69a6fa.json",
//   keyFilename: "gs://keisha-fitness.appspot.com"
// };

// const gcs = require("@google-cloud/storage")(gcconfig);
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.onFileChange = functions.storage.object().onChange(event => {
//   const object = event.data;
//   const bucket = object.bucket;
//   const contentType = object.contentType;
//   const filePath = object.name;
//   console.log("File change detected, function execution started");

//   if (object.resourceState === "not_exists") {
//     console.log("We deleted a file, exit...");
//     return;
//   }

//   if (path.basename(filePath).startsWith("resized-")) {
//     console.log("We already renamed that file!");
//     return;
//   }

//   const destBucket = gcs.bucket(bucket);
//   const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//   const metadata = { contentType: contentType };
//   return destBucket
//     .file(filePath)
//     .download({
//       destination: tmpFilePath
//     })
//     .then(() => {
//       return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath]);
//     })
//     .then(() => {
//       return destBucket.upload(tmpFilePath, {
//         destination: "resized-" + path.basename(filePath),
//         metadata: metadata
//       });
//     });
// });

// exports.uploadFile = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     if (req.method !== "POST") {
//       return res.status(500).json({
//         message: "Not allowed"
//       });
//     }
//     const busboy = new Busboy({ headers: req.headers });
//     let uploadData = null;

//     busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
//       const filepath = path.join(os.tmpdir(), filename);
//       uploadData = { file: filepath, type: mimetype };
//       file.pipe(fs.createWriteStream(filepath));
//     });

//     busboy.on("finish", () => {
//       const bucket = gcs.bucket("fb-cloud-functions-demo.appspot.com");
//       bucket
//         .upload(uploadData.file, {
//           uploadType: "media",
//           metadata: {
//             metadata: {
//               contentType: uploadData.type
//             }
//           }
//         })
//         .then(() => {
//           res.status(200).json({
//             message: "It worked!"
//           });
//         })
//         .catch(err => {
//           res.status(500).json({
//             error: err
//           });
//         });
//     });
//     busboy.end(req.rawBody);
//   });
// });