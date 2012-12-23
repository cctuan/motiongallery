define([
],function(){
//  var enlargedetect = new Worker('js/worker/enlargeDetect.js');
  
  //enlargedetect.addEventListener("message",function(e){
   // console.log(e.data);
  //},false);
  function fastAbs(value) {
		// funky bitwise, equal Math.abs
		return (value ^ (value >> 31)) - (value >> 31);
    //return Math.abs(value);
	}
  function positionIdentefier(index,w,h){
    return {
      x: index%w,
      y: Math.floor(index/h)
    };
  }
  function colorIdentifier(r,g,b){
    var max = Math.max(r,g,b),
        min = Math.min(r,g,b),
        h;
    if(max == min){
      h = 0
    }else if(max==r){
      if(g>=b){
        h = 60*(g-b)/(max-min);
      }else{
        h = 60*(g-b)/(max-min) + 360;
      }
    }else if(max == g){
      h = 60*(b-r)/(max-min)+120;
    }else if(max == b){
      h = 60*(r-g)/(max-min) +240;
    }
    if((h<65)&&(h>55)){
      return true;
    }else{
      return false;
    }
  }
  function moveIdentifier(now , prev , index){
    var range = 5,
        nowt = ( now[index] + now[index+1] + now[index+2]) /3,
        pret = ( prev[index] + prev[index+1] + prev[index+2])/3;
    if(Math.abs(nowt-pret)<=range){  
      return false;
    }else{
      return true;
    }
  
  }
  var cal = function(result,now,prev,w,h){
    var i = 0,
        xtotal = 0,
        ytotal = 0,
        total = 0;

    while(i < (result.length / 4)){
      var r = 4*i,
          g = 4*i+1,
          b = 4*i+2,
          op = 4*i+3;
      if(colorIdentifier(now[r],now[g],now[b])
          &&(moveIdentifier(now,prev,i))){
        result[r] = now[r] ;
        result[g] = now[g] ;
        result[b] = now[b] ;
        result[op] = 0xFF;
        xtotal += positionIdentefier(i,w,h).x;
        ytotal += positionIdentefier(i,w,h).y;
        total += 1;
      }else{
        result[r] = 0 ;
        result[g] = 0 ;
        result[b] = 0 ;
        result[op] = 0xFF;
      }
      i++;
    }
    return {
      x : xtotal/total,
      y : ytotal/total
    }
  };
  return cal;

});
