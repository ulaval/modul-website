## Utilisation
Un champ de saisie permet à l'utilisateur de saisir de l'information servant généralement à compléter un formulaire.

### Bonnes pratiques

    <ul class="m-u--bullet-list">
        <li>Fournir des étiquettes claires, toujours visibles pour chaque champ de saisie.</li>
        <li>Utiliser des étiquettes succinctes, courtes et descriptives (un mot ou deux). Si des informations supplémentaires sont nécessaires, utiliser une infobulle.</li>
        <li>Un champ devrait être suffisamment grand pour que la plupart des valeurs possibles soient visibles, ne pas surdimensionner un champ.</li>
        <li>Fournir un indicateur visuel clair que le focus a été déplacé vers le champ de saisie lorsque l'utilisateur clique / tape dessus.</li>
        <li>Lorsque possible, fournir des indices de saisie dans l’espace réservé du champ. Par exemple, fournir un masque de saisie pour le champ du numéro de téléphone.</li>
        <li>Fournir des zones facilement sélectionnables au toucher.</li>
        <li>Pour les appareils mobiles, associer le clavier avec les saisies de texte requises. Par exemple les claviers suivants :</li>
        <li>
            <ul>
                <li>Number : pour les numéros de téléphone, les numéros de carte de crédit, les NIP, etc.</li>
                 <li>Text : pour les noms propres, les noms d’utilisateurs, etc.</li>
                <li>Mixed format : pour les courriels, les adresses, etc.</li>
            </ul>
        </li>
    </ul>

---
## Caractéristiques
### Libellé
Le libellé est placé au-dessus du champ de saisie.

### Type de champ
Le type de champ est très important, surtout lors de l'utilisation avec un appareil mobile, puisqu'il permet d'indiquer au navigateur le type de données attendues dans le champ afin d'ouvrir le bon type de clavier. Les types de champs utilisés par monPortail sont :
* Texte
* Nombre
* Courriel

### Curseur
De manière générale, le curseur est placé à gauche, sauf pour les exceptions suivantes :
* Aligné à droite lorsqu'une unité, une mesure, etc. est suit immédiatement le champ. Par exemple : $, %, pts
* Aligné à droite lorsque le champ de saisie est utilisé dans le contexte d'une phrase.

### Format de données
Lorsqu'il est pertinent d'afficher un exemple du format de données attendu, celui-ci doit être affiché sous le champ avec le style précision.

### Longueur du champ
La longueur du champ est déterminée par la longueur estimée du contenu que l'on s'attend à recevoir. Par exemple, si on s'attend à un code postal, le champ pourrait afficher 7 caractères. Si on s'attend à un prénom, le champ pourrait, par exemple, afficher jusqu'à 40 caractères. La saisie est bloquée lorsque le nombre maximal de caractères a été saisi.

Le champ de saisie supporte l'affichage sur plusieurs lignes. Le nombre de lignes à afficher doit être spécifié au dossier fonctionnel. L'utilisation d'un champ de saisie multilignes est préférable à celle du texte riche lors l'utilisateur doit saisir un long texte et qu'il ne doit pas y inclure de liens ou modifier le style du texte.

### Focus
Lorsque le focus est dans un champ de saisie, le contour du champ est bleu afin d'indiquer à l'utilisateur qu'il est positionné dans le champ.

### Validations
Lorsque possible, les validations sont effectuées à la sortie du champ. Voir la section Validations de l'option de menu Formulaires.
