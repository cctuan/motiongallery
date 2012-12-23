define([
  'jquery',
  'swobject'
],function($,swf){
  var tube = function(){
    var dom ,
        w,
        h,
        id,
        arrowScriptAccess  = "always",
        baseUrl;
    this.init = function(config){
      
      id = config.id||"yttube";
      dom = $('<div id="'+id+'"/>')
        .appendTo(config.targ||$('body'));
      w = config.width || 640;
      h = config.height || 480;
      baseUrl = config.url || "http://www.youtube.com/v/"+config.videoid+"?enablejsapi=1&playerapiid="+id+"&version=3";
    };
    this.start = function(){
      var params = {
            allowScriptAccess: "always" 
          },
          atts = {
            id: id       
          };
      swf.embedSWF(baseUrl,id,""+w+"",""+h+"","8",null,null,params,atts);
    };

  };
  return tube;
});
