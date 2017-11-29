## Utilisation
Le menu d'options permet d'afficher la liste des actions ou options disponibles pour un élément. Des liens sont utilisés pour les actions et des boîtes à cocher sont utilisées pour les options. L'utilisation du menu d'options est recommandée dès qu'il y a plus d'une action ou option disponible pour un élément.

Le composant <a href="../m-menu-item/portrait">m-menu-item</a> doit être utilisé pour chaque élément du menu d'options.

<modul-do>Il est possible d'afficher à la fois des actions et des options dans le menu. Toutefois, il est important de grouper les éléments de même type ensemble afin de ne pas mélanger des actions avec des options. De plus, les actions doivent toujours être positionnées avant les options.</modul-do>

<modul-dont>Si une seule action ou option est disponible, il ne faut pas utiliser un menu d'options. On recommande plutôt l'utilisation d'une icône cliquable pour une action ou d'un interrupteur pour une option.</modul-dont>

## Caractériqtiques
### Actions
L'utilisation d'une icône devant le libellé de l'action est préconisée. Si aucune icône n'est pertinente à l'action il est possible d'afficher le libellé sans icône. Lorsqu'une action est indisponible, elle est affichée, mais désactivée.

### Actions courantes
Les actions suivants sont couramment utilisées dans un menu d'options. Il est important d'utiliser les combinaisons de libellés et d'icônes associées à ces actions :
* Ajouter
* Modifier
* Supprimer
* Archiver

À noter que les actions d'ajout, modification et suppression doivent toujours être présentées dans cet ordre.

### Ouverture
Le menu d'options apparaît toujours sous forme de fenêtre contextuelle, sauf pour le point de rupture Extra-petit. Dans ce cas, il prends la forme d'un panneau coulissant qui s'affiche dans le bas de la fenêtre d'affichage (viewport) et la hauteur est automatiquement ajustée en fonction du contenu du menu.