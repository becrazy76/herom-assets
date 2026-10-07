# Aion2Meter Landingpage

Eigenständige deutsche Landingpage im HEROM-Stil. Die Hauptwebseite wird nicht verändert. Die Windows-App ist ein anderes Projekt.

## Quelle und Veröffentlichung

- Öffentliche Hauptadresse: `https://www.herom76.de/aion2meter` (auch ohne www erreichbar).
- Die Hauptseite nutzt ausschließlich externe Rewrites in `next.config.ts`: `/aion2meter` und `/aion2meter/:path*` werden an das eigenständige Projekt weitergereicht.
- HTML verwendet `<base href="/aion2meter/">`; die Vercel-Konfiguration und der lokale Server bedienen diesen Präfix ebenfalls. Bilder, PDF, Skripte, Metadaten und Sprunglinks funktionieren damit unter beiden Adressen.

- GitHub: `becrazy76/herom-assets`, Branch `main`, Ordner `standalone/aion2meter`.
- Eigenes Vercel-Projekt: `aion2meter` (`prj_wFMlg8XUykLAq0g6kXAeqgS03wDI`).
- Vercel-Team: `herom` (`team_FtyxgIi2bxArJap43IBiI53a`).
- Root Directory in Vercel: `standalone/aion2meter`.
- Framework: Other / kein Framework; Output Directory: `public`.
- Git-Integration: Änderungen an `main` werden automatisch veröffentlicht.
- Die endgültige URL und geprüfte Veröffentlichung stehen in `HANDOFF.md`.

## Lokal starten

Voraussetzung: Node.js 22 oder neuer. Keine Abhängigkeiten, Installation oder Build nötig.

```sh
cd standalone/aion2meter
npm run dev
```

Öffnen: `http://127.0.0.1:4173`. Alternativer Port über die Umgebungsvariable `PORT`.

```sh
npm run check
```

## Dateien

| Datei | Aufgabe |
|---|---|
| `public/index.html` | Inhalt, Navigation, Download-Fallbacks, FAQ und Metadaten |
| `public/styles.css` | HEROM-Farben, Typografie und responsive Darstellung |
| `public/app.js` | Beispieldaten, Tabs, Spielerdetails, Release-Metadaten |
| `public/release.json` | Version, Download, Release-Link, Größe, SHA-256 |
| `public/assets/` | Originalansichten, Favicon und Beta-Anleitung |
| `scripts/serve.mjs` | Lokaler Server mit ausschließlich nativen Node-Modulen |
| `vercel.json` | Statisches Hosting und Sicherheitsheader |
| `CLAUDE.md` | Übergabe und Arbeitsregeln für Claude Code |
| `HANDOFF.md` | Verifizierter Stand, Zielsysteme und nächste Schritte |

## Neue Meter-Version veröffentlichen

1. Die Windows-App im separaten App-Projekt erstellen und den geprüften Installer als GitHub-Release veröffentlichen.
2. `public/release.json` mit verifiziertem Release, Dateigröße und SHA-256 aktualisieren.
3. Die Download-Links und Versionsangaben in `public/index.html` ebenfalls aktualisieren, damit ohne JavaScript oder bei Netzwerkfehlern der richtige Download funktioniert.
4. Die Anleitung in `public/assets/anleitung.pdf` ersetzen, wenn sie geändert wurde.
5. Bei geänderten Funktionen die Texte und Screenshots aktualisieren; Beta-Grenzen weiterhin korrekt benennen.
6. `npm run check` und die unten beschriebenen Browser-Prüfungen durchführen, committen und nach `main` pushen.

Die App-Update-Infrastruktur bleibt unabhängig: Der Meter verwendet weiterhin die bereits bestehende signierte Versionsinformation auf `herom76.de`. Diese Landingpage verändert weder den Client noch dessen Update-Route.

## Prüfung vor Veröffentlichung

- Desktop und mobile Breiten ab 320 Pixel: keine horizontale Überbreite.
- Wechsel Schaden/Heilung, Spieleranklicken, Tastaturwechsel in den Tabs.
- FAQ öffnen/schließen und alle Sprunglinks.
- Download verweist auf den tatsächlichen Installer; PDF und Bilder sind erreichbar.
- JavaScript-Konsole ohne Fehler; HTML-Fallback für Downloads ohne JavaScript.
- Nach Veröffentlichung öffentliche Erreichbarkeit ohne Vercel-Anmeldung prüfen.

## Inhalt und Quellen

Verifizierter Produktstand vom 07.10.2026: Beta 0.1.6. Installer: `https://github.com/becrazy76/herom-assets/releases/tag/aion2meter-v0.1.6`. App und Landingpage werden im Meter-Chat gemeinsam betreut; technische Hosting-Projekte bleiben getrennt.

Funktionen und Grenzen stammen aus dem lokalen Projekt `Aion2Meter`, dem Chat **Build Aion2Meter prototype** (`01a11299-2e27-7390-b167-86672b34882f`) und dessen `installer/BETA-HINWEISE.txt`. Ältere Stellen in der App-README enthalten inzwischen überholte Aussagen (z. B. keine Update-Funktion); sie wurden nicht als aktuelle Produktbehauptungen übernommen.

Die interaktive Gruppenansicht verwendet ausdrücklich markierte synthetische Beispieldaten. Sie ist kein echtes Messergebnis und keine Behauptung einer vollständig verifizierten Gruppenmessung. Die zwei PNGs sind echte, bereits im Projekt vorhandene Solo-/Spieleransichten. Keine Spielgrafiken oder externen Schriften werden geladen. Kein Tracking, keine Cookies, kein Formular und kein Backend.

## Spätere Integration / Umzug

`public/` kann unverändert auf jedem statischen Hosting eingesetzt werden. Für einen Umzug zu Next.js sind die Abschnitte in semantischem HTML und die Design-Tokens in einer einzelnen CSS-Datei organisiert. Es gibt keine Abhängigkeit von Sites, einem proprietären Builder oder einer UI-Bibliothek. Eine Subdomain kann ausschließlich am eigenen Vercel-Projekt ergänzt werden.
