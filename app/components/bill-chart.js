import Ember from 'ember';

export default Ember.Component.extend({
  chartData: Ember.computed('billData', function() {
    var Yea = this.get('billData').breakdown.total.Yea;
    var Nay = this.get('billData').breakdown.total.Nay;
    console.log(Yea);
    console.log(Nay);
    return {
      labels: ["Yea", "Nay"],
      datasets: [{
        label: "Number of Votes",
        data: [Yea, Nay]
      }]
    };
  }),
  demData: Ember.computed('billData', function() {
    var Yea = this.get('billData').breakdown.party.D.Yea;
    var Nay = this.get('billData').breakdown.party.D.Nay;
    return {
      labels: ["Yea", "Nay"],
      datasets: [{
        label: "Number of Votes",
        data: [Yea,Nay]
      }]
    };
  }),
  repData: Ember.computed('billData', function() {
    var Yea = this.get('billData').breakdown.party.R.Yea;
    var Nay = this.get('billData').breakdown.party.R.Nay;
    return {
      labels: ["Yea", "Nay"],
      datasets: [{
        label: "Number of Votes",
        data: [Yea,Nay],
        fillColor: ['red','blue']
      }]
    };
  })
});
