---
title: "Sporvogn i trafikken – Lys og regler"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om trikkens signallys, regler og vikeplikt i trafikken. En komplett guide til å samhandle med sporvogn i bytrafikk."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/sporvogn-i-trafikken/sporvogn-i-trafikken-image.svg"
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
    <img src="/images/blog/sporvogn-i-trafikken/sporvogn-i-trafikken-image.svg" alt="Sporvogn i trafikken – Lys og regler" class="img-fluid rounded">
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
    

**Sporvogn i trafikken â€“ Lys og regler** omhandler de viktigste **signalene** og **reglene** rundt trikker i det norske trafikksystemet. I denne artikkelen fÃ¥r du en grundig oversikt over hvordan trikken kommuniserer med andre trafikanter via lys, signaler og vikeplikt.

*For oversikt over faste lys- og signalanlegg generelt, se [Trafikksystemet (lys)](/blogs/teori/trafikksystemet-lys "Trafikksystemet (lys) - Trafikklys og signalanlegg").*
*For regler om prioritering av spesielle kjÃ¸retÃ¸y, se [Trafikkregler for spesielle kjÃ¸retÃ¸y](/blogs/teori/trafikkregler-for-spesielle-kjoretoy "Trafikkregler for spesielle kjÃ¸retÃ¸y - Prioritering og vikeplikt").*

## Sporvognens signaler og lys

Trikker benytter flere **signallys** for Ã¥ kommunisere med andre trafikanter. Tabellen under viser de vanligste lysene og hva de betyr:

| Lys / signal    | Farge         | Betydning                             |
|-----------------|---------------|---------------------------------------|
| **KjÃ¸rsignal**  | GrÃ¸nt blink   | Trikken starter og kjÃ¸rer avgÃ¥rde     |
| **Stopplys**    | RÃ¸dt fast lys | Trikken stanser eller stÃ¥r i stopp    |
| **Blinklys**    | Gult blink    | Trikken vil skifte spor eller retning |
| **HÃ¸yresignal** | Hvitt blink  | Trikken svinger til hÃ¸yre             |
| **Vognsignal**  | BlÃ¥tt fast lys| Viktig varsel for fotgjengere        |

## Regler og vikeplikt

Som bilfÃ¸rer mÃ¥ du vÃ¦re oppmerksom pÃ¥ trikkens sÃ¦rskilte plass i trafikken:

* **Vikeplikt**: Trikken har vikepliktregler som kan avvike fra vanlige kryss. Se [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjÃ¸ringer "Vikeplikt og rundkjÃ¸ringer - HÃ¸yreregel og rundkjÃ¸ringer") for detaljer.
* **Kollektivfelt**: Trikken kjÃ¸rer i egne sporfelt. UnngÃ¥ Ã¥ kjÃ¸re eller stoppe i trikkens spor.
* **Inn- og utstigning**: Passasjerer gÃ¥r av og pÃ¥ trikken ved holdeplasser. VÃ¦r ekstra oppmerksom nÃ¥r du passerer holdeplasser.
* **Avstand**: Hold god avstand bak trikken. Trikker kan starte og stoppe raskt.
* **Sporovergang**: Ved kryssing av trikkeskinner, kutt gassen og unngÃ¥ plutselige svinger.

## Vanlige faresituasjoner

1. Trikk som stanser uventet ved holdeplass.
2. Fotgjengere som krysser skinnene foran trikken.
3. BilfÃ¸rer som feilaktig tror trikken tar vikeplikt.
4. Ujevnheter ved sporoverganger, sÃ¦rlig ved regnvÃ¦r eller is.

## Illustrasjon av trikkens signaloversikt


        
        
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
    

## Se ogsÃ¥

* [BykjÃ¸ring](/blogs/teori/bykjoring "BykjÃ¸ring - Viktige regler i urbane omrÃ¥der")
* [Kommunikasjon med andre trafikanter](/blogs/teori/kommunikasjon-med-andre-trafikanter "Kommunikasjon med andre trafikanter - Hvordan signalisere tydelig")
* [ForbikjÃ¸ring og feltskifte](/blogs/teori/forbikjoring-og-feltskifte "ForbikjÃ¸ring og feltskifte - Guide til trygg forbikjÃ¸ring")
* [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter")\n  </div>\n</div>