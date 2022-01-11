function confirmlink684(linkname) { 
    if (confirm("Are you sure you want to jump to " + linkname + "?")) 
         location = linkname; 
 }




 var myname = "Jorge Hernandez"; 
 var message2 = "cs190 Javascript Lab"; 
 var code = "434"
 
 function displayinfo257 ( ) {  
        alert ( "My name is " + myname +  "\n I am currently attempting the " + message2 + "\nOh now whats happening..." + code ); 
 } 



// declare this variable outside of your functions
currnum = 1;     // selects which item that is "on special"

function displayspecial410() {

   if (currnum == 1) {
	  alert("The current special is #1");
   }
   if (currnum == 2)  {
	  alert("The current special is #2");
   }
   if (currnum == 3 )  {
	  alert("The current special is #3");
   }
   currnum = currnum + 1;
   if (currnum > 3) {
	 currnum = 1 ;  // wrap around
   }

}
