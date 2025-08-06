---
title: "Dekk og vedlikehold - Slitasje, dimensjoner, merking, lufttrykk, mønsterdybde og piggdekk"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En komplett guide til dekkvedlikehold: slitasje og skader, dekkdimensjoner, dekkmerking, riktig lufttrykk, mønsterdybde og bruk av piggdekk."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/dekk-og-vedlikehold/dekk-og-vedlikehold.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/dekk-og-vedlikehold/dekk-og-vedlikehold.svg" alt="Dekk og vedlikehold - Slitasje, dimensjoner, merking, lufttrykk, mønsterdybde og piggdekk" class="img-fluid rounded">
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
    

**Dekk og vedlikehold** er avgjÃ¸rende for **sikkerhet**, **kjÃ¸reegenskaper** og **Ã¸konomi** i bilhold. Denne guiden dekker alt fra **slitasje og skader** til **dekkdimensjoner**, **dekkmerking**, **sjekk av lufttrykk**, **mÃ¸nsterdybde** og bruk av **piggdekk** under norske forhold.

*For mer om prinsippene for **veigrep** og friksjon pÃ¥ veien, se [Veigrep](/blogs/teori/veigrep "Veigrep - bremselengde, bevegelsesenergi, friksjon, gripeevne, fart, vannplaning og styring").*

## Slitasje og skader


        
        
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
    

Ã… regelmessig undersÃ¸ke dekkene for **slitasje og skader** er essensielt for kjÃ¸resikkerhet. Ujevn slitasje kan tyde pÃ¥ feil i **forstilling**, **balansering** eller **dekktrykk**. Se etter:

* **Rifter**, **bobler** eller **sprekker** i sideveggen
* Fremmedlegemer som **spiker** eller **stein**
* Ujevn slitasje i **skulder** eller **midtparti**
* **Sidevegssplitting** eller deformasjoner

Ved tegn til alvorlig slitasje eller skader mÃ¥ dekket skiftes umiddelbart.

## Forstilling


        
        
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
    

**Forstilling** (hjuloppheng og styring) pÃ¥virker slitasje, styrerespons og dekkets kontakt med veien. Feil forstilling kan fÃ¸re til:

* **Skjevslitasje** pÃ¥ dekk
* Redusert **styrerespons**
* DÃ¥rligere **kjÃ¸reegenskaper**

Vanlige justeringer inkluderer *camber*, *toe-in/toe-out* og *caster*. Disse bÃ¸r utfÃ¸res hos verksted, men det er nyttig Ã¥ forstÃ¥ prinsippene:

| Justering               | Beskrivelse                        | Effekt                           |
|-------------------------|------------------------------------|----------------------------------|
| **Camber**             | Vinkling av hjul i loddrett plan   | PÃ¥virker innvendig/utvendig slitasje |
| **Toe-in/Toe-out**      | Lengdeaksens retning               | PÃ¥virker stabilitet og rulling   |
| **Caster**              | Vinkling i lengderetning           | Gir retningstabilitet            |

Les mer om [Styresystem](/blogs/teori/styresystem "Styresystem - Komponenter og funksjon i bilen") for sammenheng mellom hjuloppheng og styring.

## Dekkdimensjoner og merking


        
        
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
    

Dekketekst som for eksempel **205/55 R16 91V** forteller deg:

| Del           | Betydning                          |
|---------------|------------------------------------|
| **205**       | Bredde i millimeter                |
| **55**        | HÃ¸ydeforhold (profil i prosent)    |
| **R16**       | Felgdiameter i tommer              |
| **91**        | Belastningsindeks                  |
| **V**         | Hastighetskode                     |

Dekkmerking som **M+S** og **Alpine-symbol** (fjell med snÃ¸flak) indikerer vinteregenskaper. For detaljerte krav og perioder, se [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Krav til mÃ¸nsterdybde, piggdekk og kjetting").

## Sjekke riktig lufttrykk


        
        
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
    

Feil lufttrykk pÃ¥virker **slitasje**, **drivstofforbruk** og **kjÃ¸rekomfort**. Sjekk lufttrykket minst Ã©n gang i mÃ¥neden:

1. Finn anbefalt trykk i bilens handbok eller pÃ¥ dÃ¸rstolpen
2. MÃ¥l nÃ¥r dekkene er kalde
3. Juster med luftkompressor
4. Kontroller at ventilhetten er pÃ¥ plass

| Belastning  | Forside (bar) | Bakside (bar) |
|-------------|---------------|---------------|
| Normal last | 2,2           | 2,0           |
| Full last   | 2,5           | 2,5           |
| Hengerlast  | 2,8           | 2,8           |

## MÃ¸nster og mÃ¸nsterdybde


        
        
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
    

Riktig **mÃ¸nsterdybde** er avgjÃ¸rende for grep pÃ¥ vÃ¥tt og snÃ¸dekt underlag. Minimumskrav i Norge er:

| Dekktype     | Minimum dybde |
|--------------|---------------|
| Sommerdekk   | 1,6 mm        |
| Vinterdekk   | 3,0 mm        |

MÃ¥l med dybdemÃ¥ler, myntmetode eller innebygde indikatorer. Se ogsÃ¥ [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - MÃ¸nsterdybdekrav").

## Piggdekk


        
        
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
    

**Piggdekk** gir overlegent grep pÃ¥ bar is, men kan kun brukes i tidsrommet **1. november** til **fÃ¸rste sÃ¸ndag etter andre pÃ¥skedag**. For nÃ¸yaktige datoer og lokale unntak, se [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Piggdekkperioder").

## Oppsummering

En grundig dekkvedlikeholdsrutine inkluderer:

* Kontroll av **slitasje og skader**
* Sjekk av **forstilling** og hjulinnstillinger
* Korrekt bruk og forstÃ¥else av **dekkdimensjoner** og **merking**
* Jevnlig kontroll av **lufttrykk**
* MÃ¥ling av **mÃ¸nsterdybde**
* Bruk av **piggdekk** i tillatte perioder

For ytterligere lesning, se [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon") og [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Krav til mÃ¸nsterdybde og piggdekk").\n  </div>\n</div>