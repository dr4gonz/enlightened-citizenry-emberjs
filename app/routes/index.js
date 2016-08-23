import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/votes?year=2016&result=Passed&fields=breakdown,bill_id,roll_id,result&apikey=f4bd1cc9d3724feea328cbd0450b1a73';
    return Ember.RSVP.hash({
      votes: Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON.results);
        return responseJSON.results;
      })
    });

  },

});
