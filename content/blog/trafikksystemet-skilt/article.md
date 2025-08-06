---
title: "Trafikksystemet (skilt)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En grundig oversikt over alle trafikkskiltgrupper i Norge for teoriprøven, inkludert fareskilt, forbudtsskilt, påbudsskilt, opplysningsskilt og mer."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/trafikksystemet-skilt/trafikksystemet-skilt-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/trafikksystemet-skilt/trafikksystemet-skilt-image.svg" alt="Trafikksystemet (skilt)" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
**Trafikksystemet (skilt)** gir en oversikt over alle **skiltgrupper** i det norske trafikksystemet, slik at du raskt kan kjenne igjen og tolke skiltene du mÃ¸ter i trafikken.

*For en komplett gjennomgang av hver enkelt skilt og eksempler, se [Skiltoversikt: Alle skiltgrupper og oversikt over alle skiltene](/blogs/teori/skiltoversikt-alle-skiltgrupper-og-oversikt "Skiltoversikt: Alle skiltgrupper og oversikt over alle skiltene").*


        
        
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
    

## Skiltgrupper

Nedenfor finner du en tabell over de ti viktigste skiltgruppene som brukes i Norge:

| Gruppe                           | Beskrivelse                                                                                   | Se ogsÃ¥                                                                                                   |
|----------------------------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Fareskilt**                    | Skilt som advarer om farlige vegforhold eller hindringer.                                     | [Advarselsskilt og faremerking](/blogs/teori/trafikkskilt-og-veimerking "Advarselsskilt og faremerking") |
| **Vikeplikt- og forkjÃ¸rsskilt**  | Skilt som angir nÃ¥r du mÃ¥ vike eller har forkjÃ¸rsrett.                                       | [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer")      |
| **Forbudtsskilt**                | Skilt som forbyr bestemte handlinger, som innkjÃ¸ring eller parkering.                         | [Forbudsskilt eksempler](/blogs/teori/trafikkskilt-og-veimerking "Forbudtsskilt eksempler")            |
| **PÃ¥budsskilt**                  | Skilt som viser hva du mÃ¥ gjÃ¸re, for eksempel kjÃ¸reretning eller kjÃ¸refelt.                  | [PÃ¥budsskilt eksempler](/blogs/teori/trafikkskilt-og-veimerking "PÃ¥budsskilt eksempler")                |
| **Opplysningsskilt**             | Skilt som gir viktig informasjon om vei, strekning eller trafikkregler.                      | [Opplysningsskilt eksempler](/blogs/teori/trafikkskilt-og-veimerking "Opplysningsskilt eksempler")      |
| **Serviceskilt**                 | Skilt som viser tjenester som bensinstasjon, parkeringsplass eller rasteplass.               | [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking")      |
| **Veivisningsskilt**             | Retningsskilt for riksvei, europavei, fylkesvei og lokale destinasjoner.                     | [Veivisningsskilt og rutenett](/blogs/teori/trafikkskilt-og-veimerking "Veivisningsskilt og rutenett")|
| **Fargekoder**                   | Standardiserte farger som gir ekstra betydning, for eksempel gult ved midlertidig skilting.  | [Fargenes betydning](/blogs/teori/trafikkskilt-og-veimerking "Fargenes betydning")                     |
| **Underskilt**                   | Mindre tavler under hovedskilt som angir gyldighetsperiode, strekning eller kjÃ¸retÃ¸ygruppe.  | [Tilleggstavler eksempler](/blogs/teori/trafikkskilt-og-veimerking "Tilleggstavler eksempler")         |
| **Markeringsskilt**              | Skilt som markerer plasser, soner eller sperreflater, som fotgjengerfelt eller sykkelfelt.    | [Veimerking og oppmerking](/blogs/teori/veioppmerking "Veimerking og oppmerking")                     |

## Detaljer om skiltgruppene

### Fareskilt

**Fareskilt** (advarselsskilt) er trekantede skilt med rÃ¸d kant som varsler om farlige forhold. Eksempler er skarpe svinger, bratt bakke eller jernbanekryss.

### Vikeplikt- og forkjÃ¸rsskilt

**Vikepliktsskilt** (hvit trekant med rÃ¸d kant) viser at du mÃ¥ gi fri vei. **ForkjÃ¸rsskilt** (gul rombe med hvit kant) angir forkjÃ¸rsrett.

*For mer om de ulike trafikantene og begrepet fri vei, se [Trafikantene](/blogs/teori/trafikantene "Trafikantene â€“ Oversikt over trafikanttyper og fri vei").*

### Forbudtsskilt

**Forbudtsskilt** er runde med hvit bakgrunn og rÃ¸d ring, og viser handlinger som ikke er tillatt, som parkering, stopp eller forbikjÃ¸ring.

### PÃ¥budsskilt

**PÃ¥budsskilt** er runde med blÃ¥ bakgrunn og hvite symboler, og viser hva du mÃ¥ gjÃ¸re, som kjÃ¸reretning eller kjÃ¸refeltsvalg.

### Opplysningsskilt

**Opplysningsskilt** gir nyttig informasjon, for eksempel veiutpeking, stedsnavn eller spesielle regler som vikeplikt.

### Serviceskilt

**Serviceskilt** angir tilgjengelige tjenester, som bensinstasjoner, restauranter og parkeringsplasser.

### Veivisningsskilt

**Veivisningsskilt** viser reiseretning mot riksvei, europavei eller lokale mÃ¥l, ofte med farge- og tallkoder.

### Fargekoder

**Fargekoder** hjelper deg Ã¥ skille skiltgrupper og prioriteter: rÃ¸dt for forbud, blÃ¥tt for pÃ¥bud, gult for midlertidig, grÃ¸nt for veivisning.

### Underskilt

**Underskilt** plasseres under hovedskilt for Ã¥ spesifisere gyldighetsperiode, strekning eller unntak.

### Markeringsskilt

**Markeringsskilt** viser markering av soner eller flater, som fotgjengerfelt, sykkelfelt og sperreflater pÃ¥ vei.

## Relaterte artikler

* [Trafikksystemet (lys)](/blogs/teori/trafikksystemet-lys "Trafikksystemet (lys) - Trafikklys og signalanlegg")

* [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Komplett guide til trafikkskilt og veimerking")
* [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer - komplett guide")
* [Veimerking og oppmerking](/blogs/teori/veioppmerking "Veimerking og oppmerking")
* [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Oversikt over norske trafikklover og forskrifter")\n  </div>\n</div>