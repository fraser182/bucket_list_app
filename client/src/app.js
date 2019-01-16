const GoalFormView = require('./views/goal_form_view.js');
const GoalEditView = require('./views/goal_edit_view.js');
const GoalGridView = require('./views/goal_grid_view.js');
const Goals = require('./models/goals.js');

document.addEventListener('DOMContentLoaded', () => {
  const goalsForm = document.querySelector('form#goals-form');
  const goalsFormView = new GameFormView(goalsForm);
  goalsFormView.bindEvents();

  const goalsContainer = document.querySelector('div#goals');
  const goalsGridView = new GoalGridView(goalsContainer);
  goalsGridView.bindEvents();

  const goalsUrl = 'http://localhost:3000/api/goals';
  const goals = new Goals(goalsUrl);
  goals.bindEvents();
  goals.getData();
});
