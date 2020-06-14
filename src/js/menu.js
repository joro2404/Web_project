$(document).ready(function(){

    // top menu 
    $(window).scroll(function(){
  
      var $scrTop = $(this).scrollTop();
      var $headerTop = $('.header-top');
  
      //fixed scroll
      
      if ( $scrTop > 150 ) {
        $headerTop.addClass('header-top-fixed')
      } 
      else if ( $scrTop < 150 ) {
        $headerTop.removeClass('header-top-fixed')
      }
      
      if ( $scrTop > 200 ) {
        $headerTop.addClass('header-top-static');
      } 
      else if ( $scrTop < 200 ) {
        $headerTop.removeClass('header-top-static');
      }
    });
  
    // mobile menu
    var $mobNavMenu         = $('.mob-nav-btn'),
        $mobNav             = $('.mob-nav'),
        $mobDrop_1          = $('.mob-drop-1'),
        $mobDrop_2          = $('.mob-drop-2'),
        $mobDropDown_1      = $('.mob-dropdown-1'),
        $mobDropDown_2      = $('.mob-dropdown-2');
  
    $mobNavMenu.on('click', function() {
  
      $(this).toggleClass('mob-nav-btn-arrow');
  
      $mobNav.toggleClass('mob-nav-show');
      
    });
  
    $mobDrop_1.on('click', function(){
      $(this).toggleClass('mob-drop-rotate');
      $mobDropDown_1.toggleClass('mob-dropdown-show');
      $mobDrop_2.removeClass('mob-drop-rotate');
      $mobDropDown_2.removeClass('mob-dropdown-show');
    });
    $mobDrop_2.on('click', function(){
      $(this).toggleClass('mob-drop-rotate');
      $mobDropDown_2.toggleClass('mob-dropdown-show');
      $mobDrop_1.removeClass('mob-drop-rotate');
      $mobDropDown_1.removeClass('mob-dropdown-show');
    });
  
  });