$(document).ready(function(){
	
	console.log("wassup");

	$(function() {
	 	$( "#garbage" ).draggable();
  	});

 	$(" #jaw ").hover(function(){
        $( "#garbage" ).hide();
    });

	$(" #jaw ").mouseenter(function() {
    	$(this).animate({ marginTop: -100 });

	})

	$(" #jaw ").mouseleave(function() {
    	$(this).animate({ marginTop: -160 });

	})


});