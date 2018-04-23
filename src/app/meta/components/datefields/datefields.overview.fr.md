Le composant *champs de date* est utilisé pour permettre à l'utilisateur de sélectionner une date complète ou partielle, à l'aide des trois champs année, mois et jour.

Voir aussi le composant *<modul-go name="m-datepicker"></modul-go>*.

## Caractéristiques

### Année
Par défaut, la liste des années commence en 1900 et se termine 5 ans après l'année courante. Il possible de changer la plage d'années à afficher.

<modul-demo>

```html
<m-datefields min-year="2000" max-year="2018"></m-datefields>
```

</modul-demo>

### Jour
* Le nombre de jours disponibles dépend du mois et de l'année sélectionnée. Par défaut, la listte affiche 31 jours.
* Lorsqu'un mois est sélectionné, le nombre de jours s'ajuste en fonction de celui-ci.
* Lorsque le mois de février est sélectionné, le nombre de jours s'ajuste à l'année (si sélectionnée) selon qu'elle soit bisextile ou non.

### Retirer des listes déroulantes
Il est possible de retirer une ou plusieurs listes déroulantes selon le besoin.

<modul-demo>

```html
<p>
    <m-datefields :year="false"></m-datefields>
</p>
<p>
    <m-datefields :month="false" :date="false"></m-datefields>
</p>
<p>
   <m-datefields :date="false"></m-datefields>
</p>
```

</modul-demo>

### Date sélectionnée
La date sélectionnée est composée des éléments sélectionnés de chacune des listes déroulantes. Le composant peut retourner un objet **Date** ou **MomentJs**. Il émet aussi un événement indiquant si une valeur est sélectionnée dans chacune des listes.

### États et messages de validation
Ce composant gère les états (en attente, désactivé, erreur, valide) et les messages de validation tout en offrant la possibilité de personaliser chacun de ces paramètres. Lorsque possible, les validations sont effectuées à la sortie des champs.

<modul-demo>

```html
<p>
    <m-datefields :disabled="true"></m-datefields>
</p>
<p>
    <m-datefields :waiting="true"></m-datefields>
</p>
<p>
    <m-datefields :error="true" error-message="Ad dolor ea laborum aliquip eiusmod commodo velit sunt sunt anim minim."></m-datefields>
</p>
<p>
    <m-datefields :valid="true" valid-message="Ad dolor ea laborum aliquip eiusmod commodo velit sunt sunt anim minim."></m-datefields>
</p>
```

</modul-demo>
