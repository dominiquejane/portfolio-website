$('#read-more').click(function() {
	$('#more-text').animate({"height":"+=150px"},1000);
	if ($('#more-text').height() > 100){
		$('#read-less').css('visibility','visible');
	}
	if ($('#more-text').height() > 500) {
		$('#read-more').css('visibility','hidden');    		
	}
	
}); 

$('#read-less').click(function() {
	$('#more-text').animate({"height":"-=150px"},1000);
	if ($('#more-text').height() < 500) {
		$('#read-less').css('visibility','hidden');    		
	}
	if ($('#more-text').height() < 900){
		$('#read-more').css('visibility','visible');
	}
}); 
