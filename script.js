$(function() {
  /**
  * Smooth scrolling to page anchor on click
  **/
  $("a[href*='#']:not([href='#'])").click(function() {
      if (
          location.hostname == this.hostname
          && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
      ) {
          var anchor = $(this.hash);
          anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
          if ( anchor.length ) {
              $("html, body").animate( { scrollTop: anchor.offset().top }, 1000);
          }
      }
  });

  //$(window).scroll(function() {


 // });


});

$(document).scroll(function(){
  console.log(scrollY);

if (scrollY < 671) { $("a[href]").removeClass("en-cours"); $("a[href$='a-propos']").addClass("en-cours");}
if(671 < scrollY && scrollY <=1200){ $("a[href]").removeClass("en-cours"); $("a[href$='experiences']").addClass("en-cours");}
if(1200< scrollY && scrollY <=2000){ $("a[href]").removeClass("en-cours"); $("a[href$='formations']").addClass("en-cours");}
if(2000 < scrollY && scrollY <=2708){ $("a[href]").removeClass("en-cours"); $("a[href$='loisirs']").addClass("en-cours");}
if(2708 < scrollY){ $("a[href]").removeClass("en-cours"); $("a[href$='contact']").addClass("en-cours");}

});
