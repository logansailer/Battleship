class Ship {
  constructor(length) {
    this.length = length;
  }

  hit(position) {
    let times = 0;
    if (position === /*loaction of ship on board*/) {
        times++
    }
    return times;
  }

  isSunk(times) {
    if (this.length === times) {
      return true;
    }
    return false;
  }
}
