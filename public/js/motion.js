define([
  'jquery',
  'libs/overlaydetect',
  'smoother',
  'campatibility',
  'detect',
  'motion/moveBall',
  'motion/videoTag',
  'libs/objectdetect.mouth',
  'libs/objectdetect.handopen',
  'libs/objectdetect.handfist',
  'libs/objectdetect.frontalface',
  'jquery-detect',
  'detect'
],function($$,
  Overlay,
  Smoother,
  Camp,
  Detect,
  MoveBall,
  VideoTag,
  Mouth,
  Handopen,
  Handfist,
  Face,
  $){
  var motion = function(){
    var ball,
        video,
        actionTargets = {};
        
    var smoother = new Smoother(0.85, [0, 0, 0, 0, 0]);
    this.init = function(objs){
      video = new VideoTag;
      video.init({
        width: objs.targetSize.width,
        height: objs.targetSize.height
      });
      video.hide();
      actionTargets = objs.objs;
    };
    this.createBall = function(){
      ball = new MoveBall;
      ball.init({
        color:'yellow',
        type:'ball'
      });
    };
    this.start = function(){
      try{
        Camp.getUserMedia({video:true},function(stream){
          try{
            video.setSrc(Camp.URL.createObjectURL(stream));
          }catch(e){
            video.setSrc(stream);
          }
          Camp.requestAnimationFrame(tick);
        },function(error){
          alert('webRTC not available');
        });
      }catch(e){
        alert(e);
      }
    };
    function actionA(){
      console.log('actionA');
    }
    function actionB(){
      console.log('actionB');
    }
    function tick(){
      Camp.requestAnimationFrame(tick);
      if(video.ready()){
        $(video.getDom()).objectdetect("all",{scaleMin:3,scaleFactor:1.1,classifier:Face},function(coords){
          if(coords[0]){
            coords = smoother.smooth(coords[0]);
            ball.setX(coords[0]+coords[2] * 1.0/8 + $(video.getDom()).offset().left); 
            ball.setY(coords[1]+coords[3] * 0.8/8 + $(video.getDom()).offset().top); 
          }
        });

        for(var k in actionTargets){
          Overlay(
              actionTargets[k].dom.getInfo(),
              ball.getInfo(),
              {pert:0.9},
              actionTargets[k].action);
  
        }

      }

    }
  };
  return motion;

});
