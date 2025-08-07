---
title: "Fartsgrenser – Generelle regler, skilter og soneskilt"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær alt om norske fartsgrenser: generelle regler, skilting, soneskilt, anbefalte hastigheter, miljøsoner, gågate og spesialregler for trygg kjøring."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/fartsgrenser/fartsgrenser.svg"
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
    <img src="/images/blog/fartsgrenser/fartsgrenser.svg" alt="Fartsgrenser – Generelle regler, skilter og soneskilt" class="img-fluid rounded">
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
    

**Fartsgrenser** regulerer hastigheten pÃ¥ ulike veinivÃ¥er i Norge og er en av de viktigste faktorene for **trafikksikkerhet**. Denne artikkelen gir en grundig gjennomgang av de **generelle fartsgrensene**, skilting, **soneskilt**, anbefalte hastigheter, **miljÃ¸soner**, **gÃ¥gate**, og relevante **spesialregler** som er viktige for deg som tar fÃ¸rerkort.

## Innholdsfortegnelse

1. [Generelle fartsgrenser](#generelle-fartsgrenser)
2. [Fartsgrenseskilt](#fartsgrenseskilt)
3. [Soneskilt for hastighet](#soneskilt-for-hastighet)
4. [Anbefalte hastigheter](#anbefalte-hastigheter)
5. [MiljÃ¸soner og miljÃ¸fartsgrenser](#miljosoner-og-miljofartsgrenser)
6. [GÃ¥gate og fotgjengeromrÃ¥der](#gagate-og-fotgjengeromrader)
7. [Spesialregler og unntak](#spesialregler-og-unntak)

## Generelle fartsgrenser

De **generelle fartsgrensene** i Norge er satt for Ã¥ balansere **flyt** og **sikkerhet** under ulike kjÃ¸reforhold.

| OmrÃ¥de                       | Fartsgrense |
|------------------------------|-------------|
| **Tettbygd strÃ¸k**           | 50 km/t     |
| **Landeveier**               | 80 km/t     |
| **Motorveier**               | 90â€“110 km/t |
| **GÃ¥gate / fotgjengeromrÃ¥de**| 5â€“15 km/t   |

* For en detaljert sammenligning av **motorvei** og **motortrafikkvei**, se [Motorvei vs motortrafikkvei](/blogs/teori/motorvei-vs-motortrafikkvei "Motorvei vs motortrafikkvei - Forskjeller, fartsgrenser og skilt").

*For mer om dynamisk hastighetstilpasning, se [Fart og avstand](/blogs/teori/fart-og-avstand "Fart og avstand - Komplett guide til hastighet og bremseavstand").*

## Fartsgrenseskilt

**Fartsgrenseskilt** tilhÃ¸rer gruppen av **forbudsskilt** og har en tydelig form og farge: runde skilt med hvit bakgrunn og rÃ¸d ring. Tallene angir maksimal tillatt hastighet.

*For detaljer om skiltenes form og farge, se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide til trafikkskilt og veimerking").*

## Soneskilt for hastighet

**Soneskilt** markerer omrÃ¥der med andre fartsgrenser i en hel sone, frem til skiltet som opphever sonen.

| Sone                        | Betydning                      |
|-----------------------------|--------------------------------|
| **Sone 30**                 | 30 km/t i hele sonen           |
| **Sone 50**                 | 50 km/t i hele sonen           |
| **Opphevelse av soneskilt** | Opphever gjeldende soneskilt   |

*For mer om tilleggstavler og underskilt, se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide til trafikkskilt og veimerking").*

## Anbefalte hastigheter

Utover lovpÃ¥lagte grenser finnes det anbefalte hastigheter som bidrar til **sikkerhet**, **miljÃ¸** og **komfort**.

| Situasjon                    | Anbefalt hastighet            |
|------------------------------|-------------------------------|
| **RegnvÃ¦r**                  | 10â€“20 km/t under grensen      |
| **TÃ¥ke og nedsatt sikt**     | Tilpass til sikt (ofte <50 km/t) |
| **Skole- og boligomrÃ¥der**   | 30 km/t                      |
| **Tung last / tilhenger**    | 10 km/t under grensen         |

*For tips om Ã¸konomisk og miljÃ¸vennlig kjÃ¸ring, se [MiljÃ¸vennlig kjÃ¸ring](/blogs/teori/miljovennlig-kjoring "MiljÃ¸vennlig kjÃ¸ring - Teknikker for bÃ¦rekraftig kjÃ¸ring").*

## MiljÃ¸soner og miljÃ¸fartsgrenser

Kommuner kan innfÃ¸re **miljÃ¸soner** med lavere fartsgrenser for Ã¥ redusere stÃ¸y og luftforurensning. Disse er ofte skiltet med egne symboler og fÃ¸lger samme opphevelseregler som vanlige soneskilt.

| MiljÃ¸sone           | Fartsgrense      |
|---------------------|------------------|
| **Sentrumssone**    | 30 km/t          |
| **Skole- og barnehagesone** | 20 km/t |

## GÃ¥gate og fotgjengeromrÃ¥der

I **gÃ¥gater** og rene **fotgjengeromrÃ¥der** er hastigheten begrenset til gÃ¥fart, normalt **5â€“15 km/t**, og fotgjengere har **forkjÃ¸rsrett**.

*For mer om oppmerking og regler for gÃ¥gater, se [Trafikkregler for spesielle kjÃ¸retÃ¸y](/blogs/teori/trafikkregler-for-spesielle-kjoretoy "Trafikkregler for spesielle kjÃ¸retÃ¸y - regler for gÃ¥gate og turistkjÃ¸retÃ¸y").*

## Spesialregler og unntak

Det finnes flere unntak og **spesialregler** som alle sjÃ¥fÃ¸rer bÃ¸r kjenne til:

* **Minstehastighet pÃ¥ motorvei**: vanligvis 40 km/t om ikke annet skiltet
* **Skiltede nedsatte grenser** ved veiarbeid, ulykker eller midlertidige tiltak
* **Fartsgrenser for spesielle kjÃ¸retÃ¸y** (tungtransport, sykler med motor)
* **PÃ¥budt hastighet** i tunneler og tunnellÃ¸p kan vÃ¦re hÃ¸yere enn generelle grenser

*For motorveispesifikke regler, se [MotorveikjÃ¸ring](/blogs/teori/motorveikjoring "MotorveikjÃ¸ring - Guide til kjÃ¸ring pÃ¥ norsk motorvei").*

---

For en fullstendig oversikt over norske trafikkskilt, se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide til trafikkskilt og veimerking").\n  </div>\n</div>