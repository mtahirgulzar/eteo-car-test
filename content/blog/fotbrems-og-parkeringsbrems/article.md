---
title: "Fotbrems og parkeringsbrems"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En grundig guide til fotbrems (servicebrems) og parkeringsbrems i bil for teoriprøven Klasse B. Lær om funksjoner, bruk og vedlikehold."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/fotbrems-og-parkeringsbrems/fotbrems-og-parkeringsbrems-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/fotbrems-og-parkeringsbrems/fotbrems-og-parkeringsbrems-image.svg" alt="Fotbrems og parkeringsbrems" class="img-fluid rounded">
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
    

For biler i Norge er **fotbrems** (ogsÃ¥ kalt *servicebrems*) og **parkeringsbrems** to grunnleggende systemer som sikrer kontrollert stopp og stabil parkering av kjÃ¸retÃ¸yet. I denne omfattende guiden ser vi pÃ¥ hvordan begge bremsene fungerer, korrekt bruk og vedlikehold.

## Oversikt

| Bremsetype          | Aktivering           | Hovedfunksjon                         |
|---------------------|----------------------|----------------------------------------|
| **Fotbrems**        | Trykk pÃ¥ bremsepedal | Bremser bilen under kjÃ¸ring            |
| **Parkeringsbrems** | Spak eller knapp     | Holder bilen stille ved parkering      |

## Hva er fotbrems?

Fotbremsen er servicebremsen som brukes under kjÃ¸ring for Ã¥ redusere hastighet eller stoppe bilen. Systemet er **hydraulisk**, og kraften fra pedalen overfÃ¸res via bremsevÃ¦ske til hjulene. For en mer detaljert forklaring av bremsesystemet, se [Bremsesystemet](/blogs/teori/bremsesystemet "Bremsesystemet (bremsekretser, bremsevÃ¦ske m.m)").

### Bruk av fotbrems

* Press jevnt pÃ¥ pedalen for gradvis nedbremsing.
* UnngÃ¥ harde rykk for passasjerkomfort og bremsesystemets levetid.
* Ved nÃ¸dbremsing, press pedalen helt ned og hold den.

## Hva er parkeringsbrems?

Parkeringsbremsen (ofte kalt hÃ¥ndbrems eller nÃ¸dbrems) er et **mekanisk** system som lÃ¥ser bakhjulene med en kabel eller elektrisk motor. Den brukes nÃ¥r bilen stÃ¥r stille, for Ã¥ hindre uÃ¸nsket bevegelse.

### Bruk av parkeringsbrems

* Dra spaken eller trykk pÃ¥ knappen til du kjenner motstand.
* Kontroller at bilen stÃ¥r sikkert fÃ¸r du slipper opp pedalen.
* FrigjÃ¸r bremsen ved Ã¥ slippe spaken eller trykke pÃ¥ knappen nÃ¥r du starter kjÃ¸ringen.

## Vedlikehold og kontroll

Regelmessig kontroll av begge bremsene er viktig for sikkerheten:

* **Sjekk** at fotbremsen gir jevn motstand uten slipp.
* **Kontroller** parkeringsbremsens gripeevne pÃ¥ flat vei.
* **Lytt** etter unormale lyder ved aktivering av parkeringsbrems.
* **FÃ¸lg** anbefalt vedlikeholdsintervall for bremsevÃ¦ske (se [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")).

## Viktige begreper for teoriprÃ¸ven

* **Servicebrems** â€“ hydraulisk bremsesystem aktivert med fotpedal.
* **Parkeringsbrems** â€“ mekanisk brems som holder bilen stille.

## Videre lesning

* [Bremsefeil](/blogs/teori/bremsefeil "Bremsefeil - Vanlige feil i bremsesystemet")
* [Fordeling av bremsekraft og skjevtrekk](/blogs/teori/fordeling-av-bremsekraft-og-skjevtrekk "Fordeling av bremsekraft og skjevtrekk")
* [Parkering for viderekomne](/blogs/teori/parkering-for-viderekomne "Parkering for viderekomne - Avanserte teknikker for sikker parkering")
* [Reaksjonstid og bremselengde](/blogs/teori/reaksjonstid-og-bremselengde "Reaksjonstid og bremselengde - Stoppeavstand og reaksjonstid")
* [Sikkerhetssjekk teknisk bil](/blogs/teori/sikkerhetssjekk-teknisk-bil "Sikkerhetssjekk teknisk bil - Rutinemessig sjekk fÃ¸r kjÃ¸ring")

***\n  </div>\n</div>