require([
  'jquery',
  'motion',
  'motion/moveBall',
  'gallery',
  'youtube'
],function($,Motion ,MoveBall,Gallery,Tube){
 
  /*
  var tube = new Tube;

  tube.init({
    videoid: "S3guxV8Li9c" 
  });
  tube.start();
  */
  var gallery = new Gallery;
  gallery.init({
    eventonce:true  
  });
  gallery.loadImg([
    'DSCF1020.JPG',
    'DSCF1021.JPG',
    'DSCF1022.JPG',
    'DSCF1025.JPG',
    'DSCF1026.JPG',
    'DSCF1027.JPG',
    'DSCF1030.JPG',
    'DSCF1031.JPG',
    'DSCF1032.JPG',
    'DSCF1035.JPG',
    'DSCF1036.JPG',
    'DSCF1037.JPG'

  ]);
  gallery.start();

  var btnNext = new MoveBall;
  btnNext.init({
    type:'ball',
    top: 200 ,
    left: 100 ,
    width: 100,
    height: 100,
    color: 'red'
  });
  var btnPrev = new MoveBall;
  btnPrev.init({
    type:'ball',
    width : 100,
    height: 100,
    top: 200 ,
    left: 400 ,
    color: 'red'
  });
  function prev(){
    gallery.prev();
  }
  function next(){
    gallery.next();
  }
  var motion = new Motion;
  motion.init({
    targetSize:{
      width:640,
      height:480
    },
    objs:{
      btnNext:{
        dom:btnNext,
        action: next
      },
      btnPrev:{
        dom:btnPrev,
        action: prev
      }
    }
  });
  motion.createBall();
  motion.start();
});
