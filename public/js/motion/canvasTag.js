define([
  'jquery'    
],function($){
  var canvas = function(){
    var dom,
        context,
        w,
        h;
    this.init = function(config){
      config = config||{};
      config.id = config.id||'canvas-blended';
      w = config.width = config.width||640;
      h = config.height = config.height||480;
      config.target = config.target||$('body');
      dom = $('<canvas id="'+config.id+'" width="'+config.width+'" height="'+config.height+'"/>').appendTo(config.target)[0]; 

      context = dom.getContext('2d');
      context.translate(w,0);
      context.scale(-1,1);
    };
    this.getDom = function(){
      return dom;
    };
    this.getContext = function(){
      return context;
    };
    this.draw = function(config){
      context.drawImage(config.targ,0,0,config.w,config.h);
    };
  };
  return canvas;
});
