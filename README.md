# Outil RH AbracadaParc — refonte 2026

> Branche `refonte-2026` du repo [abracadaparc/rh](https://github.com/abracadaparc/rh).

## Démarrage

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build production dans ./dist
npm run preview  # preview du build
```

## Architecture

- **Stack** : Vite 6 + React 18 + TypeScript 5.6
- **Storage** : Firebase RTDB (cache rapide) + Sheets (canonique via PennyLane)
- **Auth** : Firebase email/password + whitelist (migration OAuth Workspace prévue sept 2026)
- **Déploiement** :
  - Branche `refonte-2026` → canary sur https://abracadaparc.github.io/rh/v2/
  - Branche `main` → ancienne app sur https://abracadaparc.github.io/rh/

## Modules à venir (commits atomiques)

1. ✅ **Étape 0** — Socle Vite + TS + CI
2. ⏳ **Étape 1** — Auth (Firebase wrappé, suppression mdp par défaut en clair)
3. ⏳ **Étape 2** — Planning (versioning optimiste, fix race conditions perte de données)
4. ⏳ **Étape 3** — Temps (calculs paie corrigés IDCC 1790)
5. ⏳ **Étape 4** — Historique & Sauvegardes (l'onglet 📜 du brief)
6. ⏳ **Étape 5** — Export paie (Sheets auto fin de mois + email service social)
7. ⏳ **Étape 6** — RGPD/sécurité (transversal)

## Convention collective

**IDCC 1790** — Espaces de loisirs, d'attractions et culturels. Pas IDCC 1941.

## Convention Git

- Branche `refonte-2026` : développement actif.
- Commits atomiques par feature (1 commit = 1 PR testable).
- Format : `<scope>: <description>` (ex. `auth: setup Firebase email link login`).
