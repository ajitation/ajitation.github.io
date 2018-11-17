$(window).resize( function() {

window.location.href = window.location.href;

});



$(document).ready(function(){
  $('.preloader').delay(3700).fadeOut(100);
  
  $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3200,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  

});  
  
})




$(document).ready(function(){

  /********************
  TEST BRO
  ********************/
  
 
  
  
  function handleMotionEvent(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    x = oneDecimal(x);  y = oneDecimal(y);  z = oneDecimal(z);
    
    // Show motion info
    $('.x_axis .value').text(x);
    $('.y_axis .value').text(y);
    $('.z_axis .value').text(z);
    
    
 if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
   
   
   if (y > 1.3 && x > -1 && x < 1){
      $('.data').text("up");
      $(".up").css("z-index","1");
      $(".head-image2:not('.up')").css("z-index","0");
      $(".head-image div").css("color","#fff");

    }
    else if (x > 1.3 && y > 1.3){
      $('.data').text("up-right");
      $(".up-right").css("z-index","1");
      $(".head-image2:not('.up-right')").css("z-index","0");
     $(".head-image div").css("color","#fff");
    }
    else if (x > 1.3 && y > -1 && y < 1){
      $('.data').text("right");
      $(".right").css("z-index","1");
      $(".head-image2:not('.right')").css("z-index","0");
     $(".head-image div").css("color","#fff");
      
    }
    else if (x > 1.3 && y < -1.3){
      $('.data').text("down-right");
      $(".down-right").css("z-index","1");
      $(".head-image2:not('.down-right')").css("z-index","0");
     $(".head-image div").css("color","#fff");
    }
    else if (y < -1.3 && x > -1 && x < 1){
      $('.data').text("down");
      $(".down").css("z-index","1");
      $(".head-image2:not('.down')").css("z-index","0");
      $(".head-image div").css("color","hotpink");
      
    }
    else if (y < -1.3 && x < -1.3){
      $('.data').text("down-left");
      $(".down-left").css("z-index","1");
      $(".head-image2:not('.down-left')").css("z-index","0");
     $(".head-image div").css("color","#fff");
    }
    else if (x < -1.3 && y > -1 && y < 1){
      $('.data').text("left");
      $(".left").css("z-index","1");
      $(".head-image2:not('.left')").css("z-index","0");
      $(".head-image div").css("color","#fff");
  
    }
    else if (x < -1.3 && y > 1.3){
      $('.data').text("up-left");
      $(".up-left").css("z-index","1");
      $(".head-image2:not('.up-left')").css("z-index","0");
      $(".head-image div").css("color","#fff");
    }
    else if(y > -1 && y < 1 && x > -1 && x < 1){
      $('.data').text("front");
   
    }
   
    
}  else {
  
  if (y < -1.3 && x > -1 && x < 1){
      $('.data').text("up");
      $(".up").css("z-index","1");
      $(".head-image2:not('.up')").css("z-index","0");
      $(".head-image div").css("color","#fff");
    
    }
    else if (x < -1.3 && y < -1.3){
      $('.data').text("up-right");
      $(".up-right").css("z-index","1");
      $(".head-image2:not('.up-right')").css("z-index","0");
     $(".head-image div").css("color","#fff");
    }
    else if (x < -1.3 && y > -1 && y < 1){
      $('.data').text("right");
      $(".right").css("z-index","1");
      $(".head-image2:not('.right')").css("z-index","0");
     $(".head-image div").css("color","#fff");
      
    }
    else if (x < -1.3 && y > 1.3){
      $('.data').text("down-right");
      $(".down-right").css("z-index","1");
      $(".head-image2:not('.down-right')").css("z-index","0");
     $(".head-image div").css("color","#fff");
    }
    else if (y > 1.3 && x > -1 && x < 1){
      $('.data').text("down");
      $(".down").css("z-index","1");
      $(".head-image2:not('.down')").css("z-index","0");
      $(".head-image div").css("color","hotpink");
    }
    else if (y > 1.3 && x > 1.3){
      $('.data').text("down-left");
      $(".down-left").css("z-index","1");
      $(".head-image2:not('.down-left')").css("z-index","0");
      $(".head-image div").css("color","#fff");
    }
    else if (x > 1.3 && y > -1 && y < 1){
      $('.data').text("left");
      $(".left").css("z-index","1");
      $(".head-image2:not('.left')").css("z-index","0");
      $(".head-image div").css("color","#fff");
    }
    else if (x > 1.3 && y < -1.3){
      $('.data').text("up-left");
      $(".up-left").css("z-index","1");
      $(".head-image2:not('.up-left')").css("z-index","0");
      $(".head-image div").css("color","#fff");
    }
    else if(y > -1 && y < 1 && x > -1 && x < 1){
      $('.data').text("front");
   
    }
  
  
}
    
    
    
    
    
   

  }

  window.addEventListener("devicemotion", handleMotionEvent, true);


  function oneDecimal(n) {
    var number = n;
    var rounded = Math.round( number * 10 ) / 10;
    return rounded;
  }
  
  
  window.addEventListener("deviceorientation", handleOrientation, true);
  
  function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  if( beta > 4 && gamma > -10 && gamma < 10){
      $(".head-text").css("opacity","0");
    } else {
      $(".head-text").css("opacity","1");
    }   

}
  

 
  
});





$('#fullpage').fullpage({
  anchors: ['wtf', 'hoop', 'work', '4thpage', 'lastPage'],
  menu: '#menu',
  slidesNavigation: false,
  normalScrollElements: '#element1, .scroll_cont, .scroll_cont1, .who_cont, .why_cont',
  scrollOverflow: false,
  		autoScrolling: true,
  responsiveWidth: 400, 
  normalScrollElementTouchThreshold: 1,
});






$(document).ready(function(){
  

  $(".menu_item_who .btn").click(function(){
    $(".who_btn").toggleClass("back_btn")
  })
  
   $(".menu_item_why .btn").click(function(){
    $(".why_btn").toggleClass("back_btn")
  })
  
  
  
  
  $('.head-image').css('z-index','3');
  $('.menu_item_wtf .btn').click(function(){
    $('.menu_item_wtf .btn').switchClass("sp_btn_o","sp_btn_c");
    $('.menu_item_hoop1 .btn').switchClass("sp_btn_c","sp_btn_o");
    });

  
$('.menu_item_hoop1 .btn').click(function(){
   /* $('.sec_c').toggleClass("sec_o");  */
    $('.menu_item_wtf .btn').switchClass("sp_btn_c","sp_btn_o");
    $('.menu_item_hoop1 .btn').switchClass("sp_btn_o","sp_btn_c");

  });
  
  
   
  

  $('.menu_item_who .btn').click(function(){
    $('.who .panel_c').toggleClass("panel_o");
    $('.fullpage_o').toggleClass("fullpage_lo");
    $('.menu_item_who .btn_c').toggleClass("btn_o");
  });
 
  
  $('.menu_item_why .btn').click(function(){
    $('.why .panel_c').toggleClass("panel_o");
    $('.fullpage_o').toggleClass("fullpage_ro");
    $('.menu_item_why .btn_c').toggleClass("btn_o");
  });
  
  $('.menu_item_work .btn').click(function(){
   /* $('.sec_c').toggleClass("sec_o");  */
    $('.menu_item_work .btn').switchClass("sp_btn_o","sp_btn_c");
    $('.menu_item_hoop .btn').switchClass("sp_btn_c","sp_btn_o");
  });
  
  $('.menu_item_hoop .btn').click(function(){
   /* $('.sec_c').toggleClass("sec_o");  */
    $('.menu_item_work .btn').switchClass("sp_btn_c","sp_btn_o");
    $('.menu_item_hoop .btn').switchClass("sp_btn_o","sp_btn_c");

  });
  
  
  /* TICKER CODES __ WORK TICKER */
  
   $( ".ticker_item" ).hover(
  function() {
    $(".preview_wrap").css("display","flex");
  }, function() {
    $(".preview_wrap").css("display","none");
  }
);
  
  
  $( ".pre1_text" ).hover(
  function() {
    $(".pre1").css("display","block");
  }, function() {
    $(".pre1").css("display","none");
  }
);
  
   $( ".pre2_text" ).hover(
  function() {
    $(".pre2").css("display","block");
  }, function() {
    $(".pre2").css("display","none");
  }
);
  
  
     $( ".pre3_text" ).hover(
  function() {
    $(".pre3").css("display","block");
  }, function() {
    $(".pre3").css("display","none");
  });
  
     $( ".pre4_text" ).hover(
  function() {
    $(".pre4").css("display","block");
  }, function() {
    $(".pre4").css("display","none");
  }
);
  
  
  
     $( ".pre5_text" ).hover(
  function() {
    $(".pre5").css("display","block");
  }, function() {
    $(".pre5").css("display","none");
  }
);
  
     $( ".pre6_text" ).hover(
  function() {
    $(".pre6").css("display","block");
  }, function() {
    $(".pre6").css("display","none");
  }
);  
     $( ".pre7_text" ).hover(
  function() {
    $(".pre7").css("display","block");
  }, function() {
    $(".pre7").css("display","none");
  }
);   
     $( ".pre8_text" ).hover(
  function() {
    $(".pre8").css("display","block");
  }, function() {
    $(".pre8").css("display","none");
  }
);  
  
  /* TICKER CODES __ WTF TICKER */

   
  $( ".pre01_text" ).hover(
  function() {
    $(".pre01").css("display","block");
  }, function() {
    $(".pre01").css("display","none");
  });
  
   $( ".pre02_text" ).hover(
  function() {
    $(".pre02").css("display","block");
  }, function() {
    $(".pre02").css("display","none");
  });
  
   $( ".pre03_text" ).hover(
  function() {
    $(".pre03").css("display","block");
  }, function() {
    $(".pre03").css("display","none");
  });
    
   $( ".pre04_text" ).hover(
  function() {
    $(".pre04").css("display","block");
  }, function() {
    $(".pre04").css("display","none");
  });  
  
   $( ".pre05_text" ).hover(
  function() {
    $(".pre05").css("display","block");
  }, function() {
    $(".pre05").css("display","none");
  });    
 
   $( ".pre06_text" ).hover(
  function() {
    $(".pre06").css("display","block");
  }, function() {
    $(".pre06").css("display","none");
  }); 
  
  
/* //////  HOVERBOX CODE  /////////  */
 $( ".hover_t" ).hover(
  function() {
    $(".hoverbox").css("display","block");
    $(".profile_img").css("display","none");

  }, function() {
    $(".hoverbox").css("display","none");
    $(".profile_img").css("display","block");

  }); 
  
  

  
   $( ".h_fun" ).hover(
  function() {
    $(".i_fun").css("display","block");
  }, function() {
    $(".i_fun").css("display","none");
  }); 
  
$( ".h_sense" ).hover(
  function() {
    $(".i_sense").css("display","block");
  }, function() {
    $(".i_sense").css("display","none");
  }); 
  
$( ".h_pigeon" ).hover(
  function() {
    $(".i_pigeon").css("display","block");
  }, function() {
    $(".i_pigeon").css("display","none");
  });   

  
$( ".h_stepwell" ).hover(
  function() {
    $(".i_stepwell").css("display","block");
  }, function() {
    $(".i_stepwell").css("display","none");
  });    

  
$( ".h_nid" ).hover(
  function() {
    $(".i_nid").css("display","block");
  }, function() {
    $(".i_nid").css("display","none");
  });   

$( ".h_lang" ).hover(
  function() {
    $(".i_lang").css("display","block");
  }, function() {
    $(".i_lang").css("display","none");
  });   
  
  
$( ".h_spec" ).hover(
  function() {
    $(".i_spec").css("display","block");
  }, function() {
    $(".i_spec").css("display","none");
  });   
  
  
$( ".h_web" ).hover(
  function() {
    $(".i_web").css("display","block");
  }, function() {
    $(".i_web").css("display","none");
  }); 
  
$( ".h_behave" ).hover(
  function() {
    $(".i_behave").css("display","block");
  }, function() {
    $(".i_behave").css("display","none");
  });   
  
  
$( ".h_philo" ).hover(
  function() {
    $(".i_philo").css("display","block");
  }, function() {
    $(".i_philo").css("display","none");
  });   
  
  
$( ".h_exist" ).hover(
  function() {
    $(".i_exist").css("display","block");
  }, function() {
    $(".i_exist").css("display","none");
  }); 

$( ".h_vapor" ).hover(
  function() {
    $(".i_vapor").css("display","block");
  }, function() {
    $(".i_vapor").css("display","none");
  });   

$( ".h_junko" ).hover(
  function() {
    $(".i_junko").css("display","block");
  }, function() {
    $(".i_junko").css("display","none");
  });   
  
$( ".h_music" ).hover(
  function() {
    $(".i_music").css("display","block");
  }, function() {
    $(".i_music").css("display","none");
  });   

$( ".h_hula" ).hover(
  function() {
    $(".i_hula").css("display","block");
  }, function() {
    $(".i_hula").css("display","none");
  });   
  
$( ".h_memes" ).hover(
  function() {
    $(".i_memes").css("display","block");
  }, function() {
    $(".i_memes").css("display","none");
  }); 
  
  
$( ".h_japanese" ).hover(
  function() {
    $(".i_japanese").css("display","block");
  }, function() {
    $(".i_japanese").css("display","none");
  });   

$( ".h_art" ).hover(
  function() {
    $(".i_art").css("display","block");
  }, function() {
    $(".i_art").css("display","none");
  });   
  
$( ".h_archi" ).hover(
  function() {
    $(".i_archi").css("display","block");
  }, function() {
    $(".i_archi").css("display","none");
  });   

$( ".h_lgbt" ).hover(
  function() {
    $(".i_lgbt").css("display","block");
  }, function() {
    $(".i_lgbt").css("display","none");
  });   
  
$( ".h_subcult" ).hover(
  function() {
    $(".i_subcult").css("display","block");
  }, function() {
    $(".i_subcult").css("display","none");
  });  
  
  
$( ".h_kanban" ).hover(
  function() {
    $(".i_kanban").css("display","block");
  }, function() {
    $(".i_kanban").css("display","none");
  });   

$( ".h_convo" ).hover(
  function() {
    $(".i_convo").css("display","block");
  }, function() {
    $(".i_convo").css("display","none");
  });   
  
$( ".h_brain" ).hover(
  function() {
    $(".i_brain").css("display","block");
  }, function() {
    $(".i_brain").css("display","none");
  });   

$( ".h_heart" ).hover(
  function() {
    $(".i_heart").css("display","block");
  }, function() {
    $(".i_heart").css("display","none");
  });   
  
$( ".h_mail" ).hover(
  function() {
    $(".i_mail").css("display","block");
  }, function() {
    $(".i_mail").css("display","none");
  }); 

$( ".h_behance" ).hover(
  function() {
    $(".i_behance").css("display","block");
  }, function() {
    $(".i_behance").css("display","none");
  });      
  
  
});




var imageTop = $(".head-image").offset().top;

var imageLeft = $(".head-image").offset().left;

var imageBottom = imageTop + $(".head-image").height();

var imageRight = imageLeft + $(".head-image").width();



$( document ).on( "mousemove", function( event ) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
  
 $(".head-image2").css("z-index","0");
 $(".head-image").css("z-index","3000");

if(mouseX >imageLeft && mouseX <imageRight && mouseY <imageTop){

    $(".up").css("z-index","1");

} else if(mouseX <imageLeft && mouseY <imageTop){

    $(".up-left").css("z-index","1");

} else if(mouseX <imageLeft && mouseY >imageTop && mouseY <imageBottom){

    $(".left").css("z-index","1");

} else if(mouseX <imageLeft && mouseY >imageBottom){

    $(".down-left").css("z-index","1");

} else if(mouseX >imageLeft && mouseX <imageRight && mouseY >imageBottom){

    $(".down").css("z-index","1");

} else if(mouseX >imageRight && mouseY >imageBottom){

    $(".down-right").css("z-index","1");

} else if(mouseX >imageRight && mouseY >imageTop && mouseY <imageBottom){

    $(".right").css("z-index","1");

} else if(mouseX >imageRight && mouseY <imageTop){

    $(".up-right").css("z-index","1");

} else{

    $(".front").css("z-index","1");

}
  

  
  
});