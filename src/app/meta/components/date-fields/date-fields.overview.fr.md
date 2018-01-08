## Utilisation
Le sélecteur de date est utilisé pour permettre à l'utilisateur de sélectionner une date complète ou une combinaison jour, mois ou année.

Voir aussi la variante <modul-go name="m-datepicker">m-datepicker</modul-go>

## Caractéristiques
Ce composant offre 3 listes déroulantes pour sélectionner l'année, le mois et le jour.

Il est possible à l'utilisateur de paramétriser les listes pour en réduire le nombre d'éléments.

### Année
Par défaut, les années commencent en 1900 et se terminent 5 ans après l'année courante.

### Jour
Le nombre de jours disponibles dépend du mois et de l'année sélectionnée. Par défaut, la listte affiche 31 jours.

Lorsqu'un mois est sélectionné, le nombre de jours s'ajuste en fonction de celui-ci.

Lorsque février est sélectionné, le nombre de jours s'ajuste à l'année (si  sélectionnée) selon qu'elle soit bisextile ou non.

### Paramétrisation
Il est possible de cacher une ou plusieurs listes déroulantes selon le besoin. Voir l'onglet **Propriété** pour la liste complète des propriétés.

### Date sélectionnée
La date sélectionnée est composée des éléments sélectionnés de chacune des listes déroulantes. Le composant peut retourner un objet Date ou MomentJs. Il émet aussi un événement indiquant si une valeur est sélectionnée dans chacune des listes.
