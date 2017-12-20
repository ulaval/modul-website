Le menu d'options permet d'afficher la liste des actions ou options disponibles pour un élément. Des boutons sont utilisés pour les actions et des boîtes à cocher sont utilisées pour les options. L'utilisation du menu d'options est recommandée dès qu'il y a plus d'une action ou option disponible pour un élément.

Le composant <m-link url="../m-menu-item/portrait">m-menu-item</m-link> doit être utilisé pour chaque élément du menu d'options.

<modul-do>Il est possible d'afficher à la fois des actions et des options dans le menu. Toutefois, il est important de grouper les éléments de même type ensemble afin de ne pas mélanger des actions avec des options. De plus, les actions doivent toujours être positionnées avant les options.</modul-do>

<modul-dont>Si une seule action ou option est disponible, il ne faut pas utiliser un menu d'options. On recommande plutôt l'utilisation d'un <m-link url="../../formulaires/m-icon-button">bouton icon</m-link> pour une action ou d'un <m-link url="../../formulaires/m-switch">interrupteur</m-link> pour une option.</modul-dont>

## Caractériqtiques
### Actions
L'utilisation d'une icône devant le libellé de l'action est préconisée. Si aucune icône n'est pertinente à l'action il est possible d'afficher le libellé sans icône. Lorsqu'une action est indisponible, elle est affichée, mais désactivée.

Il est important d'associer les actions à la bonne icône et au bon libélé. Les actions les plus couramment utilisées dans un menu d'options sont les suivants&nbsp;: **Ajouter**, **Modifier**, **Supprimer** et **Archiver**.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>
<small class="m-u--display--block m-u--margin-top--s">À noter que les actions d'ajout, modification et suppression doivent toujours être présentées dans cet ordre.</small>

### Ouverture
Le menu d'options apparaît toujours sous forme de <m-link url="../../disposition/m-popper">fenêtre contextuelle</m-link>, sauf pour les petits écrans. Dans ce cas, il prends la forme d'une <m-link url="../../communication/m-sidebar">fenêtre coulissant</m-link> qui s'affiche dans le bas de la fenêtre d'affichage (viewport) et la hauteur est automatiquement ajustée en fonction du contenu du menu.