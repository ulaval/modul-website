## Utilisation
Une liste déroulante permet de sélectionner un seul élément dans une liste. Cet élément est le seul demeurant visible lorsque la liste est fermée.

Règle générale, l'utilisation d'une liste déroulante est recommandée lorsque le nombre d'éléments dans une liste se situe entre 5 et 15 :
* Si plus de 15 éléments sont affichés dans la liste, l'utilisation de l'option de filtrage est recommandée
* S'il y a moins de 5 éléments, l'utilisation d'un autre composant est peut-être plus appropriée. Toutefois, lorsque le nombre d'éléments présenté varie d'un utilisateur à l'autre, la liste déroulante peut être utilisée. Exemple : Dans l'inscription, on affiche la liste des cours auxquels l'utilisateur est inscrit, en contexte du programme sélectionné dans une liste déroulante

Les listes déroulants peuvent aussi être utilisées lorsqu’il est nécessaire de conserver l'espace de l'écran, ou d’empêcher les les utilisateurs d'entrer des données erronées.

### Bonnes pratiques
* La première option d’une liste déroulante devrait être une étiquette significative
* Ne pas utiliser de liste déroulante lorsque le nombre d’options est inférieur à 7, utiliser plutôt des boutons radio
* Éviter de sélectionner une option comme valeur par défaut, particulièrement si c'est un champ obligatoire
* En mobile, lorsque possible, remplacer les listes déroulantes par des groupes de boutons, des trains, des commutateurs à bascule ou des curseurs

---
## Caractéristiques
### Tri
La liste est triée selon l'ordre spécifié au dossier fonctionnel. Dans le cas où rien n'est spécifié au dossier, la liste doit être triée en ordre alphabétique.
tri="trierAlphabetiquement"

### Largeur de la liste
Par défaut, la largeur de la liste déroulante est optimisée pour un affichage sur mobile. Il st cependant possible de personnalisé cette largeur. Si applicable,trois points permettent d'indiquer que la valeur sélectionnée n'est pas complètement visible.

### Élément sélectionné
Une valeur peut être sélectionnée par défaut lorsque plus de 90% des utilisateurs vont sélectionner la même valeur ou encore si une seule valeur est disponible.

Dans tous les autres cas, on affiche un libellé débutant par "Sélectionner un/une" et réutilisant le type de valeurs dans la liste.

### Valeur facultative
Lorsque le choix d'une valeur dans la liste déroulante est facultatif, il est possible d'ajouter une valeur nulle, avec un libellé approprié entre parenthèses. Exemple : (Aucun [...]). Cette valeur doit toujours être en haut de la liste, peu importe son tri.

Le libellé (Aucun) s'affiche par défaut, mais il est possible de le personnaliser.

### Liste inactive
Lorsqu'aucune valeur n'est disponible dans la liste, il est recommandé de masquer la liste. Toutefois, dans certains cas, il peut être préférable d'afficher la liste vide. Dans ce cas, la liste devrait être désactivée et présenter un libellé approprié tel que (Aucun [...]).

Si nécessaire, il est possible de désactiver une liste déroulante à l'aide de l'attribut inactif, même si cette dernière contient des valeurs. Il est possible d'utiliser la valeur false pour réactiver la liste en cas de besoin. Exemple : inactif="false"