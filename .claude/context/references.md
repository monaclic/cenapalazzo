# Références visuelles et structurelles · cenapalazzo

Ce document liste les références d'inspiration validées pour le site et précise ce qu'il faut emprunter à chacune. La charte graphique reste 100 % Féeline (voir `brand-guidelines.md`).

## Référence structurelle principale

### Veloura Hotel template (Webflow)

URL : https://veloura-hotel-template.webflow.io/

Ce que l'on reprend de Veloura :
* Rythme général de la page : alternance de sections aérées et de blocs forts
* Hero plein écran avec photographie large et titre cérémoniel centré
* Transitions douces entre sections, fondus discrets
* Bandeaux d'ambiance avec image pleine largeur et texte centré minimaliste
* Mise en page mono colonne centrée pour les sections clés
* Section programme ou expérience structurée en blocs verticaux
* Pied de page sobre et institutionnel
* Comportement responsive (compression élégante des marges sur mobile)

Ce que l'on n'emprunte pas à Veloura :
* La palette de couleurs (chromatique différente, on garde Féeline)
* Les typographies exactes
* Les illustrations vectorielles
* Les iconographies stylisées
* Les blocs orientés réservation hôtelière (calendrier, panier, formulaire long)

Veloura est donc une boussole de **rythme et de squelette**, pas une référence visuelle. On ne copie ni les couleurs, ni les polices, ni les visuels.

## Registre luxe institutionnel · références complémentaires

Sites et univers visuels à étudier pour le ton, la retenue, la dignité du propos :

* Sites institutionnels de Monaco (Palais Princier, Fondation Prince Albert II)
* Sites d'opéras et de festivals classiques (Salzbourg, Aix en Provence)
* Sites de grands chefs étoilés avec espace événementiel
* Pages de gala caritatifs internationaux (amfAR, Red Cross Ball, Cinéma contre le SIDA)
* Sites de palaces de la Riviera (Hôtel de Paris Monte Carlo, Grand Hôtel des Iles Borromées)
* Sites de maisons de champagne haut de gamme (sections événementielles)

Points communs à reproduire :
* Silence visuel et retenue typographique
* Or chaud en accent unique
* Photographies rares mais soignées
* Hiérarchie typographique très marquée
* Anglais et italien systématiquement présents en plus de la langue locale

## Bonnes pratiques techniques inspirées

* Préchargement intelligent des polices web (Cormorant Garamond, Montserrat)
* Images servies en WebP ou AVIF avec fallback
* Animations limitées à des fondus et translations légères
* Aucun script de tracking commercial agressif (cookies non nécessaires si pas de mesure d'audience)
* Sitemap multilingue conforme aux conventions Google et Bing
* Données structurées `Event` JSON LD pour le SEO

## Anti références

À éviter absolument :
* Templates de mariage commerciaux (registre confondant, esthétique floue)
* Sites événementiels de type startup (interfaces dashboard, boutons CTA criards)
* Hero animés avec parallax exagéré
* Sliders carrousels d'images
* Vidéos de fond automatiques avec son
* Polices manuscrites (script) hors usage très ponctuel

## Notes de méthode

Lors de l'intégration des composants : produire d'abord la version française, vérifier la conformité à la charte sur capture d'écran, puis dupliquer pour `it` et `en`. Toujours partir d'un wireframe textuel avant de coder une nouvelle section.
