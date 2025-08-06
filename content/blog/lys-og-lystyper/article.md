---
title: "Lys og lystyper - Oversikt over bilens lystemer"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En detaljert guide til bilens lystyper, inkludert kjørelys, nærlys, fjernlys, tåkelys, retningslys og mer."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/lys-og-lystyper/lys-og-lystyper-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/lys-og-lystyper/lys-og-lystyper-image.svg" alt="Lys og lystyper - Oversikt over bilens lystemer" class="img-fluid rounded">
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
    

**Lys og lystyper** i bilen er essensielt for bÃ¥de Ã¥ se og bli sett. I denne guiden fÃ¥r du en oversikt over de viktigste lystypene, deres funksjon, bruk og lovkrav.

*For praktisk bruk av lys og signaler, se ogsÃ¥ [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Praktisk guide til lysbruk og varsling").*

## Oversikt over lystyper

| Lystype                    | Funksjon                                             | BruksomrÃ¥de                                          |
|----------------------------|------------------------------------------------------|------------------------------------------------------|
| **KjÃ¸relys (dagkjÃ¸relys)** | Ã˜ker synlighet pÃ¥ dagtid                             | Alltid pÃ¥ dagtid, automatisk pÃ¥ nyere biler         |
| **NÃ¦rlys**                 | Belyser veien uten Ã¥ blende mÃ¸tende trafikk         | MÃ¸rketid, skumring og dÃ¥rlig sikt                    |
| **Fjernlys**               | Lang rekkevidde for maksimal sikt                   | MÃ¸rke veier uten mÃ¸tende eller forankjÃ¸rende trafikk |
| **Kurvelys**               | SvÃ¦rt retningsbestemt lys som fÃ¸lger rattutslag      | Kurver og svinger, Ã¸ker sikt i sving                 |
| **TÃ¥kelys**                | Bredt og lavt lysbilde for tÃ¥ke og kraftig regn      | TÃ¥ke, snÃ¸ eller regn med sikt under 50 meter         |
| **Retningslys (blinklys)** | Signal for planlagt retning eller filskifte         | FÃ¸r sving, filskifte, inn-/utkjÃ¸ring                  |
| **NÃ¸dsignallys (nÃ¸dblink)** | Samtidig blink av alle retningslys                  | NÃ¸dstopp eller farevarsling                          |
| **NÃ¸dstopplys**            | Sterkt lys ved stans i kjÃ¸rebane                     | Ved stopp pÃ¥ eller nÃ¦r kjÃ¸rebanen                    |
| **Bremselys**              | Varsler nedbremsing med sterkere baklys             | Ved bruk av bremser                                   |
| **Baklys**                 | GjÃ¸r kjÃ¸retÃ¸y synlig bakfra                          | NÃ¥r frontlys eller kjÃ¸relys er pÃ¥                     |
| **Parkeringslys**          | Svakt lys for parkert kjÃ¸retÃ¸y                       | Parkering langs vei uten Ã¥ belaste batteri           |
| **Skiltlys**               | Belyser registreringsskiltet                         | NÃ¥r baklys er pÃ¥                                      |
| **Ryggelys**               | Hvitt lys for bakoverkjÃ¸ring                         | Ved innkoblet revers                                  |

## Lovkrav og forskrifter

Se detaljerte krav i [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Trafikkregler og krav") og [KjÃ¸retÃ¸yforskriften](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Trafikkregler og krav") for spesifikke regler og sanksjoner.

## Hvordan velge riktig lys

Enkel veiledning for riktig lysvalg:

* **Dagtid**: Bruk kjÃ¸relys/dagkjÃ¸relys for Ã¸kt synlighet.
* **Natt/dÃ¥rlig sikt**: Velg nÃ¦rlys eller fjernlys etter trafikk.
* **Ved tÃ¥ke eller kraftig regn**: Bruk tÃ¥kelys, aldri fjernlys.
* **Kurver**: AktivÃ©r kurvelys eller adaptive lys.
* **Parkering**: Aktiver parkeringslys ved behov.

## Se ogsÃ¥

* [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Praktisk guide til lysbruk og varsling")
* [KjÃ¸ring i mÃ¸rket](/blogs/teori/kjoring-i-morket "KjÃ¸ring i mÃ¸rket - Komplett guide til trygg nattkjÃ¸ring")
* [KjÃ¸ring under vanskelige forhold](/blogs/teori/kjoring-under-vanskelige-forhold "KjÃ¸ring under vanskelige forhold")
* [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")\n  </div>\n</div>