---
title: "Bremsesystemet (bremsekretser, bremsevæske m.m)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En grundig guide til bilens bremsesystem, inkludert hydrauliske kretser, bremsevæske, bremsekomponenter og vedlikehold for teoriprøven i bil Klasse B."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/bremsesystemet/bremsesystemet-image.svg"
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
    <img src="/images/blog/bremsesystemet/bremsesystemet-image.svg" alt="Bremsesystemet (bremsekretser, bremsevæske m.m)" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
For et trygt kjÃ¸retÃ¸y mÃ¥ **bremsesystemet** fungere optimalt under alle forhold. I denne artikkelen gÃ¥r vi i dybden pÃ¥ **hydrauliske kretser**, **bremsevÃ¦ske**, **komponenter** og **vedlikehold** av bremsesystemet.


        
        
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
    

## Oversikt over bremsesystemet

Bremsesystemet i moderne biler kombinerer _hydraulikk_ og _elektronikk_ for Ã¥ sikre jevn og pÃ¥litelig stoppkraft. Systemet er delt inn i separate kretser, bruker spesialisert vÃ¦ske og flere mekaniske komponenter for Ã¥ overfÃ¸re kraft fra fÃ¸rerens fot til hjulene.

## Bremsekretser

Bildet under viser hovedkrets og hjelpeskrets koblet til bremsevÃ¦skeresevoaret:


        
        
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
    

| Krets         | Funksjon                                                     |
|---------------|--------------------------------------------------------------|
| **Hovedkrets**   | OverfÃ¸rer trykk til to hjul (vanligvis foran)                |
| **Hjelpeskrets** | OverfÃ¸rer trykk til de to andre hjul (vanligvis bak)         |
| **Resevoar**     | Lager bremsevÃ¦ske og kompenserer for slitasje               |

## BremsevÃ¦ske

BremsevÃ¦ske er avgjÃ¸rende for Ã¥ overfÃ¸re hydraulisk trykk uten komprimering. Riktig type vÃ¦ske og vedlikehold av kvaliteten er essensielt for sikkerheten.


        
        
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
    

| Type       | Kokepunkt (tÃ¸rt/vÃ¥tt) | Egenskaper                  |
|------------|-----------------------|-----------------------------|
| **DOT 3**  | 205â€¯Â°C / 140â€¯Â°C        | Vanlig pÃ¥ eldre kjÃ¸retÃ¸y    |
| **DOT 4**  | 230â€¯Â°C / 155â€¯Â°C        | HÃ¸yere kokepunkt, standard  |
| **DOT 5.1**| 260â€¯Â°C / 180â€¯Â°C        | For krevende bruk og racing |

## Hovedkomponenter

De viktigste mekaniske delene i et bremsesystem er:

* **Bremseklosser** â€“ skaper friksjon mot skiven eller trommelen
* **Bremseskiver/tromler** â€“ mottar friksjonen og bremser hjulrotasjonen
* **BremserÃ¸r/slanger** â€“ leder bremsevÃ¦ske til hjulene
* [**ABS-sensorer**](/blogs/teori/abs-antiblokkeringssystem "ABS (Antiblokkeringssystem)") â€“ overvÃ¥ker hjulhastighet og forhindrer lÃ¥sing

## Vedlikehold og kontroll

Regelmessig inspeksjon av bremsesystemet forebygger farlige situasjoner:

* **Kontroll av bremsevÃ¦skenivÃ¥** hver 12. mÃ¥ned eller ved service
* **Utskifting av bremsevÃ¦ske** minst hvert 2. Ã¥r (DOT 4) eller i henhold til produsent
* **Sjekk av bremseklosser** for minstykkelse (min. 2â€“3â€¯mm)
* **Inspeksjon av bremseskiver/tromler** for deformasjon og slitasje

## FeilsÃ¸king vanlige problemer

* **Myk bremsepedal** â€“ kan indikere luft i systemet eller lavt vÃ¦skenivÃ¥
* **Skrikende lyder** â€“ slitte klosser eller fremmedlegemer
* **Vibrasjon i ratt eller pedal** â€“ deformerte skiver
* **Varsellampe for bremsesystem** â€“ fÃ¸lg alltid opp feilkode eller varsel

## Viktige begreper for teoriprÃ¸ven

* **Hydraulisk krets** â€“ system der trykk overfÃ¸res i vÃ¦ske
* **Kokepunkt** â€“ avgjÃ¸r risiko for dampblokkering ved hÃ¸y belastning
* [**ABS** (Antiblokkeringssystem)](/blogs/teori/abs-antiblokkeringssystem "ABS (Antiblokkeringssystem)") â€“ bevarer styrekontroll ved bremsing

## Videre lesning

* [Bilens tekniske deler](/blogs/teori/bilens-tekniske-deler "Bilens tekniske deler - En oversikt over bilens hovedkomponenter")
* [Reaksjonstid og bremselengde](/blogs/teori/reaksjonstid-og-bremselengde "Reaksjonstid og bremselengde - Stoppeavstand og reaksjonstid")
* [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")
* [Fordeling av bremsekraft og skjevtrekk](/blogs/teori/fordeling-av-bremsekraft-og-skjevtrekk "Fordeling av bremsekraft og skjevtrekk")
* [Fotbrems og parkeringsbrems](/blogs/teori/fotbrems-og-parkeringsbrems "Fotbrems og parkeringsbrems - Servicebrems og parkeringsbrems")
* [Bremsefeil](/blogs/teori/bremsefeil "Bremsefeil - Vanlige feil i bremsesystemet")

***\n  </div>\n</div>