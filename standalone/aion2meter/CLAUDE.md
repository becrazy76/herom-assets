# Claude Code: Aion2Meter Landingpage

Bitte zuerst `README.md` und `HANDOFF.md` lesen. Dieses Dokument gilt nur für `standalone/aion2meter` im Repository `becrazy76/herom-assets`.

## Ziel und Grenzen

- Eine eigenständige Landingpage im Stil der HEROM-Webseite, separat veröffentlicht.
- Die bestehende Hauptwebseite und die Aion2Meter-Windows-App sind nicht Teil dieser Implementierung.
- Keine unnötige Framework-Migration. Aktuell sind natives HTML/CSS/JavaScript und statisches Vercel-Hosting bewusst gewählt.
- Nutzer bevorzugt unkomplizierte Pflege. Änderungen möglichst direkt umsetzen und passend prüfen.
- Neue Produktbehauptungen zuerst im App-Projekt oder tatsächlichen Release verifizieren. Insbesondere keine offizielle Freigabe, Ban-Sicherheit, perfekte Gruppenmessung, Overheal, Absorbs oder Buff-Uptime behaupten.

## Arbeiten

- Inhalte: `public/index.html`; Farben/Layout: `public/styles.css`; Vorschau: `public/app.js`.
- Release-Angaben: `public/release.json` UND die HTML-Fallbacks gemeinsam ändern.
- Keine privaten PCAPs, Spielprotokolle, Tokens oder lokale App-Schlüssel hinzufügen.
- Screenshots nur aus ausgewählten freigegebenen Produktansichten; keine privaten Aufnahmen veröffentlichen.
- Die lokale Vorschau ist `npm run dev`, Syntaxprüfung `npm run check`. Es gibt keinen Build und keine Fremdabhängigkeiten.
- Interaktive Vorschau muss stets als Beispieldaten markiert bleiben. Die Meter-App wird nicht in der Webseite ausgeführt.
- Tastaturbedienung, reduzierte Bewegung, mobile Breiten und Download ohne JavaScript erhalten.

## Veröffentlichung

- Remote: `https://github.com/becrazy76/herom-assets.git`, Branch `main`.
- Eigener Ordner: `standalone/aion2meter`.
- Vercel-Projekt-ID: `prj_wFMlg8XUykLAq0g6kXAeqgS03wDI`; Name `aion2meter`.
- Team-ID: `team_FtyxgIi2bxArJap43IBiI53a`; Team-Slug `herom`.
- Root Directory `standalone/aion2meter`; Output Directory `public`; Framework `null`.
- Git-Push nach `main` nutzt die verknüpfte Veröffentlichung. Nicht auf `herom76-website` deployen.
- Vor einer manuellen Veröffentlichung das Projekt und Team explizit prüfen. Keine Tokens in Dateien oder Dokumentation speichern.
- Eigenes Projekt ist eine öffentliche Landingpage. Andere Projekte und deren Zugriffsschutz unverändert lassen.

## App-Projekt als Referenz

Chat: `codex://threads/01a11299-2e27-7390-b167-86672b34882f` (Build Aion2Meter prototype).

Aktueller lokaler App-Pfad:
`C:/Users/Pluto/Documents/Codex/2026-10-06/referenced-chatgpt-conversation-this-is-an/outputs/Aion2Meter`.

Beta-Installer: GitHub Releases im gleichen Repository, Tags `aion2meter-v…`. Die App-Updates kommen weiterhin aus der vorhandenen signierten Update-Route auf `herom76.de`; die Landingpage ist nur die Informations- und Downloadseite.
