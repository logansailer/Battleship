class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  //adds a hit to ship object
  hit() {
    this.timesHit++;
  }

  //checks if ship object is sunk
  isSunk() {
    if (this.timesHit >= this.length) {
      this.sunk = true;
      return this.sunk;
    }
    return this.sunk;
  }
}

module.exports = Ship;
