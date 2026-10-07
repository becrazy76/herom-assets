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

- GitHub: `becrazy76/herom-assets`, `main`, `standalone/aion2meter`.
- Vercel: `aion2meter`, Projekt `prj_wFMlg8XUykLAq0g6kXAeqgS03wDI`, Team `herom`.
- Die veröffentlichten Dateien werden aus `public` des eigenen Ordners ausgeliefert.

## Verifizierte Veröffentlichung und Prüfung

- URL: `https://aion2meter.vercel.app`.
- Erstveröffentlichung: Vercel-Produktion, Zustand READY.
- Quellcommit: `fbf29af0c493592051698f9d6405bf713afd6db3`.
- Deployment: `dpl_GPUxdWrcEMtZHWALqeAQs15WwEZp`.
- Vercel-Anmeldeschutz ist vorerst aktiv. Die ausdrückliche Freigabe für öffentlichen Zugriff wurde angefragt, nachdem die automatische Freigabeprüfung das Abschalten ohne diese Zustimmung abgelehnt hat. Nicht eigenständig umgehen; keine Ausweichdomain zum Umgehen hinzufügen.
- JavaScript-Syntaxprüfung bestanden.
- Schaden-/Heilungswechsel, Spielerklick und Detailwechsel getestet.
- Tastaturwechsel der Tabs mit Pfeiltasten getestet.
- Responsive Layout bei 320, 390, 768 und 1280 Pixel geprüft; keine horizontale Überbreite.
- FAQ-Ausklappfunktion getestet.
- PDF und Produktbilder lokal erreichbar (HTTP 200); Impressum und Datenschutz auf herom76.de erreichbar (HTTP 200).
- Installer ist im öffentlichen GitHub-Release 0.1.4 vorhanden; Dateigröße und Prüfsumme stimmen mit `release.json` überein.
- Originalansichten und PDF sind in diesem Landingpage-Projekt mit enthalten; kein Zugriff auf den lokalen App-Ordner zur Auslieferung notwendig.

Der nächste Schritt ist ausschließlich die öffentliche Freigabe des neuen Vercel-Projekts, sofern der Nutzer ausdrücklich zustimmt. Die bestehende Hauptseite bleibt unverändert.

## Sinnvolle spätere Arbeiten

1. Optional eigene Subdomain am Vercel-Projekt hinzufügen.
2. Nach weiterem Gruppen-Test in der App Produkttexte, Beispiele und Screenshots auf den verifizierten Stand bringen.
3. Bei nächstem App-Release `release.json`, HTML-Fallback und PDF gemeinsam pflegen.

Nicht automatisch umgesetzt: Hauptseitenintegration, Telemetrie, E-Mail-Formulare oder Community-Nachrichten.
