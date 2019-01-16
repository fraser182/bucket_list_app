const PubSub = require('../helpers/pub_sub.js');

const GoalView = function(container){
  this.container = container;
};

GoalView.prototype.render = function(goal){
  const goalContainer = document.createElement('div');
  goalContainer.id = 'goals';

  const title = this.createHeading(goal.title);
  goalContainer.appendChild(title);

  const descriptionText = goal.description;
  const description = this.createDetail(descriptionText);
  goalContainer.appendChild(description);

  const completeByText = goal.completeBy;
  const completeBy = this.createDetail(completeByText);
  goalContainer.appendChild(completeBy);

  const completeStatusText = goal.completeStatus;
  const completeStatus = this.createDetail(completeStatusText);
  goalContainer.appendChild(completeStatus);

  const deleteButton = this.createDeleteButton(goal._id);
  goalContainer.appendChild(deleteButton);

  this.container.appendChild(goalContainer);
};

GoalView.prototype.createHeading = function(textContent){
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

GoalView.prototype.createDetail = function(textContent){
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

GoalView.prototype.createDeleteButton = function(goalId){
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = goalId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('GoalView:goal-delete-clicked', evt.target.value);
  });
  return button;
};

module.exports = GoalView;
