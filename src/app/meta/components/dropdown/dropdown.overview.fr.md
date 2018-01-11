Une liste déroulante permet de sélectionner un seul élément dans une liste. Cet élément est le seul demeurant visible lorsque la liste est fermée. Les listes déroulants peuvent aussi être utilisées lorsqu’il est nécessaire de conserver l'espace dans l'écran, ou d’empêcher les les utilisateurs d'entrer des données erronées.

Ce composant doit être utilisé avec le composant <modul-go name="m-dropdown-item"></modul-go>.

<modul-do>
    <ul>
        <li>La première option d’une liste déroulante devrait être un libellé significatif.</li>
        <li>Si plus de 15 éléments sont affichés dans la liste, l'utilisation de l'option de filtrage est recommandée.</li>
    </ul>
</modul-do>

<modul-dont>
    <ul>
        <li>Ne pas utiliser de liste déroulante lorsque le nombre d’options est inférieur à 7, utiliser plutôt des <modul-go name="m-radio-group"></modul-go>. Toutefois, lorsque le nombre d'éléments présenté varie d'un utilisateur à l'autre, la liste déroulante peut être utilisée.</li>
        <li>Éviter de sélectionner une option comme valeur par défaut, particulièrement si c'est un champ obligatoire.</li>
    </ul>
</modul-dont>

## Caractéristiques
### Filtre
Il est possible de filtrer la liste en ordre alphabétique.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Largeur
Par défaut, la largeur de la liste déroulante est optimisée pour un affichage sur mobile. Il est cependant possible de personnalisé cette largeur. Si applicable, trois points permettent d'indiquer que la valeur sélectionnée n'est pas complètement visible.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Valeur sélectionnée
Une valeur peut être sélectionnée par défaut lorsque plus de 90% des utilisateurs vont sélectionner la même valeur ou encore si une seule valeur est disponible. Lorsqu'aucune valeur n'est disponible dans la liste, un libellé doit afficher «&nbsp;Aucun résultats&nbsp;» ou «&nbsp;Aucune données&nbsp;».

### Élément de la liste désactivé
Un élément de la liste déroulante peut être désactivé, c'est-à-dire qu'il ne peut pas être sélectionné.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### États et messages de validation
Ce composent gère les états (en attente, désactivé, erreur, valide) et les messages de validation tout en offrant la possibilité de personaliser chacun de ces paramètres. Lorsque possible, les validations sont effectuées à la sortie de la liste déroulante.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>
