<!--
language: de

author: Jörg Hofmann

email: joerg.hofmann@pecunia-non-olet.com

-->

# Einleitung

## Wer sind Sie

Dies ist **kein** Anfängerkurs, vielmehr soll er ihnen helfen, ihre Buchführungskenntnisse wieder aufzufrischen. Sie sollten also schon Buchführungskenntnisse haben. Hier werden einmal die Grundlagen **kurz** wiederholt und die wichtigsten deutschen Vorschriften erklärt. Hilfe zur einzelnen Geschäftsfällen, wie Einkauf, Verkauf, Nachlässe, etc., finden sie in der [Kontierungshilfe](http://pecunia-non-olet.com).


## Und wer bin ich

Mein Name ist Jörg Hofmann und ich bin seit 2003 Dozent für betriebswirtschaftliche Inhalte in der beruflichen Weiterbildung. Vorher war ich unter anderem im Steuerbüro und als Buchhalter im Betrieb tätig, daher liegt mein Schwerpunkt natürlich bei der Buchhaltung und der Kosten- und Leistungsrechnung.

Zum Schluß noch zwei Hinweise in eigener Sache:

1. In diesem Dokument finden sie viele Links zu externen Quellen. Nun ist das Internet eine äußerst schnellebige Angelegenheit und es kann sein, das ein Link nicht mehr funktioniert. In diesem Fall bitte ich um eine kurze Mail an mich: [joerg.hofmann@pecunia-non-olet.com](mailto:joerg.hofmann@pecunia-non-olet.com)

1. Ich verwende hier für Substantive und Pronomen durchgehend die weibliche Form, die natürlich alle Menschen einschließen soll.



## Worum geht es: Die Aufgaben der Buchführung

* Sie stellt den [**Stand des Vermögens und der Schulden**](#inventur-und-inventar) fest,
* zeichnet [**alle Veränderungen**](#von-bilanz-zu-bilanz) von Vermögen und Schulden planmäßig auf,
* ermittelt den [**Erfolg**](#buchen-mit-erfolgskonten) eines Unternehmens,
* ist Grundlage der [**Besteuerung**](https://www.bibleserver.com/LUT/Mt22%2C15%E2%80%9322), 
* liefert die **Daten** für die weiteren innerbetrieblichen Kontrollrechnungen und ist
* ein wichtiges **Beweismittel** bei Rechtsstreitigkeiten.


## Unsere Firma, die Rat-Pack-Sound-OHG

Auf der Suche nach einer seriösen Tätigkeit gründeten Frank S., Dean M.\ und Sammy D.\ die Rat-Pack-Sound-OHG. Die Firma hat sich auf die Fertigung hochwertiger HiFi-Verstärker spezialisiert und beliefert Einzelhändlerinnen im gesamten europäischen Raum. Um ihren Kundeninnen ein komplettes Angebot erstellen zu können, werden weitere Komponenten dazu gekauft. Die eigenen Erzeugnisse sind$(br)$(br)

* Verstärker "Röhre 1"
* Verstärker "Röhre 2"
* Verstärker "Chip"


### Firmenangaben
|                          |                                 |
|-------------------------:|:--------------------------------|
|Firma:                    |$(Projekt.DieseFirma.name1)      |
|                          |                                 |
|Anschrift:                |$(Projekt.DieseFirma.strasse)    |
|                          |$(Projekt.DieseFirma.plz)        |
|                          |$(Projekt.DieseFirma.ort)        | 
|                          |                                 |
|Bankverbindungen:         |$(Projekt.DieseFirma.bank1name)  |
|                          |$(Projekt.DieseFirma.bank1iban)  |
|                          |$(Projekt.DieseFirma.bank1bic)   |
|                          |                                 |
|                          |$(Projekt.DieseFirma.bank2name)  |
|                          |$(Projekt.DieseFirma.bank2iban)  |
|                          |$(Projekt.DieseFirma.bank2bic)   |
|                          |                                 |
|USt-IdNr.:                |$(Projekt.DieseFirma.ustid)      |
|                          |                                 |
|Kontenrahmen:             |$(Projekt.DieseFirma.kontenrahmen)|
|                          |                                 |
|Wirtschaftsjahr:          |$(Projekt.DieseFirma.wirtschaftsjahr), $(Projekt.DieseFirma.buchungsperioden) Buchungsperioden|
|                          |                                 |
|Gewinnermittlungsart:     |$(Projekt.DieseFirma.gewinnermittlung)| 
|                          |                                 |
|Art der Besteuerung:      |$(Projekt.DieseFirma.ustbesteuerung)|
|                          |                                 |
|Erstes Buchungsjahr:      |$(Jahr)                          |





# Inventur und Inventar

## Inventur

> Jeder Kaufmann hat zu Beginn seines Handelsgewerbes seine Grundstücke, seine Forderungen und Schulden, den Betrag seines baren Geldes sowie seine sonstigen Vermögensgegenstände genau zu verzeichnen und dabei den Wert der einzelnen Vermögensgegenstände und Schulden anzugeben.$(br)([§240, 1 HGB](https://www.gesetze-im-internet.de/hgb/__240.html))

### Wert- und mengenmäßige Bestandsaufnahme

Am Beginn jeder Buchhaltung steht also eine mengen- und wertmäßige Bestandsaufnahme **aller** Vermögensgegenstände und Schulden. Dies geschieht im Rahmen einer
Inventur. Die Inventur ist eine körperliche Bestandsaufnahme, daß heißt eine Bestandsaufnahme durch **messen, zählen und wiegen**. Nur nichtkörperliche Vermögensgegenstände und die Schulden
werden durch Buchinventur erfasst. Und "aller Vermögensgegenstände und Schulden" bedeutet, dass wirklich alles, was dem Betrieb gehört, mit aufzunehmen ist. Es kommt nicht darauf an, ob die Güter noch einen Wert haben.

Der Gesetzgeber schreibt eine solche Bestandsaufnahme

* zu Beginn eines Handelsgewerbes,
* mind. einmal innerhalb von zwölf Monaten und
* bei Auflösung oder Verkauf eines Unternehmens vor.


### Inventurverfahren

Die Inventur erfasst alle Bestände zu einem bestimmten Zeit**punkt** (Stichtag). Es werden folgende Verfahren unterschieden:

* Stichtagsinventur ([§240,1 HGB](https://www.gesetze-im-internet.de/hgb/__240.html)): 
	+ Die körperliche Erfassung erfolgt zeitnah innerhalb von 10 Tagen vor bzw. nach dem Stichtag.
	+ Sie erfordert einen hohen (Zeit)Aufwand, meistens auch eine Unterbrechung des Geschäftsbetriebes und ist daher nur für kleinere Betriebe geeignet.
	+ Zum Beispiel haben viele kleine Handelsbetriebe in den Tagen nach Weihnachten wegen Inventur geschlossen.

* Permanente Inventur ([§241, 2 HGB](https://www.gesetze-im-internet.de/hgb/__241.html)):
	+ Zu- und Abgänge werden in einer Nebenbuchhaltung (z.B Warenwirtschaftssystem) wert- **und** mengenmäßig erfasst, die Bestände am Stichtag können so buchmäßig nachgewiesen werden.
	+ Die körperliche Bestandsaufnahme kann dann zu einem beliebigen Zeitpunkt, z.B. bei niedrigem Bestand, durchgeführt werden.
	+ Ein typisches Beispiel sind die vollautomatischen [Hochregalläger](https://de.wikipedia.org/wiki/Hochregallager "Wenn sie es genauer wissen wollen."). Der Computer meldet für Artikel A einen niedrigen Stand, am besten Null, dann wird das System kurz angehalten und das leere Fach kann schnell geprüft werden.

* Zeitlich verlegte Inventur ([241, 3 HGB](https://www.gesetze-im-internet.de/hgb/__241.html)):
	+ Die mengenmäßige Erfassung erfolgt in einem Zeitraum von drei Monaten vor und zwei Monaten nach dem Stichtag.
	+ Die Inventur**werte**, ohne die Mengen, müssen dann auf den Stichtag fortgeschrieben bzw. zurückgerechnet werden.

## Inventar: Aufbau und Gliederung

Hinweis: Dieses Kapitel ist für die Praxis nur von geringer Bedeutung. Inventare sind hier einfach Listen mit Inventurergebnissen, die, je nach Größe des Betriebes, mehr oder weniger umfangreich sein können. Es sind aber immer vollständige Listen *aller* Vermögensgegenstände und Schulden, die *einzeln* mit *Menge und Wert* verzeichnet sind. Die folgende Aufbereitung des Inventars steht vor allem in Lehrbüchern und hilft dabei, die Begriffe zu verdeutlichen.


Das Inventar wird in Staffelform erstellt. Es besteht aus drei Teilen,

* Vermögen,
* Schulden und
* Reinvermögen (Eigenkapital).

Das *Vermögen* wird unterteilt in Anlage- und Umlaufvermögen. Das *Anlagevermögen* umfaßt alle Güter, die das Unternehmen selbst nutzt. Das *Umlaufvermögen* umfaßt alle Güter, die nur kurzfristig im Unternehmen verbleiben.

Daher kann auch die Frage, ob z.B. ein PC ins Anlage- oder ins Umlaufvermögen gehört, nicht ohne Gegenfrage, was tut der Betrieb und wie wird der Computer genutzt, beantwortet werden. Für ein Steuerbüro sind die PCs Anlagevermögen, sie werden selbst genutzt. Händler wie *Saturn* oder *mediamarkt* dagegen, haben PCs sowohl im Anlagevermögen, als auch im Umlaufvermögen, als Waren.  

Innerhalb der beiden Gruppen wird das Vermögen nach *Liquidität*, d.h. "Geldnähe" geordnet. Für das Anlagevermögen bedeutet es, wie gut könnte(!) ein Wirtschaftsgut verkauft und damit zu Geld gemacht werde. Zum Beispiel lassen sich Maschinen und Anlagen nur innerhalb der selben Branche verkaufen, wogegen Büromöbel oder Computer auch an andere Firmen, sogar an Privatleute verkauft werden können. Dies ist aber nur ein theoretisches Modell, weil der Betrieb ohne sein Anlagevermögen nicht weitergeführt werden kann.

Für das Umlaufvermögen gilt, wie schnell die einzelnen Vermögensgegenstände innerhalb des gewöhnlichen Geschäftsbetriebes zu Geld gemacht werden können. Rohstoffe müssen zunächst verarbeitet werden, die entstandenen Erzeugnisse verkauft und zuletzt die Forderungen bezahlt werden.

Die *Schulden* werden nach ihrer Fälligkeit geordnet. Man unterscheidet lang- und kurzfristige Schulden. Als kurzfristig gelten in der Regel Schulden mit einer Laufzeit bis zu einem Jahr.

Das *Reinvermögen* ist die Differenz aus Vermögen und Schulden. Es ist der wertmäßige Anteil der Inhaberin am Betriebsvermögen.




$(Aufgabe("2", "Inventur und Inventar", "inventar", "ag0001"))



# Die Bilanz

> Der Kaufmann hat zu Beginn seines Handelsgewerbes und für den Schluss eines jeden Geschäftsjahrs einen das Verhältnis seines Vermögens und seiner Schulden darstellenden Abschluss (Eröffnungsbilanz, Bilanz) aufzustellen. Auf die Eröffnungsbilanz sind die für den Jahresabschluss geltenden Vorschriften entsprechend anzuwenden, soweit sie sich auf die Bilanz beziehen.$(br)([§242,1 HGB](https://www.gesetze-im-internet.de/hgb/__242.html))

## Aufbau und Inhalt der Bilanz

Im Gegensatz zum Inventar ist die Bilanz eine kurzgefasste, wertmäßige Aufstellung aller Vermögensgegenstände und Schulden. Die Bilanz zeigt in übersichtlicher Form, woher der Betrieb sein Kapital bekommen hat, und wie es verwendet wurde.

Auf der linken Seite, der *Aktivseite* steht das gesamte zum Betrieb gehörende Vermögen, Von Grundstücken und Gebäuden und Maschinen bis zu Rohstoffen und liquiden Mitteln. Die rechte Seite, die *Passivseite* stehen alle Schulden und das Eigenkapital. Die Passivseite zeigt also, welche Mittel in den Betrieb geflossen sind, die Aktivseite zeigt, wie diese Mittel verwendet wurden. Daher heißt die Aktivseite auch Mittelverwendungs- oder Investitionsseite, die Passivseite heißt auch Mittelherkunfts- oder Finanzierungsseite. Beide Seiten der Bilanz müssen die gleichen Summen ausweisen, weil nur die Mittel verwendet werden können, die vorher in den Betrieb geflossen sind. Auf der anderen Seite muss alles was in den Betrieb gesteckt wird, bei einer Inventur erfasst werden.

Es gelten immer die *Bilanzgleichungen*:$(br)
$(br)
\xmlprocessdata{}{
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
 <semantics>
  <mtable>
   <mtr>
    <mtd columnalign="right">
     <mtext>Vermögen</mtext>
    </mtd>
    <mtd>
     <mtext>=</mtext>
    </mtd>
    <mtd columnalign="left">
     <mtext>Kapital</mtext>
    </mtd>
    <mtd>
     <mrow/>
    </mtd>
    <mtd>
     <mrow/>
    </mtd>
   </mtr>
   <mtr>
    <mtd columnalign="right">
     <mtext>Vermögen</mtext>
    </mtd>
    <mtd>
     <mtext>=</mtext>
    </mtd>
    <mtd columnalign="left">
     <mtext>Eigenkapital</mtext>
    </mtd>
    <mtd>
     <mtext>+</mtext>
    </mtd>
    <mtd>
     <mtext>Fremdkapital</mtext>
    </mtd>
   </mtr>
   <mtr>
    <mtd>
     <mtext>Eigenkapital</mtext>
    </mtd>
    <mtd>
     <mtext>=</mtext>
    </mtd>
    <mtd columnalign="left">
     <mtext>Vermögen</mtext>
    </mtd>
    <mtd>
     <mtext>-</mtext>
    </mtd>
    <mtd>
     <mtext>Fremdkapital</mtext>
    </mtd>
   </mtr>
  </mtable>
 </semantics>
</math>
}{}
$(Aufgabe("2", "Bilanz", "bilanz", "ag0002"))



# Von Bilanz zu Bilanz

## Wertveränderungen durch Geschäftsfälle

Die Bilanz zeigt den Stand des Vermögens und der Schulden zu einem bestimmten Zeitpunkt, dem Bilanzstichtag. Jeder Geschäftsfall verändert nun diese Bestände, und da die Bilanz immer ausgeglichen sein muß, werden mindestens zwei Bilanzpositionen berührt.

Beispiel: Die (stark vereinfachte) Bilanz einer Einzelhändlerin weißt die folgenden Positionen aus:

<konto>*** Hier steht eine Bilanz ***</konto>

Nun werden für 15.000,00€ weitere Waren gekauft, und durch Banküberweisung
bezahlt. Der Bestand an Waren erhöht sich um 15.000,00€, gleichzeitig
nimmt das Bankguthaben um eben diese 15.000,00€ ab, die Bilanz bleibt
ausgeglichen.

<p><b>*** Bilanz ***</b></p>

## Die Grundbuchungsfälle

Es werden vier Grundtypen von Bilanzveränderungen (Grundbuchungsfälle)
unterschieden:

Aktivtausch

:   Es werden nur Positionen der Aktivseite berührt, die Bilanzsumme bleibt
    unverändert.$(br) Beispiel: Der oben beschriebene Kauf von Waren.
    
    
Aktiv-Passiv-Mehrung (Bilanzverlängerung)

:   Aktiva und Passiva nehmen um den gleichen Betrag zu. Die Bilanzsumme erhöht sich
    um eben diesen Betrag.$(br) Beispiel: Unsere Einzelhändlerin kauft einen Lieferwagen für 75.000,00 und finanziert ihn über einen Bankkredit. Auf der Aktivseite
    gibt es nun eine neue Position "Fuhrpark", auf der Passivseite erhöhen sich die
    Darlehen.


Aktiv-Passiv-Minderung (Bilanzverkürzung)

:   Je eine Aktiv- und eine Passivposition nehmen um den gleichen Betrag
    ab. Um diesen Betrag verringert sich auch die Bilanzsumme.$(br) Beispiel: Von dem Kredit für den Lieferwagen werden 4.000,00 durch Banküberweisung getilgt.
    

Passivtausch

:   Es werden nur Positionen der Passivseite berührt, die Bilanzsumme
    bleibt unverändert.$(br) Beispiel: Um die restlichen Lieferantenschulden zahlen zu können, wird
    bei der Bank ein weiteres Darlehen über 3.500,00 aufgenommen. Es bestehen danach keine
    Verbindlichkeiten aus LL mehr, dafür erhöht sich die Position Darlehen.



## Auflösen der Bilanz in Konten

Die Bilanz wird also mit jedem Geschäftsvorfall verändert, aber es ist natürlich nicht sinnvoll,
jedesmal Inventur zu machen und eine neue Bilanz zu erstellen. Besser ist es, alle Geschäftsvorfälle
gesondert zu erfassen, und die Bilanz erst am Ende einer Rechnungsperiode abzugleichen.

Für jeden Bilanzposten wird (mindestens) eine Verrechnungsstelle - ein Konto - eingerichtet, die alle Veränderungen aufnimmt. Da in
der Bilanz die Vermögens- und Kapital**bestände** ausgewiesen sind, heißen diese Konten Bestandskonten. Nach den Seiten
der Bilanz werden sie in aktive und passive Bestandskonten unterteilt. Die Konten werden eröffnet, indem die entsprechende Bilanzposition
als Anfangsbestand eingetragen wird.

## Eigenschaften der Bestandskonten

**Aktivkonten** nehmen die Positionen der Aktivseite auf. Anfangsbestand
und alle Zugänge stehen im Soll, Abgänge und Endbestand im Haben.$(br)
**Passivkonten** nehmen die Positionen der Passivseite auf. Anfangsbestand
und alle Zugänge stehen im Haben, Abgänge und Endbestand im Soll.

Da jeder Geschäftsfall mindestens zwei Bilanzpositionen berührt,
werden auch mindestens zwei Konten berührt, einmal im Soll und einmal
im Haben. Die Bilanzgleichung gilt auch hier, für jede Buchung gilt,
daß die Summe aller Soll-Buchungen gleich der Summe aller Haben-Buchungen
sein muß.

## Buchen auf Bestandskonten

Alle Geschäftsfälle werden auf der Grundlage von Belegen erfaßt.
Jeder Buchung muß demnach ein Beleg zugrunde liegen.$(br)$(br) 
**Keine Buchung ohne Beleg!**

Für jeden Vorfall (Beleg) sind die folgenden Überlegungen
anzustellen:

  1. Welche Konten werden berührt? 
  1. Liegt ein Zugang oder ein Abgang vor, oder sind auf allen Konten Zu- bzw. Abgänge zu buchen? 
  1. Sind es Aktiv- oder Passivkonten? 
  1. Auf welchen Kontenseiten ist demnach zu buchen? 


**Beispiel:** Wir kaufen einen Maschine für 90.000,00 und erhalten dafür eine Eingangsrechnung. Wir zahlen 5.000,00 bar bei Lieferung, der Rest soll in zehn Monatsraten überwiesen werden.


Welche Konten werden berührt?

:  Der Lieferwagen gehört zu TA/Maschinen, die 5.000,00 kamen aus der Kasse und die restlichen 85.000,00 sind
   Schulden. Demnach werden die Konten TA/Maschinen, Kasse und Verbindlichkeiten berührt.


Liegt ein Zugang oder ein Abgang vor, oder sind auf allen Konten Zu- bzw. Abgänge zu buchen?

:   Wir haben eine Maschine mehr, ebenso sind unsere Schulden gewachsen, während unsere Kasse abnimmt. Also zwei Zugänge und ein Abgang.

 
Sind es Aktiv- oder Passivkonten?

:   Kasse und TA/Maschinen sind Aktivkonten, Verbindlichkeiten ist ein Passivkonto.

 
Auf welchen Kontenseiten ist demnach zu buchen?

:   Sollbuchungen: TA/Maschinen - 90.000,00 

    Habenbuchungen: Kasse - 5.000,00 und Verbindlichkeiten - 85.000,00

Am Ende des Buchungszeitraums werden die **Salden** der Konten ermittelt. Dazu werden zunächst die Summen der beiden Kontenseiten ermittelt, der Saldo ist dann die Differenz der beiden Summen. Die größere Summe wird jetzt unter **beide** Seiten geschrieben und der Saldo auf der schwächeren Seite eingetragen. Wichtig, in einem Konto dürfen keine freien Zeilen erscheinen, daher muss die letzte 


## Der Buchungssatz

Der Buchungssatz beschreibt in eindeutiger Form, wie ein Geschäftsfall in die Konten eingetragen werden soll. In der einfachsten Form, mit genau zwei Konten, wird zuerst das Konto genannt, das auf seiner berührt wird, dann das Konto, das auf seiner Habenseite berührt wird und schließlich der Buchungsbetrag. Zwischen die beiden Konten wird das Wort **an** gesetzt.

Beispiel: Eine offene Rechnung über 5.500,00 wird durch Überweisung gezahlt.$(br)
*Verbindlichkeiten* **an** *Bank* 5.500,00

Gesprochen wird der Buchungssatz immer mit dem Wort **an**, beim Schreiben wird **an** oft durch einen Schrägstrich ersetzt.$(br)
*Verbindlichkeiten* / *Bank* 5.500,00

Sind mehr als zwei Konten betroffen, werden zuerst alle Sollkonten mit ihren Beträgen und dann alle Habenkonten mit ihren Beträgen genannt. Die Soll- und Habensummen müssen natürlich gleich sein.

Beispiel: Die offene Rechnung wird nun aus zwei Konten, der Volksbank und der Postbank, beglichen.$(br)
*Verbindlichkiten* 5.500,00 **an** *Volksbank* 3.500,00 und *Postbank* 2.000,00


## Eröffnungs- und Schlussbilanzkonto

Zur Eröffnung der Bestandskonten wurden bisher die Anfangsbestände aus der Bilanz auf den entsprechenden Seiten der Konten vorgetragen. Die widerspricht dem Prinzip der doppelten Buchhaltung, wonach alle Beträge zweimal aufgezeichnet werden, nämlich einmal auf der Sollseite, und einmal auf der Habenseite eines Kontos.

Um auch bei der Eröffnung der Konten dem Prinzip der Doppik (= doppelte Buchführung) zu folgen, wird ein zusätzliches Konto eingerichtet, welches alle Gegenbuchungen aufnimmt. Dieses Hilfskonto heißt **Eröffnungsbilanzkonto (EBK)**.

Alle aktiven Bestandskonten werden mit dem Buchungssatz$(br)$(br)

Aktivkonto\ **an**\ Eröffnungsbilanzkonto$(br)$(br)

und alle passiven Bestandskonten mit dem Buchungssatz$(br)$(br)

Eröffnungsbilanzkonto\ **an**\ Passivkonto$(br)$(br)

eröffnet.

Das Eröffnungsbilanzkonto ist ein Spiegelbild der Eröffnungsbilanz,
d.h.$(nbsp)alle Aktivpositionen stehen auf der Habenseite, und alle
Passivpositionen auf der Sollseite.

Zum Schluss eines Geschäftsjahres werden alle Bestandskonten
abgeschlossen. Zunächst werden alle Schlussbestände (=Salden) errechnet,
und mit den Inventurwerten abgestimmt. Um die Schlussbestände einzutragen
wird ein weiteres Konto, das **Schlussbilanzkonto (SBK)**, benutzt. Die
Buchungsätze lauten$(br)$(br)

Schlussbilanzkonto\ **an**\ Aktivkonto$(br)$(br)

und$(br)$(br)

Passivkonto\ **an**\ Schlussbilanzkonto$(br)$(br)

Das Schlussbilanzkonto stimmt **inhaltlich** mit der, aus den Inventurwerten
erstellten, Schlussbilanz überein.

## Übung


# Buchen mit Erfolgskonten

## Erfolg und Eigenkapital

Selbst wirtschaftliche Laien kennen das Hauptziel der (Betriebs)Wirtschaft, die Gewinnmaximierung. Aber was ist der Gewinn und woran erkenne ich, dass ich Gewinn gemacht habe? Die zweite Frage wird oft mit "am Bankkonto" beantwortet, was natürlich falsch ist. Ich meinen Kontostand ohne Probleme um, sagen wir, $(eur "100.000,00") erhöhen, indem ich einen Kredit über diesen Betrag aufnehme. Das würde niemand als Gewinn bezeichnen.

Gehen wir nochmal zum Inventar zurück. Das Reinvermögen, also die Differenz aus Vermögen und Schulden, gibt den Teil des Betriebsvermögens an, welcher der Inhaberin "gehört", anders formuliert, es ist das Vermögen der Inhaberin. Und wenn die Inhaberin am Ende einer Periode mehr Vermögen hat als zu Beginn, dann hatte sie offensichtlich Erfolg, sie hat "Gewinn gemacht". Zu dieser Einschätzung ist auch die Gesetzgeberin gekommen, in [§4, 1 EStG](https://www.gesetze-im-internet.de/estg/__4.html) heißt es

> Gewinn ist der Unterschiedsbetrag zwischen dem Betriebsvermögen am Schluss des Wirtschaftsjahres und dem Betriebsvermögen am Schluss des vorangegangenen Wirtschaftsjahres, vermehrt um den Wert der Entnahmen und vermindert um den Wert der Einlagen. 

Erfolg = EK neu − EK alt

Beispiel: Das Inventar einer Lebensmittelhändlerin weist zum 31.12. ein Reinvermögen von 80.000,00 € und
zum 31.12. des folgenden Jahres ein Reinvermögen von 82.500,00 € aus.

Erfolg = 82.500,00€ − 80.000,00€ = 2.500,00€ 

Betrachten wir nun die folgenden Fälle: Unsere Lebensmittelhändlerin hat jeden Monat
2.000,00 € für ihre eigene Lebenshaltung entnommen. Hätte sie dies nicht getan,
z.B. weil ihr Ehemann über ein entsprechendes Einkommen verfügt, wäre das Reinvermögen
im Folgejahr und damit auch der Gewinn um 24.000,00 € höher. Während eines Geschäftsjahres
vorgenommene Entnahmen müssen also zu dem Reinvermögen hinzugezählt werden.

Außerdem hat sie von einer kleinen Erbschaft einen gebrauchten Lieferwagen für
den Betrieb gekauft. Der Preis 27.500,00 €. Dadurch erhöht sich das (Anlage)Vermögen
des Betriebs um 27.500,00 €, ohne das ein anderer Vermögensteil abnimmt, oder neue Schulden
aufgenommen wurden. Folglich ist auch das Reinvermögen um diesen Betrag gestiegen, allerdings
wurde diese Mehrung nicht durch den Betrieb erwirtschaftet. Während eines Geschäftsjahres
vorgenommene Einlagen müssen also vom Reinvermögen abgezogen werden.

Merke: Der Erfolg^[Erfolg klingt gut, kann aber auch negativ sein, dann heiß er *Verlust*.]
ist die, durch den Betrieb verursachte, Änderung des Reinvermögens während eines Geschäftsjahres.
Da aber Entnahmen bzw. Einlagen durch die Inhaberin das Reinvermögen ebenfalls verändern, müssen
sie entsprechend berücksichtigt werden.$(br)$(br)

$(when (zielformat == 'html5') [[
<table>
   <colgroup><col style="width: 1em" /><col style="width: 20em" /><col style="text-align: right" /></colgroup>
   <tr><td></td><td>Eigenkapital<sub>neu</sub></td><td>82.500,00 €</td></tr>
   <tr><td>$-$ </td><td>Eigenkapital<sub>alt</sub></td><td>80.000,00 €</td></tr>
   <tr><td>$+$ </td><td>Entnahmen</td><td>36.000,00 €</td></tr>
   <tr><td>$-$ </td><td>Einlagen</td><td>28.500,00 €</td></tr>
   <tr><td>$=$ </td><td>Erfolg</td><td>10.000,00 €</td></tr>
</table>]])

$(when (zielformat == "context") [[
\setupTABLE[c][2][width=10em]
\setupTABLE[c][3][align=flushright]
\bTABLE
   \bTR\bTD     \eTD\bTD Eigenkapital\low{neu} \eTD\bTD 82.500,00 €\eTD\eTR
   \bTR\bTD $-$ \eTD\bTD Eigenkapital\low{alt} \eTD\bTD 80.000,00 €\eTD\eTR
   \bTR\bTD $+$ \eTD\bTD Entnahmen                        \eTD\bTD 36.000,00 €\eTD\eTR
   \bTR\bTD $-$ \eTD\bTD Einlagen\eTD\bTD 28.500,00 €\eTD\eTR
   \bTR\bTD $=$ \eTD\bTD Erfolg\eTD\bTD 10.000,00 €\eTD\eTR
\eTABLE
]])

## Quellen des Erfolgs

## Abschluss der Erfolgskonten

# Übersicht

# Übung

# Organisation der Buchführung

## Gesetzliche Grundlagen

Obwohl der Betriebsinhaber selbst das größte Interesse an einer
ordnungsgemäßen und damit aussagefähigen Buchführung haben muß, wird er
durch verschiedene Gesetze zum Führen von Büchern in einer bestimmten
Form verpflichtet. Eine solche Vereinheitlichung ist notwendig, weil die
Buchführung auch für Betriebsfremde aussagefähig sein muß.

Die wichtigsten Vorschriften sind im Handelsgesetzbuch (HGB), der
Abgabenordnung (AO) und dem Einkommensteuergesetz (EStG) kodiert. Sie regeln die
Pflicht zur Buchführung, legen fest welche Unterlagen zu führen und wie lange sie aufzubewahren sind.

### Buchführungspflicht nach Handelsrecht

Nach [§238, 1 HGB](https://www.gesetze-im-internet.de/hgb/__238.html) ist jeder Vollkaufmann verpflichtet Bücher zu führen.
Die Buchführungspflicht beginnt mit Erlangen der Kaufmannseigenschaft. Zur Kaufmannseigenschaft s.\ Anhang


### Buchführungspflicht nach Steuerrecht
Nach [§140 AO](https://www.gesetze-im-internet.de/ao_1977/__140.html) sind zunächst alle Unternehmer buchführungspflichtig, die
schon durch das HGB verpflichtet sind (abgeleitete Buchführungspflicht).

Darüber hinaus sind nach [§141 AO](https://www.gesetze-im-internet.de/ao_1977/__141.html) auch alle gewerblichen Unternehmer sowie Land- und
Forstwirte buchführungspflichtig, wenn ihr Betrieb **eine** der folgenden Bedingungen erfüllt (originäre Buchführungspflicht):

+ einen **Umsatz** von jährlich mehr als $(AoUmsatz)
+ einen **Gewinn** von jährlich über $(AoGewinn)


## Ordnungsmäßigkeit

Im [§238 HGB](https://www.gesetze-im-internet.de/ao_1977/__140.html) wird gefordert, daß die Bücher nach den
*Grundsätzen ordnungsmäßiger Buchführung* zu führen sind. Im nächsten Satz wird
dann genauer ausgeführt, was damit gemeint ist.

>Die Buchführung muß so beschaffen sein, daß sie einem sachverständigen Dritten
innerhalb angemessener Zeit einen Überblick über die Geschäftsvorfälle und über
die Lage des Unternehmens vermitteln kann.


Die wichtigsten Grundsätze ordnungsmäßiger Buchführung sind:

+ Die Buchführung muß klar und übersichtlich sein. Das bedeutet
	- sachgerechte und überschaubare Organisation der Buchführung,
	- übersichliche Gliederung des Jahresabschlusses,
	- keine Verrechnung zwischen Vermögenswerten und Schulden sowie zwischen Erträgen und Aufwendungen,
	- Buchungen dürfen nicht unleserlich gemacht werden.

+ Ordnungsmäßige Erfassung aller Geschäftsfälle
	- fortlaufend und vollständig,
	- richtig und zeitgerecht,
	- sachgerecht.

+ Keine Buchung ohne Beleg.

+ Ordungsmäßige Aufbewahrung aller Unterlagen:
	- Inventare, Bilanzen, Gewinn- und Verlustrechnungen, Bücher und Buchführungsprogramme sowie Buchungsbelege müssen **10 Jahre** aufgehoben werden.
	- Handelsbriefe **6 Jahre**

## Bücherarten

In der doppelten Buchführung sollen alle Geschäftsvorfälle lückenlos
sowohl in zeitlicher, als auch in sachlicher Ordnung erfaßt werden.
Natürlich werden $(heute.year) keine "richtigen" Bücher mehr geführt,
aber die Begriffe als solche bleiben bestehen.

### Grundbuch

Im Grundbuch (Journal, Primanota) werden alle Geschäftsvorfälle
in zeitlicher Reihenfolge erfaßt. Alle Vorgänge werden mit Datum, einer
kurzen Beschreibung und dem Buchungssatz erfaßt.

In der Praxis werden je nach Arbeitsteilung mehrere Grundbücher geführt.
Die wichtigsten sind das Kassenbuch, das täglich zu führen ist, das
Rechnungseingangs-und das Rechnungsausgangsbuch, sowie Bankbücher.
Die drei letztgenannten Bücher sind i.d.R. nur eine
geordnete Ablage der entsprechenden Belege (Eingangs-,
Ausgangsrechnungen und Kontoauszüge).

### Hauptbuch

Das Hauptbuch enthält alle bebuchten Konten. Hier erscheinen alle
Geschäftsvorfälle in sachlicher Ordnung. Die Eintragungen erfolgen nicht
aufgrund von Belegen, sondern anhand der Grundaufzeichnungen.

### Nebenbücher

Neben den Grund- und Hauptbüchern werden häufig noch weitere Bücher
geführt. Sie dienen der Ergänzung der Sachkonten, und werden daher
außerhalb des Kontensystems geführt.

Im **Anlageverzeichnis** werden alle Anlagegüter einzeln aufgezeichnet und
nach Anlagekonten geordnet. Wertveränderungen werden zunächst für jedes
Anlagegut einzeln ermittelt, und danach für jedes Anlagekonto
zusammengefaßt in die Finanzbuchhaltung übertragen.

In der **Lohnbuchhaltung** werden Bruttobezüge, die Abzugsbeträge und
die Nettobezüge für jeden einzelnen Arbeitnehmer bestimmt. In die
Finanzbuchhaltung werden nur die Endsummen übernommen.

Das **Geschäftsfreundebuch** enthält alle Forderungen und Schulden
gegenüber Geschäftsfreunden nach Personen geordnet. Die Personenkonten
können auch als Debitoren- (=\ Kunden) und Kreditorenkonten (=\ Lieferanten)
innerhalb des Buchführungssystems geführt werden.

## Kontenrahmen und Kontenplan

**Kontenrahmen** sind Organisationspläne für die Buchführung der
Betriebe. Alle Kontenrahmen sind nach dem dekadischen System aufgebaut.
Die möglichen Konten werden zunächst in zehn Kontenklassen unterteilt,
die von 0 bis 9 durchnummeriert werden. Innerhalb jeder Kontenklasse
werden dann wieder zehn Kontengruppen gebildet. Jedes Konto erhält eine
Kontonummer, wobei die erste Ziffer die Kontenklasse, und die zweite Ziffer
die Kontengruppe bezeichnet. Durch anhängen weiterer Ziffern läßt sich
der Kontenrahmen beliebig weiter untergliedern. Meistens werden
vierstellige Kontonummern verwendet.

**Beispiel:** Im Industriekontenrahmen (IKR) enthält  die
Kontenklasse 0 alle Konten des Anlagevermögens. Die Kontengruppe 05 enthält
alle Grundstückskonten. Das Konto "Bebaute Grundstücke" hat die
Kontonummer 0510.

Kontenrahmen sind entweder nach dem Abschluß- oder nach dem
Prozeßgliederungsprinzip aufgebaut.

*Abschlußgliederungsprinzip* heißt, die Reihenfolge der Konten orientiert
sich an dem im HGB (§§266 und 275) für große Kapitalgesellschaften
vorgegebenen Gliederungsschema für Bilanz und GuV. In den ersten
Kontenklassen stehen die Aktivkonten, dann folgen die Passivkonten, die
Aufwands- und Ertragskonten und schließlich die Abschlußkonten. Nach
dem Abschlußgliederungsprinzip sind z.B.\ der Industriekontenrahmen (IKR)
und der DATEV-Kontenrahmen SKR 04 aufgebaut.

Beim *Prozeßgliederungsprinzip* folgt die Ordnung dem Ablauf des
Leistungsprozesses eines Betriebes. Zuerst müssen Anlagegüter beschafft
werden, die mit Eigen- oder Fremdkapital finanziert sind. Anschließend
werden Vorräte, z.B.\ Rohstoffe oder Waren, und flüssige Mittel benötigt.
Der eigentliche Leistungsprozeß führt zu Aufwendungen und schließlich zu
Erträgen. Demnach beginnt der Kontenrahmen mit den Anlage- und
Kapitalkonten. Dann folgen die Konten für Vorräte, flüssige Mittel und
kurzfristige Verbindlichkeiten, danach stehen die Aufwands- und
Ertragskonten. Die letzte Klasse bilden wieder die Abschlußkonten.
Nach dem Prozeßgliederungsprinzip sind der Gemeinschaftskontenrahmen
(GKR), die Kontenrahmen für Groß- und Einzelhandel und der
DATEV-Kontenrahmen SKR 03 aufgebaut, der auch Grundlage für diesen Kurs.

*Kontenpläne* werden von den Betrieben, meistens auf der Grundlage eines
allgemeinen Kontenrahmens, für die eigene Buchhaltung aufgestellt.

## Organisation der Belege

In den Lehrbüchern werden die Geschäftsfälle üblicherweise chronologisch
angegeben und erscheinen in dieser Reinfoge auch im Journal. In der Buchhaltungspraxis
sieht es aber anders aus. Rechnungen kommen per Post und zunehmend auch per eMail,


# Umsatzsteuer und Vorsteuer

## Steuerbare und steuerpflichtige Umsätze

### Bla bla bla

## Vorsteuerabzug

### Vorsteuer

# Rechtliche Grundlagen, GoB und GoBD

## Buchführungspflicht

> Jeder Kaufmann ist verpflichtet, Bücher zu führen und in diesen seine Handelsgeschäfte und die Lage seines Vermögens nach den Grundsätzen ordnungsmäßiger Buchführung ersichtlich zu machen.$(br)([§238, 1 HGB](https://www.gesetze-im-internet.de/hgb/__238.html))

$(when (zielformat == "html5") [[</main>]])

$(when (zielformat == "context") [[
\page
# Lösungen

 ]])
