---
title: "Aktiv og passiv sikkerhet"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om aktiv og passiv sikkerhet i bilen, inkludert ESP, airbags og prinsipper for å forhindre og beskytte ved kollisjon. Viktig kunnskap for førerkortet."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/aktiv-og-passiv-sikkerhet/aktiv-og-passiv-sikkerhet-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/aktiv-og-passiv-sikkerhet/aktiv-og-passiv-sikkerhet-image.svg" alt="Aktiv og passiv sikkerhet" class="img-fluid rounded">
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
    

**Aktiv sikkerhet** og **passiv sikkerhet** er to komplementÃ¦re tilnÃ¦rminger for Ã¥ beskytte fÃ¸rer og passasjerer i bil. Mens aktiv sikkerhet handler om Ã¥ forhindre ulykker gjennom elektroniske og mekaniske systemer, har passiv sikkerhet som mÃ¥l Ã¥ redusere skadeomfanget nÃ¥r en ulykke inntreffer.

For en mer omfattende oversikt over bilens sikkerhetsutstyr, se [KjÃ¸retÃ¸yets sikkerhetsutstyr](/blogs/teori/kjoretoyets-sikkerhetsutstyr "KjÃ¸retÃ¸yets sikkerhetsutstyr - Oversikt over aktivt og passivt sikkerhetsutstyr").

## Hva er aktiv sikkerhet?

**Aktiv sikkerhet** omfatter systemer og funksjoner som hjelper fÃ¸reren med Ã¥ opprettholde kontroll og unngÃ¥ farlige situasjoner. Ved Ã¥ overvÃ¥ke kjÃ¸retÃ¸yets tilstand og veiforhold kan disse systemene gripe inn fÃ¸r ulykken skjer.

### Eksempel: ESP (Elektronisk stabilitetsprogram)

**ESP (Electronic Stability Program)** er et ledende aktivt sikkerhetssystem i moderne biler. Systemet mÃ¥ler kontinuerlig hjulhastighet, rattvinkel og sideakselerasjon, og kan bremse individuelle hjul for Ã¥ korrigere understyring eller overstyring.

* OvervÃ¥ker hjul, ratt og bevegelse i sanntid
* Griper inn automatisk ved ustabil kjÃ¸ring
* Reduserer risiko for utforkjÃ¸ring og sladding

Les mer i [Styresystem](/blogs/teori/styresystem "Styresystem (servostyring, retningsstabilitet, dÃ¸dgang, forstilling, lufttrykk, ESP m.m.)").

## Hva er passiv sikkerhet?

**Passiv sikkerhet** bestÃ¥r av strukturer og innretninger som beskytter personer ved en kollisjon. Disse systemene aktiveres fÃ¸rst i mÃ¸te med en uÃ¸nsket belastning for Ã¥ dempe stÃ¸tet.

### Eksempel: Airbags

**Airbags (kollisjonsputer)** fylles med gass i lÃ¸pet av millisekunder ved en kollisjon, og fungerer som et polstret skjold mellom fÃ¸rer/passasjer og bilens harde overflater.

* **Frontal airbag**: Beskytter ved frontalkollisjon
* **Side-airbag**: Demper kraft mot torso ved sidepÃ¥kjÃ¸rsel
* **Hode-airbag (gardin)**: Beskytter hode ved sidekollisjon
* **Kne-airbag**: Beskytter legger og knÃ¦r

Les mer i [KjÃ¸retÃ¸yets sikkerhetsutstyr](/blogs/teori/kjoretoyets-sikkerhetsutstyr "KjÃ¸retÃ¸yets sikkerhetsutstyr - Oversikt over passivt sikkerhetsutstyr").

## Sammenligning av aktiv og passiv sikkerhet

| Type sikkerhet      | FormÃ¥l                    | Eksempler                                   |
|---------------------|---------------------------|---------------------------------------------|
| **Aktiv sikkerhet** | Forhindre ulykker         | ESP, ABS, adaptive cruisekontroll           |
| **Passiv sikkerhet**| Beskytte ved kollisjon     | Airbags, sikkerhetsbelter, kollisjonssoner  |

## Relaterte artikler

* [KjÃ¸retÃ¸yets sikkerhetsutstyr](/blogs/teori/kjoretoyets-sikkerhetsutstyr "KjÃ¸retÃ¸yets sikkerhetsutstyr - Oversikt over aktivt og passivt sikkerhetsutstyr")
* [ABS (Antiblokkeringssystem)](/blogs/teori/abs-antiblokkeringssystem "ABS (Antiblokkeringssystem) - Prinsipper og fordeler")
* [Styresystem](/blogs/teori/styresystem "Styresystem (servostyring, retningsstabilitet, dÃ¸dgang, forstilling, lufttrykk, ESP m.m.)")
* [Sikring av last og passasjerer](/blogs/teori/sikring-av-last-og-passasjerer "Sikring av last og passasjerer - Guide til sikker last- og passasjersikring")
* [KjÃ¸ring under vanskelige forhold](/blogs/teori/kjoring-under-vanskelige-forhold "KjÃ¸ring under vanskelige forhold - Tilpasning til vÃ¦r- og fÃ¸reforhold")\n  </div>\n</div>