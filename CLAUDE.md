# CLAUDE.md · Contexte maître du projet cenapalazzo

Ce document est lu à chaque session par l'assistant. Toute décision technique ou éditoriale doit s'y conformer.

## Présentation

Site événementiel one page haut de gamme du dîner de gala caritatif **Cena a Palazzo**, organisé au Casino di Sanremo (Italie) le 22 juin 2026, sous la présidence de S.A.S. le Prince Albert II de Monaco, au bénéfice de la Fondation Prince Albert II de Monaco. Chef du dîner : Christian Garcia, chef du Palais Princier de Monaco.

## Stack technique

* Astro (dernière version stable de la branche 5.x)
* Tailwind CSS v3 via l'intégration officielle `@astrojs/tailwind`
* TypeScript en mode strict (preset `astro/tsconfigs/strict`)
* Internationalisation native d'Astro · langues : fr (défaut), it, en
* Sitemap XML via `@astrojs/sitemap`
* Hébergement cible : Vercel (configuration manuelle ultérieure)
* Versioning : Git local, GitHub à connecter manuellement
* Domaine de production : cenapalazzo.com

## Règles d'écriture (NON NÉGOCIABLE)

**Interdiction absolue du tiret long (—) et du tiret moyen (–) partout :**
* Code source
* Contenus affichés à l'écran (FR, IT, EN)
* Commentaires
* Documentation interne et publique
* Messages de commit Git
* Noms de fichiers, de branches, de variables

Séparateurs typographiques autorisés :
* Point médian (·)
* Virgule
* Deux points
* Point virgule
* Parenthèses
* Filets graphiques en HTML/CSS (border, hr stylisé, divider doré)

Cette règle est documentée ici à titre d'invariant projet. Toute relecture doit la vérifier en priorité.

## Conventions de code

* TypeScript strict, pas de `any` implicite
* Composants Astro (`.astro`) privilégiés ; pas de framework UI tiers sauf besoin justifié
* Tailwind utility first, classes regroupées par catégorie (layout, typo, couleurs, états)
* Variables CSS uniquement pour les valeurs non exprimables en Tailwind
* Pas de styles inline `style=""` sauf valeurs dynamiques justifiées
* Accessibilité : balisage sémantique, alt sur toutes les images, contraste AA minimum
* Performance : images servies en WebP ou AVIF, lazy loading par défaut
* Pas de dépendance ajoutée sans justification écrite dans le commit

## Conventions Git

Format des messages de commit : conventionnel, en français, sans tiret long ni tiret moyen.

Types autorisés :
* `feat:` nouvelle fonctionnalité
* `fix:` correction de bug
* `style:` ajustements visuels purs
* `refactor:` refonte sans changement fonctionnel
* `docs:` documentation
* `chore:` tâches de maintenance
* `init:` initialisation
* `config:` configuration outillage
* `content:` modifications de contenu
* `i18n:` modifications des traductions
* `perf:` optimisation de performance

Exemples valides :
* `feat: ajoute hero section avec compte à rebours`
* `style: affine espacements section programme`
* `i18n: complète traduction italienne du menu`
* `fix: corrige ancres anchor du menu de navigation`

Branches :
* `main` : production
* `dev` : travail en cours, branche par défaut pour les itérations

## Structure du projet

```
cenapalazzo/
├── CLAUDE.md                  contexte maître (ce fichier)
├── README.md                  documentation publique
├── .claude/context/           dossier de contexte pour l'assistant
│   ├── brand-guidelines.md    charte graphique Féeline complète
│   ├── content.md             contenus de l'événement (FR référence)
│   ├── references.md          inspirations visuelles et structurelles
│   └── project-brief.md       brief business complet
├── public/
│   └── assets/
│       ├── photos/            visuels haute définition
│       └── logos/             logos institutionnels
├── src/
│   ├── components/            composants Astro réutilisables
│   ├── layouts/               layouts de page
│   ├── pages/                 pages Astro et routes i18n
│   ├── styles/                styles globaux (typo, base, tokens)
│   └── content/               contenus structurés pour i18n
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .nvmrc
```

## Contexte étendu

Quatre fichiers de contexte complètent ce document :

1. `.claude/context/brand-guidelines.md` · charte graphique Féeline (palette, typos, esthétique, mots clés directeurs, références)
2. `.claude/context/content.md` · tous les contenus de l'événement (horaires, tarifs, dress code, accès, patronage, menu, contact)
3. `.claude/context/references.md` · inspirations (référence structurelle Veloura Hotel template, registre luxe institutionnel)
4. `.claude/context/project-brief.md` · brief business (acteurs, marque blanche, livrables, périmètre, workflow validation)

Lire ces fichiers avant toute session de développement substantielle.

## Deadlines

* **Phase 1 urgente · page d'attente (holding page)** : à livrer dès que possible, page minimaliste avec logo, baseline événement, date, mention du patronage, formulaire ou contact de pré inscription
* **Phase 2 · site complet** : 1er juin 2026 au plus tard (3 semaines avant l'événement du 22 juin 2026)

## Contacts business

* **Cheffe de projet officielle** : Féeline Création (agence)
* **Client final** : E20Sanremo (organisateur de l'événement)
* **Développement (interne, marque blanche)** : Monaclic

## Marque blanche

Monaclic intervient en marque blanche. **Aucune mention publique de Monaclic** ne doit apparaître :
* Pas de signature dans le footer
* Pas de meta tag auteur identifiant Monaclic
* Pas de commentaire HTML laissant transparaître la sous traitance
* Pas de logo, pas de lien, pas de référence dans `package.json` côté `author`

Si un crédit développement doit figurer, il créditera Féeline Création.

## Workflow de déploiement (à venir)

Configuration manuelle après cette initialisation :
1. Création du repo GitHub
2. Connexion du remote et premier push
3. Création du projet Vercel depuis le dashboard
4. Liaison du domaine cenapalazzo.com
5. Branche `main` connectée à l'environnement de production Vercel
6. Branche `dev` connectée aux previews automatiques

## Commandes utiles

```bash
npm install            installe les dépendances
npm run dev            lance le serveur de développement sur http://localhost:4321
npm run build          génère le site statique dans dist/
npm run preview        prévisualise le build de production
npm run astro          accès direct à la CLI Astro
```

## Rappels permanents

* Vérifier l'absence de tirets longs et moyens avant chaque commit
* Aucun service externe (npm, GitHub, Vercel) ne doit être appelé tant que la configuration manuelle n'est pas faite
* Tout texte affiché doit exister dans les trois langues fr, it, en avant publication finale
* Cohérence stricte avec la charte Féeline : palette, typos, espacement
