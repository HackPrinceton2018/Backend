var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
    iam_apikey: 'L1GqNKxjzYyR2_6njbhquV9Mrz8EGCqeCglsX0DWo48n',
    url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});



module.exports = (url = 'https://stream.watsonplatform.net/speech-to-text/api/v1/recognize/', context, callback) =>{

var params = {
    // From file
    audio: fs.createReadStream('./audio-file.flac'),
    content_type: 'audio/flac'
};
speechToText.recognize(params, function (err, res) {
    if (err)
        return callback(err);
    else {
        var x = res.results[0].alternatives[0];
        callback(null, x);
    }
});

  }
