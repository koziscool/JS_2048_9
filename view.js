
view2048 = {

  model: model2048,
  colors: [ "papayawhip", "darkkhaki", "coral", "lime", "dodgerblue", 
    "mediumblue", "darkred", "purple", "green", "brown", "black", "orange" ],

  init: function(  ) {
    this.update();
    this.addEventHandler();
  },

  update: function(){
    this.$grid = $("#grid-2048");
    this.$grid.empty();
    for( var i = 0; i < this.model.numSquares ; i++ ) {
      var color = this.colors[0];
      var value = this.model.values[i] || "&nbsp";
      if( value > 0 ) color = this.colors[ Math.log2(value) ];
      var $square = $("<div><div class='value'>" + value + "</div></div>");
      $square.css("background-color", color);
      $square.addClass("square");
      this.$grid.append($square);
    }
  },

  addEventHandler: function(  ) {
    var that = this;
    window.addEventListener( "keydown", function(e){
      if( e.keyCode === 37 ) that.model.move("left");
      if( e.keyCode === 38 ) that.model.move("up");
      if( e.keyCode === 39 ) that.model.move("right");
      if( e.keyCode === 40 ) that.model.move("down");
      that.update();
    } )
  },


}
