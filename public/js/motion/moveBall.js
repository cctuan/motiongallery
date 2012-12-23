define([
  'jquery'
],function($){
  var dom = function(){
    var result,
        w,
        h,
        left,
        top;
    this.init = function(config){
      w = config.width||20;
      h = config.height||20;
      left = config.left||0;
      top = config.top||0;
      switch(config.type){
        case 'ball':
          result = $('<div/>')
            .css({
              width:w +'px',
              height:h + 'px',
              backgroundColor: config.color||'black',
              position:'absolute',
              left: left + 'px',
              top:  top + 'px'

            })
            .appendTo(config.targ||$('body'));
        break;
      
      }
      
    };
    this.getH = function(){
      return h;
    },
    this.getW = function(){
      return w;
    };
    this.setX = function(x){
      var ox = this.getX();
      result.css({
        left : x + 'px'
      });
    };
    this.getX = function(){
      return result.position().left;
    };
    this.setY = function(y){
      var oy = this.getY();
      result.css({
        top : y + 'px'   
      });
    };
    this.getY = function(){
      return result.position().top;
    };
    this.getInfo = function(){
      return {
        left: this.getX(),
        top: this.getY(),
        width: this.getW(),
        height: this.getH()
      };
    };  
    this.getDom = function(){
      return result;
    };
  }; 

  return dom;
});
