import Ember from 'ember';

export default Ember.Component.extend({
  chartData: Ember.computed('billData', function() {
    var Yea = this.get('billData').breakdown.total.Yea;
    var Nay = this.get('billData').breakdown.total.Nay;
    console.log(Yea);
    console.log(Nay);
    return {
      labels: ["Yea", "Nay", "Fake"],
      datasets: [{
        label: "Number of Votes",
        data: [Yea, Nay, 42],
        backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]

      }],
      pieOptions: {
        cutoutPercentage: 0
      }
    }
  })
});
