const Stack = function() {
  return {
    items : [],
    add: function(name){
    this.items.push(name);
    },
    remove: function(name){
    return this.items.pop(name);
    },
    peek: function(){
      return this.items[this.items.length-1];
    },
  }
  
}

const Queue = function() {
  return {
    items : [],
    add: function(name){
      this.items.push(name);
      },
      remove: function(name){
      return this.items.shift(name);
      },
      peek: function(){
        return this.items[0];
      },
  }
}

module.exports = {
  Stack,
  Queue,
}