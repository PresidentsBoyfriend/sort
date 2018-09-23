class Sorter {
  constructor() {
    this.elem = [];
    this.reverse = (left, right) => right - left;
  }

  add(element) {
    this.elem.push(element);
  }

  at(index) {
    return this.elem[index];
  }

  get length() {
    return this.elem.length;
  }

  toArray() {
    return this.elem;
  }

  sort(indices) {
    var arr = [];
    
    for ( var i in indices ) {
      arr.push( this.elem[ indices[i] ] );
    } 

    arr.sort( this.reverse );
    indices.sort( this.reverse );

    var number = 0;
    for ( var y in indices ) {
      this.elem[indices[y]] = arr[number];
      number++;
    }

  }

  setComparator(compareFunction) {
    this.reverse = compareFunction;
  }
}

module.exports = Sorter;