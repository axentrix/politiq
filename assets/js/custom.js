$(function(){
  //  $('#content-right').slimScroll({
 //      height: '500px'
 //   });
 var $window = $(window)
  $("textarea").focus(function(){
		
 if( !$(".textareadiv").hasClass("active")){
 $(".textareadiv").toggleClass("active");
 
 
 
 if (window.innerWidth <= 490){
 
  $(".topbar").hide();
  $(".articles").hide();
   $("#tabbar").hide();
     $("footer").hide();
	   $(".fullpost").hide();
	 $(".leftcontent").toggleClass("active"); 
	$("#moodtoolbar").toggleClass("active"); 
	 $(".politiqbox").toggleClass("active"); 
	  }
	  
 }
  })
  
 
  // $("textarea").blur(function(){
		
 
// $(".textareadiv").toggleClass("active");
 
 
//  })
 
 
 var txt = $('#politicalmood'),
    hiddenDiv = $(document.createElement('div')),
    content = null;

  txt.addClass('txtstuff');
  hiddenDiv.addClass('hiddendiv common');

  $('body').append(hiddenDiv);

  txt.on('keyup', function () {

    content = $(this).val();

    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(content + '<br class="lbr">');

    $(this).css('height', hiddenDiv.height());

  });
 
 $(".addimagelink").click(function(ev){
		ev.preventDefault(); 
 
 $(".addimagediv").toggleClass("hidden");
 
 if( !$(".addtagsdiv").hasClass("hidden")){
  $(".addtagsdiv").toggleClass("hidden");
 }
 })
 
  $(".addtagslink").click(function(ev){
		ev.preventDefault(); 
 
 $(".addtagsdiv").toggleClass("hidden");
if( !$(".addimagediv").hasClass("hidden")){
  $(".addimagediv").toggleClass("hidden");
 }
 })
 
 $("#showarticles").addClass("active");
$("#showarticles").click(function(ev){
		ev.preventDefault(); 
	if ($(this).hasClass("active")){
		ev.preventDefault(); 
		
	}
	else {
	$(this).addClass("active");
	$("#showpoliticians").toggleClass("active");
	
	$(".leftcontent").toggleClass("hidden");
	
	$('.rightmenu').toggleClass("active");
	
	
	
	
	$('body').scrollTo(".content-page", 1000, { offset: -100});
	
	}
	
	
})

$("#showpoliticians").click(function(ev){
		ev.preventDefault(); 
		
			if ($(this).hasClass("active")){
			
				ev.preventDefault(); 
			}
			
			else{
				
				$("#showarticles").toggleClass("active");
				
	$(".rightmenu").toggleClass("active");
	
	$('.leftcontent').toggleClass("hidden");	
	
	$(this).addClass("active");
	$('body').scrollTo(".content-page", 1000, { offset: -100});
	
	
			}
})
 
$(".search-badge").click(function(ev){
		ev.preventDefault();

$(".navbar").toggleClass("active", 1000);
 $("li#searchdiv").toggleClass("active", 1000);




});


$(".closelink").click(function(ev){
		ev.preventDefault();


 $("#searchdiv").toggleClass("hidden");

});
 
 
});