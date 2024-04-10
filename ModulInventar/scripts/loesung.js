
  var SollSumme = 0,
      HabenSumme = 0,
      index = 0;



  function TesteEB() {
    
     var L = document.forms[0].length - 4;/* 4 = SummeSoll, SummeHaben, [OK], [Löschen] */

     K = L / 8; /*Zahl der Konten*/
     F = K * 4; /*Zahl der sichtbaren Felder*/
     Z = K * 4; /*Zahl der versteckten Felder*/
     k = F + 4; /*Sichtbare Felder einschl. Summen und [Ok]*/

     if (document.forms[0].SollSumme.value != document.forms[0].HabenSumme.value) {
        alert("Soll <> Haben");
        return;
        }    
     if (makeNumber(document.forms[0].SollSumme.value)/2 != makeNumber(document.forms[0].Bilanzsumme.value)) {
        alert("Bilanzsumme stimmt nicht!");
        return;
        }    

     for (j = 0; j < F; j=j+4) {
        if (document.forms[0].elements[j].value == 0) {
           continue;
           }
        document.forms[0].elements[j].classList.remove("richtig");
        document.forms[0].elements[j].classList.add("falsch");
        document.forms[0].elements[j+1].classList.remove("richtig");
        document.forms[0].elements[j+1].classList.add("falsch");
        document.forms[0].elements[j+2].classList.remove("richtig");
        document.forms[0].elements[j+2].classList.add("falsch");
        document.forms[0].elements[j+3].classList.remove("richtig");
        document.forms[0].elements[j+3].classList.add("falsch");
        for (z = 0; z < Z; z=z+4) {
              if (document.forms[0].elements[j].value == document.forms[0].elements[k+z].value) { /* Sollkonto stimmt */
                 if (document.forms[0].elements[j+2].value == document.forms[0].elements[k+z+1].value) { /* Habenkonto stimmt */
                    document.forms[0].elements[j].classList.remove("falsch");
                    document.forms[0].elements[j].classList.add("richtig");
                    document.forms[0].elements[j+2].classList.remove("falsch");
                    document.forms[0].elements[j+2].classList.add("richtig");
                    if (makeNumber(document.forms[0].elements[j+1].value) == makeNumber(document.forms[0].elements[k+z+2].value)) {
                       document.forms[0].elements[j+1].classList.remove("falsch");
                       document.forms[0].elements[j+1].classList.add("richtig");
                       }
                    if (makeNumber(document.forms[0].elements[j+3].value) == makeNumber(document.forms[0].elements[k+z+2].value)) {
                       document.forms[0].elements[j+3].classList.remove("falsch");
                       document.forms[0].elements[j+3].classList.add("richtig");
                       }
                    }
                 }
           }
        }
}





  function TesteEingabe(i) {
    
     var l = 3 * document.forms[i].elements[25].value;
     
     if (document.forms[i].SollSumme.value != document.forms[i].HabenSumme.value) {
        alert("Soll <> Haben");
        return;
        }    

     if (document.forms[i].elements[0].value == document.forms[i].elements[24].value) {
        document.forms[i].elements[0].classList.remove("falsch");
        document.forms[i].elements[0].classList.add("richtig");
        }
     else {
        document.forms[i].elements[0].classList.remove("richtig");
        document.forms[i].elements[0].classList.add("falsch");
        }    

     for (j = 1; j < 18; j=j+4) {
        if (document.forms[i].elements[j].value == 0) {
           continue;
           }
        for (z = 0; z < l; z=z+3) {
           if (document.forms[i].elements[26+z].value == "H") {
              continue;
              }
           if (document.forms[i].elements[j].value == document.forms[i].elements[26+z+1].value) {
              document.forms[i].elements[j].classList.remove("falsch");
              document.forms[i].elements[j].classList.add("richtig");
              if (makeNumber(document.forms[i].elements[j+1].value) == makeNumber(document.forms[i].elements[26+z+2].value)) {
                 document.forms[i].elements[j+1].classList.remove("falsch");
                 document.forms[i].elements[j+1].classList.add("richtig");
                 }
              else {
                 document.forms[i].elements[j+1].classList.remove("richtig");
                 document.forms[i].elements[j+1].classList.add("falsch");
                 }
              break;
              }
           else {
              document.forms[i].elements[j].classList.remove("richtig");
              document.forms[i].elements[j].classList.add("falsch");
              document.forms[i].elements[j+1].classList.remove("richtig");
              document.forms[i].elements[j+1].classList.add("falsch");
              }
           }
        }

     for (j = 3; j < 20; j=j+4) {
        if (document.forms[i].elements[j].value == 0) {
           continue;
           }
        for (z = 0; z < l; z=z+3) {
           if (document.forms[i].elements[26+z].value == "S") {
              continue;
              }
           if (document.forms[i].elements[j].value == document.forms[i].elements[26+z+1].value) {
              document.forms[i].elements[j].classList.remove("falsch");
              document.forms[i].elements[j].classList.add("richtig");
              if (makeNumber(document.forms[i].elements[j+1].value) == makeNumber(document.forms[i].elements[26+z+2].value)) {
                 document.forms[i].elements[j+1].classList.remove("falsch");
                 document.forms[i].elements[j+1].classList.add("richtig");
                 }
              else {
                 document.forms[i].elements[j+1].classList.remove("richtig");
                 document.forms[i].elements[j+1].classList.add("falsch");
                 }
              break;
              }
           else {
              document.forms[i].elements[j].classList.remove("richtig");
              document.forms[i].elements[j].classList.add("falsch");
              document.forms[i].elements[j+1].classList.remove("richtig");
              document.forms[i].elements[j+1].classList.add("falsch");
              }
           }
        }

     }


  function makeNumber(n) {
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


  function AddiereSoll(i, a, o) {
     var opts = { minimumFractionDigits: 2 };
     summe = 0;
     for (j = a+1; j < o; j=j+4) {
        feld = makeNumber(document.forms[i].elements[j].value);
        summe = summe + makeNumber(feld);
        if (feld > 0) {
           document.forms[i].elements[j].value = feld.toLocaleString("de-DE", opts);
           }
        }
     document.forms[i].SollSumme.value = summe.toLocaleString("de-DE", opts);
     }

  function AddiereHaben(i, a, o) {
     var opts = { minimumFractionDigits: 2 };
     summe = 0;
     for (j = a+3; j < o; j=j+4) {
        feld = makeNumber(document.forms[i].elements[j].value);
        summe = summe + makeNumber(feld);
        if (feld > 0) {
           document.forms[i].elements[j].value = feld.toLocaleString("de-DE", opts);
           }
        }
     document.forms[i].HabenSumme.value = summe.toLocaleString("de-DE", opts);
     }
