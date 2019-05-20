
view2048 = {

  model: model2048,
  colors: [ "papayawhip", "darkkhaki", "coral", "lime", "dodgerblue", 
    "mediumblue", "darkred", "purple", "darkbrown", "black", "orange" ],

  init: function(  ) {
    this.update();
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

}
