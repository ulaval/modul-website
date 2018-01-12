Un groupe de boutons permet de segmenter du contenu de même nature, selon différents critères. Il est également possible de l'utiliser comme style pour des boutons radios.

Ce composant doit être utilisé avec le composant <modul-go name="m-radio"></modul-go>.

<modul-do>
    <p>L'utilisation du groupe de boutons est utile pour présenter différentes vues d'un ensemble de données. Chaque bouton agit comme un filtre et permet de modifier la vue affichée. Par exemple, ce composant peut être utilisé pour segmenter une liste des cours d'un programme selon ce qui reste à faire et ce qui est déjà fait.</p>
</modul-do>

<modul-dont>
    <p>Un groupe de boutons ne doit pas être utilisé pour diviser le contenu d'un thème en plusieurs sujets. Pour ce faire, il faut plutôt utiliser le composant <modul-go name="m-tabs"></modul-go>.</p>
</modul-dont>

## Caractéristiques

### Libellé
Le libellé d'un bouton doit idéalement contenir de 1 à 3 mots et doit s'afficher sur un maximum de 3 lignes.

Si un libellé est trop long pour s'afficher sur une largeur minimale de 320 pixels, il est possible de définir des libellés en fonction des points de ruptures existants. Cela va permettre d'afficher des libellés plus courts ou abrégés lorsque la largeur de l'écran est plus petite.

### Nombre de boutons
L'utilisation de ce composant nécessite un minimum de 2 boutons et un maximum de 5 boutons est recommandé. Il est de la responsabilité de l'analyste de vérifier que tous les boutons peuvent s'afficher sur une largeur minimale de 320 pixels.

### Sélection par défaut
* Lorsque utilisé pour segmenter du contenu, un des boutons doit être sélectionné par défaut afin de faire afficher une première vue lors du chargement de la page.
* Lorsque utilisé comme boutons radios, une valeur peut être sélectionnée par défaut si applicable, mais ce n'est pas obligatoire.

### Largeur des boutons
Il est possible de fixer la largeur des boutons, afin qu'elle soit identique pour chaque bouton. Toutefois, cette pratique est recommandée lorsqu'il y a peu de boutons.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>