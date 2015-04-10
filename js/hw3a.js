/* hw3a.js  */

// your solution here

function transform() {

	'use strict';
	
	// 1. split block of text into individual SPANs or DIVs
	// The div id for the text that needs to be split is "transcriptText"

	// 1a. Divide the text into an array of words
	// Access the "transcriptText" element
	var div = document.getElementById("transcriptText");
	
	// Get the contents of the element
	var text_blob = div.innerHTML;
	
	// Create an array of the raw content from text_blob
	var raw_words = text_blob.split(" ");
	
	// Pass non-space values into the array words
	// This is the array on which the rest of the code will operate.
	var words = [];
	for ( var i = 0 ; i < raw_words.length ; i++ ) {
		if ( !raw_words[i] == " " ) {
			words.push(raw_words[i]);
		}
	}
	
	//1b. clear the div, so it can be repopulated with transformed text
	text_blob = div.innerHTML = "";

	// 2. Iterate over the array of words
	
	// 2.1 Build SPAN elements as you go, along with the attributes shown in the example
	// e.g. <span class="word" id="word0">Breaking </span>
	// Credit: Mike Hilborn's section
	// Create new SPANS and textNodes for each element in words[].
	// then append the textNodes to the newSpan for that element.
	for ( var j = 0 ; j < words.length ; j++ ) {
		var newSpan = document.createElement("SPAN");
		var newText = document.createTextNode(words[j] + " ");
		newSpan.appendChild(newText);
		
		// 3. Add a handlers to the SPAN elements which cause
		// the style on the SPAN to change on mouseover
		
		// Mouseover changes the font color to orange
		newSpan.addEventListener("mouseover", function( event ) {
			event.target.style.color = "orange";
		});
		// Mouseout changes the font color back to black
		newSpan.addEventListener("mouseout", function( event ) {
			event.target.style.color = "black";
		});
		
		// 2.2 Add the SPAN elements back to the original DIV
		div.appendChild(newSpan);
	}
}

// Assign the button id to the transform function.
//document.getElementById("divideTranscript").onclick = transform;
var btn = document.getElementById("divideTranscript");
btn.addEventListener("click", transform);




