# Outil RH AbracadaParc — refonte 2026

Outil interne de gestion RH (planning, contrats, absences, congés,
export paie mensuel) pour AbracadaParc, parc éco-nature à Goussainville (95).

> 🚧 **Refonte en cours** — démarrage 7 mai 2026.

## Accès

- **App** : https://abracadaparc.github.io/rh/
- **Authentification** : compte Firebase whitelisté côté règles RTDB.

## Sécurité & RGPD

Repo public, mais **aucune donnée personnelle dans le code source** :
- Tous les identifiants salariés (noms, prénoms, emails, SS, adresses,
  téléphones, IBAN) ont été retirés du `index.html`.
- Les commentaires de code utilisent les identifiants techniques
  (`t1`, `t2`, `sally_s`, etc.), pas les prénoms.
- Toutes les données identifiantes sont stockées dans **Firebase RTDB**,
  protégées par :
  - Authentification obligatoire (`auth != null`)
  - Whitelist d'emails dans les règles RTDB
  - Restriction des clés API par référent HTTP (`abracadaparc.github.io/*`)

La clé API Firebase reste visible dans le code — c'est attendu et conforme
à la doc Firebase pour les apps web. Sa sécurité repose sur les règles
RTDB et la restriction par domaine, pas sur le secret de la clé.

## Convention collective applicable

**IDCC 1790** — Espaces de loisirs, d'attractions et culturels.

⚠️ Ne pas confondre avec IDCC 1941. Tous les calculs RH doivent
référencer 1790.

## État au 7 mai 2026

Cette version est le code d'origine **entièrement nettoyé** des données
personnelles. La logique métier est inchangée.

La refonte modulaire suivra sur la branche `refonte-2026` :

1. `module-auth` — OAuth Google Workspace (remplace l'auth Firebase
   email/password actuelle).
2. `module-planning` — équipe + réservations.
3. `module-temps` — pointage, congés, absences, retards.
4. `module-historique` — sauvegardes locales + snapshots Sheets +
   restauration de versions.
5. `module-export-paie` — génération Sheets propre par salarié pour le
   service social.

## Stack technique

- **Front** : HTML/JS vanilla sur GitHub Pages.
- **Back** : Google Apps Script déployé en Web App (à créer).
- **Base** : Google Sheets dans le Drive AbracadaParc (cible) +
  Firebase RTDB (transitoire).
- **Sauvegardes** : localStorage navigateur (toutes les 30s) +
  snapshots Sheets (toutes les 5min) + export Drive horodaté à chaque
  session de modification.

## Contact

contact@abracadaparc.fr
