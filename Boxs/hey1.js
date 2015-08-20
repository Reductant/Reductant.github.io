function LoadEvents() {
    'use strict';
    
    var inputa1 = document.getElementById("a1"),
        inputb1 = document.getElementById("b1"),
        inputc1 = document.getElementById("c1"),
        inputa2 = document.getElementById("a2"),
        inputb2 = document.getElementById("b2"),
        inputc2 = document.getElementById("c2"),
        inputa3 = document.getElementById("a3"),
        inputb3 = document.getElementById("b3"),
        inputc3 = document.getElementById("c3");
        
    function switch1() {
        if (this.style.background !== 'red' && this.style.background !== "green") {
            this.style.background = 'red';
        }
    }
    
    
    inputa1.onmouseover = switch1;
    inputb1.onmouseover = switch1;
    inputc1.onmouseover = switch1;
    inputa2.onmouseover = switch1;
    inputb2.onmouseover = switch1;
    inputc2.onmouseover = switch1;
    inputa3.onmouseover = switch1;
    inputb3.onmouseover = switch1;
    inputc3.onmouseover = switch1;
    
    document.onmouseover = function(event) {
       
        if (inputa1.style.background == 'red' && inputb1.style.background == 'red' && inputc1.style.background == 'red') {
            var elt = document.getElementById("a1");
            elt.style.background = 'green';
            var elt = document.getElementById("b1");
            elt.style.background = 'green';
            var elt = document.getElementById("c1");
            elt.style.background = 'green';
        } 

               
        if (inputa2.style.background == 'red' && inputb2.style.background == 'red' && inputc2.style.background == 'red') {
            var elt = document.getElementById("a2");
            elt.style.background = 'green';
            var elt = document.getElementById("b2");
            elt.style.background = 'green';
            var elt = document.getElementById("c2");
            elt.style.background = 'green';
        } 
        
       
        if (inputa3.style.background == 'red' && inputb3.style.background == 'red' && inputc3.style.background == 'red') {
            var elt = document.getElementById("a3");
            elt.style.background = 'green';
            var elt = document.getElementById("b3");
            elt.style.background = 'green';
            var elt = document.getElementById("c3");
            elt.style.background = 'green';
        } 
    
    }
    
    /*this.onmouseover = fadeIn;*/

}
