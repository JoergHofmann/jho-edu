
   <script src="scripts/Sortable.min.js"></script>
   <script>
   var ag10001_inv_liste = new Array(),
       h = '',
       AgId = 'ag10001',
       ag10001_LSummeAV = 1486531,
       ag10001_LSummeUV = 154420.1,
       ag10001_LSummeSchulden = 954455,
       ag10001_LSummeVermoegen = 1640951.1,
       ag10001_LReinvermoegen = 686496.1;


       function pruefen (list) {
		  let max = list.length - 1;
		  let maxPunkte = max + 1 + 5;
		  let erreichtePunkte = 0;
		  if (list[0][1] == 1) {
			     document.getElementById("ag10001_kor0").innerHTML = richtig;
			     erreichtePunkte++;
			 } else {
			     document.getElementById("ag10001_kor0").innerHTML = falsch;
					   }
		  for (let i=1; i<=max; i++) {
			     if (list[i-1][1] == list[i][1]) {
					document.getElementById("ag10001_kor"+i).innerHTML = richtig;
					erreichtePunkte++;
				    } else if (list[i-1][1] == list[i][1]-1) {
					document.getElementById("ag10001_kor"+i).innerHTML = richtig;
					erreichtePunkte++;
					       } else {
							  document.getElementById("ag10001_kor"+i).innerHTML = falsch;
					   }
			 }
		  if (makeNumber(document.forms.fag10001.SummeAV.value) == ag10001_LSummeAV) {
			     document.forms.fag10001.SummeAV.classList.remove("falsch");
			     document.forms.fag10001.SummeAV.classList.add("richtig");
			     erreichtePunkte++;
			 } else {
				    document.forms.fag10001.SummeAV.classList.remove("richtig");
				    document.forms.fag10001.SummeAV.classList.add("falsch");
				}

		  if (makeNumber(document.forms.fag10001.SummeUV.value) == ag10001_LSummeUV) {
			     document.forms.fag10001.SummeUV.classList.remove("falsch");
			     document.forms.fag10001.SummeUV.classList.add("richtig");
			     erreichtePunkte++;
			 } else {
				    document.forms.fag10001.SummeUV.classList.remove("richtig");
				    document.forms.fag10001.SummeUV.classList.add("falsch");
				}

		  if (makeNumber(document.forms.fag10001.SummeVermoegen.value) == ag10001_LSummeVermoegen) {
			     document.forms.fag10001.SummeVermoegen.classList.remove("falsch");
			     document.forms.fag10001.SummeVermoegen.classList.add("richtig");
			     erreichtePunkte++;
			 } else {
				    document.forms.fag10001.SummeVermoegen.classList.remove("richtig");
				    document.forms.fag10001.SummeVermoegen.classList.add("falsch");
				}

		  if (makeNumber(document.forms.fag10001.SummeSchulden.value) == ag10001_LSummeSchulden) {
			     document.forms.fag10001.SummeSchulden.classList.remove("falsch");
			     document.forms.fag10001.SummeSchulden.classList.add("richtig");
			     erreichtePunkte++;
			 } else {
				    document.forms.fag10001.SummeSchulden.classList.remove("richtig");
				    document.forms.fag10001.SummeSchulden.classList.add("falsch");
				}

		  if (makeNumber(document.forms.fag10001.Reinvermoegen.value) == ag10001_LReinvermoegen) {
			     document.forms.fag10001.Reinvermoegen.classList.remove("falsch");
			     document.forms.fag10001.Reinvermoegen.classList.add("richtig");
			     erreichtePunkte++;
			 } else {
				    document.forms.fag10001.Reinvermoegen.classList.remove("richtig");
				    document.forms.fag10001.Reinvermoegen.classList.add("falsch");
				}
		  document.getElementById("ag10001_Auswertung").innerText = erreichtePunkte + " Punkte von " + maxPunkte + " Punkten" 

	      }


       ag10001_inv_liste[0] = '<div id="ag10001_inv0" data-rang="1" class="list-element" draggable = "true"><span class="bezeichnung">Vermögen</span><span class="menge"></span><span class="zahlenspalte"></span><span class="zahlenspalte"></span><span id="ag10001_kor0" class="korrektur"></span></div>';
   ag10001_inv_liste[1] = '<div id="ag10001_inv1" data-rang="2" class="list-element" draggable = "true"><span class="bezeichnung">Anlagevermögen</span><span class="menge"></span><span class="zahlenspalte"></span><span class="zahlenspalte"></span><span id="ag10001_kor1" class="korrektur"></span></div>';
   ag10001_inv_liste[2] = '<div id="ag10001_inv2" data-rang="9" class="list-element" draggable = "true"><span class="bezeichnung">Umlaufvermögen</span><span class="menge"></span><span class="zahlenspalte"></span><span class="zahlenspalte"></span><span id="ag10001_kor2" class="korrektur"></span></div>';
   ag10001_inv_liste[3] = '<div id="ag10001_inv3" data-rang="17" class="list-element" draggable = "true"><span class="bezeichnung">Schulden</span><span class="menge"></span><span class="zahlenspalte"></span><span class="zahlenspalte"></span><span id="ag10001_kor3" class="korrektur"></span></div>';
   ag10001_inv_liste[4] = '<div id="ag10001_inv4" data-rang="23" class="list-element" draggable = "true"><span class="bezeichnung">Reinvermögen</span><span class="menge"> </span><span class="zahlenspalte"> </span><span class="zahlenspalte"><input draggable="true" id="Reinvermoegen" name="Reinvermoegen" class="eingabe" type="text"/></span><span id="ag10001_kor4" class="korrektur"></span></div>';
   ag10001_inv_liste[5] = '<div id="ag10001_inv5" data-rang="16" class="list-element" draggable = "true"><span class="bezeichnung">Summe Vermögen</span><span class="menge"> </span><span class="zahlenspalte"> </span><span class="zahlenspalte"><input draggable="true" id="SummeVermoegen" name="SummeVermoegen" class="eingabe" type="text"/></span><span id="ag10001_kor5" class="korrektur"></span></div>';
   ag10001_inv_liste[6] = '<div id="ag10001_inv6" data-rang="8" class="list-element" draggable = "true"><span class="bezeichnung">Summe Anlagevermögen</span><span class="menge"></span><span class="zahlenspalte"> </span><span class="zahlenspalte"><input draggable="true" id="SummeAV" name="SummeAV" class="eingabe" type="text"/></span><span id="ag10001_kor6" class="korrektur"></span></div>';
   ag10001_inv_liste[7] = '<div id="ag10001_inv7" data-rang="15" class="list-element" draggable = "true"><span class="bezeichnung">Summe Umlaufvermögen</span><span class="menge"> </span><span class="zahlenspalte"> </span><span class="zahlenspalte"><input draggable="true" id="SummeUV" name="SummeUV" class="eingabe" type="text"/></span><span id="ag10001_kor7" class="korrektur"></span></div>';
   ag10001_inv_liste[8] = '<div id="ag10001_inv8" data-rang="22" class="list-element" draggable = "true"><span class="bezeichnung">Summe Schulden</span><span class="menge"> </span><span class="zahlenspalte"> </span><span class="zahlenspalte"><input draggable="true" id="SummeSchulden" name="SummeSchulden" class="eingabe" type="text"/></span><span id="ag10001_kor8" class="korrektur"></span></div>';
ag10001_inv_liste[21] = '<div id="ag10001_inv21" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">PC-Arbeitsplatz</span>' +
                         '<span class="menge">4</span>' + 
                         '<span class="zahlenspalte">620,00</span>' +
			 '<span class="zahlenspalte">2.480,00</span>' +
	   '<span id="ag10001_kor21" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[31] = '<div id="ag10001_inv31" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Gehäuse „Röhre 2“</span>' +
                         '<span class="menge">18</span>' + 
                         '<span class="zahlenspalte">89,00</span>' +
			 '<span class="zahlenspalte">1.602,00</span>' +
	   '<span id="ag10001_kor31" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[10] = '<div id="ag10001_inv10" data-rang="4" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Gebäude, Speiergarten 13, 65191 Wiesbaden</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">1.324.566,00</span>' +
			 '<span class="zahlenspalte">1.324.566,00</span>' +
	   '<span id="ag10001_kor10" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[53] = '<div id="ag10001_inv53" data-rang="21" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Umsatzsteuer Vorjahr</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">3.210,00</span>' +
			 '<span class="zahlenspalte">3.210,00</span>' +
	   '<span id="ag10001_kor53" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[33] = '<div id="ag10001_inv33" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Röhren RD2</span>' +
                         '<span class="menge">130</span>' + 
                         '<span class="zahlenspalte">2,10</span>' +
			 '<span class="zahlenspalte">273,00</span>' +
	   '<span id="ag10001_kor33" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[17] = '<div id="ag10001_inv17" data-rang="6" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Transporter WI-RP 987</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">67.800,00</span>' +
			 '<span class="zahlenspalte">67.800,00</span>' +
	   '<span id="ag10001_kor17" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[46] = '<div id="ag10001_inv46" data-rang="13" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Kasse Büro</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">1.150,00</span>' +
			 '<span class="zahlenspalte">1.150,00</span>' +
	   '<span id="ag10001_kor46" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[34] = '<div id="ag10001_inv34" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Verstärker-Chip QWR23</span>' +
                         '<span class="menge">171</span>' + 
                         '<span class="zahlenspalte">0,90</span>' +
			 '<span class="zahlenspalte">153,90</span>' +
	   '<span id="ag10001_kor34" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[29] = '<div id="ag10001_inv29" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Gehäuse „Chip“</span>' +
                         '<span class="menge">17</span>' + 
                         '<span class="zahlenspalte">43,00</span>' +
			 '<span class="zahlenspalte">731,00</span>' +
	   '<span id="ag10001_kor29" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[9] = '<div id="ag10001_inv9" data-rang="3" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Grundstück, Speiergarten 13, 65191 Wiesbaden</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">55.329,00</span>' +
			 '<span class="zahlenspalte">55.329,00</span>' +
	   '<span id="ag10001_kor9" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[36] = '<div id="ag10001_inv36" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Stereoverstärker „Röhre 1“</span>' +
                         '<span class="menge">8</span>' + 
                         '<span class="zahlenspalte">1.830,00</span>' +
			 '<span class="zahlenspalte">14.640,00</span>' +
	   '<span id="ag10001_kor36" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[38] = '<div id="ag10001_inv38" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">CD-Player „Scheibenmann“</span>' +
                         '<span class="menge">8</span>' + 
                         '<span class="zahlenspalte">322,10</span>' +
			 '<span class="zahlenspalte">2.576,80</span>' +
	   '<span id="ag10001_kor38" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[35] = '<div id="ag10001_inv35" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Stereoverstärker „Chip“</span>' +
                         '<span class="menge">15</span>' + 
                         '<span class="zahlenspalte">345,00</span>' +
			 '<span class="zahlenspalte">5.175,00</span>' +
	   '<span id="ag10001_kor35" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[44] = '<div id="ag10001_inv44" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Standbox SB0815</span>' +
                         '<span class="menge">14</span>' + 
                         '<span class="zahlenspalte">321,45</span>' +
			 '<span class="zahlenspalte">4.500,30</span>' +
	   '<span id="ag10001_kor44" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[39] = '<div id="ag10001_inv39" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">CD-Player, portable</span>' +
                         '<span class="menge">4</span>' + 
                         '<span class="zahlenspalte">22,70</span>' +
			 '<span class="zahlenspalte">90,80</span>' +
	   '<span id="ag10001_kor39" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[18] = '<div id="ag10001_inv18" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Aktenschränke</span>' +
                         '<span class="menge">12</span>' + 
                         '<span class="zahlenspalte">680,00</span>' +
			 '<span class="zahlenspalte">8.160,00</span>' +
	   '<span id="ag10001_kor18" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[27] = '<div id="ag10001_inv27" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Verkaufstheke</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">570,00</span>' +
			 '<span class="zahlenspalte">570,00</span>' +
	   '<span id="ag10001_kor27" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[52] = '<div id="ag10001_inv52" data-rang="19" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Darlehen, Nassauische Sparkasse, 876 345 371</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">176.500,00</span>' +
			 '<span class="zahlenspalte">176.500,00</span>' +
	   '<span id="ag10001_kor52" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[40] = '<div id="ag10001_inv40" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Digitaltuner „Äther“</span>' +
                         '<span class="menge">3</span>' + 
                         '<span class="zahlenspalte">566,90</span>' +
			 '<span class="zahlenspalte">1.700,70</span>' +
	   '<span id="ag10001_kor40" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[23] = '<div id="ag10001_inv23" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Rollcontainer</span>' +
                         '<span class="menge">4</span>' + 
                         '<span class="zahlenspalte">180,00</span>' +
			 '<span class="zahlenspalte">720,00</span>' +
	   '<span id="ag10001_kor23" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[49] = '<div id="ag10001_inv49" data-rang="14" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Nassauische Sparkasse, 654 332 116</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">21.500,00</span>' +
			 '<span class="zahlenspalte">21.500,00</span>' +
	   '<span id="ag10001_kor49" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[19] = '<div id="ag10001_inv19" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Buchhaltungsprogramm</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">1.645,00</span>' +
			 '<span class="zahlenspalte">1.645,00</span>' +
	   '<span id="ag10001_kor19" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[48] = '<div id="ag10001_inv48" data-rang="13" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Wechselgeld, Kasse 2</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">550,00</span>' +
			 '<span class="zahlenspalte">550,00</span>' +
	   '<span id="ag10001_kor48" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[25] = '<div id="ag10001_inv25" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Schreibtischstühle „Rückenfreund“</span>' +
                         '<span class="menge">4</span>' + 
                         '<span class="zahlenspalte">260,00</span>' +
			 '<span class="zahlenspalte">1.040,00</span>' +
	   '<span id="ag10001_kor25" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[26] = '<div id="ag10001_inv26" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Server</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">2.100,00</span>' +
			 '<span class="zahlenspalte">2.100,00</span>' +
	   '<span id="ag10001_kor26" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[24] = '<div id="ag10001_inv24" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Schreibtische</span>' +
                         '<span class="menge">4</span>' + 
                         '<span class="zahlenspalte">170,00</span>' +
			 '<span class="zahlenspalte">680,00</span>' +
	   '<span id="ag10001_kor24" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[30] = '<div id="ag10001_inv30" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Gehäuse „Röhre 1“</span>' +
                         '<span class="menge">22</span>' + 
                         '<span class="zahlenspalte">91,00</span>' +
			 '<span class="zahlenspalte">2.002,00</span>' +
	   '<span id="ag10001_kor30" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[47] = '<div id="ag10001_inv47" data-rang="13" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Wechselgeld, Kasse 1</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">800,00</span>' +
			 '<span class="zahlenspalte">800,00</span>' +
	   '<span id="ag10001_kor47" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[28] = '<div id="ag10001_inv28" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Festposten Kleinteile</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">540,00</span>' +
			 '<span class="zahlenspalte">540,00</span>' +
	   '<span id="ag10001_kor28" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[42] = '<div id="ag10001_inv42" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Plattenspieler „old school“</span>' +
                         '<span class="menge">10</span>' + 
                         '<span class="zahlenspalte">755,40</span>' +
			 '<span class="zahlenspalte">7.554,00</span>' +
	   '<span id="ag10001_kor42" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[50] = '<div id="ag10001_inv50" data-rang="14" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Postbank AG, 445 332 100</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">7.550,00</span>' +
			 '<span class="zahlenspalte">7.550,00</span>' +
	   '<span id="ag10001_kor50" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[13] = '<div id="ag10001_inv13" data-rang="5" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">UV-Belichter für Platinen</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">2.320,00</span>' +
			 '<span class="zahlenspalte">2.320,00</span>' +
	   '<span id="ag10001_kor13" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[22] = '<div id="ag10001_inv22" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Regale, Verkaufsraum</span>' +
                         '<span class="menge">6</span>' + 
                         '<span class="zahlenspalte">320,00</span>' +
			 '<span class="zahlenspalte">1.920,00</span>' +
	   '<span id="ag10001_kor22" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[41] = '<div id="ag10001_inv41" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Kopfhörer</span>' +
                         '<span class="menge">9</span>' + 
                         '<span class="zahlenspalte">69,50</span>' +
			 '<span class="zahlenspalte">625,50</span>' +
	   '<span id="ag10001_kor41" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[20] = '<div id="ag10001_inv20" data-rang="7" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Kassenterminal</span>' +
                         '<span class="menge">2</span>' + 
                         '<span class="zahlenspalte">879,00</span>' +
			 '<span class="zahlenspalte">1.758,00</span>' +
	   '<span id="ag10001_kor20" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[45] = '<div id="ag10001_inv45" data-rang="12" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Forderungen LuL</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">67.340,00</span>' +
			 '<span class="zahlenspalte">67.340,00</span>' +
	   '<span id="ag10001_kor45" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[32] = '<div id="ag10001_inv32" data-rang="10" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Leerplatinen</span>' +
                         '<span class="menge">60</span>' + 
                         '<span class="zahlenspalte">4,30</span>' +
			 '<span class="zahlenspalte">258,00</span>' +
	   '<span id="ag10001_kor32" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[43] = '<div id="ag10001_inv43" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Regalboxen RB4711</span>' +
                         '<span class="menge">7</span>' + 
                         '<span class="zahlenspalte">145,30</span>' +
			 '<span class="zahlenspalte">1.017,10</span>' +
	   '<span id="ag10001_kor43" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[15] = '<div id="ag10001_inv15" data-rang="6" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">PKW WI-FS 987</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">1,00</span>' +
			 '<span class="zahlenspalte">1,00</span>' +
	   '<span id="ag10001_kor15" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[37] = '<div id="ag10001_inv37" data-rang="11" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Stereoverstärker „Röhre 2“</span>' +
                         '<span class="menge">6</span>' + 
                         '<span class="zahlenspalte">2.015,00</span>' +
			 '<span class="zahlenspalte">12.090,00</span>' +
	   '<span id="ag10001_kor37" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[12] = '<div id="ag10001_inv12" data-rang="5" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Lötautomat</span>' +
                         '<span class="menge">4</span>' + 
                         '<span class="zahlenspalte">2.890,00</span>' +
			 '<span class="zahlenspalte">11.560,00</span>' +
	   '<span id="ag10001_kor12" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[14] = '<div id="ag10001_inv14" data-rang="6" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">PKW WI-DM 987</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">1,00</span>' +
			 '<span class="zahlenspalte">1,00</span>' +
	   '<span id="ag10001_kor14" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[16] = '<div id="ag10001_inv16" data-rang="6" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">PKW WI-SD 987</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">1,00</span>' +
			 '<span class="zahlenspalte">1,00</span>' +
	   '<span id="ag10001_kor16" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[51] = '<div id="ag10001_inv51" data-rang="18" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Hypothekendarlehen, Nassauische Sparkasse, 876 345 222</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">730.960,00</span>' +
			 '<span class="zahlenspalte">730.960,00</span>' +
	   '<span id="ag10001_kor51" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[11] = '<div id="ag10001_inv11" data-rang="5" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Ätzbad für Platinen</span>' +
                         '<span class="menge">2</span>' + 
                         '<span class="zahlenspalte">1.940,00</span>' +
			 '<span class="zahlenspalte">3.880,00</span>' +
	   '<span id="ag10001_kor11" class="korrektur"></span>' +
			 '</div>';
ag10001_inv_liste[54] = '<div id="ag10001_inv54" data-rang="20" class="list-element" draggable = "true">' +
                         '<span class="bezeichnung">Verbindlichkeiten LuL</span>' +
                         '<span class="menge">1</span>' + 
                         '<span class="zahlenspalte">43.785,00</span>' +
			 '<span class="zahlenspalte">43.785,00</span>' +
	   '<span id="ag10001_kor54" class="korrektur"></span>' +
			 '</div>';
   InventarNeu('ag10001', ag10001_inv_liste);
   ag10001MaxElemente = ag10001_inv_liste.length -1;
   ThisForm = document.forms['fag10001'];
   let newOrder = [];
   const ag10001_inventar = document.querySelector('#ag10001_liste');
   const ag10001_sortable = Sortable.create(ag10001_inventar, {
	      animation: 150,
	      onUpdate: function (evt) {
			 newOrder = [];
			 evt.to.childNodes.forEach(ag10001_inventar => {
				    newOrder.push([ag10001_inventar.id, ag10001_inventar.dataset.rang]);
				});
		     },
	  });

   ThisForm.elements['Reinvermoegen'].addEventListener('blur', FormatiereZahl);
   ThisForm.elements['SummeAV'].addEventListener('blur', FormatiereZahl);
   ThisForm.elements['SummeUV'].addEventListener('blur', FormatiereZahl);
   ThisForm.elements['SummeVermoegen'].addEventListener('blur', FormatiereZahl);
   ThisForm.elements['SummeSchulden'].addEventListener('blur', FormatiereZahl);
   ThisForm.elements['neu'].addEventListener('click', function() { InventarNeu('ag10001', ag10001_inv_liste)});
       ThisForm.elements['pruefen'].addEventListener('click', function() { pruefen(newOrder)});
   </script>
