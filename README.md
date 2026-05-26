# cenapalazzo

Site événementiel one page du dîner de gala caritatif **Cena a Palazzo**, organisé au Casino di Sanremo le 22 juin 2026, sous la présidence de S.A.S. le Prince Albert II de Monaco, au bénéfice de la Fondation Prince Albert II de Monaco.

## Stack technique

* Astro 5 (génération statique)
* Tailwind CSS v3 via `@astrojs/tailwind`
* TypeScript strict
* Internationalisation native d'Astro (fr, it, en)
* Sitemap multilingue via `@astrojs/sitemap`
* Déploiement cible : Vercel

## Prérequis

* Node.js 20 LTS ou supérieur (voir `.nvmrc`)
* npm 10 ou supérieur

## Installation locale

```bash
git clone <url-du-repo> cenapalazzo
cd cenapalazzo
nvm use            optionnel, pour aligner la version Node
npm install
npm run dev
```

Le serveur de développement démarre sur `http://localhost:4321`.

## Scripts disponibles

| Commande            | Description                                  |
| :------------------ | :------------------------------------------- |
| `npm run dev`       | Serveur de développement avec rechargement   |
| `npm run build`     | Build statique de production dans `dist/`    |
| `npm run preview`   | Prévisualise le build local                  |
| `npm run astro`     | Accès direct à la CLI Astro                  |

## Structure des dossiers

```
cenapalazzo/
├── public/
│   └── assets/
│       ├── photos/      visuels haute définition
│       └── logos/       logos institutionnels
├── src/
│   ├── components/      composants Astro réutilisables
│   ├── layouts/         layouts de page
│   ├── pages/           routes et pages, organisées par locale
│   ├── styles/          styles globaux et tokens
│   └── content/         contenus structurés pour i18n
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Workflow Git

Deux branches longues :

* `main` : production, déployée automatiquement sur cenapalazzo.com
* `dev` : intégration continue, branche par défaut pour les itérations

Convention de commit conventionnelle en français (voir `CLAUDE.md`).

## Déploiement Vercel

Le projet est conçu pour être déployé sur Vercel sans configuration spéciale grâce à la sortie `output: 'static'` d'Astro.

Étapes (manuelles) :

1. Créer un projet Vercel et le lier au dépôt GitHub
2. Vercel détecte automatiquement Astro et utilise `npm run build`
3. Dossier de sortie : `dist`
4. Lier le domaine `cenapalazzo.com` depuis le dashboard Vercel
5. Activer les previews automatiques sur la branche `dev`

## Internationalisation

Les contenus sont disponibles en français (langue par défaut), italien et anglais. Les routes suivent les conventions natives d'Astro :

* `/` pour la version française
* `/it/` pour la version italienne
* `/en/` pour la version anglaise

## Charte éditoriale

Une règle non négociable : **aucun tiret long ni tiret moyen** n'apparaît dans le code, les contenus, les commentaires ou les commits. Détails dans `CLAUDE.md`.

## Crédits

Direction artistique et chefferie de projet : Féeline Création.
Événement : E20Sanremo.
Sous la présidence de S.A.S. le Prince Albert II de Monaco.
Au bénéfice de la Fondation Prince Albert II de Monaco.
