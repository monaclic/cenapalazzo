# Brief de projet · cenapalazzo

Document de référence opérationnelle. À lire avant toute prise de décision impactant le périmètre ou les livrables.

## Acteurs et rôles

| Acteur            | Rôle                                            | Visibilité publique |
| :---------------- | :---------------------------------------------- | :------------------ |
| E20Sanremo        | Organisation événementielle, client final       | Mention possible    |
| Féeline Création  | Direction artistique, cheffe de projet officielle | Crédit autorisé   |
| Palais Princier de Monaco | Partenaire institutionnel, chef invité  | Mention officielle  |
| Fondation Prince Albert II de Monaco | Bénéficiaire                  | Mention centrale    |
| Casino di Sanremo | Lieu hôte                                       | Mention officielle  |
| Monaclic          | Développement web, sous traitant marque blanche | **Aucune mention**  |

## Marque blanche

Monaclic intervient pour le compte de Féeline Création. Aucune mention publique de Monaclic ne doit apparaître :

* Aucun crédit dans le footer
* Aucune meta donnée auteur identifiant Monaclic dans le HTML
* Aucun commentaire HTML, fichier de configuration ou message de commit ne doit révéler la sous traitance
* Si un crédit développement est demandé, il créditera Féeline Création
* `package.json` ne doit pas comporter de champ `author` pointant vers Monaclic

Toute communication publique passe par Féeline Création.

## Livrables attendus

### Phase 1 · page d'attente (holding page)

Urgence : à livrer dès que possible avant la phase 2.

Contenu minimal :
* Logo (ou typographie) du nom Cena a Palazzo
* Mention du patronage princier
* Date et lieu de l'événement
* Mention de la Fondation bénéficiaire
* Filet doré séparateur
* Mention « plus d'informations à venir » ou équivalent
* Optionnel : formulaire de pré inscription ou adresse mail de contact

Doit déjà respecter la charte Féeline et la règle d'absence de tirets longs et moyens.

### Phase 2 · site complet

Date butoir : 1er juin 2026.

Sections attendues (one page) :
1. Hero · titre, date, lieu, patronage, filet doré, accroche
2. Patronage et bénéficiaire · présentation du Prince Albert II, de la Fondation
3. Le dîner · introduction au cadre, à la soirée
4. Chef et menu · présentation du chef Christian Garcia et menu cérémoniel
5. Programme · déroulé de la soirée
6. Lieu · Casino di Sanremo, accès, dress code
7. Réservation et invitation · modalités, mécénat de table
8. Partenaires institutionnels · logos et mentions
9. Contact · coordonnées et lien de réservation
10. Pied de page · mentions, langues, crédits

Une seule page longue, navigation par ancres, version responsive optimisée tablette et mobile.

## Périmètre inclus

* Conception et développement du site one page en Astro
* Intégration multilingue native fr, it, en
* Optimisation SEO de base (balises, sitemap, données structurées Event JSON LD)
* Optimisation des performances (Lighthouse cible : 95 ou plus sur tous les axes)
* Accessibilité de base (alt, contraste AA, navigation clavier)
* Configuration prête pour Vercel
* Documentation technique (`CLAUDE.md`, `README.md`)

## Hors périmètre

* Aucun back office ou CMS (les contenus sont versionnés dans le code)
* Aucun système de paiement intégré (la réservation se fait via un lien externe fourni par E20Sanremo)
* Aucune fonctionnalité dynamique de réservation côté site
* Aucune analytique commerciale agressive (pas de Meta Pixel, pas de tracking publicitaire)
* Pas d'application mobile native
* Pas de fonctionnalités sociales

## Workflow de validation

1. Brief et structure validés (étape en cours)
2. Maquette ou wireframe textuel par section, validation Féeline Création
3. Intégration de la section en français, validation visuelle
4. Traduction it et en intégrées
5. Validation finale par E20Sanremo et Féeline Création
6. Mise en production sur cenapalazzo.com

Toute modification de contenu doit passer par Féeline Création.

## Performance

Cibles Lighthouse en production :
* Performance : 95 ou plus
* Accessibilité : 95 ou plus
* Bonnes pratiques : 95 ou plus
* SEO : 95 ou plus

Budget images : 1 Mo maximum par page totale (LCP rapide). Formats WebP et AVIF privilégiés.

## SEO

* Title pattern : `Cena a Palazzo · 22 juin 2026 · Casino di Sanremo`
* Meta description institutionnelle, sobre, 150 à 160 caractères
* Open Graph et Twitter Card complets avec visuel haute définition cérémoniel
* Sitemap multilingue
* Données structurées JSON LD type `Event` avec date, lieu, organisateur, langue, devise
* Robots `index, follow`
* Canonical par langue, hreflang complet

## Confidentialité

Le site est purement informatif. Aucune collecte de données personnelles n'est faite côté site (les inscriptions passent par un service externe d'E20Sanremo). Mention légale courte suffisante, conforme aux exigences européennes et italiennes.

## Environnements

* **Local** : Node 20, `npm run dev`
* **Preview Vercel** : branche `dev`, URL de prévisualisation automatique
* **Production Vercel** : branche `main`, domaine cenapalazzo.com

## Risques et points d'attention

* Contenus définitifs (menu, horaires, tarifs) à confirmer par E20Sanremo
* Traductions italienne et anglaise à finaliser et faire relire
* Logos institutionnels à obtenir au format vectoriel (Palais Princier, Fondation, Casino di Sanremo)
* Cohérence stricte avec la charte Féeline à chaque itération
* Aucun mot publicitaire ou ton commercial, registre cérémoniel uniquement
