Les icônes augmentent la clarté d’une interface en donnant des repères visuels et en résumant des notions complexes. Pour être efficaces, les icônes doivent être significatives, reconnaissables et comprises rapidement par tout utilisateur. Pour cela, les icônes utilisent des symboles reconnus. Par exemple, la loupe suggère la recherche et la poubelle suggère la suppression.

<modul-do>
    <ul>
        <li>Utiliser une icône pour attirer l'attention, sur un message important par exemple.</li>
        <li>Utiliser une icône pour résumer une notion complexe comme un panier d'achats.</li>
        <li>Utiliser une icône pour donner des indices facilement repérables, un crayon pour modifier, une poubelle pour supprimer, etc.</li>
        <li>Toujours utiliser la même icône pour représenter une même notion.</li>
    </ul>
</modul-do>

## Caractéristiques

### Choix d'une icône
Un ensemble d'icônes est à votre disposition dans la <m-link mode="link" url='/normes/normes-graphiques/iconographie/'>librairie</m-link>, que nous vous invitons à consulter comme première étape de votre démarche de choix.

#### Icônes normés
Il arrive parfois que pour une même notion, plusieurs symboles reconnus s'appliquent. Par exemple, pour l'action de suppression, c'est l'icône de poubelle qui est la plus populaire, mais on rencontre relativemenet souvent une croix en forme de x. Dans le but d'offrir des repères cohérents à l'utilisateur, il est recommandé d'utiliser systématiquement les icônes ci-dessous pour accompagner ces notions&nbsp;:

<modul-demo>

```html
<div class="m-u--margin"><m-icon class="m-u--margin-right" name="trash"></m-icon><span>Supprimer</span></div>
<div class="m-u--margin"><m-icon class="m-u--margin-right" name="m-edit"></m-icon><span>Modifier</span></div>
```
</modul-demo>

#### Icônes de fichier
Lorsqu'on affiche un lien vers un fichier, une icône illustrant le type de fichier est un repère efficace pour l'utilisateur. Pour faciliter l'utilisation cohérente de ces icônes, il est possible d'utiliser le composant <modul-go name="m-icon-file"></modul-go>.

#### Ajout d'icônes personnalisées
Bien que l'utilisation d'icônes de la <m-link mode="link" url='/normes/normes-graphiques/iconographie/'>librairie existante</m-link> soit à privilégier, de nouvelles icônes peuvent être créées pour répondre à des besoins spécifiques. Ces nouvelles icônes devront être créées en respectant une grille de 30 par 30 pixels, puis enregistrées en format SVG.

#### Pourquoi le format SVG ?
Il est recommandé d’utiliser le format SVG (Scalable Vector Graphics) plutôt qu’une police d'icônes pour les raisons suivantes&nbsp;:
* format facilement redimensionnable
* grande variété  de couleurs
* contrôle de chaque tracé (path) qui compose l’icône
* contrôle de l’épaisseur du trait
* possibilité d’animer les icônes


### Couleurs
De façon générale, les icônes héritent de la couleur de la police de caractères. Par exemple, une icône qui accompagne un lien cliquable sera de la couleur de la police appliquée aux liens. La seule exception à cette règle concerne les icônes de fichier représentant une marque déposée comme les docouments PDF ou Word. Ces icônes doivent rester de leur couleur originale, afin de conserver leur identité propre, qui en facilite la compréhension.

<modul-demo>

```html
<m-link mode="link" url="https://www.ulaval.ca/fileadmin/Secretaire_general/Reglements/Reglement_des_etudes.pdf"><m-icon-file size="16px" extension="pdf"></m-icon-file>Règlement des études</m-link>
```

</modul-demo>


### Pastilles
Une pastille est un petit disque de couleur que l'on superpose à une icône pour illustrer un état parmi les suivants&nbsp;:

* **complété/succès** (cercle vert avec crochet)
* **avertissement** (triangle jaune avec un point d’exclamation)
* **erreur** (cercle rouge avec un point d’exclamation)

<modul-demo>

```html
<m-icon name="calendar" v-m-badge="{ state: 'completed'}"></m-icon>
<m-icon name="calendar" v-m-badge="{ state: 'warning'}"></m-icon>
<m-icon name="calendar" v-m-badge="{ state: 'error'}"></m-icon>

```

</modul-demo>

Les états suivants sont également prévus&nbsp;:

* **publié** (cercle vert)
* **partiellement publié** (cercle orange avec point d’exclamation)
* **non publié** (cercle rouge)
* **nouveauté/nouvel item** (pastille orange avec un chiffre)

Par défaut, la pastille est positionnée automatiquement à l'emplacement adéquat. Si cette position ne convient pas, il est possible de l'ajuster.

<modul-demo>

```html
<h5>Position par défaut</h5>
<m-icon name="clock" v-m-badge="{ state: 'completed'}" size="48px"></m-icon>
<h5>Après ajustement</h5>
<m-icon name="clock" v-m-badge="{ state: 'completed', offsetX: '-4px', offsetY: '-2px'}" size="48px"></m-icon>

```

</modul-demo>



