---
title: "Hvem har ansvar under øvelseskjøring (lån, forsvarlig stand, forskriftsmessig stand m.m)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hvem som har ansvar under privat øvelseskjøring i Norge: lån av bil, forsvarlig og forskriftsmessig stand, og juridiske krav."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/hvem-har-ansvar-under-ovelseskjoring/hvem-har-ansvar-under-ovelseskjoring-image.svg"
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
    <img src="/images/blog/hvem-har-ansvar-under-ovelseskjoring/hvem-har-ansvar-under-ovelseskjoring-image.svg" alt="Hvem har ansvar under øvelseskjøring (lån, forsvarlig stand, forskriftsmessig stand m.m)" class="img-fluid rounded">
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
    

I denne artikkelen ser vi pÃ¥ **ansvaret** nÃ¥r du _Ã¸velseskjÃ¸rer_, bÃ¥de for fÃ¸rer, eier og ledsager, samt krav til kjÃ¸retÃ¸yets tilstand. Dette er en naturlig oppfÃ¸lger til [Ã˜velseskjÃ¸ring](/blogs/teori/ovelseskjoring "Ã˜velseskjÃ¸ring (krav til ledsager, bilen m.m)") og [Forskriftsmessig og forsvarlig stand](/blogs/teori/forskriftsmessig-og-forsvarlig-stand "Forskriftsmessig og forsvarlig stand - Lover og praktiske sjekklister").

## Hvorfor ansvar er viktig

*Ã˜velseskjÃ¸ring* handler ikke bare om praktisk Ã¸velse, men ogsÃ¥ om at alle parter forstÃ¥r sitt **juridiske og praktiske ansvar**. Rett ansvarsfordeling bidrar til trygghet og reduserer risikoen for konflikter og ulykker.

## Lovgrunnlag og forskrifter

| Regelverk                        | OmrÃ¥de                         | Kort beskrivelse                                           |
|----------------------------------|--------------------------------|------------------------------------------------------------|
| Vegtrafikkloven Â§â€¯13             | Forsvarlig stand               | Eier og fÃ¸rer har plikt til forsvarlig og sikker bruk      |
| KjÃ¸retÃ¸yforskriften kap.â€¯2       | Forskriftsmessig stand         | Tekniske krav til kjÃ¸retÃ¸yets deler og utstyr              |
| Forskrift om Ã¸velseskjÃ¸ring Â§â€¯4   | Ansvar ved Ã¸velseskjÃ¸ring      | Spesifiserer ansvar for lÃ¥nt kjÃ¸retÃ¸y og ledsager          |

Se ogsÃ¥ [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Vegtrafikkloven og tilhÃ¸rende forskrifter").

## Ansvaret til eier og lÃ¥ntaker

| Rolle        | Hovedansvar                                          | Kommentar                                                                              |
|--------------|------------------------------------------------------|----------------------------------------------------------------------------------------|
| **Eier**     | Sikre at bilen er i forsvarlig stand                 | Daglig sjekk etter [Forskriftsmessig og forsvarlig stand](/blogs/teori/forskriftsmessig-og-forsvarlig-stand "Forskriftsmessig og forsvarlig stand - Lover og praktiske sjekklister") |
| **LÃ¥ntaker** | FÃ¸lge eierens instrukser og kjÃ¸re trygt              | LÃ¥n innebÃ¦rer aksept av eierens ansvar for stand, men fÃ¸rer har selvstendig ansvar for sikker kjÃ¸ring |
| **Forsikring**| Ha gyldig forsikring for Ã¸velseskjÃ¸ring              | Se [FÃ¸rerkort, vognkort og forsikring](/blogs/teori/forerkort-vognkort-og-forsikring "FÃ¸rerkort, vognkort og forsikring - NÃ¸dvendige dokumenter for lovlig kjÃ¸ring") |

## Ansvaret til ledsager

Ledsageren har i tillegg ansvar for at Ã¸velseskjÃ¸ringen skjer forsvarlig:

* **Veiledning** under kjÃ¸ring i samsvar med [Ã˜velseskjÃ¸ring](/blogs/teori/ovelseskjoring "Ã˜velseskjÃ¸ring (krav til ledsager, bilen m.m)")-reglene.
* **FÃ¸lge opp** fÃ¸rerens observasjon av trafikk, sikkerhetsavstand og bilens tilstand.
* **Intervenere** ved kritiske situasjoner for Ã¥ unngÃ¥ ulykker.

## Praktiske eksempler

| Scenario                           | Ansvarlige roller        | Kommentar                                           |
|------------------------------------|--------------------------|-----------------------------------------------------|
| Bil lÃ¥nt av foreldre til Ã¸velseskjÃ¸ring | Foreldre (eier)       | MÃ¥ sÃ¸rge for at bilen er EU-godkjent og forsvarlig  |
| Ã˜velseskjÃ¸ring i regnvÃ¦r           | FÃ¸rer                    | Justere hastighet og avstand ut fra forholdene      |
| Feil ved lys under kjÃ¸ring         | Eier ved sjekk fÃ¸r kjÃ¸ring| FÃ¸rer bÃ¸r avbryte Ã¸velseskjÃ¸ring og rette feilen     |

## Oppsummering

**Ansvarsfordeling** under Ã¸velseskjÃ¸ring handler om klarhet i eierens, lÃ¥ntakerens og ledsagerens roller, samt at bilen er i bÃ¥de forsvarlig og forskriftsmessig stand. Ved Ã¥ kjenne og fÃ¸lge disse kravene skaper du et trygt lÃ¦ringsmiljÃ¸.

## Relaterte artikler

- [Ã˜velseskjÃ¸ring](/blogs/teori/ovelseskjoring "Ã˜velseskjÃ¸ring (krav til ledsager, bilen m.m)")
- [Forskriftsmessig og forsvarlig stand](/blogs/teori/forskriftsmessig-og-forsvarlig-stand "Forskriftsmessig og forsvarlig stand - Lover og praktiske sjekklister")
- [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Vegtrafikkloven og tilhÃ¸rende forskrifter")
- [FÃ¸rerkort, vognkort og forsikring](/blogs/teori/forerkort-vognkort-og-forsikring "FÃ¸rerkort, vognkort og forsikring - NÃ¸dvendige dokumenter for lovlig kjÃ¸ring")\n  </div>\n</div>