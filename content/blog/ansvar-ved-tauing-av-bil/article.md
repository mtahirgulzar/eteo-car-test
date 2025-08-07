---
title: "Ansvar ved tauing av bil"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær alt om ansvar og regelverk ved tauing av bil i Norge: Trafikkregler, sikkerhetskrav, forsikringsansvar og beste praksis."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/ansvar-ved-tauing-av-bil/ansvar-ved-tauing-av-bil-image.svg"
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
    <img src="/images/blog/ansvar-ved-tauing-av-bil/ansvar-ved-tauing-av-bil-image.svg" alt="Ansvar ved tauing av bil" class="img-fluid rounded">
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
    

**Ansvar ved tauing av bil** omhandler viktige **trafikkregler**, **sikkerhetskrav** og **forsikringsansvar** nÃ¥r en bil taues pÃ¥ norske veier.

*Tauing av bil* oppstÃ¥r ofte ved motorstopp, ulykker eller andre driftsstans-situasjoner, og det er viktig Ã¥ kjenne sine rettigheter og plikter for Ã¥ sikre trygg tauing.

## Innholdsfortegnelse

* [NÃ¥r kan bil taues?](#nÃ¥r-kan-bil-taues)
* [Hvem har ansvar under tauing?](#hvem-har-ansvar-under-tauing)
* [Krav til tauemateriell](#krav-til-tauemateriell)
* [Sikkerhetsprosedyrer ved tauing](#sikkerhetsprosedyrer-ved-tauing)
* [Trafikkregler for tauing](#trafikkregler-for-tauing)
* [Forsikringsansvar ved tauing](#forsikringsansvar-ved-tauing)
* [Typiske feil og anbefalt praksis](#typiske-feil-og-anbefalt-praksis)
* [Relaterte emner](#relaterte-emner)

## NÃ¥r kan bil taues?

Tauing er kun tillatt nÃ¥r kjÃ¸retÃ¸yet ikke kan kjÃ¸re under egen kraft pÃ¥ grunn av feil eller havari. **Det er forbudt Ã¥ tau kjÃ¸retÃ¸y som er i god teknisk stand**.

## Hvem har ansvar under tauing?


        
        
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
    

| Rolle | Ansvar |
|-------|--------|
| **Tauende fÃ¸rer** | SÃ¸rge for at tauing skjer sikkert, fÃ¸lge trafikkregler og bruke godkjent materiell |
| **Tauet fÃ¸rer** | Opprettholde kontroll over styresystemet, ha fot pÃ¥ bremsen og til en hver tid vÃ¦re i fÃ¸rersete |
| **Tredjepart (hjelper)** | Kan bistÃ¥ med plassering og sikring av tau, men har ikke trafikkansvar |

## Krav til tauemateriell

Tau eller slepewire som brukes til tauing mÃ¥ vÃ¦re [**godkjent for motorvogn**](/blogs/teori/motorvogn-definisjon "Motorvogn (definisjon)"), og ha riktig **strekkstyrke**.

| Materiell | Minimum bruddstyrke | Kommentar |
|-----------|---------------------:|-----------|
| **Tau** | 5 tonn | Produsert for tauing av biler |
| **Slepewire** | 3 tonn | Skal vÃ¦re synlig og godt merket |
| **Kroker og karabinkroker** | 2 tonn | Skal ha lÃ¥semekanisme for sikkerhet |

Se ogsÃ¥ [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Bruk av dekk, kjetting og tauemateriell") for generelle krav til utstyr.

## Sikkerhetsprosedyrer ved tauing

FÃ¸lg alltid en fast prosedyre for Ã¥ redusere risiko for ulykker:

* Plasser bilene rett bak hverandre, med tilstrekkelig avstand for tilkopling av tau.
* SlÃ¥ pÃ¥ **nÃ¸dblink** pÃ¥ begge kjÃ¸retÃ¸y.
* Fest tauet til godkjente festepunkter pÃ¥ bÃ¥de tauende og tauet bil.
* SÃ¸rg for jevn og rolig oppstart for Ã¥ unngÃ¥ rykk.
* Oppretthold lav hastighet (maks 30 km/t) og hold god avstand til andre trafikanter.
* Kommuniser tydelig med hÃ¥ndsignaler eller toveis-kommunikasjon underveis.

## Trafikkregler for tauing

Ved tauing gjelder disse spesielle trafikkreglene:

* Maksimalfart: **30 km/t**.
* Tauende bil skal fÃ¸re tauet **rett bak** i minste mulig vinkel.
* Tauet bil mÃ¥ ikke slepes lenger enn **3 km** (vanlig praksis ved motorstopp).
* Det er **ikke tillatt** Ã¥ tau i tunneler, med mindre det er nÃ¸dssituasjon og trafikksikkerhet er ivaretatt.

## Forsikringsansvar ved tauing

Under tauing oppstÃ¥r bÃ¥de **erstatningsansvar** og **forsikringsansvar**:

* **Den tauende fÃ¸rers ansvarsforsikring** dekker skader som fÃ¸lge av tauingen.
* **Egen kaskoforsikring** kan dekke skader pÃ¥ eget kjÃ¸retÃ¸y ved tauing.
* Ved uenighet om ansvarsforhold, dokumenter hendelsen med bilder og vitner.

For mer om forsikringskrav ved bilhold, se [FÃ¸rerkort, vognkort og forsikring](/blogs/teori/forerkort-vognkort-og-forsikring "FÃ¸rerkort, vognkort og forsikring - Guide til forsikring ved bilhold").

## Typiske feil og anbefalt praksis

*Feil bruk av ikke-godkjent tauemateriell kan fÃ¸re til **alvorlige skader**.*

* **Ã… feste til karosseri** i stedet for godkjente festepunkter.
* **BrÃ¥ rykk** i tauet ved oppstart eller stopp.
* **Manglende nÃ¸dsignaler** og kommunikasjon med andre trafikanter.

## Relaterte emner

* [KjÃ¸ring med tilhenger](/blogs/teori/kjoring-med-tilhenger "KjÃ¸ring med tilhenger - Guide til trygg hengerkjÃ¸ring")
* [Sikring av last og passasjerer](/blogs/teori/sikring-av-last-og-passasjerer "Sikring av last og passasjerer - Guide til sikker lastsikring")
* [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Bruk av dekk og kjetting")\n  </div>\n</div>