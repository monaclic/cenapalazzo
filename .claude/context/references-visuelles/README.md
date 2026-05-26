# Références visuelles Féeline · sources validées

Ce dossier contient les fichiers sources transmis par le client (E20Sanremo, via Féeline Création) le 2026-05-26.

Ces fichiers servent de **références d'identité visuelle validées** pour le développement du site. Ils ne sont **pas servis côté front** : ce sont des sources internes, pas des assets de production.

## Fichiers

### `brief-client-original-italien.docx`

Document Word original en italien rédigé par E20Sanremo, listant les informations événementielles et les attentes. Une transcription française structurée est disponible dans `../brief-client.md`. C'est ce dernier qui sert de référence opérationnelle.

### `01-feeline-identite-visuelle.jpeg`

Planche 1 · identité visuelle complète. Présente :

* Le wax seal doré frappé du monogramme **CP** (Cena a Palazzo)
* Le logo principal : couronne princière surmontant le monogramme CP dans un blason
* Le wordmark **CENA A PALAZZO** en Cormorant Garamond
* La signature **DÎNER DE BIENFAISANCE**
* Le bandeau de patronage : "AU PROFIT DE LA FONDATION PRINCE ALBERT II DE MONACO" et "SOUS LA PRÉSIDENCE DE S.A.S. LE PRINCE ALBERT II DE MONACO"
* La **tagline officielle** : "Élégance. Protocole. Gastronomie. Engagement. Une soirée d'exception pour la planète."
* La palette complète Féeline avec codes hexadécimaux (blanc, ivoire, champagne, beige sable, or doré, or métallisé)
* Liste des livrables d'identité initialement prévus : identité visuelle complète, save the date, invitation officielle (italien / français / anglais), menu de gala pour la table, carton avec le nom de la table
* Logos institutionnels visibles : Fondation Prince Albert II de Monaco, Association des Sites Historiques Grimaldi de Monaco
* Signature **Féeline Création** (logo léopard sous palmier, format ovale)
* Vue d'ambiance du Casino di Sanremo

**Attention contenu** : la planche mentionne "22 JUIN 2025" · l'année est obsolète (lire `../brief-client.md` section 6). La date officielle est le 22 juin 2026.

### `02-feeline-charte-typo-reservation.jpeg`

Planche 2 · charte typographique et exemple de page de réservation. Présente :

* Le mockup mobile "Save the date" avec le monogramme CP
* La palette récapitulée
* Les typographies : **Cormorant Garamond** pour titres et accents, **Montserrat** pour textes et informations
* Un univers visuel d'inspiration (costume princier, salon doré, vaisselle, brochure CP)
* Un mockup desktop et mobile de la page de réservation, avec sélecteur de langue FR · EN · IT, champs nom et nombre de personnes, bouton "JE RÉSERVE" en or doré
* Les versions traduites du formulaire :
  * FR : "RÉSERVEZ VOTRE PLACE" · "JE RÉSERVE"
  * EN : "RESERVE YOUR SEAT" · "RESERVE NOW"
  * IT : "PRENOTA IL TUO POSTO" · "PRENOTA ORA"

**Attention contenu** : le mockup contient "SAMEDI 14 MAI 2026 · CASINO DE MONACO · SALLE PRIVÉE" qui sont des placeholders à ignorer. La date et le lieu officiels sont 22 juin 2026 au Casino di Sanremo.

**Note sur la réservation** : le brief client indique que le bouton "Réserver" doit rediriger vers le système de billetterie externe `fpa2.org/[langue]/evenements/cena-a-palazzo-028`. Il n'y a donc **pas de formulaire de réservation à intégrer côté site** : on se contente d'un bouton redirigeant vers la billetterie de la Fondation Prince Albert II. Le mockup Féeline présentant un formulaire est une suggestion d'expérience, à arbitrer avec Féeline Création.

### `03-feeline-stationery-suite.jpeg`

Planche 3 · proposition stationery suite (papeterie de table). Présente :

* Le menu de gala imprimé (placé sur l'assiette)
* Le plan de table avec **Prince Table** au centre et 12 positions autour
* Le carton de nom de table (exemple : "TABLE RAINIER III")
* Le logo complet CP en grand format
* Les **cinq valeurs** affichées en pied de planche : **Prestige · Engagement · Excellence · Héritage · Philanthropie**
* Le mockup global sur stand chevalet
* Une illustration du Palais Princier en arrière plan

**Attention contenu** : le menu illustré sur cette planche est un placeholder de mise en page. Le menu officiel à utiliser est celui du `brief-client.md` (section 1).

**Hors périmètre site web** : cette planche concerne la stationery imprimée (menu sur table, plan de table, cartons), pas le site. Elle reste utile pour s'imprégner du registre visuel et reproduire l'élégance typographique sur la version web.

## Comment exploiter ces planches dans le développement

* Les logos et monogrammes CP ne sont **pas isolés** en fichiers vectoriels. Il faudra demander à Féeline Création de fournir :
  * Le **monogramme CP couronné** en SVG
  * Le **wax seal CP doré** en PNG transparent haute définition
  * Le **wordmark "Cena a Palazzo"** en SVG si disponible
  * Les **logos institutionnels** (Fondation Albert II, Sites Historiques Grimaldi, Casino di Sanremo, Comune di Sanremo, E20Sanremo) en SVG ou PNG transparent
* La **palette** est déjà transposée dans `tailwind.config.mjs` (clés `blanc`, `ivoire`, `champagne`, `beigeSable`, `orDore`, `orMetallise`, `encre`)
* Les **typographies** Cormorant Garamond et Montserrat seront chargées via Google Fonts (à confirmer comme acceptable côté licence) ou auto hébergées
* La **tagline** et les **valeurs** doivent figurer dans `brand-guidelines.md` et être réutilisées au mot près sur le site
