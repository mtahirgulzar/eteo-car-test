---
title: "Fotbrems og parkeringsbrems"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En grundig guide til fotbrems (servicebrems) og parkeringsbrems i bil for teoriprøven Klasse B. Lær om funksjoner, bruk og vedlikehold."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/fotbrems-og-parkeringsbrems/fotbrems-og-parkeringsbrems-image.svg"
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
    <img src="/images/blog/fotbrems-og-parkeringsbrems/fotbrems-og-parkeringsbrems-image.svg" alt="Fotbrems og parkeringsbrems" class="img-fluid rounded">
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
    

For biler i Norge er **fotbrems** (ogsÃ¥ kalt *servicebrems*) og **parkeringsbrems** to grunnleggende systemer som sikrer kontrollert stopp og stabil parkering av kjÃ¸retÃ¸yet. I denne omfattende guiden ser vi pÃ¥ hvordan begge bremsene fungerer, korrekt bruk og vedlikehold.

## Oversikt

| Bremsetype          | Aktivering           | Hovedfunksjon                         |
|---------------------|----------------------|----------------------------------------|
| **Fotbrems**        | Trykk pÃ¥ bremsepedal | Bremser bilen under kjÃ¸ring            |
| **Parkeringsbrems** | Spak eller knapp     | Holder bilen stille ved parkering      |

## Hva er fotbrems?

Fotbremsen er servicebremsen som brukes under kjÃ¸ring for Ã¥ redusere hastighet eller stoppe bilen. Systemet er **hydraulisk**, og kraften fra pedalen overfÃ¸res via bremsevÃ¦ske til hjulene. For en mer detaljert forklaring av bremsesystemet, se [Bremsesystemet](/blogs/teori/bremsesystemet "Bremsesystemet (bremsekretser, bremsevÃ¦ske m.m)").

### Bruk av fotbrems

* Press jevnt pÃ¥ pedalen for gradvis nedbremsing.
* UnngÃ¥ harde rykk for passasjerkomfort og bremsesystemets levetid.
* Ved nÃ¸dbremsing, press pedalen helt ned og hold den.

## Hva er parkeringsbrems?

Parkeringsbremsen (ofte kalt hÃ¥ndbrems eller nÃ¸dbrems) er et **mekanisk** system som lÃ¥ser bakhjulene med en kabel eller elektrisk motor. Den brukes nÃ¥r bilen stÃ¥r stille, for Ã¥ hindre uÃ¸nsket bevegelse.

### Bruk av parkeringsbrems

* Dra spaken eller trykk pÃ¥ knappen til du kjenner motstand.
* Kontroller at bilen stÃ¥r sikkert fÃ¸r du slipper opp pedalen.
* FrigjÃ¸r bremsen ved Ã¥ slippe spaken eller trykke pÃ¥ knappen nÃ¥r du starter kjÃ¸ringen.

## Vedlikehold og kontroll

Regelmessig kontroll av begge bremsene er viktig for sikkerheten:

* **Sjekk** at fotbremsen gir jevn motstand uten slipp.
* **Kontroller** parkeringsbremsens gripeevne pÃ¥ flat vei.
* **Lytt** etter unormale lyder ved aktivering av parkeringsbrems.
* **FÃ¸lg** anbefalt vedlikeholdsintervall for bremsevÃ¦ske (se [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")).

## Viktige begreper for teoriprÃ¸ven

* **Servicebrems** â€“ hydraulisk bremsesystem aktivert med fotpedal.
* **Parkeringsbrems** â€“ mekanisk brems som holder bilen stille.

## Videre lesning

* [Bremsefeil](/blogs/teori/bremsefeil "Bremsefeil - Vanlige feil i bremsesystemet")
* [Fordeling av bremsekraft og skjevtrekk](/blogs/teori/fordeling-av-bremsekraft-og-skjevtrekk "Fordeling av bremsekraft og skjevtrekk")
* [Parkering for viderekomne](/blogs/teori/parkering-for-viderekomne "Parkering for viderekomne - Avanserte teknikker for sikker parkering")
* [Reaksjonstid og bremselengde](/blogs/teori/reaksjonstid-og-bremselengde "Reaksjonstid og bremselengde - Stoppeavstand og reaksjonstid")
* [Sikkerhetssjekk teknisk bil](/blogs/teori/sikkerhetssjekk-teknisk-bil "Sikkerhetssjekk teknisk bil - Rutinemessig sjekk fÃ¸r kjÃ¸ring")

***\n  </div>\n</div>