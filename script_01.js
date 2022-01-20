
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung
2. Auswahl Rechenart
3. Fkt. Grundrechenarten
4. Ausgabe in Konsole
*/

//0

//addition

// output(add(2,3));
function add(a,b) {
  return a + b; 
}

//subtraction

// output(sub(2,10));
function sub(a,b) {
    return a - b; 
     }      

//multiplication

// output(mul(3,3));
function mul(a,b) {
    return a * b; 
     }      

//division

output(div(3,0));
function div(a,b) {
   
    if (b == 0) {
        // output("keine Zahl")
        return"Fehler";
 
    } 
    return a/b; 
  }

function output(outputData){ 
    if (typeof outputData == "number") {
        console.log("The result is: " + outputData);
 
    } else {
        console.log("Error:" +  outputData);
    }
// console.log(outputData);

  }





/*** Späßle *****/

/*
 Heute bleibt die Küche kalt ...
 wir gehen in den Wienerwald. 
*/


//  servieren(anrichten(gemuesekoch(),saucenkoch()));

// function servieren(teller) {
//     console.log("Einmal einen " + teller +  ", Bitte sehr!")
// }

// function anrichten(kartoffeln,soße) {
//     return "Teller mit: "+ kartoffeln + " " + soße;
// }

// function gemuesekoch(){
//     return "gekochte Kartoffeln";
//  }
 
//  function saucenkoch() {
//      return "lecker Sauce";
//  }
 

