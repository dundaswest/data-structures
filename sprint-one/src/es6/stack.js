class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.mysize = 0;
  }

  push (value) {
    this.mysize++;
    this[this.mysize] = value;
  }

  pop () {
    this.mysize--;
    return this[this.mysize+1];
  }

  size () {
    return Math.max(this.mysize,0);
  }


}