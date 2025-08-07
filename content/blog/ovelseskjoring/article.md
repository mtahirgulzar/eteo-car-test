---
title: "Øvelseskjøring (krav til ledsager, bilen m.m)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Alt du trenger å vite om privat øvelseskjøring i Norge: krav til ledsager, krav til bil, merking og praktiske råd."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/ovelseskjoring/ovelseskjoring-image.svg"
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
    <img src="/images/blog/ovelseskjoring/ovelseskjoring-image.svg" alt="Øvelseskjøring (krav til ledsager, bilen m.m)" class="img-fluid rounded">
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
    

**Ã˜velseskjÃ¸ring** er privat praktisk kjÃ¸retrening som du kan gjennomfÃ¸re med en kvalifisert ledsager fÃ¸r eller i tillegg til kjÃ¸reopplÃ¦ring hos kjÃ¸reskole. Private Ã¸velseskjÃ¸ringer gir ekstra erfaring, **bygger trygghet** og kan redusere kostnader ved obligatoriske kjÃ¸retimer.

## Hva er Ã¸velseskjÃ¸ring?

Ã˜velseskjÃ¸ring innebÃ¦rer at fÃ¸reren bak rattet er under veiledning av en ledsager som oppfyller kravene i regelverket. Det gir mulighet til Ã¥ Ã¸ve kontroll, trafikksituasjoner og kjÃ¸referdigheter i eget tempo.

## Krav til ledsager

| Krav             | Beskrivelse                                                       |
|------------------|-------------------------------------------------------------------|
| **Alder**        | Minst 25 Ã¥r                                                       |
| **FÃ¸rerkort**    | Klasse B, minst 5 Ã¥rs erfaring som innehaver                     |
| **Medlemsskap**  | Ingen krav til kjÃ¸reskolemedlemskap for privat ledsager          |
| **NÃ¸kkelklar**   | Ingen utestÃ¥ende fÃ¸rerkortanmerkninger eller inndragelser        |

## Krav til bil

| Krav                     | Beskrivelse                                                       |
|--------------------------|-------------------------------------------------------------------|
| **EU-godkjent kjÃ¸retÃ¸y** | Gyldig periodisk kjÃ¸retÃ¸ykontroll (EU-kontroll)                  |
| **Forsikring**          | Gyldig ansvarsforsikring, eventuelt Ã¸velseskjÃ¸ringstillegg       |
| **L-skilting**          | PÃ¥krevd merkeskilt for Ã¸velseskjÃ¸ring                             |
| **Tekniske krav**       | Dekk, lys og bremser i forskriftsmessig stand                     |

## Hvor og nÃ¥r kan du Ã¸velseskjÃ¸re?

* Ã˜velseskjÃ¸ring er tillatt pÃ¥ offentlig vei etter gjennomfÃ¸rt [trafikalt grunnkurs](/blogs/teori/trafikalt-grunnkurs "Trafikalt grunnkurs - Obligatorisk kurs for fÃ¸rerkort klasse B").
* For de som er 17 Ã¥r, gjelder **17-Ã¥rsordningen** under de samme vilkÃ¥r.
* Ingen Ã¸vre grense for antall Ã¸velsestimer hos privat ledsager.

## Merking av bilen

FÃ¸lgende utstyr og merking pÃ¥ kjÃ¸retÃ¸yet er **pÃ¥krevd**:

* **L-skilt** foran og bak
* **Refleksvest** lett tilgjengelig i bilen
* **Godt synlig** kjÃ¸reskolelogo hvis aktuelt

## Dokumentasjon og loggfÃ¸ring

Det anbefales Ã¥ fÃ¸re en **kjÃ¸relogg** over Ã¸velseskjÃ¸ringer:

| Post            | Eksempel                                                          |
|-----------------|-------------------------------------------------------------------|
| Dato            | 14. mai 2023                                                      |
| Varighet (min)  | 90                                                                |
| Sted            | Landvei / BykjÃ¸ring                                               |
| Tema            | Svingteknikk, rygging, avstand                                        |
| Kommentar       | Fokus pÃ¥ vikeplikt og plassering                                   |

En slik loggbok gir god oversikt over progresjon og kan brukes til refleksjon.

## Tips for effektiv Ã¸velseskjÃ¸ring

1. **Planlegg ruten** â€“ varier mellom by, landeveg og parkering.
2. **Sett klare mÃ¥l** for hver Ã¸velse (for eksempel rundkjÃ¸ringer eller rygging).
3. **Samle feedback** etter kjÃ¸ring â€“ bruk notater eller video.
4. **Ã˜v jevnlig** â€“ korte og hyppige Ã¸kter gir bedre lÃ¦ring.

## Relaterte artikler
- [Hvem har ansvar under Ã¸velseskjÃ¸ring](/blogs/teori/hvem-har-ansvar-under-ovelseskjoring "Hvem har ansvar under Ã¸velseskjÃ¸ring (lÃ¥n, forsvarlig stand, forskriftsmessig stand m.m)")
- [Trafikalt grunnkurs](/blogs/teori/trafikalt-grunnkurs "Trafikalt grunnkurs - Obligatorisk kurs for fÃ¸rerkort klasse B")
- [Forerkortklasser (oversikt)](/blogs/teori/forerkortklasser-oversikt "FÃ¸rerkortklasser (oversikt): Oversikt over alle fÃ¸rerkortklasser i Norge")
- [OppkjÃ¸ring](/blogs/teori/oppkjoring "OppkjÃ¸ring - Guide til praktisk kjÃ¸reprÃ¸ve for fÃ¸rerkort i bil")
- [Forerkort, vognkort og forsikring](/blogs/teori/forerkort-vognkort-og-forsikring "FÃ¸rerkort, vognkort og forsikring - NÃ¸dvendige dokumenter for lovlig kjÃ¸ring")

## Oppsummering

**Ã˜velseskjÃ¸ring** med privat ledsager er en **kostnadseffektiv** og **lÃ¦ringsrik** mÃ¥te Ã¥ forbedre kjÃ¸referdighetene pÃ¥. Ved Ã¥ fÃ¸lge regelverket for ledsager, bil, merking og dokumentasjon, legger du et solid grunnlag for trygg og sikker kjÃ¸ring.\n  </div>\n</div>