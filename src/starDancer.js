/*global makeDancer*/

var starDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('star-dancer');
};
starDancer.prototype = Object.create(makeDancer.prototype);
starDancer.prototype.constructor = starDancer;

starDancer.prototype.step = function(timeBetweenSteps) {

  // makeDancer.prototype.step.call(this, timeBetweenSteps);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};
