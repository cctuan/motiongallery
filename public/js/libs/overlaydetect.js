// A,B : {left , top , width , height}
// option : number (percentage)
// callback function
define([
  'jquery'
],function($){
  var overlaydetect = function(A,B,option,callback){
    var cA = {};
    cA.l = A.left + A.width/2;
    cA.t = A.top + A.height/2;
    var cB = {};
    cB.l = B.left + B.width/2;
    cB.t = B.top + B.height/2;
    if(Math.abs(cA.l - cB.l)<Math.max(A.width,B.width)/2*option.pert){
      if(Math.abs(cA.t - cB.t)<Math.max(A.height,B.height)/2*option.pert){
        callback();
      }
    }


  };
  return overlaydetect;

});
