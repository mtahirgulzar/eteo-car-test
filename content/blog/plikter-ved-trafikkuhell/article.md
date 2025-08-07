---
title: "Plikter ved trafikkuhell"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En omfattende gjennomgang av førerens og vitners plikter ved trafikkuhell i Norge, inkludert stoppeplikt, meldeplikt og hjelpeplikt."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/plikter-ved-trafikkuhell/plikter-ved-trafikkuhell-image.svg"
---

<style>
/* Base text styling */
.article-content {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #1f2937;
  font-size: 16px;
}

/* Headers */
h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0 1.5rem;
  color: #111827;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #1f2937;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
  color: #374151;
}

/* Paragraphs */
p {
  margin: 1rem 0;
  line-height: 1.7;
}

/* Lists */
ul, ol {
  margin: 1rem 0 1rem 1.5rem;
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  position: relative;
  padding-left: 0.5rem;
}

ul > li::before {
  content: 'â€¢';
  color: #3b82f6;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* Links */
a {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Code blocks */
pre, code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  font-size: 0.875em;
}

pre {
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
}

code {
  padding: 0.2em 0.4em;
}

/* Blockquotes */
blockquote {
  border-left: 4px solid #e5e7eb;
  margin: 1.5rem 0;
  padding: 0.75rem 1rem 0.75rem 1.5rem;
  background-color: #f9fafb;
  color: #4b5563;
  font-style: italic;
}

/* Tables */
table {
  margin: 1.5rem auto !important;
  border-collapse: collapse !important;
  width: 100% !important;
  max-width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
  border-radius: 0.5rem !important;
  overflow: hidden !important;
  border: 1px solid #e5e7eb !important;
  display: table !important;
}

th, td {
  padding: 0.75rem 1.25rem !important;
  text-align: left !important;
  border: 1px solid #e5e7eb !important;
  vertical-align: top;
}

th {
  background-color: #f9fafb !important;
  font-weight: 600 !important;
  color: #111827 !important;
  text-transform: uppercase !important;
  font-size: 0.75rem !important;
  letter-spacing: 0.05em !important;
}

tr:nth-child(even) {
  background-color: #f9fafb !important;
}

tr:hover {
  background-color: #f3f4f6 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .article-content {
    font-size: 15px;
  }
  
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.375rem; }
  h3 { font-size: 1.125rem; }
  
  table {
    display: block !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
  }
}
</style>


<div class="blog-content">
  <div class="featured-image">
    <img src="/images/blog/plikter-ved-trafikkuhell/plikter-ved-trafikkuhell-image.svg" alt="Plikter ved trafikkuhell" class="img-fluid rounded">
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
    

**Plikter ved trafikkuhell** er en viktig del av norsk trafikkregelverk, og som fÃ¸rer eller vitne ved en trafikkulykke har du flere lovpÃ¥lagte **plikter** du mÃ¥ vÃ¦re klar over. I denne artikkelen gir vi en omfattende gjennomgang av:

* **Stoppeplikt** â€“ nÃ¥r og hvordan du mÃ¥ stoppe.
* **Hjelpeplikt** â€“ hva slags hjelp du plikter Ã¥ gi.
* **Meldeplikt** â€“ til hvem og med hva informasjon.
* **Dokumentasjonsplikt** â€“ hvilke opplysninger du mÃ¥ dokumentere.
* **Juridiske konsekvenser** ved Ã¥ unnlate Ã¥ oppfylle pliktene.

## Oversikt over plikter ved trafikkuhell

Tabellen under oppsummerer de viktigste pliktene, kort beskrivelse og relevant lovhjemmel:

| Plikt               | Beskrivelse                                                                     | Lovhjemmel                         |
|---------------------|---------------------------------------------------------------------------------|------------------------------------|
| **Stoppeplikt**     | Du mÃ¥ umiddelbart stoppe ved ulykkesstedet.                                      | Vegtrafikkloven Â§Â 5                |
| **Hjelpeplikt**     | Gi nÃ¸dvendig [fÃ¸rstehjelp](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker") og varsle nÃ¸detatene ved behov.                         | Vegtrafikkloven Â§Â 3 og Straffeloven Â§Â 196 |
| **Meldeplikt**      | Gi identitet og nÃ¸dvendige opplysninger til involverte, vitner og politi.       | Vegtrafikkloven Â§Â 5                |
| **Dokumentasjonsplikt** | SÃ¸rge for at kjÃ¸retÃ¸y, skadeomfang og involverte er dokumentert.           | Forskrift om bruk av kjÃ¸retÃ¸y Â§Â 3  |


        
        
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
    

## Stoppeplikt â€“ plikt til Ã¥ stanse

IfÃ¸lge Vegtrafikkloven **Â§Â 5** har alle trafikanter **stoppeplikt** ved trafikkuhell:

1. Stopp **umiddelbart** pÃ¥ et egnet sted ved ulykkesstedet.
2. SlÃ¥ pÃ¥ varsellys og bruk refleksvest hvis tilgjengelig.
3. Sett opp varseltrekant der det er trygg sikt.

Se ogsÃ¥ [Grunnregelen for trafikk](/blogs/teori/grunnregelen-for-trafikk "Grunnregelen for trafikk - Vegtrafikklovens paragraf 3") for mer om aktsomhet og ansvar.

## Hjelpeplikt â€“ plikt til Ã¥ bistÃ¥

Enhver fÃ¸rer eller vitne har en **hjelpeplikt** i henhold til Vegtrafikkloven **Â§Â 3** og Straffeloven **Â§Â 196**. Dette innebÃ¦rer blant annet:

* Gi fÃ¸rstehjelp i henhold til [FÃ¸rstehjelp og opptreden ved ulykker](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker - Din guide til nÃ¸dhjelp ved trafikkulykker").
* Kontakte nÃ¸detatene pÃ¥ 1â€‘1â€‘2 ved alvorlig personskade.
* Beskytte livsviktige funksjoner og forhindre forverring av skader.

Se detaljerte prosedyrer i [HÃ¥ndtering av nÃ¸dsituasjoner](/blogs/teori/handtering-av-nodsituasjoner "HÃ¥ndtering av nÃ¸dsituasjoner - Guide til hÃ¥ndtering av nÃ¸dsituasjoner i trafikken").

## Meldeplikt og dokumentasjonsplikt

Etter et trafikkuhell mÃ¥ du ogsÃ¥ oppfylle **meldeplikt** og **dokumentasjonsplikt**:

* **Meldeplikt**: Oppgi ditt navn, adresse og kjÃ¸retÃ¸ysinformasjon til andre involverte parter og politi.
* **Dokumentasjonsplikt**: Ta bilder, notÃ©r registreringsnummer, tidspunkt, sted og vitneopplysninger.

For informasjon om forsikring og regress, se [Forsikring, trafikkforsikring, vognskadeforsikring og regress](/blogs/teori/forsikring-trafikkforsikring-vognskadeforsikring-og-regress "Forsikring, trafikkforsikring, vognskadeforsikring og regress - Hva du bÃ¸r vite om bilforsikringer").

## Juridiske konsekvenser ved unnlatelse

Unnlatelse av Ã¥ oppfylle pliktene ved trafikkuhell kan medfÃ¸re:

* **Bot** eller **fengsel** etter Straffeloven Â§Â 196.
* Inndragning av fÃ¸rerkort.
* Ã˜kt erstatningsansvar ved forsikringsoppgjÃ¸r.

Les mer om sanksjoner i [Sanksjoner, bot, inndraging, pant og prikker m.m.](/blogs/teori/sanksjoner-bot-inndraging-pant-prikker "Sanksjoner, bot, inndraging, pant og prikker m.m. - Reaksjoner ved brudd pÃ¥ trafikkregler").

## Videre lesning

* [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - InnfÃ¸ring i trafikkregelverket") for en grundig oversikt over lovverket.
* [Oppmerksomhet og samhandling](/blogs/teori/oppmerksomhet-og-samhandling "Oppmerksomhet og samhandling - Fokus og samarbeid i trafikken") for effektiv kommunikasjon ved ulykkesstedet.\n  </div>\n</div>