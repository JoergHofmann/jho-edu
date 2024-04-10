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


function InitDragDrop () { /*{** */

   var draggables = document.querySelectorAll('.draggable'),
       dropzones = document.querySelectorAll('.dropzone');

   draggables.forEach(draggable => {

      draggable.addEventListener('dragstart', () => {
         draggable.classList.add('activ');
         })

   draggable.addEventListener('dragend', () => {
      draggable.classList.remove('activ');
      })
   })

   liste.addEventListener('dragover', e => {
      e.preventDefault();
      })

   liste.addEventListener('drop', e => {
      const afterElement = getDragAfterElement(liste, e.clientY);
      const draggable = document.querySelector('.activ');
      if (afterElement == null) {
         liste.appendChild(draggable)
         }
      else {
         liste.insertBefore(draggable, afterElement)
         }
      })
   }
/* **} */
