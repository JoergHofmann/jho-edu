	
--  Konstanten ===================================================================================================================================================== {**
home = os.getenv("HOME")

--**}

-- Variable ======================================================================================================================================================== {**


-- Variable für Jahr, Monat, Tag definieren ====================================================================================== {**
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

-- Projektinformationen ====================================================================================== {**
--
ProjectId = ""

ProjectTitel = ""

AufgabenTyp = "" -- BELEG oder TEXT

-- **}

-- **}

-- Funktionen {**

-- Dokument-Info ==================================================================================================== {**

AutorNachname = "Hofmann"
AutorVorname = "Jörg"
AutorStrasse = "Am Schloßpark 78"
AutorPLZ = "65203"
AutorOrt = "Wiesbaden"
AutorTel = "+49 611 507411"
AutorMobil = "+49 176 27810343"
AutorMail = "joerg.hofmann@jho-home.de"

function SetAutorNachname(nachname) --{**
   AutorNachname = nachname
end
-- **}

function SetAutorVorname(vorname) --{**
   AutorVorname = vorname
end
-- **}

function SetAutorStrasse(strasse) --{**
   AutorStrasse = strasse 
end
-- **}

function SetAutorPLZ(plz) --{**
   AutorPLZ = plz
end
-- **}

function SetAutorOrt(ort) --{**
   AutorOrt = ort
end
-- **}

function SetAutorTel(tel) --{**
   AutorTel = tel
end
-- **}

function SetAutorFax(fax) --{**
   AutorFax = fax
end
-- **}

function SetAutorMobil(mobil) --{**
   AutorMobil = mobil
end
-- **}

function SetAutorMail(mail) --{**
   AutorMail = mail
end
-- **}

function MainInit () --{**
	
        local lustache = require "lustache"
	local lyaml   = require "lyaml"
	local YamlStr = ""
	for line in io.lines("start.yaml") do 
		YamlStr = YamlStr .. line .. "\n"
	end


	local vorlage_aufgaben = [[
{{#aufgaben}}
<tr>
    <td><a href="{{ort}}/index.html">{{firma}}</a></td>
    <td>{{tags}}</td>
</tr>
{{/aufgaben}}
]]
	InputData = lyaml.load(YamlStr)

	AutorNachname = InputData.autor.nachname
	AutorVorname = InputData.autor.vorname
	AutorStrasse = InputData.autor.strasse
	AutorPLZ = InputData.autor.plz
	AutorOrt = InputData.autor.ort
	AutorTel = InputData.autor.tel
	AutorFax = InputData.autor.fax
	AutorMobil = InputData.autor.mobil
	AutorMail = InputData.autor.mail

	DieseFirmaName = InputData.diese_firma.name
	DieseFirmaStrasse = InputData.diese_firma.strasse
	DieseFirmaPLZ = InputData.diese_firma.plz
	DieseFirmaOrt = InputData.diese_firma.ort
	DieseFirmaTel = InputData.diese_firma.tel
	DieseFirmaFax = InputData.diese_firma.fax
	DieseFirmaMobil = InputData.diese_firma.mobil
	DieseFirmaMail = InputData.diese_firma.mail
	DieseFirmaWWW = InputData.diese_firma.www
	DieseFirmaLogo = InputData.diese_firma.logo

	AufgabenListe = lustache:render(vorlage_aufgaben, InputData)

    end
-- **}

function AufgabeInit () --{**
	
	local lyaml   = require "lyaml"
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

-- www ==================================================================================================== {**
-- wird ausgeführt wenn zielformat = html

function www (content)

	if (zielformat == "html5") then
		return content
	else
		return ""
	end
end

-- **}

-- pdf ==================================================================================================== {**
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
	
	local lyaml   = require "lyaml"
	local lustache = require "lustache"

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
	
	local lyaml   = require "lyaml"

	local YamlStr = ""
	for line in io.lines(datei) do 
		YamlStr = YamlStr .. line .. "\n"
	end

	out = lyaml.load(YamlStr)

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

-- Testbereich für Funktionen --{**

-- ZUSAMMEN ==================================================================================================== {**
-- Trennung verhindern
function zusammen (text)
    if (zielformat=="context") then
	text = "\\unhyphenated{" .. text .. "}"
    end
    return text
end

-- **}

-- **}
