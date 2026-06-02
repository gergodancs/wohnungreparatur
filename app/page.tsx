import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-accent selection:text-white">
      {/* HERO SECTION */}
      <header className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full text-center sm:text-left space-y-6 mt-10">
        <span className="inline-block bg-accent/10 text-accent font-bold tracking-wide uppercase text-xs px-3 py-1.5 rounded-md">
          Spezialist für Oberflächen & Schönheitsreparaturen in Wien
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Makellose Oberflächen. <br />
          <span className="text-accent">Unsichtbare Reparaturen.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-medium">
          Ich habe mich auf die hochwertige Wiederherstellung von beschädigten
          Wänden, exklusiven Holzbauteilen und fugenlosen Oberflächen
          spezialisiert. Für ein Wohngefühl auf höchstem Niveau.
        </p>

        {/* FŐ CTA GOMB - WHATSAPP */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a
            href="https://wa.me/436601234567" // TODO: Cseréld ki a saját számodra
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-emerald-600 px-8 text-base font-bold text-white transition-all hover:bg-emerald-700 shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.418 1.453 5.489 0 9.954-4.466 9.958-9.959.002-2.661-1.034-5.163-2.917-7.047C17.225 1.817 14.717 1.03 12.056 1.03c-5.49 0-9.956 4.468-9.96 9.96-.001 1.93.502 3.81 1.458 5.412L2.52 21.642l5.127-1.346z" />
            </svg>
            Fotos senden & Angebot erhalten
          </a>
          <a
            href="#leistungen"
            className="inline-flex h-14 items-center justify-center rounded-xl border border-foreground/20 px-8 text-base font-semibold transition-all hover:bg-foreground/5"
          >
            Spezialleistungen
          </a>
        </div>
      </header>

      {/* PHILOSOPHIE / PRÉMIUM FIX ÁR BLOKK */}
      <section className="bg-muted py-16 px-6 border-y border-foreground/5">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Wertsteigerung statt teurem Komplettaustausch
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Egal ob Wasserschäden, Kratzer im edlen Holz oder Risse in der Wand
            – statt Baustellenlärm und teurem Neukauf biete ich Ihnen die{" "}
            <strong>präzise, optisch unsichtbare Rekonstruktion</strong> des
            Bestands. Jedes Projekt wird zum fairen, im Voraus vereinbarten
            Festpreis umgesetzt.
          </p>
        </div>
      </section>

      {/* LEISTUNGEN SECTION */}
      <section
        id="leistungen"
        className="py-20 px-6 max-w-5xl mx-auto w-full space-y-12"
      >
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Fokussierte Spezialisierungen
          </h2>
          <p className="text-foreground/60 mt-2">
            Präzisionsarbeit für anspruchsvolle Wohnkonzepte
          </p>
        </div>

        {/* BENTO GRID / LEISTUNGEN KÁRTYÁK (EMOJIK NÉLKÜL, MINIMÁL STÍLUSBAN) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 01. Wand- & Spachtelreparaturen */}
          <div className="p-8 rounded-2xl bg-muted border border-foreground/5 space-y-3 shadow-sm">
            <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase block">
              [ 01 . WAND ]
            </span>
            <h3 className="text-xl font-bold">
              Perfekte Wand- & Spachtelarbeiten
            </h3>
            <p className="text-sm text-foreground/70">
              Keine schnellen Discounter-Anstriche. Ich sorge für makellose
              Oberflächen:
            </p>
            <ul className="space-y-2 text-foreground/90 text-sm font-medium pt-2">
              <li>• Professionelle Beseitigung von Wasserschäden & Rissen</li>
              <li>
                • Unsichtbares Verspachteln von tiefen Löchern und Ausbrüchen
              </li>
              <li>• Q3 / Q4 High-End Oberflächenfinish für exklusive Optik</li>
              <li>• Präzise Beiarbeiten nach Elektriker- oder Stemmarbeiten</li>
            </ul>
          </div>

          {/* 02. Exklusive Holzreparatur */}
          <div className="p-8 rounded-2xl bg-muted border border-foreground/5 space-y-3 shadow-sm">
            <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase block">
              [ 02 . HOLZ ]
            </span>
            <h3 className="text-xl font-bold">Holzreparatur & Smart Repair</h3>
            <p className="text-sm text-foreground/70">
              Rettung statt Entsorgung von historischen oder hochwertigen
              Bauteilen:
            </p>
            <ul className="space-y-2 text-foreground/90 text-sm font-medium pt-2">
              <li>
                • Beseitigung von Kratz- und Bissspuren an Türrahmen (z.B. durch
                Haustiere)
              </li>
              <li>
                • Wiederherstellung von zersplitterten vagy ausgebrochenen
                Holzelementen
              </li>
              <li>
                • Reparatur von wassergeschädigten Holzverkleidungen und
                Möbelteilen
              </li>
              <li>
                • Feine farbliche und strukturelle Anpassung der Schadstellen
                (unsichtbares Finish)
              </li>
            </ul>
          </div>

          {/* 03. Fugenloses Mikrozement */}
          <div className="p-8 rounded-2xl bg-muted border border-foreground/5 space-y-3 shadow-sm md:col-span-2">
            <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase block">
              [ 03 . DESIGN ]
            </span>
            <h3 className="text-xl font-bold">
              Exklusiver Mikrozement (Mikrozement-Beschichtungen)
            </h3>
            <p className="text-sm text-foreground/70">
              Modernisierung auf höchstem ästhetischem Niveau für Bäder, Böden
              und Akzentwände:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground/90 text-sm font-medium pt-2">
              <li>
                • Fugenlose, moderne Optik im Badezimmer (direkt auf Fliesen
                möglich)
              </li>
              <li>
                • Hochbelastbare, wasserfeste und pflegeleichte Oberflächen
              </li>
              <li>
                • Individuelle Strukturen und Farbnuancen nach Ihren Wünschen
              </li>
              <li>• Edle Haptik, die den Wert der gesamten Immobilie hebt</li>
            </ul>
          </div>
        </div>

        {/* --- IDE JÖN A CAROUSEL / BEFORE-AFTER SLIDER --- */}
        <div className="pt-8">
          <div className="text-center md:text-left mb-6">
            <h3 className="text-xl font-bold tracking-tight">
              Ergebnisse, die für sich sprechen
            </h3>
            <p className="text-sm text-foreground/60">
              Echte Vorher-Nachher Aufnahmen meiner Arbeiten in Wien
            </p>
          </div>

          {/* Ez a konténer lesz a csúszka helye. Egyelőre egy letisztult placeholder, amit a következő lépésben feltöltünk az interaktív Swiper/Slider kóddal */}
          <div className="w-full h-80 md:h-[450px] rounded-2xl bg-muted border border-foreground/5 flex items-center justify-center relative overflow-hidden group shadow-inner">
            <div className="text-center p-6 space-y-2">
              <div className="text-accent text-sm font-mono tracking-wider">
                [ INTERAKTIVER BEFORE/AFTER CAROUSEL PLACEHOLDER ]
              </div>
              <p className="text-xs text-foreground/50 max-w-md mx-auto">
                Ide fogjuk behúzni a csúsztatható kép-komponenst, ahol az ügyfél
                látja majd a falfelújítások és a famunkák precizitását.
              </p>
            </div>
          </div>
        </div>
        {/* --- CAROUSEL VÉGE --- */}
      </section>

      {/* ANFRAGE PROCESS */}
      <section className="bg-muted py-16 px-6 border-t border-foreground/5">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            In wenigen Schritten zum Festpreis:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-bold text-accent text-lg">
                1. Foto machen
              </div>
              <p className="text-foreground/70">
                Fotografieren Sie die Schadstelle oder die zu bearbeitende
                Fläche.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-accent text-lg">2. Senden</div>
              <p className="text-foreground/70">
                Kurze Beschreibung per WhatsApp oder Kontaktformular abschicken.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-accent text-lg">
                3. Festpreis erhalten
              </div>
              <p className="text-foreground/70">
                Sie erhalten ein verbindliches Pauschalangebot – ohne versteckte
                Kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-foreground/5 text-center text-xs text-foreground/40 max-w-5xl mx-auto w-full">
        <p>
          © {new Date().getFullYear()} Wohnungsreparatur Wien. Ästhetische
          Oberflächenrekonstruktion.
        </p>
      </footer>
    </div>
  );
}
