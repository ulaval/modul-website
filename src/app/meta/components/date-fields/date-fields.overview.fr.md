## Utilisation
Le sélecteur de date est utilisé pour permettre à l'utilisateur de sélectionner une date.

Voir aussi la variante <m-link url="../m-datepicker/portrait">m-datepicker</m-link>

## Caractéristiques
Composé de 3 listes déroulantes pour sélectionner l'année, le mois et le jour.

Il est possible à l'utilisateur de filtrer les listes pour réduire le nombre de choix.

### Année
Par défaut, les années commencent en 1900 et se terminent 5 ans après l'année courante.

### Jour
Le nombre de jours disponibles dépend du mois et de l'année sélectionné. Par défaut, elle permet la sélection jusqu'au jour 31.

Lorsqu'un mois est sélectionné, le nombre de jours s'ajuste (29, 30 ou 31 jours).

Lorsque février est sélectionné, le nombre de jours s'ajuste à l'année (si  sélectionnée) selon qu'elle soit bisextile ou non.

### Paramétrisation
Il est possible de cacher une ou plusieurs des listes déroulantes selon le besoin.

### Date sélectionnée
La date sélectionnée est affichée par la composition des entêtes des listes déroulantes. Le composant peut retourner un objet Date ou bien MomentJs. Il émet aussi un événement indiquant si une valeur est sélectionnée dans toute les listes.
