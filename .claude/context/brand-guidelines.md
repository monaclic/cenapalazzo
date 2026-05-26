# Charte graphique Féeline · cenapalazzo

Référence visuelle officielle pour le site Cena a Palazzo. Tous les choix d'interface doivent s'y conformer.

## Esprit directeur

Luxe institutionnel monégasque, élégance princière, gastronomie de tradition. Le site doit évoquer un dîner d'État, pas un événement commercial. Sobriété absolue, aération généreuse, hiérarchie typographique forte. La photographie est rare, la typographie porte presque tout.

Mots clés directeurs :
* Cérémonial
* Patrimonial
* Princier
* Italien classique
* Méditerranéen
* Or chaud
* Filigrane
* Silence visuel

À éviter formellement :
* Effets criards, néons, dégradés flashy
* Photographies low cost, stock photo générique
* Icônes plates de style startup
* Animations parasites
* Polices fantaisie
* Couleurs vives hors palette
* Boutons type SaaS, cartes type dashboard
* Toute icône emoji
* Toute mention informelle

## Palette officielle

| Nom              | Code      | Usage principal                                        |
| :--------------- | :-------- | :----------------------------------------------------- |
| `blanc`          | `#FFFFFF` | Fonds, surfaces immaculées                             |
| `ivoire`         | `#F7F5EE` | Fond de page principal, alternative douce au blanc     |
| `champagne`      | `#EFE6D3` | Fonds de section secondaires, encadrés                 |
| `beigeSable`     | `#E6DCC3` | Variantes mates, fonds tertiaires                      |
| `orDore`         | `#D4AF37` | Filets, séparateurs, accents typographiques            |
| `orMetallise`    | `#BFA46A` | Texte secondaire doré, sous titres, capitales espacées |
| `encre`          | `#2A2A2A` | Texte principal, alternative au noir                   |

Règles de combinaison :
* Texte principal `encre` sur fond `ivoire` ou `blanc`
* Accents `orDore` réservés aux filets, capitales espacées, séparateurs
* `champagne` et `beigeSable` pour les sections de contraste, sans concurrencer l'or
* Jamais de couleur hors palette, même pour les états (hover, focus)

## Typographies

**Cormorant Garamond** (serif, `font-serif`)
* Usage : titres, intitulés cérémoniaux, citations, mantra
* Variantes recommandées : Light 300, Regular 400, Medium 500
* Italique exploité pour les sous titres et exergues
* Tracking serré (`tracking-tightish` ou `tracking-ultratight`) pour les grands titres

**Montserrat** (sans serif, `font-sans`)
* Usage : corps de texte, navigation, libellés, légendes
* Variantes recommandées : Light 300, Regular 400, Medium 500
* Tracking large (`tracking-wider`, `tracking-widest`, `tracking-ceremonial`) pour les capitales

Règles typographiques :
* Capitales espacées pour les en têtes de section (Montserrat, `uppercase`, `tracking-widest`)
* Italique Cormorant pour les citations et accroches
* Pas plus de deux poids par bloc visuel
* Pas de souligné, sauf liens contextuels discrets
* Justification : alignement à gauche par défaut, centré pour les titres cérémoniaux
* Veuves et orphelines à éviter sur les titres importants

## Hiérarchie typographique recommandée

| Niveau          | Police             | Taille indicative | Tracking         | Casse        |
| :-------------- | :----------------- | :---------------- | :--------------- | :----------- |
| Surtitre        | Montserrat 400     | `text-xs`         | `tracking-ceremonial` | majuscules   |
| Titre H1        | Cormorant 300      | `text-5xl`/`text-6xl` | `tracking-ultratight` | bas de casse |
| Titre H2        | Cormorant 400      | `text-4xl`        | `tracking-tightish` | bas de casse |
| Titre H3        | Cormorant 500      | `text-2xl`        | `tracking-normal` | bas de casse |
| Corps           | Montserrat 400     | `text-base`       | `tracking-normal` | bas de casse |
| Légende         | Montserrat 300     | `text-sm`         | `tracking-wide`  | bas de casse |
| Capitales       | Montserrat 500     | `text-xs`         | `tracking-widest` | majuscules   |

## Éléments graphiques signature

* **Filet doré horizontal fin** (1 px, `orDore`), centré, longueur 60 à 120 px, utilisé comme séparateur cérémoniel
* **Encadrés filaires** (1 px `orDore`, fond `ivoire` ou `champagne`), pour les informations clés (date, lieu, dress code)
* **Lettrines** Cormorant pour ouvrir certains paragraphes patrimoniaux
* **Numérotation romaine** pour les sections du programme ou du menu
* **Marges blanches généreuses** : padding minimum de 6rem en vertical entre sections
* **Symétrie centrée** pour les sections cérémonielles (hero, patronage, menu)

## Composants visuels récurrents

* Hero plein écran avec titre centré, surtitre Montserrat capitales espacées, filet doré, date en dessous
* Bandeau de patronage avec armoiries ou logo institutionnel, fond `champagne`
* Section programme verticale, alignée au centre, séparée par filets dorés
* Menu présenté en colonne unique centrée, chaque plat en Cormorant italique, suivi d'une légende Montserrat discrète
* Pied de page sobre, logo, mentions légales, contact, sans réseaux sociaux flashy

## Aération et symétrie

* Espacements verticaux : `py-section` (6rem) minimum, `py-sectionLg` (9rem) pour les sections phares
* Largeur de contenu : `max-w-contenu` (1200 px) maximum, `max-w-ceremonie` (900 px) pour les sections texte fort
* Largeur de prose textuelle : `max-w-prose` (65ch) pour les paragraphes longs
* Grilles à 12 colonnes possibles, mais privilégier les blocs centrés mono colonne
* Marges horizontales minimum sur mobile : 1.5rem ; sur desktop : 4rem

## Photographie

* Tons chauds, lumière dorée, naturelle
* Casino di Sanremo, vues nocturnes, intérieurs Belle Époque
* Plans rapprochés de mise en place, argenterie, cristaux
* Vues du Palais Princier et de Monaco autorisées si fournies
* Aucune photo de stock visible
* Aucune photo avec personnes non identifiées au premier plan

## Tagline officielle Féeline

> **Élégance. Protocole. Gastronomie. Engagement.**
> **Une soirée d'exception pour la planète.**

À utiliser au mot près. Apparaît sur la planche d'identité visuelle (`references-visuelles/01-feeline-identite-visuelle.jpeg`).

## Cinq valeurs cérémoniales

À exposer discrètement, par exemple en pied de section cérémoniale ou en bandeau capitales espacées :

**Prestige · Engagement · Excellence · Héritage · Philanthropie**

(Issues de la planche stationery suite, `references-visuelles/03-feeline-stationery-suite.jpeg`.)

## Éléments d'identité signature

* **Monogramme CP couronné** · doré, dans un blason, couronne princière au sommet · à utiliser en favicon, en pied de section cérémoniale, en accroche cérémonielle
* **Wax seal CP doré** · ornement décoratif, à utiliser avec parcimonie en haut de section ou en accent
* **Wordmark CENA A PALAZZO** · en Cormorant Garamond, lettres grandes capitales, tracking légèrement serré

Aucun de ces éléments n'est encore fourni en fichier vectoriel · à demander à Féeline Création.

## Mantra du projet (interne)

> *Un dîner. Une cause. Une signature princière.*

Cette ligne reste utile en accroche interne mais la tagline officielle Féeline ci dessus prime côté site.

## Inspirations validées

Voir `references.md` pour la liste complète. Veloura Hotel template sert de référence **structurelle** uniquement (rythme des sections, transitions, mise en page) ; la charte graphique reste 100 % Féeline et est désormais documentée par les trois planches Féeline validées (voir `references-visuelles/README.md`).
