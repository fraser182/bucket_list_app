const PubSub = require('../helpers/pub_sub.js');

const GoalFormView = function(form){
  this.form = form;
};

GoalFormView.prototype.bindEvents = function(){
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

GoalFormView.prototype.handleSubmit = function(evt){
  evt.preventDefault();
  const newGoal = this.createGoal(evt.target);
  PubSub.publish('GoalView:goal-submitted', newGoal);
  evt.target.reset();
};

GoalFormView.prototype.createGoal = function(form){
  const newGoal = {
    title: form.title.value,
    description: form.description.value,
    completeBy: form.completeBy.value,
    completeStatus: form.completeStatus.value
  };
  return newGoal;
};

module.exports = GoalFormView;
