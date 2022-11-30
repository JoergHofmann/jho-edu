:(AutorMail ="joerg.hofmann@pecunia-non-olet.com")
:(Jahr = 2021)
:(Vorjahr = Jahr - 1)
:(Kontenrahmen = "IKR")
:(Kontierung = "http://wiki.contextgarden.net")

:(AoUmsatz = '600.000€')
:(AoGewinn = '60.000€')

---
lang: de-DE
title: 'Grundlagen der Buchführung' 
pagetitle: 'Buchführung' 
subtitle: 'für Industriekaufleute'
cover: buchfuehrung-zuschnitt.png
author: '$(AutorVorname) $(AutorNachname)'
date: '$(Monat[heute.month].MMMM) $(heute.year)'
git: $(GetShortGITHash "")
...


# Einführung
$(include "einfuehrung.md") 







# System und Technik der Buchführung
$(include "systemtechnik.md")



# Gesetzliche Grundlagen und Organisation
(include "organisation.md")



# Buchen mit Umsatzsteuer
(include "umsatzsteuer.md")



# Buchungen im Warenverkehr
(include "waren.md")



# Buchungen im Personalbereich
(include "personal.md")



# Der Jahresabschluß
(include "jahresabschluss.md")



# Zusammenfassende Übung

