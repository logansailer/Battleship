class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    this.timesHit++
    return this.timesHit
    }
  

  isSunk() {
    if (this.timesHit >= this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;