// Made using Daniel Shiffman videos via Coding Train



function Frog(x, y, size) {
  Rectangle.call(this, x, y, size, size);

  this.sitting_on = null;
}

// Extend Rectangle.
Frog.prototype = Object.create(Rectangle.prototype);

// Attach this frog to the other object
Frog.prototype.attach = function(other) {
  this.sitting_on = other;
}

// If frog is attached to an object, it will move with it
Frog.prototype.update = function() {
  if(this.sitting_on !== null) {
    this.x += this.sitting_on.speed;
  }
  this.x = constrain(this.x, 0, width - this.w);
}

// Show the frog in the game window
Frog.prototype.show = function() {
  fill(0, 225, 0, 200);
  rect(this.x, this.y, this.w, this.h);
}