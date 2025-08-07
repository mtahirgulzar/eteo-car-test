---
title: "Signal vs tegn i trafikken"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær forskjellen mellom trafikksignaler og trafikkskilt i trafikken: når du skal følge signaler, når du skal følge skilting, basert på norske trafikklove og god praksis."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/signal-vs-tegn-i-trafikken/signal-vs-tegn-i-trafikken-image.svg"
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
    <img src="/images/blog/signal-vs-tegn-i-trafikken/signal-vs-tegn-i-trafikken-image.svg" alt="Signal vs tegn i trafikken" class="img-fluid rounded">
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
    

**Signal** og **tegn** i trafikken gir viktige instruksjoner til fÃ¸rere, men det kan vÃ¦re forvirrende nÃ¥r du skal fÃ¸lge lysbaserte signaler fremfor faste trafikkskilt. I denne artikkelen lÃ¦rer du **nÃ¥r du skal fÃ¸lge trafikksignaler**, **nÃ¥r du skal fÃ¸lge trafikkskilt**, og hvordan du tolker instruksjonene riktig i henhold til norsk lov.

*For en grundig guide til bruk av lys og signaler, se [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Komplett guide til lysbruk og signalisering").*
*For en fullstendig oversikt over trafikkskilt og veimerking, se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Detaljert gjennomgang av skilt og merking").*

## Forskjellen mellom signaler og tegn

| Type       | Definisjon                                 | Eksempel                                 | NÃ¥r det gjelder                      |
|------------|--------------------------------------------|------------------------------------------|--------------------------------------|
| **Signal** | Dynamisk, lys- eller lydbasert instruksjon | Trafikklys, blinkende gult blinklys, horn | NÃ¥r sanntidskontroll er nÃ¸dvendig    |
| **Tegn**   | Fast, statisk instruksjons- eller varseltegn | Stopp-skilt, vikepliktskilt, fartsgrense  | NÃ¥r varige regler gjelder           |

## NÃ¥r brukes trafikksignaler?

Trafikksignaler styrer trafikkflyt med **lys og lyd** i situasjoner hvor sanntidskontroll er viktig:

* **Trafikklys** kontrollerer kryss og gangfelt.
* **Blinkende gult** ved midlertidige hindringer eller signalfeil.
* **NÃ¸dblink** og **horn** for akutte faresituasjoner.

## NÃ¥r brukes trafikkskilt?

Trafikkskilt gir varige **regler**, **pÃ¥bud** eller **forbud** som gjelder over tid:

* **Stopp-skilt** (rÃ¸dt, helt stopp).
* **Vikepliktskilt** (gir vikeplikt til kryssende trafikk).
* **Fartsgrenseskilt** (fastsettelse av maksimal hastighet).

## Viktige punkter Ã¥ huske

* FÃ¸lg **trafikksignaler** der de er tilstede â€“ de overstyrer tegn og generelle regler.
* FÃ¸lg **trafikkskilt** nÃ¥r signaler ikke er tilgjengelige eller ikke gir instruksjoner.
* Ved konflikter har **signaler alltid prioritet** dersom de er operative.
* **Statens vegvesen** sÃ¸rger for vedlikehold av skilt, mens signalanlegg vedlikeholdes av lokale myndigheter.

## Relaterte artikler

* [Kommunikasjon med andre trafikanter](/blogs/teori/kommunikasjon-med-andre-trafikanter "Kommunikasjon med andre trafikanter - Signaler, tegn, fart og plassering").  
* [Samhandling i trafikken](/blogs/teori/samhandling-i-trafikken "Samhandling i trafikken - Tegn, signal, fart og plassering").  
* [RundkjÃ¸ringer: Vikeplikt, tegn og signal, rundkjÃ¸ring med ett vs. to felt, hÃ¸yre vs. venstre vs. rett frem](/blogs/teori/vikeplikt-og-rundkjoringer "RundkjÃ¸ringer: Vikeplikt, tegn og signal, rundkjÃ¸ring med ett vs. to felt, hÃ¸yre vs. venstre vs. rett frem").

---

*I trafikken er det avgjÃ¸rende Ã¥ forstÃ¥ forskjellen mellom dynamiske signaler og faste tegn. God kunnskap om nÃ¥r du skal fÃ¸lge hva, gjÃ¸r deg til en tryggere og mer forutseende fÃ¸rer.*\n  </div>\n</div>