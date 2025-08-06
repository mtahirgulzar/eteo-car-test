---
title: "Myndighetspyramiden"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om Myndighetspyramiden – hierarkiet mellom lover, forskrifter, rundskriv og veiledninger i veitrafikken, og forstå hvordan de ulike nivåene påvirker trafikksikkerhet og ansvarsfordeling."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/myndighetspyramiden/myndighetspyramiden-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/myndighetspyramiden/myndighetspyramiden-image.svg" alt="Myndighetspyramiden" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
**Myndighetspyramiden** illustrerer det hierarkiske forholdet mellom ulike nivÃ¥er av **lover**, **forskrifter**, **rundskriv** og **veiledninger** som regulerer veitrafikken i Norge.


        
        
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
    

## Hva er Myndighetspyramiden?

Myndighetspyramiden viser hvordan ulike juridiske og administrative kilder forholder seg til hverandre i et **hierarki**. PÃ¥ toppen finner vi de mest overordnede regelverkene, mens mer detaljerte bestemmelser og praktiske veiledninger ligger nederst.

### NivÃ¥ene i pyramiden

| NivÃ¥           | Eksempel                         | Ansvarlig/utsteder          |
|----------------|----------------------------------|-----------------------------|
| **EU-direktiver**     | 2008/96/EF (Veisikkerhetsdirektiv) | Europaparlamentet og RÃ¥det  |
| **Lov**        | Vegtrafikkloven                  | Stortinget                  |
| **Forskrift**  | Forskrift om kjÃ¸rende trafikk   | Regjeringen/Departementet   |
| **Rundskriv**  | Rundskriv om trafikkopplÃ¦ring    | Statens vegvesen            |
| **Veiledning** | Trafikksikkerhetsveiledninger    | Statens vegvesen eller FHI  |

## Hvorfor er pyramiden viktig?

Ved Ã¥ forstÃ¥ **Myndighetspyramiden** kan du se hvorfor noen regler veier tyngre enn andre, og hvordan endringer pÃ¥ ett nivÃ¥ pÃ¥virker de andre. Dette er spesielt relevant nÃ¥r nye direktiver eller forskrifter implementeres i norsk lovverk.

## Hvordan bruke Myndighetspyramiden i praksis

1. **Identifiser regelverket:** Start pÃ¥ hÃ¸yeste nivÃ¥ som er relevant for situasjonen.
2. **Sjekk underliggende bestemmelser:** Finn detaljer i forskrifter, rundskriv eller veiledninger.
3. **Vurder gyldighet:** SÃ¸rg for at dokumentene er oppdatert og gjeldende.

For mer om det overordnede regelverket, se [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter").

## Relaterte emner

- [Grunnregelen for trafikk](/blogs/teori/grunnregelen-for-trafikk "Grunnregelen for trafikk - Vegtrafikklovens paragraf 3")
- [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter")

Lykke til med Ã¥ utforske Myndighetspyramiden og forstÃ¥ det norske trafikklovverket pÃ¥ et dypere nivÃ¥!\n  </div>\n</div>