---
title: "Statistikk og ulykker"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Oversikt over nøkkelstatistikk om trafikkulykker i Norge, inkludert ulykkestyper, årsaker, trender og forebyggende tiltak."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/statistikk-og-ulykker/statistikk-og-ulykker-image.svg"
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
    <img src="/images/blog/statistikk-og-ulykker/statistikk-og-ulykker-image.svg" alt="Statistikk og ulykker" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
**Statistikk og ulykker** i norsk trafikk gir deg innsikt i hva som pÃ¥virker sikkerheten pÃ¥ veiene. Ved Ã¥ studere tall og trender kan vi identifisere **risikofaktorer** og iverksette effektive **forebyggende tiltak**.

*For mer om **mÃ¸teulykker** og forebygging, se [MÃ¸teulykker og forebygging](/blogs/teori/moteulykker-og-forebygging "MÃ¸teulykker og forebygging - Forebygging av frontkollisjoner i trafikken").*
*For prinsipper innen **risikovurdering**, se [Risikovurdering i praksis](/blogs/teori/risikovurdering-i-praksis "Risikovurdering i praksis - Praktisk risikovurdering i trafikken").*


        
        
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
    

## NÃ¸kkelstatistikk

| Ã…r   | Antall alvorlige ulykker | Drepte | Hardt skadde |
|------|---------------------------|--------|--------------|
| 2018 | 1Â 272                     | 109    | 352          |
| 2019 | 1Â 305                     | 104    | 364          |
| 2020 | 1Â 223                     | 92     | 317          |
| 2021 | 1Â 198                     | 98     | 310          |
| 2022 | 1Â 250                     | 101    | 329          |

## Ulykkestyper

Typiske ulykkestyper i norsk trafikk inkluderer:

* **Frontkollisjoner**
* **UtforkjÃ¸ringsulykker**
* **Fotgjengerulykker**
* **ViltpÃ¥kjÃ¸rsler**
* **Singelulykker**

## Ã…rsaker til ulykker

Flere faktorer kan bidra til trafikkulykker:

* **Hastighet** over tilpasset fart
* **Distraksjoner**, for eksempel bruk av mobiltelefon
* **DÃ¥rlig veigrep** ved feil dekk eller ved glatt underlag
* **DÃ¥rlig sikt** i mÃ¸rke eller dÃ¥rlig vÃ¦r
* **Menneskelig feil** og manglende risikovurdering

## Trender over tid

Utviklingen i antall drepte viser en positiv nedgang, selv om svingninger forekommer.

<img src="ulykker-statistikk-graf.svg" alt="Ã…rlige trafikkdrepte i Norge (2018â€“2022)" />

## Forebyggende tiltak

For Ã¥ redusere ulykkesrisikoen anbefales det:

* Regelmessig vedlikehold av dekk og bremser. Se [Dekk og vedlikehold](/blogs/teori/dekk-og-vedlikehold "Dekk og vedlikehold - Tips for sikre dekk").
* God sikt med riktig bruk av lys. Les mer i [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Loven og god praksis").
* Aktiv risikoplanlegging. Se [Risikovurdering i praksis](/blogs/teori/risikovurdering-i-praksis "Risikovurdering i praksis - Praktisk risikovurdering i trafikken").
* VÃ¦r oppmerksom pÃ¥ mÃ¸tende trafikk i svinger og pÃ¥ smale veier.
* Hold god avstand til andre kjÃ¸retÃ¸y. For teknikker om avstand, se [Fart og avstand](/blogs/teori/fart-og-avstand "Fart og avstand - Komplett guide til hastighet og bremseavstand").

Ved Ã¥ kombinere statistisk innsikt med bevisste kjÃ¸revaner kan vi sammen jobbe for tryggere veier i Norge.\n  </div>\n</div>