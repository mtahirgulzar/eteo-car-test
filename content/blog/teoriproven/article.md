---
title: "Teoriprøven"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Alt du trenger å vite om teoriprøven for førerkort klasse B i Norge. Forberedelser, eksamensstruktur, tips og strategier for å bestå teoriprøven."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/teoriproven/teoriproven-image.svg"
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
    <img src="/images/blog/teoriproven/teoriproven-image.svg" alt="Teoriprøven" class="img-fluid rounded">
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
    

**TeoriprÃ¸ven** er den avsluttende teoretiske eksamenen du mÃ¥ bestÃ¥ for Ã¥ fÃ¥ fÃ¸rerkort klasse B i Norge. Denne omfattende guiden gir deg alt du trenger Ã¥ vite om **eksamensformat**, **viktige temaer**, **tidsstyring** og nyttige **strategier** for Ã¥ sikre at du bestÃ¥r pÃ¥ fÃ¸rste forsÃ¸k.

## Eksamensstruktur og format

FÃ¸lgende tabell viser hovedstruktur for teoriprÃ¸ven:

| Seksjon                           | Antall spÃ¸rsmÃ¥l | Tidsramme   |
|-----------------------------------|-----------------|-------------|
| **Trafikkregler og vikeplikt**    | 20              | 20 minutter |
| **Trafikkskilt og veimerking**    | 15              | 15 minutter |
| **Fart, avstand og reaksjonstid** | 10              | 10 minutter |
| **Sikkerhet og miljÃ¸**            | 5               | 5 minutter  |


        
        
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
    

## Forberedelse og tips

- **Les pensum nÃ¸ye**: GjennomgÃ¥ alle kapitlene i lÃ¦reboken og bruk [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Juridisk rammeverk for trafikk") som referanse.
- **Ã˜v med prÃ¸vetester**: Ta minst 5 fullstendige simuleringer for Ã¥ bli komfortabel med format og tidsbegrensning.
- **Fokuser pÃ¥ vanskelige emner**: Emner som **vikeplikt** (se [Hva er vikeplikt?](/blogs/teori/vikeplikt-og-rundkjoringer "Vikeplikt og rundkjÃ¸ringer - Kompakt guide til vikeplikt")) og **trafikkskilt** kan kreve ekstra repetisjon.
- **Tidsstyring**: Del tiden likt mellom seksjonene, men unngÃ¥ Ã¥ bruke for mye tid pÃ¥ enkelte spÃ¸rsmÃ¥l.
- **Eliminer feil**: Hvis du er usikker pÃ¥ et spÃ¸rsmÃ¥l, bruk eliminasjonsmetoden og gÃ¥ videre; du kan alltid gÃ¥ tilbake hvis tiden tillater det.

## Etter prÃ¸ven

NÃ¥r du har bestÃ¥tt **teoriprÃ¸ven**, kan du registrere resultatet hos Statens vegvesen og fortsette med **Ã¸velseskjÃ¸ring** eller planlegge **oppkjÃ¸ring**. Se ogsÃ¥:
- [Ã˜velseskjÃ¸ring](/blogs/teori/ovelseskjoring "Ã˜velseskjÃ¸ring - Krav til ledsager, bil og mer")
- [OppkjÃ¸ring](/blogs/teori/oppkjoring "OppkjÃ¸ring - Guide til praktisk kjÃ¸reprÃ¸ve for fÃ¸rerkort i bil")

## Ofte stilte spÃ¸rsmÃ¥l (FAQ)

| SpÃ¸rsmÃ¥l                                  | Svar                                                     |
|-------------------------------------------|----------------------------------------------------------|
| Hvor mange feil kan jeg ha?               | Maksimalt 2 feil pr. seksjon, totalt maks 5 feil.        |
| Kan jeg bruke hjelpemidler?               | Nei, ingen eksterne hjelpemidler er tillatt.             |
| Hva skjer hvis jeg stryker?               | Du mÃ¥ vente minst Ã©n uke fÃ¸r ny prÃ¸ve.                   |
| Hvor lenge er bestÃ¥tt prÃ¸ve gyldig?        | BestÃ¥tt teoriprÃ¸ve er gyldig i 2 Ã¥r for praktisk prÃ¸ve.  |\n  </div>\n</div>