const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Goals = function (url){
  this.url = url;
};

Goals.prototype.bindEvents = function(){
  PubSub.subscribe('GoalView:goal-delete-clicked', (evt) => {
    this.deleteGame(evt.detail);
  });

  PubSub.subscribe('GoalView:goal-submited', (evt) => {
    this.postGoal(evt.detail);
  });

  // PubSub.subscribe('GoalView:goal-edit-clicked', (evt) => {
  //   this.publishGoal(evt.detail);
  // });

  // PubSub.subscribe('GoalView:goal-updated', (evt) => {
  //   this.updateGoal(evt.detail);
  // });
};


Goals.prototype.getData = function(){
  const request = new Request(this.url);
  request.get()
  .then((goals) => {
    this.publishGoals(goals);
  })
  .catch(console.error);
};

Goals.prototype.publishGoals = function(goals){
  PubSub.publish('Goals:data-loaded', goals);
};

module.exports = Goals;
