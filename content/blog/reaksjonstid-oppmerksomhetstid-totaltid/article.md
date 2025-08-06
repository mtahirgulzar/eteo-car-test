---
title: "Reaksjonstid, oppmerksomhetstid og total tid"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om reaksjonstid, oppmerksomhetstid og total tid i trafikken med definisjoner, formler, tabeller og illustrasjoner for førerkortteori."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/reaksjonstid-oppmerksomhetstid-totaltid/reaksjonstid-oppmerksomhetstid-totaltid-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/reaksjonstid-oppmerksomhetstid-totaltid/reaksjonstid-oppmerksomhetstid-totaltid-image.svg" alt="Reaksjonstid, oppmerksomhetstid og total tid" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
*Reaksjonstid*, *oppmerksomhetstid* og *total tid* er sentrale begreper i kjÃ¸reprosessen som beskriver hvor raskt en sjÃ¥fÃ¸r kan oppfatte en fare, reagere pÃ¥ den, og stoppe kjÃ¸retÃ¸yet. Ã… forstÃ¥ hvordan disse tidskomponentene henger sammen er avgjÃ¸rende for vurdering av trygg avstand og hastighet.

*For mer om kjÃ¸reprosessen fra sansing til handling, se [Trafikksituasjon og kjÃ¸reprosessen](/blogs/teori/trafikksituasjon-og-kjoreprosessen "Trafikksituasjon og kjÃ¸reprosessen - Sansing til handling, reaksjonstid m.m").*

*For mer om reaksjonstid og bremselengde, se [Reaksjonstid og bremselengde](/blogs/teori/reaksjonstid-og-bremselengde "Reaksjonstid og bremselengde - Guide til reaksjonstid og bremseavstand").*

*For mer om oppmerksomhet og samhandling, se [Oppmerksomhet og samhandling](/blogs/teori/oppmerksomhet-og-samhandling "Oppmerksomhet og samhandling - Fokus og samarbeid i trafikken").*


        
        
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
    

## Hva er oppmerksomhetstid?

> **Oppmerksomhetstid** er tiden det tar fra en potensiell fare fÃ¸rst fanger din oppmerksomhet til du bevisst fokuserer pÃ¥ hendelsen. Oppmerksomhetstiden varierer med distraksjoner, stress og erfaring, typisk **0,3â€“0,7 sekunder**.

| Faktor              | Typisk oppmerksomhetstid | Effekt pÃ¥ trafiksikkerhet           |
|---------------------|--------------------------|-------------------------------------|
| **Distraksjoner**   | 0,5â€“1,0 sek              | Forsinker oppdagelse av farer       |
| **Erfaring**        | 0,3â€“0,6 sek              | Reduserer tiden for Ã¥ oppfatte      |
| **Tretthet/stress** | 0,6â€“1,2 sek              | Ã˜ker risiko for feilvurdering       |

## Hva er reaksjonstid?

> **Reaksjonstid** er perioden fra du bevisst har registrert en fare til du iverksetter en handling, som Ã¥ flytte foten til bremsepedalen. Under ideelle forhold er reaksjonstiden normalt **0,8â€“1,5 sekunder**.

| Komponent          | Tid (sekunder) | Beskrivelse                              |
|--------------------|---------------|------------------------------------------|
| **Identifikasjon** | 0,1â€“0,5       | ForstÃ¥ hva som skjer                     |
| **Beslutning**     | 0,1â€“0,5       | Velge passende handling                  |
| **Respons**        | 0,1â€“0,5       | UtfÃ¸re den fysiske handlingen            |

## Hva er total tid?

> **Total tid** er summen av oppmerksomhetstid og reaksjonstid, og representerer tiden fra en fare fÃ¸rst oppfattes til handlingen begynner.

**Total tid = Oppmerksomhetstid + Reaksjonstid**


        
        
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
    

## Beregning av distanse i total tid

> Distanse bilen tilbakelegger i lÃ¸pet av total tid beregnes slik:

**Distanse = (HastighetÂ Ã— total tid) Ã· 3,6**

| Hastighet | Total tid (1,5Â s) | Distanse (m) |
|-----------|-------------------|--------------|
| **30 km/t**  | 1,5 sek           | 12,5 m       |
| **50 km/t**  | 1,5 sek           | 20,8 m       |
| **80 km/t**  | 1,5 sek           | 33,3 m       |
| **100 km/t** | 1,5 sek           | 41,7 m       |

## Faktorer som pÃ¥virker oppmerksomhetstid og reaksjonstid

Ulike forhold kan forlenge total tid og redusere din evne til Ã¥ reagere raskt:

* **Alkohol og rusmidler** â€“ kan doble reaksjonstiden
* **Mobilbruk og distraksjoner** â€“ Ã¸ker oppmerksomhetstid og forsinker respons
* **Tretthet** â€“ fÃ¸rer til lengre oppmerksomhetstid og redusert Ã¥rvÃ¥kenhet
* **Alder og helse** â€“ pÃ¥virker bÃ¥de sanseoppfattelse og motoriske reaksjoner

## Praktiske eksempler pÃ¥ total tid ved ulike hastigheter

| Hastighet | Oppmerksomhetstid | Reaksjonstid | **Total tid** | Distanse (m) |
|-----------|-------------------|--------------|---------------|--------------|
| **50 km/t**  | 0,5 sek            | 1,0 sek       | **1,5 sek**     | 20,8 m       |
| **80 km/t**  | 0,5 sek            | 1,0 sek       | **1,5 sek**     | 33,3 m       |
| **100 km/t** | 0,5 sek            | 1,0 sek       | **1,5 sek**     | 41,7 m       |

## Betydning for fÃ¸lgeavstand og sikkerhet

> Total tid er avgjÃ¸rende for Ã¥ velge riktig fÃ¸lgeavstand. For mer om fÃ¸lgeavstand og bremseavstand, se [Fart og avstand](/blogs/teori/fart-og-avstand "Fart og avstand - Guide til hastighet og bremseavstand").

## Oppsummering

* **Oppmerksomhetstid** (0,3â€“0,7Â s) + **Reaksjonstid** (0,8â€“1,5Â s) = **Total tid** (1,1â€“2,2Â s)
* Total tid gir grunnlaget for Ã¥ beregne hvor langt kjÃ¸retÃ¸yet kjÃ¸rer fÃ¸r handling starter
* Tidskomponentene pÃ¥virkes av rus, distraksjoner, tretthet og erfaring
* Ã… forstÃ¥ total tid er avgjÃ¸rende for Ã¥ tilpasse hastighet og fÃ¸lgeavstand

## Relaterte emner

* [Trafikksituasjon og kjÃ¸reprosessen](/blogs/teori/trafikksituasjon-og-kjoreprosessen "Trafikksituasjon og kjÃ¸reprosessen - Sansing til handling, reaksjonstid m.m")
* [Reaksjonstid og bremselengde](/blogs/teori/reaksjonstid-og-bremselengde "Reaksjonstid og bremselengde - Guide til reaksjonstid og bremseavstand")
* [Oppmerksomhet og samhandling](/blogs/teori/oppmerksomhet-og-samhandling "Oppmerksomhet og samhandling - Fokus og samarbeid i trafikken")
* [Fart og avstand](/blogs/teori/fart-og-avstand "Fart og avstand - Komplett guide til hastighet og bremseavstand")
* [Mennesket i trafikken](/blogs/teori/mennesket-i-trafikken "Mennesket i trafikken - Faktorer som pÃ¥virker kjÃ¸ring")
* [Defensiv kjÃ¸ring](/blogs/teori/defensiv-kjoring "Defensiv kjÃ¸ring - Prinsipper og teknikker for trygg kjÃ¸ring")
* [Risikovurdering i praksis](/blogs/teori/risikovurdering-i-praksis "Risikovurdering i praksis - Praktisk risikovurdering i trafikken")\n  </div>\n</div>