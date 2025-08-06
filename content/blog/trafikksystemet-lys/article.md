---
title: "Trafikksystemet (lys) - Trafikklys og signalanlegg"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om de ulike lys- og signaltypene i trafikksystemet, inkludert trafikklys, fotgjengersignaler, kjørefeltsignaler, jernbanesignaler, veiarbeidslys og kollektivtrafikklys."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/trafikksystemet-lys/trafikksystemet-lys-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/trafikksystemet-lys/trafikksystemet-lys-image.svg" alt="Trafikksystemet (lys) - Trafikklys og signalanlegg" class="img-fluid rounded">
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
    

**Trafikksystemet (lys)** omfatter alle faste **lys- og signalanlegg** langs og over veien som regulerer trafikkflyt, gir informasjon og sikrer trafikksikkerhet. I dette kapittelet fÃ¥r du en grundig oversikt over de viktigste signaltypene, deres betydning og regler.

## Oversikt over signaltyper

Nedenfor finner du en tabell over de viktigste signaltypene i trafikksystemet:

| Signaltype                          | Beskrivelse                                           | Se ogsÃ¥                                                                                                   |
|-------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| **Trafikklys**                      | Tre-farget signal for kjÃ¸retÃ¸y med rÃ¸dt, gult og grÃ¸nt.| [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier") |
| **Fotgjengersignal**                | Signal for gÃ¥ende med grÃ¸nt gÃ¥-symbol og rÃ¸dt hÃ¥nd-symbol.| [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier") |
| **Pilsignal**                       | Gult blinksignal, ofte brukt i midlertidig trafikkstyring.| [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier") |
| **KjÃ¸refeltsignal**                 | Elektroniske signaler over kjÃ¸refelt som viser tillatt retning eller forbud.| |
| **Blinkende signal ved jernbane**   | RÃ¸dt blinkende signal ved planovergang som varsler om tog.| [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier") |
| **Veiarbeidslys**                   | Oransje blinkende lamper brukt for Ã¥ lede trafikk ved veiarbeid.| [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide til trafikkskilt og veimerking") |
| **Kollektivtrafikklys (hvit)**      | Hvitt signal som viser nÃ¥r buss og trikk kan kjÃ¸re i kollektivfelt. | [Trafikksystemet](/blogs/teori/trafikksystemet "Trafikksystemet - InnfÃ¸ring i det norske trafikksystemet"), [Sporvogn i trafikken](/blogs/teori/sporvogn-i-trafikken "Sporvogn i trafikken â€“ Lys og regler") |

## Hvordan signalene regulerer trafikk

* **Trafikklys** styrer kryss og gangfelter ved Ã¥ veksle mellom fargefasene.
* **Fotgjengersignal** samarbeider med trafikklys for kjÃ¸retÃ¸y for trygg kryssing.
* **Pilsignal** brukes ofte i midlertidig trafikkstyring, som ved veiarbeid.
* **KjÃ¸refeltsignal** gir fleksibilitet i kjÃ¸remÃ¸nster ved dynamisk kjÃ¸refeltsstyring.
* **Blinkende signal ved jernbane** aktiverer planovergangsalarmer og stenger veien ved togpassering.
* **Veiarbeidslys** varsler og leder trafikk sikkert gjennom arbeidsomrÃ¥det.
* **Kollektivtrafikklys** prioriterer buss og trikk i egne felt, slik at kollektivtrafikken flyter bedre.

## Generelle regler og anbefalinger

### Plikten til Ã¥ fÃ¸lge signaler

Alle trafikanter er **pliktig** til Ã¥ fÃ¸lge de faste lys- og signalanleggene. Brudd pÃ¥ signalplikt kan fÃ¸re til bot og prikkbelastning.

### Ved feil eller manglende signal

Ved svikt i signalanlegg mÃ¥ fÃ¸rer vise spesiell aktsomhet, redusere fart og gi tjenlig vikeplikt. Se [HÃ¥ndtering av nÃ¸dsituasjoner](/blogs/teori/handtering-av-nodsituasjoner "HÃ¥ndtering av nÃ¸dsituasjoner") for mer informasjon.

## Illustrasjon over signaloversikt


        
        
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
    

## Videre lesning

* [Trafikksystemet (lys)](/blogs/teori/trafikksystemet-lys "Trafikksystemet (lys) - Trafikklys og signalanlegg")
* [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier")
* [Trafikkregler for spesielle kjÃ¸retÃ¸y](/blogs/teori/trafikkregler-for-spesielle-kjoretoy "Trafikkregler for spesielle kjÃ¸retÃ¸y")\n  </div>\n</div>