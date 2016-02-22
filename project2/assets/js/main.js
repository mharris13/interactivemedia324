$(document).ready(function(){

      	//alert("Feed the Trump");

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
        //when you release the pieces of garbage, the trump throws up money
        $(" #bottle ").mouseup(function(){
              $('#jaw').animate({ marginTop: -100 });
              $('#money').fadeIn("slow");
              $('#money').fadeOut("slow");
              $('#jaw').animate({ marginTop: -160 });
        });

        $(" #paper ").mouseup(function(){
              $('#jaw').animate({ marginTop: -100 });
              $('#money').fadeIn("slow");
              $('#money').fadeOut("slow");
              $('#jaw').animate({ marginTop: -160 });
        });

        $(" #apple ").mouseup(function(){
              $('#jaw').animate({ marginTop: -100 });
              $('#money').fadeIn("slow");
              $('#money').fadeOut("slow");
              $('#jaw').animate({ marginTop: -160 });
        });

});










