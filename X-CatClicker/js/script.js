
var cat1Count = 0;
var cat2Count = 0;

$(function() {
	$('#cat1').on( "click", function() {
	 cat1Count += 1;
	 $('#count1').text(cat1Count)
	});
});


$(function() {
	$('#cat2').on( "click", function() {
	 cat2Count += 1;
	 $('#count2').text(cat2Count)
	});
});