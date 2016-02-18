$(document).ready(function(){

	alert("Feed the Trump");

	//functions that allow divs to be dragged
	$(function() {
	 	$( "#bottle" ).draggable();
  	});

  	$(function() {
	 	$( "#paper" ).draggable();
  	});

  	$(function() {
	 	$( "#apple" ).draggable();
  	});


  	//function that hides divs when mouse is released over jaw allowing him to "eat"
 	$(" #bottle ").mouseup(function(){
        $( "#bottle" ).hide();
    });

 	$(" #paper ").mouseup(function(){
        $( "#paper" ).hide();
    });

    $(" #apple ").mouseup(function(){
        $( "#apple" ).hide();
    });


 	//mouse enter&leave function that opens and closes his mouth
	$(" #jaw ").mouseenter(function() {
    	$(this).animate({ marginTop: -100 });

	})

	$(" #jaw ").mouseleave(function() {
    	$(this).animate({ marginTop: -160 });
	})


 	//mouth opening to vomit money 
 	//(code only above this- very long)
	//setTimeout(function() {
    		//$('#jaw').delay(4000).animate({ marginTop: -100 });
    		//$('#money').delay(4000).fadeIn("slow");
    		//$('#money').fadeOut("slow");
    		//$('#jaw').delay(500).animate({ marginTop: -160 });

	//})



});