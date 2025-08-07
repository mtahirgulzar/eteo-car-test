---
title: "Parkeringsskilt: Underskilt og tidsbestemmelser"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hvordan du tolker underskilt og tidsbestemmelser på parkeringsskilt i Norge. Eksempler på tilleggstavler med gyldighetsperiode, unntak og viktige regler."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/parkeringsskilt-underskilt-tidsbestemmelser/parkeringsskilt-underskilt-tidsbestemmelser-image.svg"
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
    <img src="/images/blog/parkeringsskilt-underskilt-tidsbestemmelser/parkeringsskilt-underskilt-tidsbestemmelser-image.svg" alt="Parkeringsskilt: Underskilt og tidsbestemmelser" class="img-fluid rounded">
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
    

**Parkeringsskilt med underskilt** angir spesifikke **tidsbestemmelser**, **gyldighetsperiode**, **unntak** og **strekninger**. I denne artikkelen lÃ¦rer du hvordan du tolker de vanligste tilleggstavlene pÃ¥ parkeringsskilt i Norge.

## Innholdsfortegnelse

1. [Hva er underskilt?](#hva-er-underskilt)
2. [Vanlige typer underskilt pÃ¥ parkeringsskilt](#vanlige-typer-underskilt-pa-parkeringsskilt)
3. [Tidsbestemmelser og gyldighetsperiode](#tidsbestemmelser-og-gyldighetsperiode)
4. [Kombinasjoner og praktiske eksempler](#kombinasjoner-og-praktiske-eksempler)
5. [Relaterte artikler](#relaterte-artikler)

## Hva er underskilt?

**Underskilt** (ogsÃ¥ kalt tilleggstavler) plasseres under hovedskilt for Ã¥ presisere gyldighetsperiode, strekning, kjÃ¸retÃ¸ygruppe eller unntak. For en mer generell gjennomgang av **trafikkskilt og veimerking**, se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide for teoriprÃ¸ven").

## Vanlige typer underskilt pÃ¥ parkeringsskilt

| Eksempel/tekst pÃ¥ underskilt         | Betydning                          |
|--------------------------------------|------------------------------------|
| `08â€“16`                              | Gyldig kl.â€¯08 til kl.â€¯16 hver dag  |
| `Manâ€“Fre`                            | Gyldig mandag til fredag           |
| `1.â€¯aprâ€“1.â€¯nov`                      | Sesongparkering                    |
| `Ved skiltet`                        | Gyldig innenfor angitt strekning   |
| `Gjelder ikke gyldig HC-kort`        | Unntak for forbeholdte plasser     |
| `Kun beboer`                         | Gyldig for beboere med tillatelse  |

## Tidsbestemmelser og gyldighetsperiode

Tidsbestemmelser pÃ¥ underskilt kan kombineres for Ã¥ gi mer presis informasjon:

* Dersom kun klokkeslett er angitt (`07â€“17`), gjelder regelen hver dag i perioden.
* Kombinasjon av ukedager og tid (`Manâ€“Fre 08â€“16`) betyr mandag til fredag mellom kl.â€¯08 og kl.â€¯16.
* Sesongregler (`15.â€¯junâ€“15.â€¯aug`) brukes for midlertidige parkeringsordninger.
* Flere underskilt kan stables for Ã¥ angi bÃ¥de tid, dag og strekning.

## Kombinasjoner og praktiske eksempler

1. Parkeringsskilt med `P` + `08â€“16` og `Manâ€“Fre`: Parkering tillatt mandagâ€“fredag kl.â€¯08â€“16.
2. Parkeringsskilt med `P` + `1.â€¯aprâ€“1.â€¯nov` + `Ved skiltet`: Sesongparkering innenfor skiltets omrÃ¥de.
3. Parkeringsskilt med `P` + `04â€“22` + `Kun beboer`: Kun beboere kan parkere kl.â€¯04â€“22.
4. Parkeringsskilt med `P` + `Gjelder ikke gyldig HC-kort`: Unntak for handikapbrukere.

## Relaterte artikler

* [Trafikkregler om parkering](/blogs/teori/trafikkregler-om-parkering "Trafikkregler om parkering - regler, unntak og skilt")
* [Parkering pÃ¥ uoversiktlig kurve](/blogs/teori/parkering-pa-uoversiktlig-kurve "Parkering pÃ¥ uoversiktlig kurve - regler og sikkerhet")
* [Skiltoversikt: Alle skiltgrupper og oversikt over alle skiltene](/blogs/teori/skiltoversikt-alle-skiltgrupper-og-oversikt "Skiltoversikt: Alle skiltgrupper og oversikt over alle skiltene")
* [Trafikksystemet (skilt)](/blogs/teori/trafikksystemet-skilt "Trafikksystemet (skilt) - Skiltgrupper og kategorier")

### Se ogsÃ¥

For flere detaljer om tilleggstavler generelt, se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide for teoriprÃ¸ven").\n  </div>\n</div>