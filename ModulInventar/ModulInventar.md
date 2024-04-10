---
title: @(Projekt.title)
author: @(Autor.name)
date: @(Monat[heute.month].MMMM) @(heute.year)
git: @(GetShortGITHash "")
---

@@[[Jahr = 2021]]
@@[[Vorjahr = Jahr - 1]]
@@[[zielformat = "html5"]]

Jahr: @(Jahr)
Vorjahr: @(Vorjahr)
Zielformat: @(zielformat)


@(Aufgabe(2, "inventar", "ag10001"))
