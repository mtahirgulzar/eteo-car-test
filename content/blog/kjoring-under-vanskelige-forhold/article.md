---
title: "Kjøring under vanskelige forhold"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hvordan du tilpasser kjøringen i regn, snø, is, tåke og sterk vind for en trygg kjøring. Viktige tips for førerkort klasse B."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/kjoring-under-vanskelige-forhold/kjoring-under-vanskelige-forhold-image.svg"
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
    <img src="/images/blog/kjoring-under-vanskelige-forhold/kjoring-under-vanskelige-forhold-image.svg" alt="Kjøring under vanskelige forhold" class="img-fluid rounded">
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
    

**KjÃ¸ring under vanskelige forhold** omfatter alle situasjoner hvor **vÃ¦r**, **fÃ¸re** eller **sikt** pÃ¥virker kjÃ¸resikkerheten negativt. Dette inkluderer **regn**, **snÃ¸**, **is**, **tÃ¥ke**, **sterk vind**, **slaps** og andre forhold som reduserer **grip**, **sikt** og **kjÃ¸retÃ¸yets kontroll**. Mestring av disse situasjonene krever dybdeforstÃ¥else av **fysikk**, **kjÃ¸retÃ¸yteknikk** og **mentale tilpasninger**.

For en oversikt over gjeldende lover og forskrifter, se [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter").

## Relaterte artikler

For grunnleggende prinsipper, se [Introduksjon til teori for fÃ¸rerkort](/blogs/teori/introduksjon-til-teori-for-forerkort "Introduksjon til teori for fÃ¸rerkort") og [Fart og avstand](/blogs/teori/fart-og-avstand "Fart og avstand - Komplett guide til hastighet og bremseavstand").

For menneskelige faktorer ved vanskelig kjÃ¸ring, se [Mennesket i trafikken](/blogs/teori/mennesket-i-trafikken "Mennesket i trafikken - Faktorer som pÃ¥virker kjÃ¸ring") og [Risikovurdering i praksis](/blogs/teori/risikovurdering-i-praksis "Risikovurdering i praksis - Identifiser og hÃ¥ndter risiko").

For en helhetlig, proaktiv og risiko-minimerende kjÃ¸restrategi, se [Defensiv kjÃ¸ring](/blogs/teori/defensiv-kjoring "Defensiv kjÃ¸ring - Prinsipper og teknikker for trygg kjÃ¸ring").

For nÃ¸dsituasjoner under vanskelige forhold, se [HÃ¥ndtering av nÃ¸dsituasjoner](/blogs/teori/handtering-av-nodsituasjoner "HÃ¥ndtering av nÃ¸dsituasjoner - Guide til hÃ¥ndtering av nÃ¸dsituasjoner") og [FÃ¸rstehjelp og opptreden ved ulykker](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker - Livsviktige ferdigheter").

For spesifikke situasjoner, se [KjÃ¸ring i mÃ¸rket](/blogs/teori/kjoring-i-morket "KjÃ¸ring i mÃ¸rket - Komplett guide til trygg nattkjÃ¸ring"), [LandeveiskjÃ¸ring](/blogs/teori/landeveiskjoring "LandeveiskjÃ¸ring - Guide til sikker kjÃ¸ring pÃ¥ norske landeveier"), [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Krav til mÃ¸nsterdybde og sesongdekk") og [MotorveikjÃ¸ring](/blogs/teori/motorveikjoring "MotorveikjÃ¸ring - Guide til kjÃ¸ring pÃ¥ norsk motorvei").

For optimal signalering og samhandling i krevende trafikksituasjoner, se [Kommunikasjon med andre trafikanter](/blogs/teori/kommunikasjon-med-andre-trafikanter "Kommunikasjon med andre trafikanter - Tydelige signaler og trygg trafikk").

For mer om grunnleggende bruk av lys og signaler, se [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Komplett guide til lysbruk og signalering").

For forebygging av frontkollisjoner og mÃ¸teulykker, se [MÃ¸teulykker og forebygging](/blogs/teori/moteulykker-og-forebygging "MÃ¸teulykker og forebygging - Forebygging av frontkollisjoner i trafikken").

## Oversikt over vanskelige forhold


        
        
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
    

| Forhold                | Hovedrisiko                       | PrimÃ¦r tilpasning                   | Kritiske faktorer                        |
|------------------------|-----------------------------------|-------------------------------------|------------------------------------------|
| **Regn**               | Vannplaning, redusert grip        | Senk hastighet 20-30%               | DekkmÃ¸nster, vanndybde, hastighet        |
| **SnÃ¸**                | DÃ¥rlig grip, hjulspinn            | Myk kjÃ¸ring, hÃ¸y/lav gir            | SnÃ¸type, temperatur, dekk                |
| **Is / Glatt fÃ¸re**    | Uforutsigbar friksjon, skrens     | Ekstrem forsiktighet               | Temperatur, underlag, skrensfare         |
| **TÃ¥ke**               | Drastisk redusert sikt            | TÃ¥kelys, lav hastighet              | Siktlengde, kondens, reflektor           |
| **Sterk vind**         | Ustabil kjÃ¸ring, sidevind         | Fast grep, tilpasset hastighet      | Vindstyrke, kjÃ¸retÃ¸ytype, eksponering    |
| **Slaps**              | Vannfilm, ujevn friksjon          | Forsiktig akselerasjon              | Underlag, temperatur, dekk               |

*Hastighetstilpasning under vanskelige forhold krever ogsÃ¥ forstÃ¥else av hvor du kan se fartsgrensene og advarselsskilt. Se [Trafikkskilt og veimerking](/blogs/teori/trafikkskilt-og-veimerking "Trafikkskilt og veimerking - Komplett guide til trafikkskilt og veimerking") for informasjon om variable hastighetsskilt og vÃ¦rrelaterte advarsler.*

## Regn og vÃ¥te forhold


        
        
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
    

**Regn** skaper flere utfordringer samtidig: **redusert grip**, **vannplaning** og **nedsatt sikt**. VÃ¥t asfalt kan ha sÃ¥ lite som **20-50%** av normalt grip.

### Vannplaning (Aquaplaning)

**Vannplaning** oppstÃ¥r nÃ¥r dekket mister kontakt med veibanen pÃ¥ grunn av vannlag:

* **Kritisk hastighet**: Avhenger av dekkmÃ¸nster, trykk og vanndybde
* **Faresignaler**: Lettratthet, motoromdreiningene Ã¸ker uten hastighetsÃ¸kning
* **HÃ¥ndtering**: LÃ¸ft gassen gradvis, IKKE brems eller sving brÃ¥tt

### Praktiske tips for regnkjÃ¸ring


        
        
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
    

* **Hastighet**: Reduser med 20-30% avhengig av regnintenitet
* **Avstand**: Dobbel eller tredobbel sikkerhetsavstand (se [Fart og avstand](/blogs/teori/fart-og-avstand "Fart og avstand - Komplett guide til hastighet og bremseavstand") for beregninger av sikre avstander under ulike forhold)
* **KjÃ¸remÃ¸nster**: FÃ¸lg eksisterende hjulspor hvor vannet er presset vekk
* **Bremsing**: Tidligere og mildere enn normalt
* **Belysning**: Bruk nÃ¦rlys selv om dagen for Ã¸kt synlighet

### Teknisk forklaring: Dekk og veibane

| Faktor                 | PÃ¥virkning pÃ¥ grip                | Tiltak                              |
|------------------------|-----------------------------------|-------------------------------------|
| **MÃ¸nsterdybde**       | < 3mm = stor vannplaningsrisiko   | Kontroller dekk regelmessig         |
| **Dekktrykk**          | Lavt trykk Ã¸ker vannplaningsrisiko | Juster til anbefalt trykk + 0,2 bar |
| **Vanndybde**          | > 5mm skaper betydelig risiko     | UnngÃ¥ store vannpytter              |
| **Hastighet**          | Jo hÃ¸yere, desto stÃ¸rre risiko    | Tilpass til forholdene              |

## SnÃ¸ og vinterkjÃ¸ring


        
        
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
    

**SnÃ¸kjÃ¸ring** krever fundamental endring av kjÃ¸reteknikk. Grip kan vÃ¦re sÃ¥ lite som **10-30%** av normal asfalt.

### SnÃ¸typer og deres utfordringer

| SnÃ¸type                | Gripforhold           | KjÃ¸reteknikk                        | Spesielle hensyn                       |
|------------------------|-----------------------|-------------------------------------|----------------------------------------|
| **NysnÃ¸**              | Middels grip          | Myk akkelerasjon, stabil hastighet  | Kan skjule is under                    |
| **PulversnÃ¸**          | Variabelt grip        | FÃ¸lg hjulspor, unngÃ¥ dype omrÃ¥der   | Virvles opp, reduserer sikt            |
| **Kompakt snÃ¸**        | Godt grip             | Normal teknikk med Ã¸kt forsiktighet | Kan vÃ¦re glatt pÃ¥ toppen               |
| **Slaps/VÃ¥t snÃ¸**      | DÃ¥rlig grip           | Ekstrem forsiktighet                | Klebrig, kan stoppe hjul               |
| **Is under snÃ¸**       | Meget dÃ¥rlig grip     | Som iskjÃ¸ring                       | Farlig - uforutsigbart                 |

### KjÃ¸reteknikk i snÃ¸


        
        
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
    

**Girteknikk**:
* **HÃ¸y gir**: Mindre hjulspinn ved akselerasjon fra stillestÃ¥ende
* **Lav gir**: Bedre motorbrems og kontroll ved nedkjÃ¸ring
* **Konstant gir**: UnngÃ¥ gir-skifte i kritiske situasjoner

**Rattbevegelser**:
* **Myke og forutsigbare** bevegelser
* **Gradvis korrigering** ved ustabilitet
* **Understyring**: LÃ¸ft gassen, ikke sving mer
* **Overstyring**: Sving med skrens, ikke mot

### Bremsing i snÃ¸

| Teknikk                | Anvendelse                        | Fordeler                            | Ulemper                               |
|------------------------|-----------------------------------|-------------------------------------|---------------------------------------|
| **Motorbrems**         | Gradvis retarding                 | HÃ¸y kontroll, ingen hjullÃ¥s         | Langsom, krever planlegging           |
| **Pulsbremsing**       | NÃ¸dbremsing uten ABS              | Bevarer styreevne                   | Krever Ã¸velse og teknikk              |
| **ABS-bremsing**       | NÃ¸dbremsing med ABS               | Optimal bremsekraft                 | Kan gi lengre bremsevei i snÃ¸         |
| **Kombinert**          | Normal kjÃ¸ring                    | Balanserer kontroll og effektivitet | Krever erfaring                       |

## Is og ekstreme glatte forhold


        
        
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
    

**IskjÃ¸ring** representerer de mest utfordrende forhold. Grip kan vÃ¦re sÃ¥ lite som **5-15%** av normal asfalt.

### Typer glatte forhold

**Rimfrost**: Tynt islag som ofte overrasker om morgenen
**UnderkjÃ¸lt regn**: Regn som fryser ved kontakt - ekstremt farlig
**Svart is**: Nesten usynlig istype pÃ¥ asfalt

*Slike ekstreme forhold Ã¸ker risikoen for alvorlige ulykker dramatisk. Les mer om [MÃ¸teulykker og forebygging](/blogs/teori/moteulykker-og-forebygging "MÃ¸teulykker og forebygging - Hvordan vanskelige forhold Ã¸ker kollisjonrisikoen") for Ã¥ forstÃ¥ hvordan dÃ¥rlig veigrep bidrar til frontkollisjoner.*
**Kompakt is**: Tykt islag med varierende friksjon

### KjÃ¸reteknikk pÃ¥ is


        
        
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
    

**Grunnprinsipper**:
* **Ekstrem forsiktighet** - alle bevegelser mÃ¥ vÃ¦re minimale
* **Lav hastighet** - ofte under 30 km/t
* **Maksimal avstand** - minst 10x normal avstand
* **UnngÃ¥ plutselige manÃ¸vrer** helt

**Spesielle teknikker**:
* **"FÃ¸ling" av grep**: Test grip forsiktig ved lave hastigheter
* **Retningsstabilitet**: Hold rattet lÃ¸st men fast
* **Bremsing**: Kun motorbrems hvis mulig
* **Akselerasjon**: Minimal gass, hÃ¸y gir

### HÃ¥ndtering av skrens pÃ¥ is

| Skrensetyp             | Ã…rsak                             | Korrektiv handling                  | UnngÃ¥                                 |
|------------------------|------------------------------------|-------------------------------------|---------------------------------------|
| **Understyring**       | Forhjul mister grip               | LÃ¸ft gassen, mindre ratt            | Mer gass eller mer ratt               |
| **Overstyring**        | Bakhjul mister grip               | Sving med skrens, kontroller gass   | Brems eller sving mot skrens          |
| **Firefault-skrens**   | Alle hjul mister grip             | Rett ut rattet, vente               | Alle typer input                      |

## TÃ¥ke og redusert sikt


        
        
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
    

**TÃ¥ke** kan redusere sikt fra flere kilometer til bare fÃ¥ meter pÃ¥ sekunder. Dette krever fundamental endring av kjÃ¸remÃ¸nster.

### TÃ¥ketyper og utfordringer

**RadiasjonstÃ¥ke**: OppstÃ¥r kalde, klare netter - tykkest ved daggry
**AdvelsjonstÃ¥ke**: Varm luft over kald overflate - langvarig
**NedbÃ¸rstÃ¥ke**: OppstÃ¥r ved regn over varm bakke
**SjÃ¸tÃ¥ke**: Beveger seg inn fra kysten

### Siktlengde og hastighetstilpasning


        
        
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
    

| Siktlengde             | Maksimal trygg hastighet          | Belysning                           | Spesielle hensyn                      |
|------------------------|------------------------------------|-------------------------------------|---------------------------------------|
| **> 200m**             | Normal hastighet med forsiktighet | NÃ¦rlys                              | VÃ¦r forberedt pÃ¥ plutselig forverring |
| **50-200m**            | 50-60 km/t                        | NÃ¦rlys + tÃ¥kelys                    | Ã˜k avstand til forankjÃ¸rende          |
| **20-50m**             | 30-40 km/t                        | TÃ¥kelys                             | FÃ¸lg veikant og veistriping           |
| **< 20m**              | Under 20 km/t eller stopp          | TÃ¥kelys + blinklys                  | SÃ¸k trygg parkeringsplass             |

*For detaljert guide til avanserte parkeringsstrategier under vanskelige forhold, se [Parkering for viderekomne](/blogs/teori/parkering-for-viderekomne "Parkering for viderekomne - Avanserte teknikker og stressmestring").*

### Praktisk tÃ¥kekjÃ¸ring


        
        
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
    

**Belysningsbruk**:
* **ALDRI fjernlys** - skaper blindende reflektor
* **TÃ¥kelys**: NÃ¥r sikt < 50m
* **NÃ¦rlys**: Standard i lett tÃ¥ke
* **Blinklys**: Ved stopp eller meget lav hastighet

**Navigasjonsteknikker**:
* **FÃ¸lg hÃ¸yre veikant** ved hjelp av reflektorer
* **Bruk veimidtstriping** som referanse
* **Se etter rÃ¸de baklys** foran deg
* **Lytt** etter andre kjÃ¸retÃ¸y

## Sterk vind og sidevind


        
        
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
    

**Sterk vind** pÃ¥virker kjÃ¸retÃ¸y forskjellig avhengig av form, vekt og hastighet. **Sidevind** er spesielt utfordrende.

### VindpÃ¥virkning pÃ¥ forskjellige kjÃ¸retÃ¸y

| KjÃ¸retÃ¸ytype           | Vindmottagelighet                 | Kritisk vindstyrke                  | Spesielle hensyn                      |
|------------------------|-----------------------------------|-------------------------------------|---------------------------------------|
| **Personbil**          | Moderat                           | > 15 m/s (54 km/t)                 | Lett ved hÃ¸y hastighet                |
| **HÃ¸y bil/SUV**        | HÃ¸y                               | > 12 m/s (43 km/t)                 | StÃ¸rre vindflate                      |
| **Tilhenger**          | Meget hÃ¸y                         | > 10 m/s (36 km/t)                 | Kan "piske" bil                       |
| **Lastebil/Buss**      | Ekstrem                           | > 8 m/s (29 km/t)                  | Stor vindflate, hÃ¸yt tyngdepunkt      |

### Vindkritiske omrÃ¥der


        
        
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
    

**Broer og viadukter**: Eksponer for full vindkraft
**Ã…pne omrÃ¥der**: Sletter, hÃ¸ye fjell, kystomrÃ¥der
**Skogskanter**: Plutselige vindkast ved utgang fra skog
**BygningsomrÃ¥der**: Turbulens og vindkorridor-effekter

### KjÃ¸reteknikk i vind

**FÃ¸rerberekenskap**:
* **Fast grep** om rattet - ikke krampaktig
* **Senket hastighet** pÃ¥ utsatte strekninger
* **Ã˜kt avstand** til andre kjÃ¸retÃ¸y
* **Forberedt pÃ¥ vindkast** - antiser korrektiver

**MÃ¸te med store kjÃ¸retÃ¸y**:
* **Forvent turbulens** etter lastebiler/busser
* **Korriger raskt** men ikke overreager
* **Ekstra avstand** ved forbikjÃ¸ring
* For mer om Ã¥ gi plass til store kjÃ¸retÃ¸y, se [Store kjÃ¸retÃ¸y i trafikken (Gi plass)](/blogs/teori/store-kjoretoy-gi-plass "Store kjÃ¸retÃ¸y i trafikken (Gi plass) - Gi plass til store kjÃ¸retÃ¸y").

## Kombinerte vanskelige forhold


        
        
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
    

Ofte opptrer flere vanskelige forhold samtidig, som **regn + vind**, **snÃ¸ + tÃ¥ke** eller **is + mÃ¸rke**. Dette multipliserer risikoen.

### Vanlige kombinasjoner og tiltak

| Kombinasjon            | Hovedutfordring                   | Prioritert tiltak                   | Kritiske faktorer                     |
|------------------------|-----------------------------------|-------------------------------------|---------------------------------------|
| **Regn + Vind**        | Ustabil kjÃ¸ring + vannplaning     | Betydelig hastighetreduksjon        | Sidevind + dÃ¥rlig grip                |
| **SnÃ¸ + TÃ¥ke**         | Grip + sikt                       | Ekstrem forsiktighet                | Navigering + kjÃ¸rekontroll            |
| **Is + MÃ¸rke**         | Usynlig fare                      | Test grep, meget lav hastighet      | TemperaturmÃ¥ling + tÃ¥kelys            |
| **Vind + TÃ¥ke**        | Navigering + stabilitet           | SÃ¸k ly, vurder stopp                | Vindretning + siktforhold             |

## Psykologiske aspekter


        
        
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
    

**Mentale utfordringer** ved vanskelig kjÃ¸ring inkluderer **stress**, **angst**, **overselvsikkerhet** og **fatigue**.

### Stressmestring

**Fysiologiske tegn pÃ¥ stress**:
* Ã˜kt puls og muskel-spenning
* Tunnelsyn og redusert oppmerksomhet
* Hurtige, mindre gjennomtenkte beslutninger

**StresshÃ¥ndtering**:
* **PusteÃ¸velser** under kjÃ¸ring
* **Mental forberedelse** fÃ¸r avreise
* **Pause ved tegn** pÃ¥ hÃ¸yt stressnivÃ¥
* **Aksepter lengre reisetid**

### Overselvsikkerhet

**Faresignaler**:
* "Jeg kan kjÃ¸re normalt i disse forholdene"
* Ignorering av vÃ¦ret og forholdene
* Kritisering av andre som kjÃ¸rer forsiktig

**Motstrategi**:
* **Regelmessig vurdering** av egne ferdigheter
* **Respekt for forholdene** uavhengig av erfaring
* **Lytte til advarsler** fra passasjerer

## Forberedelser og planlegging


        
        
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
    

**Grundig planlegging** er avgjÃ¸rende for trygg kjÃ¸ring under vanskelige forhold.

### Pre-trip sjekkliste

| OmrÃ¥de                 | Kontrollpunkter                   | Akseptkriterier                     | Handlinger ved avvik                  |
|------------------------|-----------------------------------|-------------------------------------|---------------------------------------|
| **Dekk**               | MÃ¸nsterdybde, trykk, type         | > 3mm, korrekt trykk, sesongdekk    | Skifte dekk, justere trykk            |
| **Belysning**          | Funksjon, renhet                  | Alle lys virker, rene glass         | Reparere, rengjÃ¸re                    |
| **[Viskere og vindusspylere](/blogs/teori/vindusviskere-vindusspylere "Vindusviskere og vindusspylere - Sikt, is og dugg")** | Funksjon, tilstand                | Jevn avvisking, ingen riper         | Skifte viskere, fylle vÃ¦ske           |
| **Bremser**            | FÃ¸lelse, lyd                      | Fast pedal, ingen lyd               | Service fÃ¸r avreise                   |
| **Oppvarming**         | Defroster, klimaanlegg            | Effektiv duggfjerning               | Reparere, rengjÃ¸re luftfilter         |

### VÃ¦ranalyse og ruteplanlegging

**VÃ¦rmelding**: Ikke bare temperatur - fokus pÃ¥ **nedbÃ¸r**, **vind** og **sikt**
**FÃ¸remelding**: Spesifikke forhold for din rute
**Rutevalg**: Velg hovedveier frem for smÃ¥veier ved dÃ¥rlig vÃ¦r
**Alternativeplaner**: Ha flere ruter tilgjengelig
**Tidsbuffer**: Beregn minst 50% ekstra reisetid

### NÃ¸dutstyr for vanskelige forhold


        
        
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
    

**Minimumsutstyr**:
* SnÃ¸skuffe og ispigger
* Startkabler og verktÃ¸y
* Varme klÃ¦r og tepper
* Matlaging og drikke
* Lommelykt og telefon-lader
* Kjetting (hvis aktuelt)

**Avansert utstyr**:
* GPS med offline-kart
* Satellitt-kommunikasjon
* FÃ¸rste-hjelp utstyr
* Sand/salt for grip
* Reservedeler (sikringer, vÃ¦ske)

## HÃ¥ndtering av kritiske situasjoner


        
        
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
    

NÃ¥r ting gÃ¥r galt under vanskelige forhold, er **systematisk hÃ¥ndtering** avgjÃ¸rende.

### Akutte situasjoner

**Plutselig skrens**:
1. **Ikke panikk** - hold rattet fast
2. **Korriger gradvis** i retning du vil
3. **Kontroller gassen** - verken gas eller brems
4. **Gjenvinn kontroll** fÃ¸r nye manÃ¸vrer

**Mister grip fullstendig**:
1. **LÃ¸ft gassen** umiddelbart
2. **Ikke brems** - kan forverre situasjonen
3. **Ret ut rattet** og vent pÃ¥ grip
4. **Vurder sidesone** for kontrollert stopp

**Null sikt i tÃ¥ke**:
1. **Ikke stopp pÃ¥ kjÃ¸rebanen**
2. **SÃ¸k parkeringsplass** eller bred skulder. For avanserte parkeringsstrategier ved vanskelige forhold, se [Parkering for viderekomne](/blogs/teori/parkering-for-viderekomne "Parkering for viderekomne - Avanserte teknikker og stressmestring").
3. **Sett pÃ¥ varsellys** og blinklys
4. **Forlat kjÃ¸retÃ¸yet** hvis trygt

### Kommunikasjon med nÃ¸detater

For **trafikkaksienter** eller **kjÃ¸retÃ¸yproblemer** under vanskelige forhold, er det viktig Ã¥ fÃ¸lge etablerte prosedyrer. Se [HÃ¥ndtering av nÃ¸dsituasjoner](/blogs/teori/handtering-av-nodsituasjoner "HÃ¥ndtering av nÃ¸dsituasjoner - Komplett guide til nÃ¸dhÃ¥ndtering i trafikken") for detaljert informasjon om kommunikasjon med nÃ¸detatene og sikring av ulykkesstedet under vanskelige vÃ¦rforhold.

**Informasjon Ã¥ gi**:
* **NÃ¸yaktig posisjon** (GPS-koordinater hvis mulig)
* **VÃ¦rforhold** og sikt
* **Skadeomfang** og antall involverte
* **Tilgang for nÃ¸detater** (veiforhold)
* **Akutt medisinsk behov**

## Teknologi og hjelpemidler


        
        
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
    

**Moderne kjÃ¸retÃ¸y** har mange [sikkerhetssystemer](/blogs/teori/kjoretoyets-sikkerhetsutstyr "KjÃ¸retÃ¸yets sikkerhetsutstyr - Komplett guide til aktivt og passivt sikkerhetsutstyr") som hjelper under vanskelige forhold, men **forstÃ¥else av begrensninger** er kritisk.

### Elektroniske kjÃ¸rehjelp-systemer

| System                 | Funksjon                          | Fordeler                            | Begrensninger                         |
|------------------------|-----------------------------------|-------------------------------------|---------------------------------------|
| **ABS**                | Forhindrer hjullÃ¥s                | Bevarer styreevne                   | Kan gi lengre bremsevei i snÃ¸         |
| **ESP/ESC**            | Stabilitetskontroll               | Forhindrer skrens                   | Kan ikke oppheve fysikkens lover      |
| **ASR/TCS**            | Anti-spinn kontroll               | Bedre akselerasjon pÃ¥ glatt fÃ¸re    | Kan redusere fremdrift i dyp snÃ¸      |
| **Diff-sperre**        | Jevner ut hjulspinn               | Bedre fremdrift                     | PÃ¥virker styreegenskaper              |

### Varsling- og informasjonssystemer

**VeivÃ¦r-apper**: Sanntidsinformasjon om fÃ¸reforhold
**Trafikkinformasjon**: Alternative ruter ved stenging
**KjÃ¸retÃ¸y-telemetri**: OvervÃ¥kning av dekk-trykk, temperatur
**NÃ¸dalarm**: Automatisk varsling ved kollisjon

## Spesielle kjÃ¸retÃ¸y-typer


        
        
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
    

Forskjellige kjÃ¸retÃ¸y krever **tilpassede teknikker** under vanskelige forhold.

### KjÃ¸ring med tilhenger

**Ekstra utfordringer**:
* **Lengre bremsevei** og ustabil bremsing
* **Ã˜kt vindmottagelighet** 
* **"Pisk-effekt"** ved sidevind eller skrens
* **Bakkeproblemer** ved dÃ¥rlig grep

**Tilpasset teknikk**:
* **Betydelig lavere hastighet** enn normal bil
* **Gradvis akselerasjon** og bremsing
* **StÃ¸rre avstand** til andre kjÃ¸retÃ¸y
* **Test bremse-balanse** ved trygg anledning

For mer om tilhengerkjÃ¸ring, se [KjÃ¸ring med tilhenger](/blogs/teori/kjoring-med-tilhenger "KjÃ¸ring med tilhenger - Komplett guide til sikker tilhengerkjÃ¸ring").

### Firehjulsdrift (4WD)

**Fordeler**:
* **Bedre akselerasjon** pÃ¥ glatt underlag
* **Ã˜kt fremdrift** i snÃ¸ og gjÃ¸rme
* **Stabilitet pÃ¥** ujevnt underlag

**Begrensninger**:
* **Samme bremsevei** som tohjulsdrift
* **Kan skape overselvsikkerhet**
* **Ã˜kt drivstofforbruk**
* **Ikke mirakel-lÃ¸sning** for is

## Juridiske aspekter


        
        
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
    

**LovpÃ¥lagte krav** og **ansvarsforhold** under vanskelige forhold.

### Dekk-regelverkene

For detaljerte regler, se [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Krav til mÃ¸nsterdybde og sesongdekk").

**Vinterdekk-krav**:
* **Periode**: 1. november - fÃ¸rste mandag etter pÃ¥ske
* **MÃ¸nster**: Minimum 3mm pÃ¥ vinterdekk
* **Piggdekk**: Tillatt 1. oktober - fÃ¸rste mandag etter pÃ¥ske

### Ansvar ved uhell

**Selv ved vanskelige forhold** gjelder:
* **Tilpasset hastighet** til forholdene
* **Forsvarlig kjÃ¸ring** uavhengig av vÃ¦rforhold
* **Erstatningsansvar** ved skade forÃ¥rsaket av uforsvarlig kjÃ¸ring

## MiljÃ¸hensyn


        
        
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
    

**Vanskelige kjÃ¸reforhold** pÃ¥virker ogsÃ¥ **miljÃ¸et** gjennom Ã¸kt drivstofforbruk og utslipp.

### Redusere miljÃ¸pÃ¥virkning

**Planlegging**:
* **Kombinere turer** for Ã¥ redusere kjÃ¸rebehov
* **UnngÃ¥ unÃ¸dvendige turer** ved dÃ¥rlig vÃ¦r
* **Velge kollektivtransport** nÃ¥r mulig

**KjÃ¸reteknikk**:
* **Jevn hastighet** reduserer forbruk
* **Forutseende kjÃ¸ring** minimerer brems-gas-sykluser
* **Optimal gir-bruk** for effektivitet

For mer om miljÃ¸vennlig kjÃ¸ring, se [MiljÃ¸vennlig kjÃ¸ring](/blogs/teori/miljovennlig-kjoring "MiljÃ¸vennlig kjÃ¸ring - Teknikker for bÃ¦rekraftig kjÃ¸ring").

## Ã˜velse og ferdighetutvikling


        
        
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
    

**Teoretisk kunnskap** mÃ¥ kompletteres med **praktisk Ã¸velse** under kontrollerte forhold.

### Sikre Ã¸vingsomrÃ¥der

**Store parkeringsplasser**: Uten trafikk, helst asfaltert
**KjÃ¸rebaner**: Spesielt designet for Ã¸velse
**Sikkerhetskurs**: Profesjonelt ledede kurs
**Simulatorer**: Risikofri trening pÃ¥ realistiske scenarioer

### Ã˜vingsÃ¸kter

**BasisÃ¸velser**:
* **Bremsing pÃ¥ glatt underlag** - fÃ¸le ABS-virkning
* **Skrenskontroll** - korrigere understyring/overstyring
* **NÃ¸dmanÃ¸vrer** - unnamanÃ¸vrer med beholt kontroll

**Avanserte Ã¸velser**:
* **Kombinerte manÃ¸vrer** - sving + brems
* **Hastighetstilpasning** - finne grenser for grep
* **OppbakkekjÃ¸ring** - stere uten hjulspinn

## Oppsummering og sjekkliste


        
        
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
    

**KjÃ¸ring under vanskelige forhold** krever **forberedelse**, **tilpasning** og **respekt** for naturrens krefter.

### NÃ¸kkelprinsipper

1. **Forberedelser**: KjÃ¸retÃ¸y, utstyr og mental innstilling
2. **Tilpasning**: Hastighet, avstand og kjÃ¸reteknikk
3. **Respekt**: For forhold, andre trafikanter og egne begrensninger
4. **Kommunikasjon**: Med andre trafikanter og nÃ¸detater
5. **Utvikling**: Kontinuerlig lÃ¦ring og Ã¸velse

### Sjekkliste fÃ¸r kjÃ¸ring under vanskelige forhold

| Kategori               | Sjekkliste                        | Aksjon ved avvik                    |
|------------------------|-----------------------------------|-------------------------------------|
| **KjÃ¸retÃ¸y**           | Dekk, lys, vÃ¦ske, oppvarming      | Service/reparasjon fÃ¸r avreise      |
| **Planlegging**        | VÃ¦r, rute, tid, nÃ¸dutstyr         | Utsette reise eller velge alternativ|
| **Kunnskap**           | ForstÃ¥ forholdene og risikoen     | Ã˜ke kompetanse gjennom kurs         |
| **Mental**             | Innstilt pÃ¥ forsiktig kjÃ¸ring     | Vurder Ã¥ ikke kjÃ¸re                 |
| **Kommunikasjon**      | Informer andre om planer          | Ha kontaktplan                      |

Med **riktig forberedelse**, **kunnskap** og **innstilling** kan du mestre de fleste vanskelige kjÃ¸reforhold trygt. **Respekt for naturens krefter** og **tilpasning av kjÃ¸ring** er nÃ¸kkelen til sikker transport under alle forhold.

For ytterligere informasjon om relaterte emner, se [Defensiv kjÃ¸ring](/blogs/teori/defensiv-kjoring "Defensiv kjÃ¸ring - Proaktive kjÃ¸reteknikker for Ã¸kt sikkerhet"), [Oppmerksomhet og samhandling](/blogs/teori/oppmerksomhet-og-samhandling "Oppmerksomhet og samhandling - Viktige prinsipper") og [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - SÃ¸rg for at bilen er i god stand").\n  </div>\n</div>