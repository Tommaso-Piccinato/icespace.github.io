import heroGlacier from "@/assets/hero-glacier.jpg";
import vat1986 from "@/assets/vatnajokull-1986.jpg";
import vat2024 from "@/assets/vatnajokull-2024.jpg";
import sol1990 from "@/assets/solheimajokull-1990.jpg";
import sol2024 from "@/assets/solheimajokull-2024.jpg";
import ok1986 from "@/assets/okjokull-1986.jpg";
import ok2019 from "@/assets/okjokull-2019.jpg";
import { BeforeAfter } from "@/components/BeforeAfter";

const glaciers = [
  {
    name: "Vatnajökull",
    subtitle: "Il gigante europeo",
    description:
      "Il più grande ghiacciaio d'Europa per volume copre ancora circa l'8% della superficie islandese, ma ha perso oltre 400 km³ di ghiaccio dal 1890. I suoi margini si ritirano di decine di metri ogni anno.",
    before: vat1986,
    after: vat2024,
    beforeLabel: "1986",
    afterLabel: "2024",
  },
  {
    name: "Sólheimajökull",
    subtitle: "La lingua che si ritira",
    description:
      "Una delle lingue glaciali più monitorate d'Islanda. Dal 1990 si è ritirata di oltre 1 km, lasciando dietro di sé un grande lago proglaciale formatosi dall'acqua di fusione.",
    before: sol1990,
    after: sol2024,
    beforeLabel: "1990",
    afterLabel: "2024",
  },
  {
    name: "Okjökull",
    subtitle: "Il primo ghiacciaio perduto",
    description:
      "Nel 2014 Okjökull è stato dichiarato ufficialmente «morto»: non aveva più massa sufficiente per muoversi. Nel 2019 l'Islanda gli ha dedicato una targa commemorativa: è diventato il simbolo globale della crisi climatica.",
    before: ok1986,
    after: ok2019,
    beforeLabel: "1986",
    afterLabel: "2019",
  },
];

const stats = [
  { value: "−9 Gt", label: "Massa glaciale persa ogni anno in Islanda" },
  { value: "+1.5 °C", label: "Aumento della temperatura media dal 1900" },
  { value: "400+", label: "Ghiacciai islandesi monitorati da Sentinel-2" },
  { value: "2200", label: "Anno previsto della scomparsa totale dei ghiacciai" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroGlacier}
          alt="Ghiacciaio islandese ripreso dall'alto con crepacci di ghiaccio blu e fiumi di fusione turchesi"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />

        <header className="relative z-10 container mx-auto flex items-center justify-between py-8">
          <div className="flex items-center gap-3 text-snow">
            <div className="w-9 h-9 rounded-full gradient-glow shadow-soft animate-drift" />
            <span className="font-medium tracking-wide">Jökull · Islanda</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-snow/80">
            <a href="#intro" className="hover:text-snow transition-colors">Crisi</a>
            <a href="#satellite" className="hover:text-snow transition-colors">Satellite</a>
            <a href="#dati" className="hover:text-snow transition-colors">Dati</a>
          </nav>
        </header>

        <div className="relative z-10 container mx-auto h-[calc(100%-7rem)] flex flex-col justify-end pb-20">
          <div className="max-w-3xl fade-up">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-snow border border-snow/30 backdrop-blur">
              Osservatorio climatico · Copernicus
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-snow leading-[1.02] text-balance">
              I ghiacciai d'Islanda<br />
              <span className="italic text-[hsl(var(--ice-light))]">stanno svanendo.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-snow/85 max-w-xl text-balance">
              Un viaggio visivo dentro la più grande trasformazione del paesaggio europeo,
              raccontata dai satelliti Sentinel del programma Copernicus.
            </p>
            <a
              href="#intro"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-snow text-[hsl(var(--ice-deep))] font-medium hover:bg-[hsl(var(--ice-light))] transition-colors shadow-glacier"
            >
              Inizia l'esplorazione
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" className="gradient-section py-28 md:py-40">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent text-sm uppercase tracking-[0.25em]">01 · Il contesto</span>
          <h2 className="mt-4 text-4xl md:text-6xl text-primary text-balance">
            Quando il bianco diventa nero.
          </h2>
          <div className="mt-10 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              L'Islanda è una terra modellata dal ghiaccio. I suoi <strong className="text-foreground">269 ghiacciai</strong> coprono circa
              il 10% del territorio nazionale e custodiscono più acqua dolce di tutti i laghi d'Europa messi insieme.
              Ma da oltre un secolo questa armatura di cristallo si sta consumando.
            </p>
            <p>
              Il riscaldamento globale ha portato le temperature medie islandesi a salire di
              <strong className="text-foreground"> +1,5 °C dal 1900</strong>, con un'accelerazione drammatica negli ultimi tre decenni.
              Ogni estate i ghiacciai perdono più massa di quanta ne accumulino in inverno: il bilancio è
              ininterrottamente negativo dal 1995.
            </p>
            <p>
              Le conseguenze vanno oltre il paesaggio: l'acqua di fusione altera le correnti oceaniche, modifica
              gli ecosistemi costieri, riattiva l'attività vulcanica sotto la crosta alleggerita e contribuisce
              all'innalzamento globale dei mari. Quello che vediamo dall'alto è la fotografia di un mondo che cambia.
            </p>
          </div>
        </div>
      </section>

      {/* SATELLITE COMPARISONS */}
      <section id="satellite" className="py-28 md:py-40 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-20">
            <span className="text-accent text-sm uppercase tracking-[0.25em]">02 · Vista dallo spazio</span>
            <h2 className="mt-4 text-4xl md:text-6xl text-primary text-balance">
              Trent'anni in un cursore.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-balance">
              Trascina la maniglia per confrontare le immagini satellitari della costellazione Sentinel
              del Copernicus Browser. Stesso luogo, anni diversi.
            </p>
          </div>

          <div className="space-y-28">
            {glaciers.map((g, i) => (
              <article
                key={g.name}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <BeforeAfter
                    beforeSrc={g.before}
                    afterSrc={g.after}
                    beforeLabel={g.beforeLabel}
                    afterLabel={g.afterLabel}
                    alt={`Confronto satellitare di ${g.name}`}
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-accent">
                    {g.beforeLabel} → {g.afterLabel}
                  </span>
                  <h3 className="mt-3 text-3xl md:text-5xl text-primary">{g.name}</h3>
                  <p className="mt-2 italic text-muted-foreground text-lg">{g.subtitle}</p>
                  <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{g.description}</p>
                  <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-8 h-px bg-border" />
                    Fonte: Copernicus Sentinel-2 · ESA
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="dati" className="py-28 md:py-40 gradient-ice text-snow">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-[hsl(var(--ice-glow))] text-sm uppercase tracking-[0.25em]">03 · I numeri</span>
            <h2 className="mt-4 text-4xl md:text-6xl text-snow text-balance">
              Ciò che misuriamo, lo perdiamo.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-snow/10 rounded-3xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[hsl(var(--ice-deep))] p-8 md:p-10">
                <div className="text-4xl md:text-5xl font-serif text-[hsl(var(--ice-glow))]">{s.value}</div>
                <div className="mt-4 text-snow/75 text-sm leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <footer className="py-20 bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl text-primary text-balance">
            Osservare è il primo passo per agire.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Esplora di persona le immagini satellitari aggiornate dei ghiacciai islandesi grazie al programma
            Copernicus dell'Unione Europea.
          </p>
          <a
            href="https://browser.dataspace.copernicus.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full gradient-ice text-snow font-medium shadow-glacier hover:opacity-90 transition-opacity"
          >
            Apri il Copernicus Browser
            <span aria-hidden>↗</span>
          </a>
          <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
            Dati & immagini: Copernicus Sentinel · ESA · Icelandic Meteorological Office.
            <br />Progetto divulgativo · {new Date().getFullYear()}.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
