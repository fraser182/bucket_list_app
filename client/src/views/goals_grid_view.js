const PubSub = require('../helpers/pub_sub.js');
const GoalView = require('./goal_view.js');

const GoalsView = function(container){
  this.container = container;
};

GoalsView.prototype.bindEvents = function(){
  PubSub.subscribe('Goals:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

GoalsView.prototype.render = function(goals){
  this.container.innerHTML = '';
  const goalView = new GoalView(this.container);
  goals.forEach((goal) => goalView.render(goal));
};

module.exports = GoalsView;
