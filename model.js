
model2048 = {

  side: 4,
  numSquares: 16,

  values: [],

  rowIndexes: {
    "up": [ [0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15] ],
    "down": [ [12,8,4,0], [13,9,5,1], [14,10,6,2], [15,11,7,3] ],
    "right": [ [3,2,1,0], [7,6,5,4], [11,10,9,8], [15,14,13,12] ],
    "left": [ [0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15] ],
  },


  init: function(  ) {
    for( var i = 0; i < this.numSquares; i++ ) {
      this.values[i] = 0;
    }
    this.insertRandomTile();
    this.insertRandomTile();
  },

  insertRandomTile: function(  ) {
    var zeroes = [];
    for( var i = 0; i < this.values.length ; i++ ) {
      if( this.values[i] === 0 ) zeroes.push(i);
    }
    var rand = Math.floor( Math.random() * zeroes.length );
    var newValue = (Math.random() > 0.9 ? 4 : 2);
    this.values[ zeroes[rand] ] = newValue;
  },

}
