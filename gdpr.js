/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

( function( $ ) {

    $(document).ready(function() {

        var title = Drupal.settings.gdpr.login_title;
        var text = Drupal.settings.gdpr.login_text;
     
        $( "body" ).prepend( '<div class="after-login-popup" data-popup="after-login-popup-1"><div class="after-login-popup-inner"><h2>' + title + '</h2><p>' + text + '</p><p><a data-popup-close="after-login-popup-1" href="#">Luk</a></p><a class="after-login-popup-close" data-popup-close="after-login-popup-1" href="#">x</a></div></div>' );

        $('.after-login-popup').fadeIn(350); 
    
        $('[data-popup-close]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
            e.preventDefault();
        });
   
    });      
    
} )( jQuery );