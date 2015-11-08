/*
//EXERCISE 1
console.log("hello world");

//long form ready
$(document).ready(function(){
	console.log("ready");
});

//short form ready
$(function(){
	console.log("ready short");
});

//pass a named function
function readyFn() {
	console.log("ready named");
}

//short
$(readyFn);
//long
$(document).ready(readyFn);
//window load? test
$(window).load(function () {
	console.log("wL");
});
//window load
$(window).load(readyFn);
*/

//EXERCISE2
$(document).ready(function(){
//STEP1
var secretBox = $('#secretBox');
secretBox.css({'background-color':'white'});
secretBox.html('<h1>secret box!</h1>');
//STEP2
$('#row1 div').addClass('boxType3');
//STEP3
$('#row4 div:last-child').css({'display':'none'});
//$('#row4 div:last-child').hide(); //alternative to above

//STEP4 -- can't do with jquery selection of css style?
//$('#row2 div:eq(2)').css({'background':'white'});
//$('#row4 div:eq(0)').css({'background':'white'});

//STEP5
//$('#row2 div:lt(2)').removeClass('boxType2 boxType3'); //add box to list of removed classes(?)

//STEP6
//$('#container div').not('#row1,#row2,#row3,#row4,#secretBox').css({'width':'2px'});

//EXERCISE3
//STEP1 click tracker
$('#container').click( function() {
	console.log("clicked at "+event.pageX+"x "+event.pageY+"y");
	});
//STEP2 -- reds link to galvanize, click handler that alerts, prevent action
$('.boxType1').html('<a href="http://galvanize.com">Galvanize</a>');
$('a').click(function(event){
	alert("nope!");
	event.preventDefault();
});


	//var puppy = document.createElement('img');

//STEP3 toggle image to appear and disappear on click    .toggle()?
$('.box').append('<img src="https://goo.gl/itPuia" height="100px">');
$('.box').children('img').css('display','none');

$('.box').click(function(){
	$(this).children('img').toggle();
});


//STEP4
$('#container').click( function(event){
	if(event.target.classList.contains('box')) {
		this.style.backgroundColor = 'black';
		event.target.style.backgroundColor = 'white';
	} else {
		this.style.backgroundColor = 'limegreen';
	}
});






});
