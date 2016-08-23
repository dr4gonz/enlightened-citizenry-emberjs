import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params);
    var url = 'http://congress.api.sunlightfoundation.com/votes?roll_id=' + params.roll_id + '&fields=breakdown&apikey=f4bd1cc9d3724feea328cbd0450b1a73';
  return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results[0];
  });
}
});
