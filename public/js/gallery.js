define([
  'jquery'
],function($){
  var gallery = function(){
    var baseurl,
        w,
        h,
        speed,
        id,
        dom,
        left,
        top,
        imgArray = [],
        imgIndex = 0,
        eventonce = false;

    this.init = function(config){
      baseUrl = config.baseUrl || "img/gallery/";
      left = config.left || 0;
      top = config.top || 0;
      w = config.w || 640;
      h = config.h || 480;
      id = config.id || 'galery';
      targ = config.targ || $('body');
      speed = config.speed || 1000;
      dom = $('<div id="'+id+'"/>')
        .css({
          width: w + 'px',
          height: h + 'px',
          position: 'absolute',
          left : left + 'px',
          top : top + 'px'
        })
        .appendTo(targ)
        .hide();

    };
    this.loadImg = function(imgs){
      for(var k in imgs){
        var img = new Image();
        img.src = baseUrl + imgs[k];
        img.id = 'photo';
        $(img).css({
          width : w + 'px',
          height : h + 'px'
        });
        imgArray.push(img);
      }
  
    };
    this.start = function(){
      dom.show();
      this.next();
      
    };
    this.prev = function(){
      if(!eventonce){
        eventonce = true;
        var curImg = dom.find('img'),
            leng = imgArray.length;

        if(curImg){
          imgIndex -= 1;
          imgIndex = (imgIndex==-1)?(leng-1):(imgIndex); 
          $(curImg).fadeOut('slow').remove();
          $(imgArray[imgIndex])
            .appendTo(dom)
            .hide()
            .fadeIn('slow',function(){
              eventonce = false;   
            });
        }else{
          
        }
      }
    };
    this.next = function(){
      if(!eventonce){
        eventonce = true;
        var curImg = dom.find('img'),
            leng = imgArray.length;

        if(curImg){
          imgIndex = (imgIndex==leng)?0:(imgIndex+1); 
          $(curImg).fadeOut('slow').remove();
          $(imgArray[imgIndex])
            .appendTo(dom)
            .hide()
            .fadeIn('slow',function(){
              eventonce = false;    
            });
        }else{
          $(imgArray[imgIndex])
            .appendTo(dom)
            .fadeIn('slow',function(){
              eventonce = false;    
            });
          imgIndex++;
        }
      }
    }
  };
  return gallery;
});
