define([
],function(){

  var URL = window.URL || window.webkitURL;
  
  var requestAnimationFrame = function(callback, element){
    var requestAnimationFrame =
      window.requestAnimationFrame		|| 
      window.webkitRequestAnimationFrame	|| 
      window.mozRequestAnimationFrame		|| 
      window.oRequestAnimationFrame		||
      function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

			return requestAnimationFrame.call(window, callback, element);
		};

    var getUserMedia = function(options, success, error) {
			var getUserMedia =
				window.navigator.getUserMedia ||
				window.navigator.mozGetUserMedia ||
				window.navigator.webkitGetUserMedia ||
				function(options, success, error) {
					error();
				};
			
			return getUserMedia.call(window.navigator, options, success, error);
		};

    return {
      URL: URL,
	  	requestAnimationFrame: requestAnimationFrame,
  		getUserMedia: getUserMedia
    };

});
