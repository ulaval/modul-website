## Utilisation
Un accordéon permet de grouper du contenu sous différentes rubriques d'un même sujet et permet d'afficher ou masquer le contenu selon les besoins de l'utilisateur.

Ce composant doit être utilisé avec le composant <a href="../m-accordion/portrait">m-accordion</a>.

<modul-do>
L'utilisation d'un accordéon est recommandée lorsque le contenu de la page se sépare bien en rubriques et qu'il est pertinent de faire afficher seulement les éléments clés, afin de permettre aux utilisateurs de focuser sur l'information qui leur importe. Sur les petits écrans, l'accordéon peut-être utilisé pour remplacer les onglets. Cette solution doit être privilégiée lorsqu'il y a trop d'onglets (8 onglets ou plus).</modul-do>

<modul-dont>Pour les grands écrans, lorsque le contenu de la page est très long, il peut être intéressant de revoir la navigation et de favoriser l'utilisation du composant Onglets.</modul-dont>

## Caractéristiques
### Comportement de l'accordéon
Un accordéon offre plusieurs possibilités quant à l'ouverture des rubriques. Il est possible:
*de toutes les ouvrir ou de toutes les fermer à l'aide des liens correspondants
* d'en ouvrir une seule à la fois
* de les ouvrir ou de les fermer une par une à l'aide des boutons correspondants

Il est donc de la responsabilité de l'analyste de déterminer quel est le meilleur comportement possible en fonction du contexte d'utilisation (contenu, nombre de rubriques, appareil utilisé, etc). À titre de référence, voici une liste de bonnes pratiques :
* Pour les grands écrans, lorsque que la plupart des rubriques risquent d'être consultées par l'utilisateur, il est préférable de toutes les ouvrir par défaut même si le contenu est long.
* Pour les petits écrans, même si la plupart des rubriques risquent d'être consultées par l'utilisateur, il est préférable de fermer les rubriques par défaut afin d'offir aux utilisateurs une vue d'ensemble des rubriques disponibles.
* Lorsque la plupart des rubriques risquent d'êtres utiles à l'utilisateur, il est préférable de permettre l'ouverture simultanée des rubriques.

**Source :** <m-link url="http://www.nngroup.com/articles/accordions-complex-content/" target="_blank">Nielsen Norman Group</m-link>

### Tout ouvrir / Tout fermer
L'option *Tout ouvrir* est disponible dès qu'il y a plus d'une rubrique dans l'accordéon et que les rubriques peuvent être ouvertes simultanément. Elle est visible tant et aussi longtemps que toutes les rubriques ne sont pas toutes ouvertes. Dès qu'elles sont toute ouvertes, cette option est remplacée par *Tout fermer*.

Les options *Tout ouvrir* et *Tout fermer* sont toujours positionnées en haut, alignés à droite, sur la même ligne que le titre.