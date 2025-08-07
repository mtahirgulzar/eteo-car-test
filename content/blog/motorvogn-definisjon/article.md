---
title: "Motorvogn (definisjon)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hva som kjennetegner en motorvogn, definisjon, klassifisering og lovgrunnlag i norsk trafikkregelverk."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/motorvogn-definisjon/motorvogn-definisjon-image.svg"
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
    <img src="/images/blog/motorvogn-definisjon/motorvogn-definisjon-image.svg" alt="Motorvogn (definisjon)" class="img-fluid rounded">
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
    

En **motorvogn** er i norsk trafikkregelverk definert som et kjÃ¸retÃ¸y som drives av egen motor. Denne definisjonen er sentral for fÃ¸reropplÃ¦ringen, da fremtidige sjÃ¥fÃ¸rer mÃ¥ forstÃ¥ hvilke kjÃ¸retÃ¸y som omfattes av regelverket for motorvogner.

## Definisjon i lovverket

| Kilde                       | Definisjon                                                                                  |
|-----------------------------|---------------------------------------------------------------------------------------------|
| Vegtrafikkloven Â§Â 2         | "Motorvogn er ethvert kjÃ¸retÃ¸y som er innrettet for fremkomst ved egen motor, med unntak av skinnegÃ¥ende kjÃ¸retÃ¸y." |

Se ogsÃ¥ [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter") for full oversikt over regelverket.

## Klassifisering av motorvogn

De viktigste kjÃ¸retÃ¸ygruppene som regnes som **motorvogn** i Norge er:

* Personbil (klasse B)
* Lastebil (klasse C)
* Buss (klasse D)
* Motorsykkel (klasse A)
* Traktor (klasse T)
* Motorredskap (klasse S)


        
        
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
    

For en oversikt over fÃ¸rerkortklasser, se [FÃ¸rerkortklasser (oversikt)](/blogs/teori/forerkortklasser-oversikt "FÃ¸rerkortklasser (oversikt): Oversikt over alle fÃ¸rerkortklasser i Norge").

## Hva regnes ikke som motorvogn?

FÃ¸lgende kjÃ¸retÃ¸y er **ikke** motorvogn:

* Sykler og elsykler
* TrillebÃ¥r og annet manuelt flyttbart redskap
* SkinnegÃ¥ende tog og trikk

## Hvorfor er definisjonen viktig?

ForstÃ¥else av hva som regnes som motorvogn er grunnleggende for:

* Riktig klassifisering av fÃ¸rerkort (hvilke kategorier du kan kjÃ¸re)
* Korrekt forsikring og registrering av kjÃ¸retÃ¸yet
* Kjennskap til hvilke regler som gjelder for ulike kjÃ¸retÃ¸y

Denne kunnskapen bidrar til Ã¥ gjÃ¸re deg til en **trygg og ansvarsfull sjÃ¥fÃ¸r**.\n  </div>\n</div>