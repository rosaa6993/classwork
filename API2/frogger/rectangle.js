// Made using Daniel Shiffman videos via Coding Train
function Rectangle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

// Check intersection with any other Rectangle object
Rectangle.prototype.intersects = function(other) {
  return !(
    this.x + this.w  <= other.x            ||
    this.x           >= other.x + other.w  ||
    this.y + this.h  <= other.y            ||
    this.y           >= other.y + other.h
  );
}

// Moves this rectangle by the provided x and y distances.
Rectangle.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
}

// Simple display of any rectangle
Rectangle.prototype.show = function() {
   // fill(204, 102, 0);
  rect(this.x, this.y, this.w, this.h);
}