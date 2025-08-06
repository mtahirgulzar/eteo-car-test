---
title: "Påbudt sikkerhetsutstyr"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En komplett guide til påbudt sikkerhetsutstyr for førerkortteorien i bil, inkludert refleksvest, varselstrekant, sikkerhetsbelter og airbag."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/paabudt-sikkerhetsutstyr/paabudt-sikkerhetsutstyr-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/paabudt-sikkerhetsutstyr/paabudt-sikkerhetsutstyr-image.svg" alt="Påbudt sikkerhetsutstyr" class="img-fluid rounded">
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
    

**PÃ¥budt sikkerhetsutstyr** i bilen er avgjÃ¸rende for bÃ¥de Ã¥ overholde norske lover og Ã¥ Ã¸ke sjansen for Ã¥ unngÃ¥ eller begrense skader ved ulykker. Her finner du alt du mÃ¥ vite om **refleksvest**, **varselstrekant**, **sikkerhetsbelter**, **airbag** og hvilke krav som stilles til **CEâ€‘godkjenning** av utstyret.

## Oversikt over pÃ¥budt utstyr

| Utstyr             | Lovkrav                                           | CEâ€‘godkjent krav           |
|--------------------|---------------------------------------------------|----------------------------|
| **Refleksvest**    | FÃ¸rer mÃ¥ ha Ã©n vest i kupÃ©en (KjÃ¸retÃ¸yforskriften) | *Ja* (EN ISO 20471)        |
| **Varselstrekant** | Obligatorisk ved stopp i trafikkert omrÃ¥de        | *Ja* (ECE R27 eller EN 471)|
| **Sikkerhetsbelter** | Alle sitteplasser med godkjente belter           | *Ja* (ECE R16)             |
| **Airbag**         | PÃ¥budt i nye biler typegodkjent etter 1998        | *Ja* (ECE R94/R95)         |

## Krav til CEâ€‘godkjenning

Alt pÃ¥budt utstyr mÃ¥ vÃ¦re **CEâ€‘merket** i henhold til aktuelle standarder. CEâ€‘merkingen viser at produsenten har dokumentert at produktet oppfyller europeiske krav til kvalitet og sikkerhet.

## Praktisk bruk og plassering

1. **Refleksvest**: Oppbevar lett tilgjengelig i fÃ¸rersetet eller dÃ¸rlomme.
2. **Varselstrekant**: Ha den i bagasjerommet, klar til Ã¥ settes opp minst 50 meter bak bilen.
3. **Sikkerhetsbelter**: Bruk alltid belte over skulder og hofte. Kontroller for slitasje jevnlig.
4. **Airbag**: Pass pÃ¥ at ingen gjenstander hindrer airbagen eller kollisjonsomrÃ¥dene.

## Relaterte ressurser

* For mer om bilens Ã¸vrige sikkerhetssystemer, se [KjÃ¸retÃ¸yets sikkerhetsutstyr](/blogs/teori/kjoretoyets-sikkerhetsutstyr "KjÃ¸retÃ¸yets sikkerhetsutstyr - Passiv og aktiv sikkerhet").
* Se [Forberedelser fÃ¸r en lang kjÃ¸retur](/blogs/teori/forberedelser-for-en-lang-kjoretur "Forberedelser fÃ¸r en lang kjÃ¸retur - Guide og sjekkliste") for komplett sjekkliste fÃ¸r avreise.\n  </div>\n</div>