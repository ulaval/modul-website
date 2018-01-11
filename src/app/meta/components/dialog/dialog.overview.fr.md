Une *fenêtre de dialogue* est utilisée pour afficher du contenu complémentaire tout en gardant l'utilisateur en contexte de la page en cours.

<modul-dont>
    <ul>
        <li>Une <em>fenêtre de dialogue</em> ne doit pas être utilisée pour initier un dialogue avec l'utilisateur. Dans ce cas, il faut plutôt utiliser le composant <modul-go name="m-modal"></modul-go>.</li>
        <li>Il n'est pas permis d'utiliser une <em>fenêtre de dialogue</em> à l'intérieur d'une autre <em>fenêtre de dialogue</em>.</li>
    </ul>
</modul-dont>

## Caractéristiques
### Dimensions de la fenêtre
La dimention de la fenêtre doit varier en fonction du contenu qui est affiché à l'intérieur de la fenêtre. Quatre dimensions sont disponibles: **plein écran**, **large**, **reguler** et **petit**.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Petits écrans
La *fenêtre de dialogue* s'affiche à l'aide d'une animation arrivant du bas et venant s'afficher complètement par-dessus la fenêtre principale.

### Grands écrans
La *fenêtre de dialogue* est affichée par dessus la fenêtre principale, avec un effet de semi-transparence.

### Titre
Le titre de la *fenêtre de dialogue* dépend de son contenu. S'il y a une action à poser dans la fenêtre, il est suggéré d'utiliser un verbe à l'infinitif pour indiquer quelle est l'action à faire. Dans le cas où il n'y a pas d'action à faire et qu'on affiche un complément d'information, il est suggéré d'utiliser le nom du sujet sur lequel porte le complément.

### Contenu
Une *fenêtre de dialogue* peut contenir du texte, des images, des boutons, etc. N'importe quel type de contenu est permis, du moment que la distinction avec la <modul-go name="m-modal"></modul-go> est respecté.

### Défilement
Lorsqu'il n'est pas possible de voir l'ensemble du contenu dans l'espace visible (viewport), il doit être possible de faire défiler le contenu. L'entête de la fenêtre est figée afin de permettre un accès rapide au bouton de fermeture.

### Fermeture
Un bouton de fermeture (X en haut à droite) doit être disponible en tout temps. De plus, il est possible de fermer la fenêtre en cliquant à l'extérieur de celle-ci (grands écrans seulement).
