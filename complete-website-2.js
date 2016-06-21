var $testimonialContainer = $('.testimonials-master-container');
var $info1 = $testimonialContainer.find('.testimonial-info-1');
var $info2 = $testimonialContainer.find('.testimonial-info-2');
var $info3 = $testimonialContainer.find('.testimonial-info-3');
var $circle = $testimonialContainer.find('.circle');
var $leftCircle = $testimonialContainer.find('.left');
var $middleCircle = $testimonialContainer.find('.middle');
var $rightCircle = $testimonialContainer.find('.right');
var counter = 1;

$leftCircle.on('click', function() {
	counter = 1;
	$circle.css('background-color', '#fff');
	$(this).css('background-color', '#555');
	changeInfo($info1);
});

$middleCircle.on('click', function() {
	counter = 2;
	$circle.css('background-color', '#fff');
	$(this).css('background-color', '#555');
	changeInfo($info2);
});

$rightCircle.on('click', function() {
	counter = 3;
	$circle.css('background-color', '#fff');
	$(this).css('background-color', '#555');
	changeInfo($info3);
});


function changeInfo(infoId) {
		$info1.css('display', 'none');
		$info2.css('display', 'none');
		$info3.css('display', 'none');

		infoId.fadeIn(1000);
 		infoId.css('display', 'initial');
 		infoId.css('display', 'flex');
}