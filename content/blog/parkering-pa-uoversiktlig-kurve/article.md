---
title: "Parkering på uoversiktlig kurve"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær om hvorfor parkering i uoversiktlige kurver er forbudt. Regler, risiko og beste praksis for trygg parkering på vei."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/parkering-pa-uoversiktlig-kurve/parkering-pa-uoversiktlig-kurve-image.svg"
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
    <img src="/images/blog/parkering-pa-uoversiktlig-kurve/parkering-pa-uoversiktlig-kurve-image.svg" alt="Parkering på uoversiktlig kurve" class="img-fluid rounded">
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
    

**Parkering pÃ¥ uoversiktlig kurve** er forbudt i henhold til **Trafikkreglene** og er avgjÃ¸rende for **trafikksikkerhet**. NÃ¥r du parkerer i en uoversiktlig kurve, kan mÃ¸tende trafikanter fÃ¥ svÃ¦rt begrenset sikt, noe som Ã¸ker risikoen for alvorlige ulykker.

## Hva er en uoversiktlig kurve?

En *uoversiktlig kurve* kjennetegnes ved at siktlinjen er sterkt redusert, for eksempel ved:

* Toppen av en bakketopp som ligger rett fÃ¸r en skarp sving
* Vegetasjon, bygg eller andre hindringer som blokkerer sikten
* Smale veier med innsyn slik at mÃ¸te- og forbikjÃ¸ringsmuligheter er skjult


        
        
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
    

## Regelverk og forbud

Parkering i uoversiktlige kurver er regulert av **Trafikkreglene Â§12**, som tydelig pÃ¥legger forbud mot parkering der sikten er begrenset. Dette for Ã¥ sikre at trafikanter kan se hverandre i tide og unngÃ¥ kollisjoner.

| Regelverk              | Innhold                                                       |
|------------------------|---------------------------------------------------------------|
| Trafikkreglene Â§12     | Forbud mot parkering i kurver og pÃ¥ steder med begrenset sikt |
| ForbikjÃ¸ringsforbud    | Se [LandeveiskjÃ¸ring](/blogs/teori/landeveiskjoring "LandeveiskjÃ¸ring - Hastighet, plassering og svingteknikk") for gjeldende regler om forbikjÃ¸ring i kurver |
| Siktregler             | Se [De 5 se-reglene](/blogs/teori/de-5-se-reglene "De 5 se-reglene") for grunnleggende siktsjekker fÃ¸r manÃ¸ver |

## Risiko ved feilparkering

Feilparkering i en uoversiktlig kurve kan fÃ¸re til:

| Risiko                      | Konsekvens                                          |
|-----------------------------|-----------------------------------------------------|
| Redusert sikt               | Uventet mÃ¸te med kjÃ¸retÃ¸y, syklister eller fotgjengere |
| Manglende reaksjonstid      | Utilstrekkelig tid til Ã¥ bremse eller styre unna    |
| Alvorlige kollisjoner       | Store skader pÃ¥ kjÃ¸retÃ¸y og personskader            |
| KjÃ¸ring i blind sone        | Ã˜kt risiko for forbikjÃ¸ringsulykker                 |

## Alternative parkeringsmuligheter

Dersom du trenger Ã¥ parkere i nÃ¦rheten av en uoversiktlig kurve, bÃ¸r du vurdere tryggere alternativer:

| Alternativ plassering           | Fordeler                               |
|---------------------------------|----------------------------------------|
| Rett fÃ¸r kurven med fri sikt    | God sikt bÃ¥de fremover og bakover      |
| Etter kurven, utenfor synsrekkevidde | UnngÃ¥r hindring av mÃ¸tebane           |
| [MÃ¸teplass](/blogs/teori/parkering-pa-moteplass "Parkering pÃ¥ mÃ¸teplass - regler og beste praksis for smale veier") | Utvidet veikant som gir plass til mÃ¸tende trafikk |
| Parkeringslomme eller avkjÃ¸rsel | Beskyttet omrÃ¥de, egen parkeringsplass |
| Parkeringsplass i veiens forlengelse | Oversiktlig veiavsnitt              |

## Praktiske tips for sikker parkering

* Planlegg parkeringen i god tid fÃ¸r du kommer til kurven  
* Bruk blinklys for Ã¥ signalisere intensjonen din  
* Sjekk at det ikke finnes lokale skilt eller styringer som fraviker generelt forbud  
* Velg alltid en plassering med minst 50 meter fri sikt pÃ¥ begge sider  
* Kombiner sjekk i speil med en rask hodeturn for Ã¥ bekrefte fri sikt  

*For mer informasjon om generelle parkeringsregler, se [Trafikkregler om parkering](/blogs/teori/trafikkregler-om-parkering "Trafikkregler om parkering - regler, unntak og skilt").*

*For teknikker i trange parkeringssituasjoner, se [Rygging og parkering](/blogs/teori/rygging-og-parkering "Rygging og parkering - Komplett guide til trygg manÃ¸vrering ved fÃ¸rerkort").*

*For tips om plassering og kurvehÃ¥ndtering, se [LandeveiskjÃ¸ring](/blogs/teori/landeveiskjoring "LandeveiskjÃ¸ring - Hastighet, plassering og svingteknikk").*\n  </div>\n</div>