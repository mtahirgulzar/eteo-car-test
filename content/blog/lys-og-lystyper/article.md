---
title: "Lys og lystyper - Oversikt over bilens lystemer"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En detaljert guide til bilens lystyper, inkludert kjørelys, nærlys, fjernlys, tåkelys, retningslys og mer."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/lys-og-lystyper/lys-og-lystyper-image.svg"
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
    <img src="/images/blog/lys-og-lystyper/lys-og-lystyper-image.svg" alt="Lys og lystyper - Oversikt over bilens lystemer" class="img-fluid rounded">
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
    

**Lys og lystyper** i bilen er essensielt for bÃ¥de Ã¥ se og bli sett. I denne guiden fÃ¥r du en oversikt over de viktigste lystypene, deres funksjon, bruk og lovkrav.

*For praktisk bruk av lys og signaler, se ogsÃ¥ [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Praktisk guide til lysbruk og varsling").*

## Oversikt over lystyper

| Lystype                    | Funksjon                                             | BruksomrÃ¥de                                          |
|----------------------------|------------------------------------------------------|------------------------------------------------------|
| **KjÃ¸relys (dagkjÃ¸relys)** | Ã˜ker synlighet pÃ¥ dagtid                             | Alltid pÃ¥ dagtid, automatisk pÃ¥ nyere biler         |
| **NÃ¦rlys**                 | Belyser veien uten Ã¥ blende mÃ¸tende trafikk         | MÃ¸rketid, skumring og dÃ¥rlig sikt                    |
| **Fjernlys**               | Lang rekkevidde for maksimal sikt                   | MÃ¸rke veier uten mÃ¸tende eller forankjÃ¸rende trafikk |
| **Kurvelys**               | SvÃ¦rt retningsbestemt lys som fÃ¸lger rattutslag      | Kurver og svinger, Ã¸ker sikt i sving                 |
| **TÃ¥kelys**                | Bredt og lavt lysbilde for tÃ¥ke og kraftig regn      | TÃ¥ke, snÃ¸ eller regn med sikt under 50 meter         |
| **Retningslys (blinklys)** | Signal for planlagt retning eller filskifte         | FÃ¸r sving, filskifte, inn-/utkjÃ¸ring                  |
| **NÃ¸dsignallys (nÃ¸dblink)** | Samtidig blink av alle retningslys                  | NÃ¸dstopp eller farevarsling                          |
| **NÃ¸dstopplys**            | Sterkt lys ved stans i kjÃ¸rebane                     | Ved stopp pÃ¥ eller nÃ¦r kjÃ¸rebanen                    |
| **Bremselys**              | Varsler nedbremsing med sterkere baklys             | Ved bruk av bremser                                   |
| **Baklys**                 | GjÃ¸r kjÃ¸retÃ¸y synlig bakfra                          | NÃ¥r frontlys eller kjÃ¸relys er pÃ¥                     |
| **Parkeringslys**          | Svakt lys for parkert kjÃ¸retÃ¸y                       | Parkering langs vei uten Ã¥ belaste batteri           |
| **Skiltlys**               | Belyser registreringsskiltet                         | NÃ¥r baklys er pÃ¥                                      |
| **Ryggelys**               | Hvitt lys for bakoverkjÃ¸ring                         | Ved innkoblet revers                                  |

## Lovkrav og forskrifter

Se detaljerte krav i [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Trafikkregler og krav") og [KjÃ¸retÃ¸yforskriften](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Trafikkregler og krav") for spesifikke regler og sanksjoner.

## Hvordan velge riktig lys

Enkel veiledning for riktig lysvalg:

* **Dagtid**: Bruk kjÃ¸relys/dagkjÃ¸relys for Ã¸kt synlighet.
* **Natt/dÃ¥rlig sikt**: Velg nÃ¦rlys eller fjernlys etter trafikk.
* **Ved tÃ¥ke eller kraftig regn**: Bruk tÃ¥kelys, aldri fjernlys.
* **Kurver**: AktivÃ©r kurvelys eller adaptive lys.
* **Parkering**: Aktiver parkeringslys ved behov.

## Se ogsÃ¥

* [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Praktisk guide til lysbruk og varsling")
* [KjÃ¸ring i mÃ¸rket](/blogs/teori/kjoring-i-morket "KjÃ¸ring i mÃ¸rket - Komplett guide til trygg nattkjÃ¸ring")
* [KjÃ¸ring under vanskelige forhold](/blogs/teori/kjoring-under-vanskelige-forhold "KjÃ¸ring under vanskelige forhold")
* [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")\n  </div>\n</div>