function HashTable() {
  this.SIZE = 16;
  // the array will be instantiated as [undefined, undefined....]
  // the array length should not change in this problem
  this.storage = new Array(this.SIZE);
  // console.log(this.storage);
}

HashTable.prototype.set = function(key, value) {
  var index = hashCode(key, this.SIZE);
  if (this.storage[index]) {
    this.storage[index][key] = value;
  }
  else {
    this.storage[index] = {};
    this.storage[index][key] = value;
  }
}

HashTable.prototype.get = function(key) {
  var index = hashCode(key, this.SIZE);
  return this.storage[index][key];
}

HashTable.prototype.remove = function(key) {
  var index = hashCode(key, this.SIZE);
  delete this.storage[index][key];
}

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  var hash = 0;
  if (string.length == 0) return hash;
  for (i = 0; i < string.length; i++) {
    var letter = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}
