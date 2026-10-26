# Grepp

En gratis, mobilvänlig webbapp för att lära sig och öva gitarr och bas: utforska grepp och skalor, lyssna på toner, stäm med referensljud och spela över egna loopar.

[Öppna Grepp](https://f1mp.github.io/Grepp/)

## Funktioner

- **Gitarrgrepp:** sökbart bibliotek med fingerplaceringar, ackordtoner och uppspelning.
- **Basvy:** 36 grepp och arpeggion med klickbara toner, skalor och valbar position på en fyrsträngad greppbräda.
- **Ackord & skalor:** 12 grundtoner × 18 ackordtyper (216 kombinationer) med toninnehåll och skalförslag. Visa skalor på gitarrens greppbräda och lyssna med tonmarkeringar. Teoribiblioteket är större än urvalet av gitarrgrepp.
- **Stämverktyg:** referenstoner per sträng med valbar upprepning. Gitarr har 16 stämningsval, bland annat Drop D, öppna stämningar och 7-/8-strängat; bas har 6 val för 4–6 strängar. Stämningen görs på gehör.
- **Mikrofonanalys:** föreslår dur- och mollackord i realtid med signalnivå och säkerhetsindikator. Resultatet är en uppskattning och påverkas av ljudmiljön.
- **Övning & loopar:** bygg ackordföljder med justerbart tempo och metronom, fyra slag per ackord. Spela in tre melodispår på upp till 30 sekunder vardera och loopa dem separat eller tillsammans, med möjlighet att anpassa looplängden till det kortaste spåret.
- **Språk & enheter:** responsiv layout och språkval för svenska, engelska, spanska, franska, tyska, italienska, japanska, thailändska samt förenklad och traditionell kinesiska. Språkvalet sparas lokalt; vissa etiketter är fortfarande på svenska.

## Kör lokalt

Använd Node.js **22.13.0 eller senare** och npm på datorn.

```bash
git clone https://github.com/f1mp/Grepp.git
cd Grepp
npm install
npm run dev
```

Öppna adressen som skrivs ut i terminalen. För en bestämd port:

```bash
npm run dev -- --port 3000
```

Öppna då [localhost:3000](http://localhost:3000).

| Kommando | Användning |
| --- | --- |
| `npm run build` | Bygg projektet med Vinext. |
| `npm start` | Kör det byggda serverresultatet lokalt med Wrangler; kräver byggsteget först. |
| `npm run lint` | Kontrollera koden med Oxlint. |

Mikrofonanalys och inspelning kräver mikrofontillstånd och HTTPS eller localhost. Ljuduppspelningen laddar instrumentljud via nätet. På mobilen kan du använda den publicerade webbappen; den lokala byggkedjan använder Cloudflares workerd och är inte avsedd för Android/Termux.

## Teknik & data

Grepp använder React, TypeScript och Vinext/Vite med Next.js App Router-struktur. [GitHub Pages-flödet](.github/workflows/deploy-pages.yml) bygger med Node.js 22 och `GITHUB_PAGES=true`, använder sökvägen `/Grepp/` och publicerar `dist/client` vid push till `main`.

Mikrofonanalysen sker lokalt i webbläsaren. Melodiloopar lagras tillfälligt i webbläsarens minne och försvinner vid omladdning; ljudet laddas inte upp av appen. Cloudflare Web Analytics är inlagt i sidlayouten för besöksstatistik.

## Stöd & licens

Vill du stödja fortsatt utveckling? [☕ Buy Me a Coffee](https://buymeacoffee.com/niacloneq).

Grepp publiceras under [MIT-licensen](LICENSE).
