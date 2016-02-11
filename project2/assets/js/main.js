$(document).ready(function(){
	
	console.log("wassup");

	$(function() {
	 	$( "#garbage" ).draggable();
  	});

 	$(" #jaw ").hover(function(){
        $( "#garbage" ).hide();
    });

 
});