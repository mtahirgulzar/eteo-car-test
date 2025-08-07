---
title: "EU-kontroll (PKK) – Periodisk kjøretøykontroll i Norge"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Alt du trenger å vite om EU-kontroll (PKK): lovkrav, intervaller, hva som sjekkes, kostnader og konsekvenser."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/eu-kontroll/eu-kontroll-image.svg"
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
    <img src="/images/blog/eu-kontroll/eu-kontroll-image.svg" alt="EU-kontroll (PKK) – Periodisk kjøretøykontroll i Norge" class="img-fluid rounded">
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
    

**EU-kontroll**, ogsÃ¥ kjent som **Periodisk kjÃ¸retÃ¸ykontroll (PKK)**, er en lovpÃ¥lagt inspeksjon som skal sikre at ditt kjÃ¸retÃ¸y oppfyller kravene til **forskriftsmessig stand** og er trygt pÃ¥ veien. I denne artikkelen gÃ¥r vi gjennom alt du trenger Ã¥ vite om EU-kontroll i Norge.

Vi dekker:

* Hva EU-kontroll (PKK) er og hvorfor det er viktig
* Lovgrunnlag og regelverk
* Intervaller og frister for kontroll
* Hva som sjekkes under kontrollen
* Steg for steg: Hvordan forberede og gjennomfÃ¸re kontrollen
* Kostnader, booking og praktisk informasjon
* Konsekvenser ved manglende eller ikke-godkjent kontroll

## Hva er EU-kontroll?

EU-kontroll, eller Periodisk kjÃ¸retÃ¸ykontroll (PKK), er en systematisk og grundig teknisk inspeksjon utfÃ¸rt av godkjente verksteder og stasjoner. FormÃ¥let er Ã¥ sikre at kjÃ¸retÃ¸yet ditt er **teknisk forsvarlig** og oppfyller kravene i gjeldende lover og forskrifter.

For daglig teknisk sjekk fÃ¸r kjÃ¸ring, se [Sikkerhetssjekk (teknisk bil)](/blogs/teori/sikkerhetssjekk-teknisk-bil "Sikkerhetssjekk (teknisk bil) - Daglig teknisk sjekk fÃ¸r kjÃ¸ring").

## Lovgrunnlag

| Regulering                         | Fokus                  | Beskrivelse                             |
|------------------------------------|------------------------|-----------------------------------------|
| Vegtrafikkloven Â§â€¯13               | Forsvarlig stand       | FÃ¸rerens ansvar for teknisk sikkerhet   |
| KjÃ¸retÃ¸yforskriften kap.â€¯2         | Forskriftsmessig stand | Tekniske krav til deler og utstyr       |
| KjÃ¸retÃ¸yforskriften kap.â€¯10        | EU-kontroll            | [EU-kontroll (PKK)](/blogs/teori/eu-kontroll "EU-kontroll (PKK) â€“ Periodisk kjÃ¸retÃ¸ykontroll i Norge") |

Se ogsÃ¥ [Forskriftsmessig og forsvarlig stand](/blogs/teori/forskriftsmessig-og-forsvarlig-stand "Forskriftsmessig og forsvarlig stand - Overordnet guide til lovpÃ¥lagt stand").

## Intervaller og frister

| KjÃ¸retÃ¸ytype           | FÃ¸rste kontroll      | Deretter                             |
|------------------------|----------------------|---------------------------------------|
| Personbil (klasse B)   | 4 Ã¥r etter fÃ¸rstegangsregistrering | Hver 2. Ã¥r                     |
| Varebil opptil 3,5 t   | 4 Ã¥r etter fÃ¸rstegangsregistrering | Hver 2. Ã¥r                     |
| Lastebil over 3,5 t    | 1 Ã¥r etter fÃ¸rstegangsregistrering | Ã…rlig                         |
| Buss                   | 1 Ã¥r etter fÃ¸rstegangsregistrering | Ã…rlig                         |

## Hva sjekkes? (Kontrollpunkter)

| System                | Hva kontrolleres                                                |
|-----------------------|-----------------------------------------------------------------|
| **Bremsesystem**      | Bremser, bremserÃ¸r, bremseklosser og bremsevÃ¦ske                |
| **Styring og oppheng**| StyremanÃ¸ver, fjÃ¦ring, hjulleger og ledd                        |
| **Lys og signaler**   | NÃ¦rlys, fjernlys, blinklys, bremselys og refleks                |
| **Dekk og hjul**      | Slitasje, dekkmÃ¸nster, lufttrykk og felger                      |
| **Karosseri**         | Rust, sprekker, skader og skjÃ¸ter                               |
| **Avgass og stÃ¸y**    | Eksosanlegg, katalysator, lydnivÃ¥                               |
| **Sikkerhetsutstyr**  | Bilbelte, airbag, varseltrekant og refleksvest                  |

## Slik foregÃ¥r kontrollen

1. **Bestille time** hos Statens vegvesen eller godkjent verksted.
2. **Forberedelse**: Sikre ren bil, fjerne lÃ¸se gjenstander og gjennomfÃ¸re daglig sikkerhetssjekk.
3. **GjennomfÃ¸ring**: Teknisk inspeksjon i verksted eller kontrollstasjon.
4. **Utsendelse av rapport** med eventuelle avvik og frister for utbedring.
5. **Godkjenning** eller **etterkontroll** hvis du har avvik.

## Kostnader og praktisk informasjon

* **Pris**: 800â€“1â€¯200 kr for personbil, avhengig av verksted.
* **Booking**: Online via [Statens vegvesen](https://www.vegvesen.no).
* **Gyldighet**: Gyldig frem til neste frist angitt i vognkortet.
* **Dokumentasjon**: Ta med vognkort del 1 (registreringsbevis).

## Konsekvenser ved manglende godkjenning

- **Bot** ved kontroll pÃ¥ vei eller trafikkstasjon
- **KjÃ¸reforbud** til mangler er utbedret
- **Ulykkerisiko** Ã¸ker ved ikke-godkjent kjÃ¸retÃ¸y
- **Forsikringsavslag** ved ulykker forÃ¥rsaket av teknisk svikt

## Relaterte artikler

- [Forskriftsmessig og forsvarlig stand](/blogs/teori/forskriftsmessig-og-forsvarlig-stand "Forskriftsmessig og forsvarlig stand - Overordnet guide til lovpÃ¥lagt stand")
- [Sikkerhetssjekk (teknisk bil)](/blogs/teori/sikkerhetssjekk-teknisk-bil "Sikkerhetssjekk (teknisk bil) - Daglig teknisk sjekk fÃ¸r kjÃ¸ring")
- [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter")
- [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")\n  </div>\n</div>