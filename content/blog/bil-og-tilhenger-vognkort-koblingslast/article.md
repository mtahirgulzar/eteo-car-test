---
title: "Bil og tilhenger (klasse B), vognkort og koblingslast"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær alt om bruk av bil med tilhenger under klasse B: vognkortkrav, beregning av koblingslast, tillatt tilhengervekt og viktige regler i Norge."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/bil-og-tilhenger-vognkort-koblingslast/bil-og-tilhenger-vognkort-koblingslast-image.svg"
---

<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/bil-og-tilhenger-vognkort-koblingslast/bil-og-tilhenger-vognkort-koblingslast-image.svg" alt="Bil og tilhenger (klasse B), vognkort og koblingslast" class="img-fluid rounded">
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
    

**Bil og tilhenger (klasse B)** kombinerer praktisk kjÃ¸ring med **vognkortets** krav og **koblingslast**-beregninger for Ã¥ sikre trygg og lovlig transport. I denne omfattende guiden lÃ¦rer du alt om hvordan du tolker vognkortet, beregner koblingslast og overholder tillatt totalvekt for fÃ¸rerkort klasse B.

## Hva er vognkort?

Vognkortet, ogsÃ¥ kalt registreringsbevis, inneholder viktig informasjon om kjÃ¸retÃ¸yets tekniske egenskaper og eierforhold. Det er delt i to deler:

| Del    | Innhold                                               |
|--------|-------------------------------------------------------|
| Del 1  | Tekniske data for kjÃ¸retÃ¸yet (Ã¸vre del)               |
| Del 2  | Eierinformasjon og endringer (nedre del)              |

For mer om krav til dokumenter for fÃ¸rerkort og vognkort, se [FÃ¸rerkort, vognkort og forsikring](/blogs/teori/forerkort-vognkort-og-forsikring "FÃ¸rerkort, vognkort og forsikring").

*For en full oversikt over alle feltene i vognkortet, se [Vognkort, oversikt over alle felter](/blogs/teori/vognkort-oversikt-alle-felter "Vognkort, oversikt over alle felter").*

## ForstÃ¥ koblingslast

**Koblingslast** er den vertikale kraften som lasten pÃ¥ tilhengeren utÃ¸ver pÃ¥ bilens kulehode. Riktig beregning er avgjÃ¸rende for stabilitet og sikkerhet.

| Begrep             | Forklaring                                                  |
|--------------------|-------------------------------------------------------------|
| Tillatt totalvekt  | Maksimal vekt for kjÃ¸retÃ¸y og tilhenger (inkl. last)        |
| Egenvekt           | Vekten av bilen uten last, fÃ¸rer og passasjerer             |
| Maks tilhengervekt | Maksimal vekt tilhengeren kan veie (angitt i vognkort)      |
| Koblingslast       | Den vertikale lasten pÃ¥ hengerfestet (angitt i vognkort)    |

### Hvordan beregne koblingslast

Koblingslasten (K) beregnes som en prosentandel av tilhengerens vekt:

```math
K = \frac{T \times p}{100}
```
der
- `T` er **tillatt totalvekt** pÃ¥ tilhenger (kg)
- `p` er **pÃ¥lagt prosentandel** (vanligvis 4â€“10 %)

For eksempel, for en tilhenger med tillatt totalvekt 2000 kg og p = 6 %:

| Tillatt totalvekt (kg) | Prosentandel (%) | Koblingslast (kg) |
|------------------------|------------------|-------------------|
| 2000                   | 6                | 120               |

## FÃ¸rerkortklasser for tilhenger

KjÃ¸ring med tilhenger under fÃ¸rerkort klasse B krever at du kjenner til:

| Klasse | Beskrivelse                                   |
|--------|-----------------------------------------------|
| B      | Personbil uten eller med lett tilhenger (â‰¤Â 750Â kg) |
| B96    | Utvidet B: Tilhenger med totalvekt 3501â€“4250Â kg   |
| BE     | B + tilhenger over 750Â kg                         |

Se ogsÃ¥ [FÃ¸rerkortklasser i Norge](/blogs/teori/forerkortklasser-oversikt "FÃ¸rerkortklasser i Norge â€“ oversikt og inndeling") for full oversikt over fÃ¸rerkortklasser.

* For praktiske **krav til tilhenger** under klasse B, se [Krav til tilhenger (klasse B)](/blogs/teori/krav-til-tilhenger-klasse-b "Krav til tilhenger (klasse B) - Detaljert guide").

## Sjekkliste fÃ¸r kjÃ¸ring

FÃ¸r du kjÃ¸rer med tilhenger, kontroller:

* _Vognkortet_ for bÃ¥de bil og tilhenger.
* At koblingslasten er innenfor angitte grenser.
* At totalvekten (bil + tilhenger + last) ikke overstiges.
* At tilknytningspunktet er korrekt festet og sikret.
* At last og utstyr er forsvarlig sikret.

For mer om praktisk kjÃ¸reteknikk med henger, se [KjÃ¸ring med tilhenger](/blogs/teori/kjoring-med-tilhenger "KjÃ¸ring med tilhenger - Guide til trygg hengerkjÃ¸ring i Norge").

## Oppsummering

Riktig bruk av **vognkort** og nÃ¸yaktig **beregning av koblingslast** er essensielt for sikker og lovlig kjÃ¸ring med tilhenger under fÃ¸rerkort klasse B. FÃ¸lg sjekklistene og hold deg innenfor vektgrensene for Ã¥ unngÃ¥ farlige situasjoner pÃ¥ veien.\n  </div>\n</div>