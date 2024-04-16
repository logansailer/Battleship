class Ship {
  constructor(position) {
    this.position = position
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    this.timesHit++
    }
  

  isSunk() {
    if (this.timesHit >= this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;