console.log('hey')

// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1

const $h1 = $('h1');
console.log($h1);

// 2. Grab the HTML element that is both an H1 and has an ID of "second"
const $second = $('h1#second'); 
console.log($second);

// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"

$("#myDiv").text("jQuery makes JS easy!").fadeOut(3000);


// $("#myDiv").html("<h1>THIS IS HUGE</h1><h6>this is tiny</h6>);

//differece between html and text --> better to use test


//

// 4. Append this image to end of the body. http://www.fillmurray.com/200/200

$('#container').append('<p>Appending a p tag to the container</p>');
// $('#container').addClass("containerClass"); 

$('#container').css("color", "blue");

// $('body').append

const $bill = $("<img src = 'http://www.fillmurray.com/200/200' />");

$('body').append($bill)

$bill.fadeIn(1500)

const $newDiv = $('<div>');

$newDiv.addClass("innerItem");

$('.innerItem').append($newDiv);

$newDiv.text("<h1>This is a new Headline</h1>");

// 5. Change the background color of the page to green.

// 6. Remove the div with and ID of 'myDiv'
