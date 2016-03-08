/*global makeDancer*/

var spongeBobDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spongeBobDancer');
};

spongeBobDancer.prototype = Object.create(makeDancer.prototype);
spongeBobDancer.prototype.constructor = spongeBobDancer;

spongeBobDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);

  // other fun stuff
}
