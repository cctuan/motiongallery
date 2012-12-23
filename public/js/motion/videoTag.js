define([
  'jquery'
],function($){
  var video = function(){
    var dom;
    this.init = function(config){
      config = config||{};
      config.id = config.id||'srcVideo';
      config.width = config.width||640;
      config.height = config.height||480;
      config.target = config.target||$('body');
      dom = $('<video id="'+config.id+'" width="'+config.width+'" height="'+config.height+'" autoplay/>').appendTo(config.target)[0];    
    };
    this.ready = function(){
      return dom.readyState==dom.HAVE_ENOUGH_DATA;
    };
    this.hide = function(){
      $(dom).hide();
    };
    this.show = function(){
      $(dom).show();
    };
    this.getDom = function(){
      return dom;
    };
    this.setSrc = function(src){
      dom.src = src;
    };
  };  

  return video;
});
