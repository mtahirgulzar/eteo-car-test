---
title: "Sikring av gods (klasse B)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hvordan du trygt og lovlig sikrer gods i bil under førerkort klasse B, inkludert gjenstander som stikker ut, løse gjenstander og overlast i Norge."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/sikring-av-gods-klasse-b/sikring-av-gods-klasse-b-image.svg"
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
    <img src="/images/blog/sikring-av-gods-klasse-b/sikring-av-gods-klasse-b-image.svg" alt="Sikring av gods (klasse B)" class="img-fluid rounded">
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
    

I denne artikkelen gÃ¥r vi i dybden pÃ¥ **sikring av gods for fÃ¸rerkort klasse B**, inkludert regler for gjenstander som stikker ut, lÃ¸se gjenstander og **overlast**. For en mer omfattende guide til sikring av last og passasjerer, se [Sikring av last og passasjerer](/blogs/teori/sikring-av-last-og-passasjerer "Sikring av last og passasjerer - Guide til sikker last- og passasjersikring").

For rÃ¥d om **transport av sykkel**, se [Transport av sykkel](/blogs/teori/transport-av-sykkel "Transport av sykkel - Guide til trygg transport og sikring av sykkel pÃ¥ bil").

## Innholdsfortegnelse

* [Lovverk og ansvar](#lovverk-og-ansvar)
* [Gjenstander som stikker ut](#gjenstander-som-stikker-ut)
* [LÃ¸se gjenstander i bilen](#lose-gjenstander-i-bilen)
* [Overlast og vektgrenser](#overlast-og-vektgrenser)
* [Praktiske sikringsmetoder](#praktiske-sikringsmetoder)
* [Illustrasjon: Gjenstander som stikker ut](#illustrasjon-gjenstander-som-stikker-ut)

## Lovverk og ansvar

I henhold til [Vegtrafikklovens Â§Â 23](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norsk trafikkregler") er fÃ¸reren ansvarlig for at gods i bilen er forsvarlig sikret, slik at det ikke kan falle ut, stikke ut eller forskyve seg ved kjÃ¸ring.

| Overtredelse            | Gebyr      | Prikker | Kommentarer                   |
|-------------------------|------------|---------|-------------------------------|
| Uskikret gods           | 1Â 700Â kr   | 1       | Farlig for fÃ¸rer og andre     |
| Gjenstand stikker ut    | 1Â 700Â kr   | 2       | Krav til merking og varsling  |
| Overlast (vektoverskridelse) | 2Â 000Â kr | 2     | Fare for kjÃ¸retÃ¸yets stabilitet |

## Gjenstander som stikker ut

Gjenstander som stikker mer enn **1Â meter bakover** eller **0,5Â meter pÃ¥ sidene** mÃ¥ vÃ¦re merket med rÃ¸d hvitstripet duk eller flagg i dagslys, og med lys eller refleks om natten.

| Retning      | Maks. stikk   | Merking                           |
|--------------|---------------|-----------------------------------|
| Bakover      | 1Â meter       | RÃ¸d-hvit duk/lys/refleks          |
| Sider        | 0,5Â meter     | RÃ¸d-hvit duk/refleks              |
| Foran        | ---           | Skal ikke stikke ut               |

## LÃ¸se gjenstander i bilen

LÃ¸se gjenstander blir til **dÃ¸delige prosjektiler** ved kollisjon. Her er noen eksempler pÃ¥ vektÃ¸kning under kraftig retardasjon:

| Gjenstand         | Vekt              | Vekt ved kollisjon (50Â km/t) |
|-------------------|-------------------|------------------------------|
| Mobiltelefon      | 0,2Â kg            | 6â€“10Â kg                      |
| Vannflaske        | 0,5Â kg            | 15â€“25Â kg                     |
| VerktÃ¸ykasse      | 5Â kg              | 150â€“250Â kg                   |

## Overlast og vektgrenser

Overlast oppstÃ¥r nÃ¥r totalvekten med gods overstiger det som er angitt i vognkortets felt **F2Â (TE)**. For **klasse B** gjelder maks totalvekt pÃ¥ **3Â 500Â kg** for vogntog.

| KjÃ¸retÃ¸ytype             | Maks totalvekt | Kommentar                |
|--------------------------|---------------:|--------------------------|
| Personbil (klasse B)     | 3Â 500Â kg       | Inkludert passasjerer og last |
| Gods i bil uten tilhenger | Avhenger av bil | Sjekk vognkortets F2    |

*For mer om fÃ¸rerkortklasser og vektgrenser, se [FÃ¸rerkortklasser i Norge](/blogs/teori/forerkortklasser-oversikt "FÃ¸rerkortklasser i Norge â€“ oversikt og inndeling").*

## Praktiske sikringsmetoder

FÃ¸lg disse trinnene for Ã¥ sikre gods effektivt:

1. **Planlegg lastingen:** Tunge gjenstander nederst og nÃ¦r bilens tyngdepunkt
2. **Fordel vekten:** Jevn fordeling mellom hÃ¸yre og venstre side
3. **Fest med stropp eller nett:** Bruk godkjent sikringsutstyr som er CE-merket
4. **Kryssbinding:** Lag gjerne et X-mÃ¸nster med stroppene for ekstra stabilitet
5. **Kontroller spenning:** Stropper skal vÃ¦re stramme, men ikke overstrukket
6. **Ettersjekk underveis:** Etterspenn etter ca. 10Â km for Ã¥ sikre at lasten sitter

## Illustrasjon: Gjenstander som stikker ut


        
        
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
        "![$altText](/images/blog/$blogFolder/$imgName.$ext)"\n  </div>\n</div>