var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var firebase = require("firebase");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");

const lib = require('lib');




var config = {
    apiKey: "AIzaSyB-rqQ-XYZn8QqBv1P-Rgz1TeE37cjrCQA",
    authDomain: "myapplication-2da77.firebaseapp.com",
    databaseURL: "https://myapplication-2da77.firebaseio.com",
    projectId: "myapplication-2da77",
    storageBucket: "myapplication-2da77.appspot.com",
    messagingSenderId: "487937852151"
};
firebase.initializeApp(config);

// var speechToText = new SpeechToTextV1({
//   iam_apikey: 'L1GqNKxjzYyR2_6njbhquV9Mrz8EGCqeCglsX0DWo48n',
//   url: 'https://stream.watsonplatform.net/speech-to-text/api/'
// });


//
// router.post("/sendAudio", function (req, res, next) {
// var audio_file = req.body;
// var params = {
//   audio: fs.createReadStream('audio_file'),
//   content_type: 'audio/flac'
// };
//   speechToText.recognize(params, function(err, res) {
//   if (err)
//     return callback(err);
//   else{
//     var x = res.results[0].alternatives[0].transcript;
//
//     callback(null, x);
//     }
// });


module.exports = async () => {

    var promise = new Promise((resolve, reject) => {
        var userId = "1v20oY1GeDTe6IIZr6OrEMEt8962"

        const payload = {
            userId: userId,
            name: "ayushi123"
        };
        firebase
            .database()
            .ref("users/" + payload.userId)
            .set(
                {
                    username: payload.name,
                }
            )
            .then(() => { resolve() })
            .catch((error) => console.log(error));

    })
    let result = await promise

    let promise1 = new Promise((resolve, reject) => {
        var userId = "1v20oY1GeDTe6IIZr6OrEMEt8962"
        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username)
            console.log(username);
            resolve()
        })

    })
    let result1 = await promise1
    return "Hello ${name}, I built this API with Code on Standard Library!"
}




// })

// router.get("/getAudio", function(req,res,next){
//
// })
//
// router.get("/getText", function(req,res,next){
//
// })
