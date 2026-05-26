# Sources brutes du client · cenapalazzo

Ce dossier contient les **fichiers sources** transmis par le client (E20Sanremo, via Féeline Création) sous leur forme originale, sans optimisation web. Il n'est **pas servi côté front** : Astro n'expose que ce qui se trouve dans `public/`.

## Structure

```
sources/
├── logos/      logos institutionnels en PDF vectoriel (tracked dans git)
└── photos/     photos haute définition originales (NON trackées · voir .gitignore)
```

## sources/logos/

Logos institutionnels reçus le 2026-05-26, en PDF vectoriel CMYK. Ils sont **trackés dans git** car suffisamment légers (moins de 1 MB chacun).

| Fichier                                       | Entité représentée                              |
| :-------------------------------------------- | :---------------------------------------------- |
| `e20sanremo.pdf`                              | E20Sanremo (organisateur)                       |
| `casino-di-sanremo.pdf`                       | Casino di Sanremo (lieu, co financeur)          |
| `comune-di-sanremo.pdf`                       | Comune di Sanremo (co financeur)                |
| `siti-storici-grimaldi-di-monaco.pdf`         | Association des Sites Historiques Grimaldi      |

**Encore manquants** (à demander à Féeline) :

* Logo / wordmark **Cena a Palazzo** (monogramme CP couronné)
* Wax seal CP doré
* Logo Fondation Prince Albert II de Monaco
* Logo Palais Princier de Monaco
* Logo Féeline Création (uniquement si crédit affiché)

Pour le web, ces PDF doivent être convertis en SVG (priorité) ou PNG transparent haute définition, puis déposés dans `public/assets/logos/`.

## sources/photos/

Photos originales haute définition reçues le 2026-05-26. **Non trackées dans git** car volumineuses (15 à 33 MB chacune, 167 MB au total). Elles restent sur la machine locale et servent de masters pour générer les versions web optimisées.

Inventaire local actuel (9 photos) :

| Fichier                          | Sujet                                           |
| :------------------------------- | :---------------------------------------------- |
| `casino-facade-jour.jpg`         | Façade du Casino di Sanremo de jour, ciel bleu  |
| `casino-facade-nuit.jpg`         | Façade du Casino di Sanremo illuminée la nuit   |
| `sala-casino-02.jpg`             | Sala Privata vide, vue d'ensemble parquet       |
| `sala-casino-05.jpg`             | Sala Privata, intérieur                         |
| `sala-casino-06.jpg`             | Sala Privata, intérieur                         |
| `sala-casino-12.jpg`             | Sala Privata, intérieur                         |
| `sala-casino-18.jpg`             | Sala Privata, intérieur                         |
| `sala-casino-30.jpg`             | Sala Privata, intérieur                         |
| `sala-casino-32.jpg`             | Sala Privata, intérieur                         |

**Encore manquants** (à demander à Madame Traverso, contact à obtenir via E20Sanremo) :

* Photos d'atmosphère (mise en place, dressage, lumière chaude)
* Photos des plats du menu
* Portrait du chef Christian Garcia (si disponible)

## Versions web optimisées

Les versions servies sur le site sont stockées dans `public/assets/photos/` après compression :

* Format : JPEG qualité 75 (option WebP en option future)
* Dimension max : 2400 px sur le côté long
* Poids cible : 300 à 1000 KB par fichier
* Compression effectuée avec `sips` (outil natif macOS)

Commande de compression utilisée (mémo pour reproduire ou ajouter de nouvelles photos) :

```bash
sips -s format jpeg -s formatOptions 75 -Z 2400 \
  sources/photos/nom-source.jpg \
  --out public/assets/photos/nom-source.jpg
```

Une amélioration future possible : conversion vers WebP via `cwebp` (à installer) ou via le composant Image natif d'Astro qui peut faire le travail à la build.

## Règles de nommage

* Tout en minuscules
* Mots séparés par des tirets simples (kebab case)
* Pas d'espaces, pas d'accents, pas de tirets longs ni moyens
* Suffixe numérique zéro padded sur deux chiffres pour les séries (`-02`, `-12`)
