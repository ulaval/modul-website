## Utilisation
Un bouton permet de poser une action dans le site et peut contenir un libellé, une icône ou les deux. L'utilisation d'un bouton est recommandée lorsque l'utilisateur doit poser une action dans le site. Une action permet généralement de débuter, de poursuivre ou d'annuler un processus. Si l'utilisateur désire consulter du contenu dans le site, on utilise un lien plutôt qu'un bouton.

---
## Caractéristiques
### Libellé
Lorsque présent, le libellé d'un bouton débute toujours par une lettre majuscule et est généralement un verbe décrivant l'action qui est posée par l'utilisateur. Le verbe est toujours à l'infinitif. Il est possible d'utiliser un nom commun plutôt qu'un verbe lorsqu'il n'est pas possible de trouver un verbe représentant l'action du bouton, mais il doit s'agir d'une exception.

### Présélection
Règle générale, le bouton primaire est présélectionné. Si l'utilisateur appuie sur la touche "Entrée" sur son clavier, l'action du bouton présélectionné sera exécutée. S'il n'y a aucun bouton primaire dans l'interface, aucun bouton n'est présélectionné.
Dans certains cas, si l'action principale est jugée dangereuse, aucun bouton n'est présélectionné. En effet dans ces situations, il est préférable que l'utilisateur sélectionne lui-même l'action, plutôt que de l'activer en appuyant accidentellement sur la touche "Entrée".

### États
Cinq états sont possibles pour les boutons :
* Normal : état initial sans qu'il y ait d'interraction de l'utilisateur
* Survolé : lorsque le bouton est survolé par la souris (hover)
* Enfoncé : lorsque l'utilisateur clique ou presse (touch) le bouton
* En attente de traitement : le bouton a été enfoncé et il est en attente de la fin d'un traitement (soumission d'un formulaire par exemple)
* Inactif : le bouton est désactivé, il ne peut pas être utilisé

---
## Disposition
* Les boutons sont alignés à gauche lorsqu'ils suivent un formulaire, dans les autres cas ils sont centrés
* Ils sont alignés côte à côte lorsque l'espace est suffisant. S'il n'est pas possible de tous les aligner côte à côte sur une seule ligne, ils sont affichés les uns en dessous des autres
* Dans le cas où plusieurs boutons sont affichés, ils doivent tous être de même largeur, soit la largeur du bouton le plus large
* Le bouton primaire est toujours présenté en premier (soit le plus à gauche, soit le plus en haut selon la disposition)
* Si une option de fermeture doit être ajoutée (dans une fenêtre de dialogue par exemple), elle prend la forme d'un lien toujours centré sous les boutons

---
## Icône
Généralement, lorsqu'une icône est utilisée avec un libellé, elle doit être placée à gauche de ce dernier. Seule exception, lorsque l'image consiste en une flèche pointant vers la droite.

---
## Marges
Des marges sont prévues dans le composant, il n'est donc pas nécessaire de prévoir de l'espace supplémentaire entre chaque bouton.