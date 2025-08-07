---
title: "Store kjøretøy i trafikken (Gi plass)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hvordan du trygt gir plass til store kjøretøy som lastebil og buss. Viktige teknikker og anbefalte avstander for trygg kjøring."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/store-kjoretoy-gi-plass/store-kjoretoy-gi-plass-image.svg"
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
    <img src="/images/blog/store-kjoretoy-gi-plass/store-kjoretoy-gi-plass-image.svg" alt="Store kjøretøy i trafikken (Gi plass)" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
**Store kjÃ¸retÃ¸y i trafikken (Gi plass)** handler om hvordan du som bilfÃ¸rer kan sikre trygghet og god trafikkflyt ved mÃ¸te og forbikjÃ¸ring av store kjÃ¸retÃ¸y som lastebil og buss.

*For rÃ¥d om generell plassering og kjÃ¸remÃ¥te, se [Plassering og kjÃ¸remÃ¥te](/blogs/teori/plassering-og-kjoremmate "Plassering og kjÃ¸remÃ¥te - Guide til riktig plassering i veibanen").*
*For teknikker for sikker forbikjÃ¸ring, se [ForbikjÃ¸ring og feltskifte](/blogs/teori/forbikjoring-og-feltskifte "ForbikjÃ¸ring og feltskifte - Komplett guide til sikker forbikjÃ¸ring og feltskifte").*
*For en defensiv tilnÃ¦rming, se [Defensiv kjÃ¸ring](/blogs/teori/defensiv-kjoring "Defensiv kjÃ¸ring - Prinsipper og teknikker for trygg kjÃ¸ring").*


        
        
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
    

## Hvorfor gi plass til store kjÃ¸retÃ¸y?

Store kjÃ¸retÃ¸y har **stÃ¸rre blindsoner**, **lengre bremselengde** og kan **skape turbulens** som pÃ¥virker mindre kjÃ¸retÃ¸y. Ã… gi riktig avstand reduserer risiko for ulykker og sÃ¸rger for god trafikkflyt.

## Anbefalte avstander og marginer

| KjÃ¸retÃ¸ytype           | Min. sideavstand | Min. fÃ¸lgeavstand bak |
|------------------------|------------------|-----------------------|
| **Lastebil/Buss**      | 1,5â€¯m             | 3â€¯sekunder            |
| **Tilhenger**          | 1â€¯m              | 2â€¯sekunder            |
| **Annet stort kjÃ¸retÃ¸y** | 1,2â€¯m           | 2,5â€¯sekunder          |

## Praktiske tips

* **Forutse svinger og manÃ¸vrer** â€“ store kjÃ¸retÃ¸y trenger mer plass til sving og filskifte.
* **Hold deg synlig** â€“ unngÃ¥ Ã¥ ligge i blindsonene, sÃ¦rlig pÃ¥ hÃ¸yre side.
* **Reduser hastigheten** i god tid fÃ¸r forbikjÃ¸ring.
* **UnngÃ¥ plutselige giring** og styringsbevegelser ved turbulens.
* **VÃ¦r tÃ¥lmodig** â€“ store kjÃ¸retÃ¸y kan vÃ¦re trege ved akselerasjon og brems.

## Sjekkliste fÃ¸r forbikjÃ¸ring av stort kjÃ¸retÃ¸y

* Er **sikt** god nok â€“ ser du hele kjÃ¸retÃ¸yet i speilet?
* Har du tilstrekkelig **fÃ¸lgeavstand** bak?
* Er det **plass** i vegen ved forbikjÃ¸ringspunktet?
* Har du kontroll pÃ¥ eventuelle **mÃ¸te** eller **kryssende trafikanter**?
* Er det ingen **tett gruppe syklister eller fotgjengere** i nÃ¦rheten?

Ved Ã¥ gi tilstrekkelig **plass** til store kjÃ¸retÃ¸y bidrar du til et tryggere og mer forutsigbart trafikksystem.\n  </div>\n</div>