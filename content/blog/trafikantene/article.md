---
title: "Trafikantene: Myke trafikanter, tohjulinger, syklende, buss, blindsone, gående, fri vei"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om de ulike trafikantene i trafikken, inkludert myke trafikanter, tohjulinger, syklende, buss, blindsone, gående og begrepet fri vei."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/trafikantene/trafikantene-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/trafikantene/trafikantene-image.svg" alt="Trafikantene: Myke trafikanter, tohjulinger, syklende, buss, blindsone, gående, fri vei" class="img-fluid rounded">
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
    

**Trafikantene** i trafikken omfatter alle som ferdes pÃ¥ eller langs veiene. For Ã¥ kjÃ¸re **sikkert** og **hensynsfullt** mÃ¥ du kjenne til de forskjellige gruppene, fra **myke trafikanter** til **buss**, og forstÃ¥ begrepet **fri vei**.

En grundig forstÃ¥else av trafikantene er avgjÃ¸rende for teoriprÃ¸ven for fÃ¸rerkort klasse B, og for din daglige kjÃ¸reerfaring.

## Oversikt over trafikantene

| Trafikanttype        | Beskrivelse                                         | Viktige hensyn og regler                                                                                  |
|----------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Myke trafikanter** | Fotgjengere og andre med minimal fysisk beskyttelse | Se [Trafikantgrupper og hensyn](/blogs/teori/trafikantgrupper-og-hensyn "Trafikantgrupper og hensyn - Oversikt over trafikantgrupper og viktige hensyn")     |
| **Tohjulinger**      | Mopedister og motorsyklister                        | Se [ForbikjÃ¸ring og feltskifte](/blogs/teori/forbikjoring-og-feltskifte "ForbikjÃ¸ring og feltskifte - Komplett guide til sikker forbikjÃ¸ring og feltskifte")     |
| **Syklende**         | Sykler og el-sykler                                  | Se [Transport av sykkel](/blogs/teori/transport-av-sykkel "Transport av sykkel - Guide til trygg transport av sykkel pÃ¥ bil i Norge") |
| **Buss**             | Kollektivtransport pÃ¥ hjul                           | Se [Trafikkregler for spesielle kjÃ¸retÃ¸y](/blogs/teori/trafikkregler-for-spesielle-kjoretoy "Trafikkregler for spesielle kjÃ¸retÃ¸y - Prioritet, fart og sikkerhet") |
| **Blindsone**        | OmrÃ¥de bilfÃ¸rere ikke ser i speil                    | Se [Kommunikasjon med andre trafikanter](/blogs/teori/kommunikasjon-med-andre-trafikanter "Kommunikasjon med andre trafikanter - Ã˜yekontakt, signaler og forstÃ¥else") |
| **GÃ¥ende**           | Fotgjengere pÃ¥ gangfelt og fortau                   | Se [Trafikantgrupper og hensyn](/blogs/teori/trafikantgrupper-og-hensyn "Trafikantgrupper og hensyn - Oversikt over trafikantgrupper og viktige hensyn")     |
| **Fri vei**          | NÃ¥r du har rett til Ã¥ kjÃ¸re uten Ã¥ vike              | Se [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer - Komplett guide til hÃ¸yreregelen og rundkjÃ¸ringer")   |

## Myke trafikanter

Myke trafikanter inkluderer **fotgjengere**, barn, eldre og personer med nedsatt funksjonsevne. De er den mest **sÃ¥rbare trafikantgruppen** med liten eller ingen fysisk beskyttelse.

* HÃ¸y sÃ¥rbarhet ved kollisjon
* Ingen krav til kjÃ¸retÃ¸y, men krav om Ã¥ fÃ¸lge trafikksignaler
* Viktig med Ã¸yekontakt og lav hastighet nÃ¦r gangfelt

## Tohjulinger

Tohjulinger omfatter **mopedister** og **motorsyklister**. De har lavere stabilitet enn firehjuls kjÃ¸retÃ¸y og kan forsvinne i bilens **blindsoner**.

* Variabel hastighet fra 45 km/t (moped) til hÃ¸ye hastigheter (motorsykkel)
* Krever god avstand ved forbikjÃ¸ring
* VÃ¦r oppmerksom pÃ¥ hÃ¥ndsignaler og blinklys

## Syklende

Syklende beveger seg i variabel hastighet og deler ofte vei med motorisert trafikk.

* Bruk sykkelfelt nÃ¥r tilgjengelig
* Gi god plass og senk hastigheten ved forbikjÃ¸ring
* FÃ¸lg reglene i [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer - Komplett guide til hÃ¸yreregelen og rundkjÃ¸ringer") for vikeplikt

## Buss

Busser har stor lengde og vekt, og begrenset manÃ¸vreringsevne. Dette gir **lange bremselengder** og store **blindsoner**.

* UnngÃ¥ Ã¥ ligge i blindsoner
* Ikke forbikjÃ¸r pÃ¥ hÃ¸yre side ved holdeplasser
* Vis hensyn ved stopp for pÃ¥- og avstigning av passasjerer

## Blindsone

Blindsone er omrÃ¥det som ikke dekkes av bilens speil eller kameraer. Ã… forstÃ¥ og kontrollere disse sonene er avgjÃ¸rende for sikker kjÃ¸ring.

* Juster speil riktig fÃ¸r kjÃ¸ring
* Bruk skuldersjekk for Ã¥ dekke dÃ¸dpunktene
* VÃ¦r ekstra oppmerksom ved filskifte og rygging

## GÃ¥ende

GÃ¥ende inkluderer alle som ferdes til fots, med eller uten hjelpemidler.

* Respekter fotgjengerfelt
* Senk hastighet ved skoler og boligomrÃ¥der
* Gi fri vei nÃ¥r fotgjengere gÃ¥r ut i veien

## Fri vei

Begrepet **fri vei** definerer nÃ¥r du har **forkjÃ¸rsrett**. Dette avhenger av vikepliktskilt, forkjÃ¸rsregler og situasjonsforstÃ¥else.

* Vikepliktsskilt (hvit trekant med rÃ¸d kant) krever at du gir fri vei
* ForkjÃ¸rsskilt (gul rombe) gir deg rett til fri vei
* Alltid bekreft at andre trafikantgrupper stopper fÃ¸r du kjÃ¸rer

For en detaljert gjennomgang av vikeplikt og forkjÃ¸rsregler, se [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer - Komplett guide til hÃ¸yreregelen og rundkjÃ¸ringer").

## Oppsummering

Ã… kjenne til **trafikantene** og vise riktig **hensyn** er avgjÃ¸rende for trafikksikkerheten. Ved Ã¥ forstÃ¥ de ulike gruppene, deres sÃ¥rbarhet og reglene som gjelder, kan du kjÃ¸re tryggere og mer ansvarlig.\n  </div>\n</div>