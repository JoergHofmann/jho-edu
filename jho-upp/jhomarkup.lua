-- Benötigte Bibliotheken und Module aktivieren ==================================================================== {**

lyaml   = require "lyaml"
lustache = require "lustache"
-- **}

--  Konstanten ====================================================================================================== {**
home = os.getenv("HOME")

Autor = {}
Autor['nachname'] = 'Hofmann'
Autor['vorname'] = 'Jörg'
Autor['strasse'] = 'Am Schloßpark 78'
Autor['plz'] = '65203'
Autor['ort'] = 'Wiesbaden'
Autor['tel'] = '+49 611 507411'
Autor['mobil'] = '+49 176 27810343'
Autor['fax'] = '+49 611 94939032'
Autor['mail'] = 'joerg.hofmann@jho-home.de'
Autor['name'] = Autor['vorname'] .. " " .. Autor['nachname']
Autor['logo'] = ''
--**}

-- Variable ========================================================================================================= {**


-- Variable für Jahr, Monat, Tag definieren ======================================================= {**
--

heute = os.date('*t')

Monat = {}

Monat[1] = {
   MMMM = "Januar",
    MMM = "Jan",
     MM = "01",
      Q = "I"
   }

Monat[2] = {
   MMMM = "Februar",
    MMM = "Feb",
     MM = "02",
      Q = "I"
   }

Monat[3] = {
   MMMM = "März",
    MMM = "Mrz",
     MM = "03",
      Q = "I"
   }

Monat[4] = {
   MMMM = "April",
    MMM = "Apr",
     MM = "04",
      Q = "II"
   }

Monat[5] = {
   MMMM = "Mai",
    MMM = "Mai",
     MM = "05",
      Q = "II"
   }

Monat[6] = {
   MMMM = "Juni",
    MMM = "Jun",
     MM = "06",
      Q = "II"
   }

Monat[7] = {
   MMMM = "Juli",
    MMM = "Jul",
     MM = "07",
      Q = "III"
   }

Monat[8] = {
   MMMM = "August",
    MMM = "Aug",
     MM = "08",
      Q = "III"
   }

Monat[9] = {
   MMMM = "September",
    MMM = "Sep",
     MM = "09",
      Q = "III"
   }

Monat[10] = {
   MMMM = "Oktober",
    MMM = "Okt",
     MM = "10",
      Q = "IV"
   }

Monat[11] = {
   MMMM = "November",
    MMM = "Nov",
     MM = "11",
      Q = "IV"
   }

Monat[12] = {
   MMMM = "Dezember",
    MMM = "Dez",
     MM = "12",
      Q = "IV"
   }

 -- **}

-- Projektinformationen =========================================================================== {**
--
ProjectId = ""

ProjectTitel = ""

AufgabenTyp = "" -- BELEG oder TEXT

-- **}

-- **}

-- Funktionen {**

-- Dokument-Info ==================================================================================================== {**


function MainInit () --{**

YamlData = LoadYaml('projekt')

-- Prüfen ob anderer Autor
--
if not YamlData.autor then
    Autor = {}
    Autor['nachname'] = YamlData.autor.nachname
    Autor['vorname'] = YamlData.autor.vorname
    Autor['strasse'] = YamlData.autor.strasse
    Autor['plz'] = YamlData.autor.plz
    Autor['ort'] = YamlData.autor.ort
    Autor['tel'] = YamlData.autor.tel
    Autor['mobil'] = YamlData.autor.mobil
    Autor['fax'] = YamlData.autor.fax
    Autor['mail'] = YamlData.autor.mail
    Autor['logo'] = YamlData.autor.logo
    Autor['name'] = YamlData.autor.vorname .. " " .. YamlData.autor.nachname
end

Projekt = {} 
Projekt['lang'] = YamlData.projekt.lang
Projekt['title'] = YamlData.projekt.title
Projekt['subtitle'] = YamlData.projekt.subtitle
Projekt['pagetitle'] = YamlData.projekt.pagetitle
Projekt['shorttitle'] = YamlData.projekt.shorttitle
Projekt['cover'] = YamlData.projekt.cover
	
DieseFirma = {}
DieseFirma['name1'] = YamlData.DieseFirma.name1
DieseFirma['name2'] = YamlData.DieseFirma.name2
DieseFirma['strasse'] = YamlData.DieseFirma.strasse
DieseFirma['plz'] = YamlData.DieseFirma.plz
DieseFirma['ort'] = YamlData.DieseFirma.ort
DieseFirma['tel'] = YamlData.DieseFirma.tel
DieseFirma['fax'] = YamlData.DieseFirma.fax
DieseFirma['mobil'] = YamlData.DieseFirma.mobil
DieseFirma['mail'] = YamlData.DieseFirma.mail
DieseFirma['www'] = YamlData.DieseFirma.www
DieseFirma['bank1name'] = YamlData.DieseFirma.bank1name
DieseFirma['bank1iban'] = YamlData.DieseFirma.bank1iban
DieseFirma['bank1bic'] = YamlData.DieseFirma.bank1bic
DieseFirma['bank2name'] = YamlData.DieseFirma.bank2name
DieseFirma['bank2iban'] = YamlData.DieseFirma.bank2iban
DieseFirma['bank2bic'] = YamlData.DieseFirma.bank2bic
DieseFirma['ustid'] = YamlData.DieseFirma.ustid
DieseFirma['ustbesteuerung'] = YamlData.DieseFirma.ustbesteuerung
DieseFirma['kontenrahmen'] = YamlData.DieseFirma.kontenrahmen
DieseFirma['wirtschaftsjahr'] = YamlData.DieseFirma.wirtschaftsjahr
DieseFirma['buchungsperioden'] = YamlData.DieseFirma.buchungsperioden
DieseFirma['gewinnermittlung'] = YamlData.DieseFirma.gewinnermittlung
    end
-- **}

function AufgabeInit () --{**
	
	local YamlStr = ""
	for line in io.lines("aufgabe.yaml") do 
		YamlStr = YamlStr .. line .. "\n"
	end

	InputData = lyaml.load(YamlStr)
	Firma = InputData.firma
	vortrag = InputData.vortrag
	Kontenrahmen = InputData.kontenrahmen
	Jahr = InputData.jahr
	StartMonat = InputData.startmonat
	ZahlMonate = InputData.zahlmonate
	abschluss = InputData.abschluss
	local z = #InputData.anzahlbelege
    end

  -- **}

	

-- **}

-- Projektinformationen ====================================================================================== {**
--
function SetProjectId (id) --{**
	ProjectId = id
end
-- **}

function SetProjectTitel (t) --{**
	ProjectTitel = t
end
-- **}

function SetTypBeleg() --{**
   AufgabenTyp = "beleg"
end
-- **}

function SetTypText() --{**
   AufgabenTyp = "text"
end
-- **}

-- **}

-- Git-Funktionenen {**
-- Funktionen um Informationen aus Git zu erhalten

function GetGITHash() --{**
	local handle = io.popen("git rev-parse HEAD")
	local result = handle:read("*a")
	handle:close()
	return result
end
-- **}

function GetShortGITHash() --{**
	local handle = io.popen("git rev-parse --short HEAD")
	local result = handle:read("*a")
	handle:close()
	return result
end
-- **}

-- \item GITParentHashes = \GITParentHashes\ parent hashes
-- \item GITAbrParentHashes = \GITAbrParentHashes\ abbreviated parent hashes
-- \item GITAuthorName = \GITAuthorName\ author name
-- \item GITAuthorEmail = \GITAuthorEmail\ author email
-- \item GITAuthorDate = \GITAuthorDate\ author date
-- \item GITCommitterName = \GITCommitterName\ committer name
-- \item GITCommitterEmail = \GITCommitterEmail\ committer e-mail
-- \item GITCommitterDate = \GITCommitterDate\ committer date
-- **}

-- SetTarget ============================================================================================== {**
function SetTarget (z)
	zielformat = z
	return ""
end
-- **}

-- ifwww ==================================================================================================== {**
-- wird ausgeführt wenn zielformat = html

function ifwww (content)

	if (zielformat == "html5") then
		return content
	else
		return ""
	end
end

-- **}

-- ifpdf ==================================================================================================== {**
-- wird ausgeführt wenn zielformat = pdf

function ifpdf (content)

	if (zielformat == "html5") then
		return ""
	else
		return content
	end
end

-- **}

-- MUSTACHE ==================================================================================================== {**
-- Fügt Daten aus einer YAML-Datei(datei) in das Mustache-Template(vorlage) ein.
--
function mustache (datei, vorlage)
	
	local YamlStr = ""
	for line in io.lines(datei) do 
		YamlStr = YamlStr .. line .. "\n"
	end

	MustacheData = lyaml.load(YamlStr)
	ausgabe = lustache:render(vorlage, MustacheData)
	return ausgabe
end
-- **}

-- LoadYaml ========================================================================================================={**
-- Liest eine Yaml-Datei ein und bereitet sie auf.
--
function LoadYaml (datei)

	local YamlStr = ""
	for line in io.lines(datei .. '.yaml') do 
		YamlStr = YamlStr .. line .. "\n"
	end

	out = lyaml.load(YamlStr)

	return out
end
-- **}

-- InventurListe ======================================================================== {**
-- 
-- Vorlage um eine Inventurliste zu erstellen.
--

function InventurListe (datei)
    
    local out = ""

    InventurListeTeX = [[
\bTABLE
\tfxx
\setupTABLE[r][1][topframe=on,bottomframe=on]
\setupTABLE[c][2,3,4][align=flushright]
\setupTABLE[c][3,4][width=8em]
\bTR\bTH Bezeichung\eTH\bTH Menge\eTH\bTH Wert\eTH\bTH Gesamt\eTH\eTR
{{#inventar}}
\bTR\bTD {{Bezeichnung}}\eTD\bTD {{Menge}}\eTD\bTD {{Wert}}\eTD\bTD {{Gesamt}}\eTD\eTR
{{/inventar}}
\eTABLE
]]

    InventurListeHTML = [[
<section class="invListe">
<table>
	<tr>
		<th>Bezeichung</th>
		<th>Menge</th>
		<th>Wert</th>
		<th>Gesamt</th>
	</tr>
{{#inventar}}
	<tr>
		<td>{{Bezeichnung}}</td>
		<td>{{Menge}}</td>
		<td>{{Wert}}</td>
		<td>{{Gesamt}}</td>
	</tr>
{{/inventar}}
</table>
</section>
]]

    SummeAV = 0
    SummeUV = 0
    SummeSchulden = 0
    ZahlElemente = 9

    InputData = LoadYaml(datei)
    
    YamlOutputStr = "---\ninventar:\n"
    
    local z = #InputData.inventar.Vermoegen.Anlagevermoegen
    for i = 1, z, 1 do
        InputData.inventar.Vermoegen.Anlagevermoegen[i].Gesamt = InputData.inventar.Vermoegen.Anlagevermoegen[i].Menge * InputData.inventar.Vermoegen.Anlagevermoegen[i].Wert
        YamlOutputStr = YamlOutputStr .. '    -\n'
        YamlOutputStr = YamlOutputStr .. '      Bezeichnung: "' .. InputData.inventar.Vermoegen.Anlagevermoegen[i].Bezeichnung .. '"\n'
        YamlOutputStr = YamlOutputStr .. '      Menge: ' .. InputData.inventar.Vermoegen.Anlagevermoegen[i].Menge .. '\n'
        YamlOutputStr = YamlOutputStr .. '      Wert: ' .. tausender(InputData.inventar.Vermoegen.Anlagevermoegen[i].Wert,2) .. '\n'
        YamlOutputStr = YamlOutputStr .. '      Gesamt: ' .. tausender(InputData.inventar.Vermoegen.Anlagevermoegen[i].Gesamt,2) .. '\n'
    end
    ZahlElemente = ZahlElemente + z
    local z = #InputData.inventar.Vermoegen.Umlaufvermoegen
    for i = 1, z, 1 do
        InputData.inventar.Vermoegen.Umlaufvermoegen[i].Gesamt = InputData.inventar.Vermoegen.Umlaufvermoegen[i].Menge * InputData.inventar.Vermoegen.Umlaufvermoegen[i].Wert
        YamlOutputStr = YamlOutputStr .. '    -\n'
        YamlOutputStr = YamlOutputStr .. '      Bezeichnung: "' .. InputData.inventar.Vermoegen.Umlaufvermoegen[i].Bezeichnung .. '"\n'
        YamlOutputStr = YamlOutputStr .. '      Menge: ' .. InputData.inventar.Vermoegen.Umlaufvermoegen[i].Menge .. '\n'
        YamlOutputStr = YamlOutputStr .. '      Wert: ' .. tausender(InputData.inventar.Vermoegen.Umlaufvermoegen[i].Wert,2) .. '\n'
        YamlOutputStr = YamlOutputStr .. '      Gesamt: ' .. tausender(InputData.inventar.Vermoegen.Umlaufvermoegen[i].Gesamt,2) .. '\n'
    end
    ZahlElemente = ZahlElemente + z
    local z = #InputData.inventar.Schulden
    for i = 1, z, 1 do
        YamlOutputStr = YamlOutputStr .. '    -\n'      
        YamlOutputStr = YamlOutputStr .. '      Bezeichnung: "' .. InputData.inventar.Schulden[i].Bezeichnung .. '"\n'
        YamlOutputStr = YamlOutputStr .. '      Menge: ' .. InputData.inventar.Schulden[i].Menge .. '\n'
        YamlOutputStr = YamlOutputStr .. '      Wert: ' .. tausender(InputData.inventar.Schulden[i].Wert,2) .. '\n'
        YamlOutputStr = YamlOutputStr .. '      Gesamt: ' .. tausender(InputData.inventar.Schulden[i].Wert,2) .. '\n'
    end
    OutputData = lyaml.load(YamlOutputStr)
    mischen(OutputData.inventar,1)
    if (zielformat == "context") then
	vorlage = InventurListeTeX
    elseif (zielformat == "html5") then
	vorlage = InventurListeHTML
    end

    out = lustache:render(vorlage, OutputData)

    return out
end
-- **}

-- InventurStaffel ======================================================================== {**
-- 
-- Erstellt Inventar in Staffelform aus yaml-Datei.

function InventurStaffel (datei)
    
    local out = ""

    SummeAV = 0
    SummeUV = 0
    SummeSchulden = 0

    InputData = LoadYaml(datei)

    out = "**Inventar zum " .. InputData.tag .. ". " .. Monat[InputData.monat].MMMM .. " " .. Vorjahr .. "**$(br)$(br)\n\n"
    out = out .. "|Bezeichnung                                        |Menge  |Wert              |Gesamt            |Summen            |\n"
    out = out .. "|:--------------------------------------------------|------:|-----------------:|-----------------:|-----------------:|\n"
    out = out .. "|Vermögen                                           |       |                  |                  |                  |\n"
    out = out .. "|Anlagevermögen                                     |       |                  |                  |                  |\n"

    
    local z = #InputData.inventar.Vermoegen.Anlagevermoegen
    for i = 1, z-1, 1 do
        local g = InputData.inventar.Vermoegen.Anlagevermoegen[i].Menge * InputData.inventar.Vermoegen.Anlagevermoegen[i].Wert
        SummeAV = SummeAV + g
	out = out .. "|" .. InputData.inventar.Vermoegen.Anlagevermoegen[i].Bezeichnung
	out = out .. "|" .. InputData.inventar.Vermoegen.Anlagevermoegen[i].Menge
	out = out .. "|" .. tausender(InputData.inventar.Vermoegen.Anlagevermoegen[i].Wert,2)
	out = out .. "|" .. tausender(g,2) .. "| |\n"
    end
    local g = InputData.inventar.Vermoegen.Anlagevermoegen[z].Menge * InputData.inventar.Vermoegen.Anlagevermoegen[z].Wert
    SummeAV = SummeAV + g
    out = out .. "|" .. InputData.inventar.Vermoegen.Anlagevermoegen[z].Bezeichnung
    out = out .. "|" .. InputData.inventar.Vermoegen.Anlagevermoegen[z].Menge
    out = out .. "|" .. tausender(InputData.inventar.Vermoegen.Anlagevermoegen[z].Wert,2)
    out = out .. "|" .. tausender(g,2)
    out = out .. "|" .. tausender(SummeAV,2) .. "|\n"
    out = out .. "|                |   |                                   |                  |                  |\n"
    out = out .. "|Umlaufvermögen       |   |                              |                  |                  |\n"
    
    local z = #InputData.inventar.Vermoegen.Umlaufvermoegen
    for i = 1, z-1, 1 do
        local g = InputData.inventar.Vermoegen.Umlaufvermoegen[i].Menge * InputData.inventar.Vermoegen.Umlaufvermoegen[i].Wert
        SummeUV = SummeUV + g
	out = out .. "|" .. InputData.inventar.Vermoegen.Umlaufvermoegen[i].Bezeichnung
	out = out .. "|" .. InputData.inventar.Vermoegen.Umlaufvermoegen[i].Menge
	out = out .. "|" .. tausender(InputData.inventar.Vermoegen.Umlaufvermoegen[i].Wert,2)
	out = out .. "|" .. tausender(g, 2) .. "|   |\n"
    end
    local g = InputData.inventar.Vermoegen.Umlaufvermoegen[z].Menge * InputData.inventar.Vermoegen.Umlaufvermoegen[z].Wert
    SummeUV = SummeUV + g
    out = out .. "|" .. InputData.inventar.Vermoegen.Umlaufvermoegen[z].Bezeichnung
    out = out .. "|" .. InputData.inventar.Vermoegen.Umlaufvermoegen[z].Menge
    out = out .. "|" .. tausender(InputData.inventar.Vermoegen.Umlaufvermoegen[z].Wert,2)
    out = out .. "|" .. tausender(g,2)
    out = out .. "|" .. tausender(SummeUV,2) .. "|\n"
    out = out .. "|   |   |   |   |   |\n"
    local s = SummeAV + SummeUV
    out = out .. "|Summe Vermögen |   |   |   |" .. tausender(s,2) .. "|\n"
    out = out .. "|   |   |   |\n"
    out = out .. "| Schulden |   |   |\n"
    local z = #InputData.inventar.Schulden
    for i = 1, z-1, 1 do
	SummeSchulden = SummeSchulden + InputData.inventar.Schulden[i].Wert
	out = out .. "|" .. InputData.inventar.Schulden[i].Bezeichnung .. "|   |   "
	out = out .. "|" .. tausender(InputData.inventar.Schulden[i].Wert,2) .. "|   |\n"
    end
    SummeSchulden = SummeSchulden + InputData.inventar.Schulden[z].Wert
    out = out .. "|" .. InputData.inventar.Schulden[z].Bezeichnung .. "|   |   "
    out = out .. "|" .. tausender(InputData.inventar.Schulden[z].Wert,2)
    out = out .. "|" .. tausender(SummeSchulden,2) .. "|\n"
    out = out .. "|   |   |   |\n"
    local r = s - SummeSchulden
    out = out .. "|Reinvermögen |   |   |   |" .. tausender(r, 2) .. "|\n\n"
    return out
end
-- **}

-- SETMUSTACHETEMPLATE ==================================================================================================== {**
-- Wählt passendes Template aus. Template wird in der Aufgabe vorgegeben.
--
function SetMustacheTemplate (z)

    if (z == "context") then
        return tex_vorlage 
    elseif (z == "html5") then
        return html_vorlage
    end

end
-- **}

-- MISCHEN ==================================================================================================== {**
-- a = yaml-String, Funktion erzeugt neue Reienfolge
-- 
function mischen (a, min)
	local max = #a - 1
	math.randomseed(os.time())
	for i = min, max, 1 do
		zi = math.random(i,max)
		t = a[zi]
		a[zi] = a[i]
		a[i] = t
	end
end
-- **}  

-- AUFGABE ==================================================================================================== {**
-- Fügt eine Aufgabe in den Text ein.
-- 
function Aufgabe (GlEbene, Titel, Datei, Yaml)

    local ReturnStr = ""
    require(Datei)

    InputData = LoadYaml(Yaml)

    -- Überschrift
    for i = 1, GlEbene, 1 do
	ReturnStr = ReturnStr .. "#"
    end
    ReturnStr = ReturnStr .. " Übung: " .. Titel .. "\n\n"

    ReturnStr = ReturnStr .. main(GlEbene + 1) 

    return ReturnStr

end
-- **}

-- RUNDEN ==================================================================================================== {**
-- Rundet "zahl" auf die in "stellen" angegebene Genauigkeit
--
function runden (zahl, stellen)	
	local z = math.floor(zahl * 10^stellen + 0.5) / 10^stellen
	return z
end

-- **}

-- TAUSENDER ================================================================================================== {**
-- Stellt "zahl" mit "stellen" nach dem Komma und Tausenderpunkt dar
--
function tausender (zahl,stellen)
	local ganz = ""
	local dez = ""
	local s = ""
	z = runden(zahl, stellen)
	p = string.find(z,"%.")
	dez = string.sub(z, p+1, string.len(z))
	l = string.len(dez)
	if l < stellen then
		for i = l+1, stellen, 1 do
			dez = dez .. "0"
		end
	end
	ganz = string.sub(z, 1, p-1)string.len(ganz)
	ganz = string.reverse(ganz)
	l = string.len(ganz)
	for i = 1, l, 3 do
		s = s .. string.sub(ganz, i, i+2) .. "."
	end 
	s = string.reverse(s)
	s = string.sub(s, 2, string.len(s))
	s = s .. "," .. dez
	return s
end

--**}

-- Datum und Zeit {**


-- **}
--
-- **}

MainInit()


