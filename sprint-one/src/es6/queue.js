class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.mysize = 0;
    this.map = {};
  }

  enqueue (value) {
    this.mysize++;
    this.map[this.mysize-1] = value ;
  }

  dequeue () {
    this.mysize--;
    var output = this.map[0];
    for(var i = 0; i <= this.mysize;i++) {
      for(var key in this.map) {
        this.map[i] = this.map[key];
      }
    }
    return output;
  }

  size () {
    return Math.max(this.mysize,0) ;
  }

}


/*class Giraffe {
  constructor(name, height) {
    this.name = name;
    this.height = height;
    this.hunger = 10;
  }*/