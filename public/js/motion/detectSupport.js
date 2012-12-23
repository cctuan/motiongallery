define(function(){
  var navi,
      streamHandler,
      audioContext;

  if(navigator.getUserMedia){
    navi = function(a,b,c){
      navigator.getUserMedia(a,b,c);
    }
    streamHandler = function(stream){
      return stream;
    };
  }else if(navigator.webkitGetUserMedia){
    navi = function(a,b,c){
      navigator.webkitGetUserMedia(a,b,c);
    };
    streamHandler = function(stream){
      return window.webkitURL.createObjectURL(stream);
    }
  }else if(navigator.mozGetUserMedia){
    navi = navigator.mozGetUserMedia;
  }else if(navigator.msGetUserMedia){
    navi = navigator.msGetUserMedia;
  }else{
    navi = null;
  }
  return {
    getUserMedia:navi,
    streamHandler:streamHandler,
    audioContext : audioContext
  };  
});
