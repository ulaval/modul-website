## Utilisation
Le composant action en cours s'affiche lorsqu'une action est en train de s'exécuter et que le temps restant est inconnu, par exemple :
    <ul class="m-u--bullet-list">
        <li>lors du chargement de nouveaux résultats de recherche</li>
        <li>lors de l'exécution d'un traitement</li>
    </ul>

---
## Caractéristiques
### Contexte d'utilisation
L'emplacement de l'icône varie en fonction de son contexte d'utilisation.

### Chargement
Lorsque la page entière est en chargement, une page blanche est affichée avec l'icône d'action en cours d'exécution. Toutefois lorsque l'action en cours concerne une seule ou plusieurs sections de la page, par exemple lors du chargement de résultats de recherche, l'icône doit s'afficher à l'endroit où l'éventuel contenu s'affichera. Puisque plusieurs sections peuvent être chargées au même moment, cela implique l'affichage simultané de plusieurs icônes.

### Traitement
Lorsqu'un traitement est en cours d'exécution et que toute la page est bloquée, l'icône d'action en cours d'exécution s'affiche par-dessus la page, avec un effet de transparence gris foncé.

### Message
Il est possible d'accompagner l'icône d'action en cours d'un titre et d'une description. Il est fortement suggéré de faire afficher le titre et la description lorsque l'icône est utilisée dans un contexte de traitement. Par défaut, le titre sera affiché en gras et la description sera affichée sous le titre.

### Taille
Pour les petits écrans, l'icône s'affiche à 50% de la taille d'origine.