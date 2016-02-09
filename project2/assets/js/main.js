$(document).ready(function(){
	
	console.log("wassup");

	$(function() {
	 	$( "#garbage" ).draggable();
  	});

 	$("#mouth").hover(function(){
        $("#garbage").hide();
    });

 
});