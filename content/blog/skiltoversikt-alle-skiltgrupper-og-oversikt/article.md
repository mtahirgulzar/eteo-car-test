---
title: "Skiltoversikt: Alle skiltgrupper og oversikt over alle skiltene"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En komplett oversikt over alle trafikkskiltgrupper og skiltene du må kjenne til for førerkortteori i Norge. Lær grupper, betydning, eksempler og interne lenker."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/skiltoversikt-alle-skiltgrupper-og-oversikt/skiltoversikt-alle-skiltgrupper-og-oversikt-image.svg"
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
    <img src="/images/blog/skiltoversikt-alle-skiltgrupper-og-oversikt/skiltoversikt-alle-skiltgrupper-og-oversikt-image.svg" alt="Skiltoversikt: Alle skiltgrupper og oversikt over alle skiltene" class="img-fluid rounded">
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
    

**Skiltoversikt** gir deg en komplett oversikt over alle **skiltgrupper** og alle **trafikkskiltene** du mÃ¥ kjenne til for Ã¥ bestÃ¥ **teoriprÃ¸ven** i Norge.

## Innholdsfortegnelse

1. [Skiltgruppene i det norske trafikksystemet](#skiltgruppene-i-det-norske-trafikksystemet)
2. [Oversikt over alle skiltene](#oversikt-over-alle-skiltene)
3. [Hvordan bruke oversikten](#hvordan-bruke-oversikten)
4. [Relaterte artikler](#relaterte-artikler)

## Skiltgruppene i det norske trafikksystemet

Her er en oversikt over de ti viktigste **skiltgruppene** i det norske trafikksystemet:

| Gruppe                          | Beskrivelse                                                           | Se ogsÃ¥                                                                                               |
|---------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Fareskilt**                   | Advarselsskilt som varsler om farer og hindringer                   | [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - komplett guide") |
| **Vikeplikt- og forkjÃ¸rsskilt** | Skilt som angir vikeplikt eller forkjÃ¸rsrett                         | [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier") |
| **Forbudtsskilt**               | Skilt som forbyr bestemte handlinger                                 | [Forbudsskilt eksempler](/blogs/teori/trafikkskilt-og-veimerking "Forbudsskilt eksempler")           |
| **PÃ¥budsskilt**                 | Skilt som viser hva du mÃ¥ gjÃ¸re                                      | [PÃ¥budsskilt eksempler](/blogs/teori/trafikkskilt-og-veimerking "PÃ¥budsskilt eksempler")             |
| **Opplysningsskilt**            | Skilt som gir nyttig informasjon om vei og trafikkregler            | [Opplysningsskilt eksempler](/blogs/teori/trafikkskilt-og-veimerking "Opplysningsskilt eksempler")  |
| **Serviceskilt**                | Skilt for tjenester som bensinstasjon, parkeringsplass og rasteplass | [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - komplett guide") |
| **Veivisningsskilt**            | Retningsskilt for riksvei, europavei og lokale destinasjoner         | [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - komplett guide") |
| **Fargekoder**                  | Fargenes betydning og midlertidig skilting                          | [Fargenes betydning](/blogs/teori/trafikkskilt-og-veimerking "Fargenes betydning")                   |
| **Underskilt**                  | Tilleggstavler med periode, strekning eller unntak                   | [Tilleggstavler eksempler](/blogs/teori/trafikkskilt-og-veimerking "Tilleggstavler eksempler")     |
| **Markeringsskilt**             | Veimerking som fotgjengerfelt, sykkelfelt og sperreflater            | [Veimerking og oppmerking](/blogs/teori/veioppmerking "Veimerking og oppmerking")                  |

## Oversikt over alle skiltene

Alle de enkelte skiltene er katalogisert under hver skiltgruppe i vÃ¥r detaljerte guide. FÃ¸lg lenkene nedenfor for Ã¥ se **eksempler** og **beskrivelser** av alle skiltene:

| Gruppe               | Eksempelside                                                      |
|----------------------|--------------------------------------------------------------------|
| Fareskilt            | [Se alle fareskilt](/blogs/teori/trafikkskilt-og-veimerking#advarselsskilt-eksempler "Advarselsskilt og faremerking") |
| Vikeplikt- og forkjÃ¸rsskilt | [Se vikeplikt og forkjÃ¸rsskilt](/blogs/teori/trafikkskilt-og-veimerking#de-fire-hovedkategoriene-av-trafikkskilt "Vikeplikt og forkjÃ¸rsskilt") |
| Forbudtsskilt        | [Se alle forbudsskilt](/blogs/teori/trafikkskilt-og-veimerking#forbudsskilt-eksempler "Forbudsskilt eksempler")   |
| PÃ¥budsskilt          | [Se alle pÃ¥budsskilt](/blogs/teori/trafikkskilt-og-veimerking#pabudsskilt-eksempler "PÃ¥budsskilt eksempler")     |
| Opplysningsskilt     | [Se alle opplysningsskilt](/blogs/teori/trafikkskilt-og-veimerking#opplysningsskilt-eksempler "Opplysningsskilt eksempler") |
| Serviceskilt         | [Se alle serviceskilt](/blogs/teori/trafikkskilt-og-veimerking#trafikksystemet-skilt "Trafikksystemet (skilt)") |
| Veivisningsskilt     | [Se alle veivisningsskilt](/blogs/teori/trafikkskilt-og-veimerking#tilleggstavler-eksempler "Tilleggstavler eksempler") |
| Underskilt           | [Se alle underskilt](/blogs/teori/trafikkskilt-og-veimerking#tilleggstavler-eksempler "Tilleggstavler eksempler") |
| Markeringsskilt      | [Se all veimerking](/blogs/teori/veioppmerking "Veimerking og oppmerking") |

## Hvordan bruke oversikten

Denne oversikten hjelper deg med Ã¥ finne raskt frem til relevant skiltinformasjon ved:

* Systematisk gjennomgang av hver skiltgruppe
* Rask navigasjon via interaktive lenker
* Sammenligning av skilt basert pÃ¥ form og farge

## Relaterte artikler

* [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier")
* [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - komplett guide")
* [Veioppmerking](/blogs/teori/veioppmerking "Veimerking og oppmerking - guide til veioppmerking")
* [Vikeplikt og rundkjÃ¸ringer](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer - komplett guide")\n  </div>\n</div>