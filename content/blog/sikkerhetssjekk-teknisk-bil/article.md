---
title: "Sikkerhetssjekk (teknisk bil)"
date: 2025-08-06
draft: false
author: "Eteo Team"
description: "Lær hvordan du utfører en daglig sikkerhetssjekk av bilens tekniske tilstand for trygg kjøring. Viktig kunnskap for teoriprøven klasse B."
categories: ["Driving Theory"]
tags: ["driving", "theory", "safety"]
featured_image: "/images/blog/sikkerhetssjekk-teknisk-bil/sikkerhetssjekk-teknisk-bil-image.svg"
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
    <img src="/images/blog/sikkerhetssjekk-teknisk-bil/sikkerhetssjekk-teknisk-bil-image.svg" alt="Sikkerhetssjekk (teknisk bil)" class="img-fluid rounded">
  </div>

  <div class="toc-container mt-4 mb-4">
    <h3>Table of Contents</h3>
    {{< toc >}}
  </div>

  <div class="blog-body">\n{{< toc >}}}}
{{< toc >}}}}
{{< toc >}}}}
Sikkerhetssjekk (teknisk bil) er en **rutinemessig sjekk** som fÃ¸rer til at du kan avdekke tekniske feil og mangler fÃ¸r du starter kjÃ¸ringen. En god sikkerhetssjekk bidrar til **forebygging av ulykker** og reduserer risikoen for uventede driftsstopp.

For en overordnet guide til krav om **forskriftsmessig og forsvarlig stand**, se [Forskriftsmessig og forsvarlig stand](/blogs/teori/forskriftsmessig-og-forsvarlig-stand "Forskriftsmessig og forsvarlig stand - Overordnet guide til lovpÃ¥lagt stand").


        
        
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
    

## Hva er sikkerhetssjekk?

En sikkerhetssjekk omfatter en rekke visuelle og funksjonelle kontroller av bilens **kritiske komponenter**. Dette er en del av fÃ¸rerens ansvar og er ogsÃ¥ lovpÃ¥lagt i Vegtrafikkloven Â§â€¯13.

## Lovgrunnlag

| Regulering                     | Beskrivelse                                                    |
|--------------------------------|----------------------------------------------------------------|
| Vegtrafikkloven Â§â€¯13           | Krav til teknisk forsvarlig stand fÃ¸r kjÃ¸ring                   |
| KjÃ¸retÃ¸yforskriften kap. 2     | PÃ¥litelige krav til vedlikehold og funksjon                     |
| [EU-kontroll (PKK) kap. 10](/blogs/teori/eu-kontroll "EU-kontroll (PKK) â€“ Periodisk kjÃ¸retÃ¸ykontroll i Norge") | Periodisk kontroll av kjÃ¸retÃ¸yets tekniske stand |

Se ogsÃ¥ [Lover og forskrifter](/blogs/teori/lover-og-forskrifter "Lover og forskrifter - Oversikt over norske trafikklover og forskrifter").

## Daglig teknisk sjekk: sjekkliste

| Sjekkpunkt               | Hva du skal gjÃ¸re                                          |
|--------------------------|------------------------------------------------------------|
| **Lys og signaler**      | Kontroller at alle lys fungerer og er rene                 |
| **Bremser**              | Sjekk bremsepedalens motstand og sjekk bremsevÃ¦skenivÃ¥      |
| **Dekk**                 | Inspiser mÃ¸nsterdybde, dekktrykk og eventuelle skader       |
| **Glass og speil**       | SÃ¸rg for at vinduer og speil er uten sprekker og rene      |
| **[Vindusviskere og vindusspylere](/blogs/teori/vindusviskere-vindusspylere "Vindusviskere og vindusspylere - Sikt, is og dugg")** | Sjekk viskerblader, spyleranlegg og spylervÃ¦ske           |
| **VÃ¦ske- og oljenivÃ¥**   | Sjekk motorolje, kjÃ¸levÃ¦ske og bremsevÃ¦ske                  |
| **Batteri**              | Kontroller spenning, festing og at terminaler er rene      |
| **Sikkerhetsutstyr**     | Bekreft at varseltrekant, [fÃ¸rstehjelpsutstyr](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker - Din guide til nÃ¸dhjelp ved trafikkulykker") og refleksvest er pÃ¥ plass |

## Utdypning av sjekkpunkter

### Lys og signaler

Sjekk nÃ¦rlys, fjernlys, blinklys, bremselys og tÃ¥kelys. RengjÃ¸r linser og juster om nÃ¸dvendig. Se [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Komplett guide til lysbruk og signalering") for mer detaljer.

### Dekk og hjul

UndersÃ¸k mÃ¸nsterdybde med dybdemÃ¥ler og kontroller dekktrykk. BesÃ¸k [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Krav til mÃ¸nsterdybde, piggdekk og kjetting") for lovkrav og anbefalinger. Se ogsÃ¥ vÃ¥r [Dekk og vedlikehold](/blogs/teori/dekk-og-vedlikehold "Dekk og vedlikehold - Slitasje, dimensjoner, merking, lufttrykk, mÃ¸nsterdybde og piggdekk") for en fullstendig guide til teknisk vedlikehold av dekk.

### Sikkerhetsutstyr

FÃ¸r kjÃ¸ring mÃ¥ du forsikre deg om at varseltrekant, refleksvest og [fÃ¸rstehjelpsutstyr](/blogs/teori/forstehjelp-og-opptreden-ved-ulykker "FÃ¸rstehjelp og opptreden ved ulykker - Din guide til nÃ¸dhjelp ved trafikkulykker") er lett tilgjengelig. For mer om sikring av last og passasjerer, se [Sikring av last og passasjerer](/blogs/teori/sikring-av-last-og-passasjerer "Sikring av last og passasjerer - Guide til sikker last- og passasjersikring").

## Konsekvenser av manglende sikkerhetssjekk

- **Bot eller gebyr** ved kontroll pÃ¥ veien                             
- **KjÃ¸reforbud** ved manglende godkjenning hos Statens vegvesen       
- **Ã˜kt ulykkesrisiko** ved uoppdagede feil                           
- **Forsikringsavslag** ved ulykker forÃ¥rsaket av feil ved kjÃ¸retÃ¸yet  

## Relaterte artikler

- [Bilens tekniske deler (Forskriftsmessig stand)](/blogs/teori/bilens-tekniske-deler-forskriftsmessig-stand "Bilens tekniske deler - Forskriftsmessig stand")  
- [Vedlikehold av bilen](/blogs/teori/vedlikehold-av-bilen "Vedlikehold av bilen - Guide til regelmessig service og inspeksjon")  
- [Bruk av lys og signaler](/blogs/teori/bruk-av-lys-og-signaler "Bruk av lys og signaler - Komplett guide til lysbruk og signalering")  
- [Regler for dekk og kjetting](/blogs/teori/regler-for-dekk-og-kjetting "Regler for dekk og kjetting - Krav til mÃ¸nsterdybde, piggdekk og kjetting")  
- [Dekk og vedlikehold](/blogs/teori/dekk-og-vedlikehold "Dekk og vedlikehold - Slitasje, dimensjoner, merking, lufttrykk, mÃ¸nsterdybde og piggdekk")  
- [Sikring av last og passasjerer](/blogs/teori/sikring-av-last-og-passasjerer "Sikring av last og passasjerer - Guide til sikker last- og passasjersikring")  
- [Bremsefeil](/blogs/teori/bremsefeil "Bremsefeil - Vanlige feil i bremsesystemet")\n  </div>\n</div>