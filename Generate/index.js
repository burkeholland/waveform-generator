var waveform = require('waveform-node');

module.exports = function(context) {
  context.log('JavaScript HTTP trigger function processed a request.');

  var options = {};
  waveform.getWaveForm(
    'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/91/a2/e3/mzm.zsutjgwn.aac.p.m4a',
    options,
    function(error, peaks) {
      if (error) {
        return;
      }

      context.res = {
        body: peaks
      };

      context.done();
    }
  );
};
