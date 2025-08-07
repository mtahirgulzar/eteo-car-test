---
title: "Vognkort, oversikt over alle felter"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær alt om feltene i vognkortet. Få en detaljert oversikt over tekniske data og eierinformasjon i del 1 og del 2 av registreringsbeviset."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/vognkort-oversikt-alle-felter/vognkort-oversikt-alle-felter-image.svg"
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
    <img src="/images/blog/vognkort-oversikt-alle-felter/vognkort-oversikt-alle-felter-image.svg" alt="Vognkort, oversikt over alle felter" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
Vognkortet, ogsÃ¥ kalt *registreringsbevis*, inneholder **kritisk informasjon** om kjÃ¸retÃ¸yet og eierforhold. Denne guiden gir en **oversikt over alle feltene** i bÃ¥de delÂ 1 og delÂ 2 av vognkortet.


        
        
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
    

## DelÂ 1: Tekniske data

Tabellen under beskriver de viktigste feltene i delÂ 1 av vognkortet:

| Felt   | Beskrivelse                                                         |
|--------|---------------------------------------------------------------------|
| **A**  | Godkjenningsnummer fra typegodkjenning                              |
| **B**  | Registreringsnummer (bilens kjennetegn)                             |
| **C1** | Tillatt totalvekt (bil med tilhenger)                               |
| **C2** | Tillatt totalvekt (bil alene)                                       |
| **F1** | Egenvekt (inkludert fÃ¸rer og nÃ¸dvendige kjÃ¸retÃ¸ykomponenter)        |
| **F2** | Maks tilhengervekt med brems                                        |
| **F3** | Maks tilhengervekt uten brems                                       |
| **H1** | FÃ¸rste aksels maksimale akseltrykk                                  |
| **H2** | Andre aksels maksimale akseltrykk                                   |
| **P.1**| Netto motoreffekt (kW)                                              |

## DelÂ 2: Eierinformasjon

DelÂ 2 viser hvem som eier kjÃ¸retÃ¸yet, samt historikk over registreringer og endringer:

| Felt | Beskrivelse                                       |
|------|---------------------------------------------------|
| **1**| Eierens navn                                      |
| **2**| Eierens adresse                                   |
| **3**| Postnummer og sted                                 |
| **4**| Land                                              |
| **5**| Telefonnummer til eier                            |
| **6**| Tidligere eiere og endringer (pÃ¥tegninger)        |

## Ekstra informasjon og lenker

For krav til vognkort ved kjÃ¸ring med tilhenger, se [Bil og tilhenger, vognkort og koblingslast](/blogs/teori/bil-og-tilhenger-vognkort-koblingslast "Bil og tilhenger, vognkort og koblingslast").

For en generell oversikt over dokumenter du mÃ¥ ha, inkludert fÃ¸rerkort og forsikring, se [FÃ¸rerkort, vognkort og forsikring](/blogs/teori/forerkort-vognkort-og-forsikring "FÃ¸rerkort, vognkort og forsikring").

_Denne guiden hjelper deg Ã¥ tolke alle feltene i vognkortet og sikre at du har korrekt informasjon tilgjengelig nÃ¥r det gjelder tekniske data og eierforhold._\n  </div>\n</div>