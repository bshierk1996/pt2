// const functions = require('firebase-functions');
// const gcs = require ('@google-cloud/firestore');
// const os = require('os');
// const path = require('path');
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });
// exports.onFileChange = functions.storage.object().onFinalize(event => {
   
//     const bucket = event.bucket;
//     const contentType = object.contentType;
//     const filePath = object.name;
//     console.log('file change detected, function ex')
//     return;

//     if (path.basename(filePath).startsWith('renamed-')){
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadata = { contentType: contentType};
//     return destBucket.file(filePath).download({
//         destination: tmpFilePath
//     }).then(() => {
//         return destBucket.upload(tmpFilePath, {
//             destination: 'renamed-' + path.basename(filePath),
//             metadata:metadata
//         })
//     });
//   });




const functions = require('firebase-functions')
const { Storage } = require('@google-cloud/storage');
const projectId = 'gs://keisha-fitness.appspot.com';
let gcs = new Storage ({
  projectId
});
const os = require('os');
const path = require('path');



exports.onFileChange = functions.storage.object().onFinalize(event => {
  console.log(event);
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log('file detected')

if(path.basename(filePath).startsWith('renamed-')){
  console.log('already renamed this file')
  return;
}

  const destBucket = gcs.bucket(bucket);
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
exports.uploadFile = functions.https.onRequest((req,res) =>{
    cors(req,res, (request,response) =>{
        if(req.method !== 'POST'){
            return response.status(500).json({
                message: 'not allowed'
            })
        }
    
        response.status(200).json({
            message: 'it worked'
        });
    });
});

);