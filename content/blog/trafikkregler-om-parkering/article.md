---
title: "Trafikkregler om parkering"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "En komplett guide til parkeringsregler i Norge: offentlige soner, skilting, tidsbegrensninger og bøter."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/trafikkregler-om-parkering/trafikkregler-om-parkering-image.svg"
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
    <img src="/images/blog/trafikkregler-om-parkering/trafikkregler-om-parkering-image.svg" alt="Trafikkregler om parkering" class="img-fluid rounded">
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
    

Denne artikkelen gir en grundig oversikt over **trafikkregler om parkering** i Norge. Her ser du hvilke **skilt**, **soneregler**, **tidsbegrensninger**, **betalingsordninger** og **sanksjoner** som gjelder, samt aktuelle unntak og praktiske tips.

For regler om kortvarig stans, se [Trafikkregler om stans](/blogs/teori/trafikkregler-om-stans "Trafikkregler om stans: regler, unntak og skilter"). For parkeringsteknikker, se [Parkering for viderekomne](/blogs/teori/parkering-for-viderekomne "Parkering for viderekomne: avanserte teknikker, vinkel- og parallelparkering").

## Hva er parkering?

Ã… *parkere* betyr at kjÃ¸retÃ¸yet stÃ¥r stille og er ubetjent over tid. I motsetning til *stans*, som ofte er kortvarig for pÃ¥- eller avstigning, innebÃ¦rer parkering et lengre opphold hvor bilen stÃ¥r alene.

## Skilting og veimerking for parkering


        
        
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
    

| Skilt                                 | Betydning                                                                 |
|---------------------------------------|---------------------------------------------------------------------------|
| 
        
        
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
      | **Parkering tillatt** â€“ Parkering er tillatt i henhold til lokal skilting. |
| 
        
        
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
     | **Parkering forbudt** â€“ Parkering er ikke tillatt pÃ¥ dette stedet.        |

For en grundig gjennomgang av **underskilt** og **tidsbestemmelser** pÃ¥ parkeringsskilt, se [Parkeringsskilt: Underskilt og tidsbestemmelser](/blogs/teori/parkeringsskilt-underskilt-tidsbestemmelser "Parkeringsskilt: Underskilt og tidsbestemmelser").

## Parkeringssone og tidsbegrensninger

| Sonetype      | Tillatt parkering  | Tidsbegrensning   | Betaling           |
|--------------|--------------------|-------------------|--------------------|
| BlÃ¥ sone     | Ja                 | 1â€“3 timer         | Automat / App      |
| Gul sone     | Ja                 | 2â€“4 timer         | Automat / App      |
| GrÃ¸nn sone   | Ja                 | 24 timer / Kort   | Beboerkort         |
| Fri parkering| Ja                 | Ubegrenset        | Ingen              |

## Unntak og spesielle regler

* **Elbilparkering**: egne plasser, ofte med ladepunkt og tidsbegrensning.  
* **Handikapparkering**: krever gyldig tillatelse, egne plasser nÃ¦r innganger.  
* **Brannhydrant og oppkjÃ¸rsel**: parkering forbudt, selv om egne inngangsdeler ikke alltid er skiltet.  
* **Private soner**: fÃ¸lg skilting for borettslag, butikker eller arbeidsplasser.
* **Kurver og bakketopper med begrenset sikt**: se [Parkering pÃ¥ uoversiktlig kurve](/blogs/teori/parkering-pa-uoversiktlig-kurve "Parkering pÃ¥ uoversiktlig kurve - regler og sikkerhet").

For en komplett oversikt over **hvor det er forbudt Ã¥ parkere**, se [Hvor er det forbudt Ã¥ parkere?](/blogs/teori/hvor-er-det-forbudt-a-parkere "Hvor er det forbudt Ã¥ parkere? - parkeringsforbud og trafikkregler").

For detaljerte lover og forskrifter, se [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter: komplett oversikt over norsk trafikklovgivning").

## Sanksjoner og bÃ¸ter ved feilparkering

| Brudd pÃ¥ regel                | Bot (anslag)     |
|------------------------------|------------------|
| Overskridelse av parkeringstid| 500â€“900Â NOK     |
| Parkering forbudt sone        | 900â€“1500Â NOK    |
| Manglende betaling            | 500â€“700Â NOK     |
| Ulovlig handikapbruk          | 1500â€“2000Â NOK   |
| Blokkering av trafikkfelt     | 1200â€“2000Â NOK   |

## Praktiske tips

1. **Planlegg** parkeringen fÃ¸r avreise â€“ sjekk skilting og lokale regler.  
2. **Bruk apper** for betaling og forlengelse av parkeringstid.  
3. **UnngÃ¥ hinder** â€“ parkÃ©r ikke i sykkelfelt, kollektivfelt eller foran innkjÃ¸rsler.  
4. **LÃ¥s bilen** og ta med verdisaker.  
5. **VÃ¦r oppmerksom** pÃ¥ midlertidig skilting ved arrangementer og vedlikehold.

For mer om byparkering, se [KjÃ¸ring i byen: Stans og parkering](/blogs/teori/kjoring-i-byen-stans-og-parkering "Stans og parkering i byen - regler og anbefalinger").\n  </div>\n</div>