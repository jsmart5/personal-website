 $(function() {
   $(".burger-menu").click(function(e) {
     e.stopPropagation();
     $(".burger-menu").toggleClass("open");
   });
   $(document).click(function() {
     if ($(".burger-menu").hasClass("open")) {
       $(".burger-menu").removeClass("open");
     }
   });
 });
