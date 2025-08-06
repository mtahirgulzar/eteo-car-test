---
title: "Plikter ved trafikkuhell"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En omfattende gjennomgang av førerens og vitners plikter ved trafikkuhell i Norge, inkludert stoppeplikt, meldeplikt og hjelpeplikt."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/plikter-ved-trafikkuhell/plikter-ved-trafikkuhell-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/plikter-ved-trafikkuhell/plikter-ved-trafikkuhell-image.svg" alt="Plikter ved trafikkuhell" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}

        
        
        # Copy image to static folder
        $sourceImage = Join-Path -Path $file.Directory.FullName -ChildPath "$imgName.$ext"
        $destDir = "static/images/blog/$blogFolder"
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        if (Test-Path $sourceImage) {
            Copy-Item -Path $sourceImage -Destination $destDir -Force
        }
        
        # Return new markdown image tag
        "![$altText](/images/blog/$blogFolder/$imgName.$ext)"
    

**Plikter ved trafikkuhell** er en viktig del av norsk trafikkregelverk, og som fÃ¸rer eller vitne ved en trafikkulykke har du flere lovpÃ¥lagte **plikter** du mÃ¥ vÃ¦re klar over. I denne artikkelen gir vi en omfattende gjennomgang av:

* **Stoppeplikt** â€“ nÃ¥r og hvordan du mÃ¥ stoppe.
* **Hjelpeplikt** â€“ hva slags hjelp du plikter Ã¥ gi.
* **Meldeplikt** â€“ til hvem og med hva informasjon.
* **Dokumentasjonsplikt** â€“ hvilke opplysninger du mÃ¥ dokumentere.
* **Juridiske konsekvenser** ved Ã¥ unnlate Ã¥ oppfylle pliktene.

## Oversikt over plikter ved trafikkuhell

Tabellen under oppsummerer de viktigste pliktene, kort beskrivelse og relevant lovhjemmel:

| Plikt               | Beskrivelse                                                                     | Lovhjemmel                         |
|---------------------|---------------------------------------------------------------------------------|------------------------------------|
| **Stoppeplikt**     | Du mÃ¥ umiddelbart stoppe ved ulykkesstedet.                                      | Vegtrafikkloven Â§Â 5                |
| **Hjelpeplikt**     | Gi nÃ¸dvendig [fÃ¸rstehjelp](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker") og varsle nÃ¸detatene ved behov.                         | Vegtrafikkloven Â§Â 3 og Straffeloven Â§Â 196 |
| **Meldeplikt**      | Gi identitet og nÃ¸dvendige opplysninger til involverte, vitner og politi.       | Vegtrafikkloven Â§Â 5                |
| **Dokumentasjonsplikt** | SÃ¸rge for at kjÃ¸retÃ¸y, skadeomfang og involverte er dokumentert.           | Forskrift om bruk av kjÃ¸retÃ¸y Â§Â 3  |


        
        
        # Copy image to static folder
        $sourceImage = Join-Path -Path $file.Directory.FullName -ChildPath "$imgName.$ext"
        $destDir = "static/images/blog/$blogFolder"
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        if (Test-Path $sourceImage) {
            Copy-Item -Path $sourceImage -Destination $destDir -Force
        }
        
        # Return new markdown image tag
        "![$altText](/images/blog/$blogFolder/$imgName.$ext)"
    

## Stoppeplikt â€“ plikt til Ã¥ stanse

IfÃ¸lge Vegtrafikkloven **Â§Â 5** har alle trafikanter **stoppeplikt** ved trafikkuhell:

1. Stopp **umiddelbart** pÃ¥ et egnet sted ved ulykkesstedet.
2. SlÃ¥ pÃ¥ varsellys og bruk refleksvest hvis tilgjengelig.
3. Sett opp varseltrekant der det er trygg sikt.

Se ogsÃ¥ [Grunnregelen for trafikk](/blogs/teori/grunnregelen-for-trafikk "Grunnregelen for trafikk - Vegtrafikklovens paragraf 3") for mer om aktsomhet og ansvar.

## Hjelpeplikt â€“ plikt til Ã¥ bistÃ¥

Enhver fÃ¸rer eller vitne har en **hjelpeplikt** i henhold til Vegtrafikkloven **Â§Â 3** og Straffeloven **Â§Â 196**. Dette innebÃ¦rer blant annet:

* Gi fÃ¸rstehjelp i henhold til [FÃ¸rstehjelp og opptreden ved ulykker](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker - Din guide til nÃ¸dhjelp ved trafikkulykker").
* Kontakte nÃ¸detatene pÃ¥ 1â€‘1â€‘2 ved alvorlig personskade.
* Beskytte livsviktige funksjoner og forhindre forverring av skader.

Se detaljerte prosedyrer i [HÃ¥ndtering av nÃ¸dsituasjoner](/blogs/teori/handtering-av-nodsituasjoner "HÃ¥ndtering av nÃ¸dsituasjoner - Guide til hÃ¥ndtering av nÃ¸dsituasjoner i trafikken").

## Meldeplikt og dokumentasjonsplikt

Etter et trafikkuhell mÃ¥ du ogsÃ¥ oppfylle **meldeplikt** og **dokumentasjonsplikt**:

* **Meldeplikt**: Oppgi ditt navn, adresse og kjÃ¸retÃ¸ysinformasjon til andre involverte parter og politi.
* **Dokumentasjonsplikt**: Ta bilder, notÃ©r registreringsnummer, tidspunkt, sted og vitneopplysninger.

For informasjon om forsikring og regress, se [Forsikring, trafikkforsikring, vognskadeforsikring og regress](/blogs/teori/forsikring-trafikkforsikring-vognskadeforsikring-og-regress "Forsikring, trafikkforsikring, vognskadeforsikring og regress - Hva du bÃ¸r vite om bilforsikringer").

## Juridiske konsekvenser ved unnlatelse

Unnlatelse av Ã¥ oppfylle pliktene ved trafikkuhell kan medfÃ¸re:

* **Bot** eller **fengsel** etter Straffeloven Â§Â 196.
* Inndragning av fÃ¸rerkort.
* Ã˜kt erstatningsansvar ved forsikringsoppgjÃ¸r.

Les mer om sanksjoner i [Sanksjoner, bot, inndraging, pant og prikker m.m.](/blogs/teori/sanksjoner-bot-inndraging-pant-prikker "Sanksjoner, bot, inndraging, pant og prikker m.m. - Reaksjoner ved brudd pÃ¥ trafikkregler").

## Videre lesning

* [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - InnfÃ¸ring i trafikkregelverket") for en grundig oversikt over lovverket.
* [Oppmerksomhet og samhandling](/blogs/teori/oppmerksomhet-og-samhandling "Oppmerksomhet og samhandling - Fokus og samarbeid i trafikken") for effektiv kommunikasjon ved ulykkesstedet.\n  </div>\n</div>