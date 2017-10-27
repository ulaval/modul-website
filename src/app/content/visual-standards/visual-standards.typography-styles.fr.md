Typographie et styles

## Typographie
La typographie influence la lisibilité et l’efficacité d’un message et facilite le processus de compréhension et d’assimilation de l’information. Un texte bien formaté permet de mettre l’accent sur le contenu et non sur l’effort nécessaire pour le lire.
* Disponible sur  Google fonts et libre de droits, la famille de caractères à utiliser dans tout composant est «Source Sans Pro».
* Deux polices de caractères peuvent être utilisées:
    * Source Sans Pro, light, 300 pour le texte courant
    * Source Sans Pro, normal, 400 pour les titres, les  sous-titres ou la mise en évidence.
---

## Styles CSS
L’utilisation des styles CSS permet d’obtenir une mise en forme rapide et automatique du contenu. Ceux-ci sont déjà prédéfinis de manière à respecter le design de monPortail. Ainsi lorsque des modifications sont apportées au styles CSS, elles se répercutent automatiquement dans l’application.

L’utilisation des styles CSS (classe CSS utilitaire) permet de personnaliser les balises HTML, d’ajouter des styles manquants à un élément ou d’écraser un autre style.Lorsqu’un style a une portée délimitée (style scope), il se peut que les classes CSS ne fonctionnent pas selon le contexte.

### Nomenclature
Les classes CSS utilitaires sont toujours préfixer par «m-u» suivi de « -- ». La lettre « m » identifie l’élément à la librairie « modUL » et le « u » indique qu’il s’agit d’une classe utilitaire. Ces classes sont également parfois suffixées par:
* ‘--xl’ pour indiquer très large
* ‘--l’ pour indiquer large
* ‘--s’ pour indiquer petit
* ‘--xs’ pour indiquer très petit

Ce choix de nomenclature des styles utilitaires facilite la lecture et la distinction des classes CSS.

Il est important de suivre cette nomenclature pour créer tout autre style utilitaire. Il est recommandé d’avoir l’avis d’un designer pour l’utilisation des styles utilitaires.

### Texte normal

Sur tous les appareils, le texte courant doit être défini ainsi :
* Un corps de 16px (corps = taille du caractère)
* Aucun interlettrage ( à moins qu'il ne soit nécessaire d'utiliser la graisse de caractère «Semi-bold, 600»)
* Un interlignage de 21 px (16px * 1.3  = ~ 21px)

.m-u--p  = Paragraphe

### Utilisation des graisses

La graisse correspond tout simplement à l'épaisseur du trait. Son utilisation permet d’attirer l’attention, de hiérarchiser l’information comme les titres et les sous-titres, les titres des colonnes d’un tableau ou de mettre en valeur certains mots, titres ou paragraphes. L’utilisation de la graisse devrait se faire raisonnablement, sans en abuser.

.m-u--font-weight--black  = Texte très gras
.m-u--font-weight--bold  = Texte gras
.m-u--font-weight--normal  = Graisse normal d’un texte

### Utilisation de l'italique
Lorsqu’un mot étranger, une citation, une note ou une légende sont présents dans une texte, il est permis d’utiliser l’italique. Il devrait cependant être utilisé avec modération, car ce sont des caractères qui se lisent plus lentement.

.m-u--font-style--italic  = Texte en italique
.m-u--font-style--normal = Texte sans italique

### Utilisation du soulignement
Dans toute application, l’utilisation du soulignement se fait uniquement au survol des liens cliquables. Souligné des titres ou des éléments importants dans un contenu pour les mettre en évidence n’est donc pas recommandé.


### Précision
Il est parfois nécessaire d’ajouter une précision sur la nature d'un champ ou encore afficher un exemple d'utilisation. Cette précision est toujours rattachée à un champ doit être défini ainsi :
* Texte en italique
* Corps de 13px
* Couleur $gris du nuancier

.m-u--typo--precision  = Texte en italique et en gris

### Surlignement
Il est parfois nécessaire de surligner un texte pour attirer l’attention ou encore mettre en évidence un élément. Ce style doit être défini ainsi :
* Texte  en gras
* Corps de 14px
* Surlignement en jaune
 .m-u--typo--highlighting  = Texte surligné
