/* jho.js => Allgemeine Bibliothek mit Funktionen für Unterrichtsmaterial */

function makeNumber(n) {/*{***/
    /* wandelt String in Zahl um, für Berechnungen */
     var s = "" + n;
     i = s.indexOf(",");
     if (i != -1) {
       g = s.substring(0,i)
       d = s.substring(i+1,s.length);
       if (d.length > 2) {
          d = d.substr(0,2);
          }
       g = g.replace(/\./g, "");
       s = g + "." + d;
       }
     return s*1;
     }
/***}*/

function FormatiereZahl (formular, feld) {/*{***/
    /* formatiert Zahlen in Eingabefeldern */

   var opts = { minimumFractionDigits: 2 },
       wert;

   wert = makeNumber(document.forms[formular].elements[feld].value);
   document.forms[formular].elements[feld].value = wert.toLocaleString("de-DE", opts);
   }
/***}*/

function mischen (a, start) { /* {** */  
   var max, t, zi;

   max = a.length - 1;
   start = start - 1;
  
   for (i = start; i <= max; i++) {  
      zi = Math.floor(Math.random() * (max - i + 1)) + i;  
      t = a[zi];  
      a[zi] = a[i];  
      a[i] = t;  
     }  
}  

/* **} */

function InventarNeu (id, ag) { /* {** */
   var h = '',
       max = ag.length-1;

  mischen(ag, 10);
  
   for (i = 0; i <= max; i++) {
       h = h + ag[i];
   }
   document.getElementById(id + '_liste').innerHTML = h;
   document.getElementById(id + '_Auswertung').innerText = "";
   }
/* **} */

