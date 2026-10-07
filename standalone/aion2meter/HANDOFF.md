# Übergabe — Aion2Meter Landingpage

Stand: 07.10.2026. Neue, unabhängige deutsche Landingpage für Aion2Meter Beta 0.1.4 im HEROM-Stil.

## Implementierung

- Zweistufige HEROM-Navigation; dunkle Flächen, blaue Signalfarbe, helle Schrift, dezente Messing-Akzente.
- Hero mit direktem Installer-Download und interaktiver Damage-/Heal-Vorschau.
- Klickbare Spielerdetails, Fähigkeiten und Anteile anhand ausdrücklich gekennzeichneter Beispieldaten.
- Produktfunktionen, echte Originalansichten, Einrichtung, Hotkeys, Beta-Grenzen, FAQ und Downloadbereich.
- Lokale Beta-Anleitung als PDF; verifizierter GitHub-Release 0.1.4 als Downloadziel.
- Keine Änderungen an der Hauptwebseite oder der App-Update-Infrastruktur.
- Ohne Framework oder Build verwendbar; saubere Trennung von Inhalt, Gestaltung und Vorschau.

## Ziele

- Gewünschte Hauptadresse: `https://www.herom76.de/aion2meter`, auch über `https://herom76.de/aion2meter` erreichbar.
- Nur die Pfadzuordnung wird in der Hauptwebseite ergänzt; die Landingpage bleibt unabhängig veröffentlicht.
- Assets und relative Links sind über den Basis-Pfad `/aion2meter/` aufgelöst. Das Vercel-Projekt und der lokale Server unterstützen diesen Pfad ebenfalls.

- GitHub: `becrazy76/herom-assets`, `main`, `standalone/aion2meter`.
- Vercel: `aion2meter`, Projekt `prj_wFMlg8XUykLAq0g6kXAeqgS03wDI`, Team `herom`.
- Die veröffentlichten Dateien werden aus `public` des eigenen Ordners ausgeliefert.

## Verifizierte Veröffentlichung und Prüfung

- Öffentliche Hauptadresse: `https://www.herom76.de/aion2meter` (auch ohne www erreichbar).
- Technische Hosting-Adresse: `https://aion2meter.vercel.app`.
- Erstveröffentlichung: Vercel-Produktion, Zustand READY.
- Quellcommit: `fbf29af0c493592051698f9d6405bf713afd6db3`.
- Deployment: `dpl_GPUxdWrcEMtZHWALqeAQs15WwEZp`.
- Der Nutzer hat am 07.10.2026 ausdrücklich die öffentliche Freigabe bestätigt. Der Anmeldeschutz wurde ausschließlich für das neue Projekt aion2meter abgeschaltet. Öffentliche Prüfung bestanden: Startseite und PDF HTTP 200, Release-Metadaten Beta 0.1.4, keine Vercel-Loginseite.
- JavaScript-Syntaxprüfung bestanden.
- Schaden-/Heilungswechsel, Spielerklick und Detailwechsel getestet.
- Tastaturwechsel der Tabs mit Pfeiltasten getestet.
- Responsive Layout bei 320, 390, 768 und 1280 Pixel geprüft; keine horizontale Überbreite.
- FAQ-Ausklappfunktion getestet.
- PDF und Produktbilder lokal erreichbar (HTTP 200); Impressum und Datenschutz auf herom76.de erreichbar (HTTP 200).
- Installer ist im öffentlichen GitHub-Release 0.1.4 vorhanden; Dateigröße und Prüfsumme stimmen mit `release.json` überein.
- Originalansichten und PDF sind in diesem Landingpage-Projekt mit enthalten; kein Zugriff auf den lokalen App-Ordner zur Auslieferung notwendig.

Die Landingpage ist öffentlich erreichbar. Die bestehende Hauptseite bleibt unverändert.

## Sinnvolle spätere Arbeiten

1. Optional eigene Subdomain am Vercel-Projekt hinzufügen.
2. Nach weiterem Gruppen-Test in der App Produkttexte, Beispiele und Screenshots auf den verifizierten Stand bringen.
3. Bei nächstem App-Release `release.json`, HTML-Fallback und PDF gemeinsam pflegen.

Nicht automatisch umgesetzt: Hauptseitenintegration, Telemetrie, E-Mail-Formulare oder Community-Nachrichten.

## Live-Prüfung der gewünschten Hauptadresse

Am 07.10.2026 geprüft: `https://herom76.de/aion2meter` führt auf die bestehende www-Domain und liefert die Landingpage mit HTTP 200. CSS, JavaScript, Produktbild und PDF liefern HTTP 200. `release.json` liefert Beta 0.1.4. Im Browser funktionieren Schaden/Heilung und die Abschnittsnavigation unter `/aion2meter#vorschau`; die Hauptseite bleibt erreichbar.

Routing-Commit in `herom76-website`: `3fc54a41d065c0ca0ee168b73d9bd618cdf1e720`, erfolgreich als Produktion veröffentlicht. Die Hauptseite enthält nur externe Pfad-Rewrites, keine Integration des Landingpage-Layouts.

## Gemeinsame Betreuung ab 07.10.2026

Der Nutzer hat die Landingpage dem Meter-Chat zur weiteren Betreuung übergeben. App und Landingpage werden hier gemeinsam gepflegt: codex://threads/01a11299-2e27-7390-b167-86672b34882f.

Aktueller Produktstand: Beta 0.1.6. Download-Metadaten, HTML-Fallbacks, Anleitung und Originalansichten wurden gemeinsam aktualisiert. Die oben aufgeführten Erstveröffentlichungsprüfungen sind historische Angaben.

Beta 0.1.7: Eigene Tastenbelegung, Konfliktprüfung, Ersatzkürzel und App-Symbol. Download und Anleitung gemeinsam aktualisiert.

Beta 0.1.8: Demo-Modus im Menü mit getrennten synthetischen Kampfdaten und Rückkehr zur vorherigen Messung. Installer und Anleitung aktualisiert.

Beta 0.1.9: Installer-Informationen aktualisiert und Versionsangaben automatisch abgeleitet; Anleitung und Download synchronisiert.

Beta 0.1.10: Menü mit sechs Bereichen, Einstellungen mit Übernehmen/Schließen, Release Notes und Roadmap ergänzt; Anleitung und Download synchronisiert.

Beta 0.1.11: Einstellungen bleiben vor dem Overlay und werden aktiviert; Anleitung und Download synchronisiert.

Beta 0.1.12: Optionales V3n0m1978-Theme mit eingebettetem Kanalavatar, Namen, rotem Akzent und Stahlrahmen; Download und Anleitung synchronisiert.

Beta 0.1.13: Benutzer-Motiv mit 16 % Deckkraft im V3n0m1978-Overlay; proportional skaliert, Weiß beim Zeichnen ausgeblendet. Download und Anleitung synchronisiert.

Beta 0.1.14: Replay-Pufferfehler behoben; 75 Checks und vier Replay-Audits mit zwei Aufnahmen. Zuordnung erklären im Diagnose-Untermenü, lokaler Bericht mit Besitzer-Evidenz und Filterentscheidungen. Download/Anleitung synchronisiert.
