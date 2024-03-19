// answer_checker.js

/*

copy the following line into the <head> section of the page.

<script language="JavaScript" src="answer_checker.js"></script>


Be sure the following variables are set in a separate JavaScript file.

var correctChecks = new Array (true, false, true, ...);  // Be sure there is an entry in the array for each checkbox "checked" value
var correctSelect = 2;                                   // Enter the correct option (First <option> is 1)
var correctPage = "correct.html";                        // Set this variable to the name of the "correct" answers page
var incorrectPage = "incorrect.html";                    // Set this variable to the name of the "incorrect" answers page

*/


function CheckAnswers (theForm, elementName) {
   var goToPage = correctPage;
   var numElements = correctChecks.length;
   
   for (x = 1; x <= numElements; x++) {
      if (theForm.elements[elementName + x].checked != correctChecks [x - 1]) {
         goToPage = incorrectPage;
         break;
      }
   }
   
   document.location = goToPage;
}



function SelectAnswers (theSelect) {
   var goToPage = correctPage;
   
   if ((theSelect.options.selectedIndex + 1) != correctSelect) {
      goToPage = incorrectPage;
   }
   
   document.location = goToPage;
}
