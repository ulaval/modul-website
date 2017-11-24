## Utilisation
<modul-do>Une fenêtre secondaire est utilisée pour afficher du contenu complémentaire tout en gardant l'utilisateur en contexte de la page en cours.</modul-do>
<modul-dont>Une fenêtre secondaire ne doit pas être utilisée pour initier un dialogue avec l'utilisateur. Dans ce cas, il faut plutôt utiliser le composant Fenêtre de dialogue. De plus, il n'est pas permis d'utiliser une fenêtre secondaire à l'intérieur d'une autre fenêtre secondaire.</modul-dont>

## Caractéristiques
### Petits écrans
La fenêtre secondaire s'affiche à l'aide d'une animation arrivant du bas et venant s'afficher complètement par-dessus la fenêtre principale.

### Grands écrans</h3>
La fenêtre secondaire est affichée par dessus la fenêtre principale, avec un effet de semi-transparence.

### Titre
Le titre de la fenêtre secondaire dépend de son contenu. S'il y a une action à poser dans la fenêtre, il est suggéré d'utiliser un verbe à l'infinitif pour indiquer quelle est l'action à faire. Dans le cas où il n'y a pas d'action à faire et qu'on affiche un complément d'information, il est suggéré d'utiliser le nom du sujet sur lequel porte le complément.

### Contenu
Une fenêtre secondaire peut contenir du texte, des images, des boutons, etc. N'importe quel type de contenu est permis, du moment que la distinction avec la fenêtre de dialogue est respectée.

### Défilement
Lorsqu'il n'est pas possible de voir l'ensemble du contenu dans l'espace visible (viewport), il doit être possible de faire défiler le contenu. L'entête de la fenêtre est figée afin de permettre un accès rapide au bouton de fermeture.

### Fermeture
Un bouton de fermeture (X en haut à droite) doit être disponible en tout temps. De plus, il est possible de fermer la fenêtre en cliquant à l'extérieur de celle-ci (grands écrans seulement).
