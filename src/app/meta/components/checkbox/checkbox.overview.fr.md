Les cases à cocher sont utilisées lorsqu’un utilisateur peut sélectionner un seul, aucun ou plusieurs choix d’une liste d'options. Ce composant, tout comme les <modul-go name="m-radio-group">boutons radio</modul-go>, offrent l’avantage d’empêcher les utilisateurs d'entrer des données erronées.

<modul-do>
    <ul>
        <li>Les options devraient être énumérées dans un ordre logique&nbsp;: l’option la plus susceptibles d'être choisie à la moins susceptible, l’option la plus simple à la plus complexe ou l’option la moins risquée à la plus risquée. L'ordre alphabétique n'est pas recommandé car il dépend du langage.</li>
        <li>Afficher les listes verticalement, avec un choix par ligne. S'il est nécessaire d'utiliser une disposition horizontale avec plusieurs options par ligne, espacer les cases et les étiquettes afin qu'il soit absolument clair quelle case est associée à quelle étiquette.</li>
        <li>Utilisez un vocabulaire affirmatif et actif pour les libellé de cases à cocher, de sorte que l'utilisateur n’ait pas de doute sur le résultat de l’activation de la case à cocher. Évitez les négations telles que «&nbsp;Ne m'envoyez plus de courrier électronique&nbsp;», ce qui signifie que l'utilisateur devrait cocher la case afin que quelque chose ne se produise pas.</li>
    </ul>
</modul-do>

<modul-dont>
    <ul>
        <li>Ne pas utiliser une case à cocher pour accomplir une action, utiliser plutôt le composant <modul-go name="m-switch">interrupteur</modul-go>.</li>
        <li>L’activation d’une case à cocher ne devrait pas déclencher une action. Par exemple, l'envoi d’un formulaire, un <modul-go name="m-button">bouton</modul-go> devrait être utilisé en plus de la case à cocher pour transmettre le formulaire.</li>
    </ul>
</modul-dont>

### Positionnement
Les cases à cocher peuvent être positionné à l'horizontal ou à la vertical. Les cases peuvent également être pôsitionnées à gauche ou à droite de leur libéllé.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Messages de validation
Ce composent offre la possibilité de gérer les messages d'erreur, de validation et d'aide.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>