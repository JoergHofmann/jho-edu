const richtig = '<img src="/images/richtig.png">',
      falsch = '<img src="/images/falsch.png">';


function mischen (a, min) {  
   var max, t, zi;

   max = a.length - 1;
   min = min - 1;
  
   for (i = min; i <= max; i++) {  
      zi = Math.floor(Math.random() * (max - i + 1)) + i;  
      t = a[zi];  
      a[zi] = a[i];  
      a[i] = t;  
     }  
}  

function FormatiereZahl() {

   var opts = { minimumFractionDigits: 2 },
       wert;

   wert = makeNumber(this.value);
   this.value = wert.toLocaleString("de-DE", opts);
   }


function makeNumber(n) {
   let s = "" + n;
   let i = s.indexOf(",");
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

function InventarNeu (id, ag) {
   var h = '',
       max = ag.length-1;

  mischen(ag, 10);
  
   for (i = 0; i <= max; i++) {
       h = h + ag[i];
   }
   document.getElementById(id + '_inv_liste').innerHTML = h;
   document.getElementById(id + '_Auswertung').innerText = "";
   }


