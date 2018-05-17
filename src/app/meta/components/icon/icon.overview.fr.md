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
<m-link mode="link" url='/normes/normes-graphiques/iconographie/'>L'iconographie</m-link> est votre point de départ, elle met à votre disposition un ensemble d'icônes communément utilisées dans la conception d'une interface.

#### Icônes normées
Il arrive parfois que pour une même notion, plusieurs symboles reconnus s'appliquent. Par exemple, pour l'action de suppression, c'est l'icône de poubelle qui est la plus populaire, mais on rencontre relativemenet souvent une croix en forme de x. Dans le but d'offrir des repères cohérents à l'utilisateur, il est recommandé d'utiliser systématiquement les icônes ci-dessous pour accompagner ces notions&nbsp;:

<modul-demo>

```html
<div class="m-u--margin"><m-icon class="m-u--margin-right" name="trash"></m-icon><span>Supprimer</span></div>
<div class="m-u--margin"><m-icon class="m-u--margin-right" name="m-edit"></m-icon><span>Modifier</span></div>
```
</modul-demo>

#### Icônes de fichier
Lorsqu'on affiche un lien vers un fichier, une icône illustrant le type de fichier est un repère efficace pour l'utilisateur. Pour faciliter l'utilisation cohérente de ces icônes, il est possible d'utiliser le composant <modul-go name="m-icon-file"></modul-go>.

#### Icônes personnalisées
Il est possible de créer de nouvelles icônes pour un besoin spécifique, des indications sont dispobibles dans <m-link mode="link" url='/normes/normes-graphiques/iconographie/'>l'iconographie</m-link>.

### Couleurs
De façon générale, les icônes héritent de la couleur de la police de caractères. Par exemple, une icône qui accompagne un lien cliquable sera de la couleur de la police appliquée aux liens. La seule exception à cette règle concerne les icônes de fichiers représentant une marque déposée comme les docouments PDF ou Word. Ces icônes doivent concerver leur couleur originale bien reconnaissable.

<modul-demo>

```html
<m-link mode="link" url="https://www.ulaval.ca/fileadmin/Secretaire_general/Reglements/Reglement_des_etudes.pdf"><m-icon-file class="m-u--margin-right--s" size="16px" extension="pdf"></m-icon-file>Règlement des études</m-link><br/>
<m-link class="m-u--margin-top" mode="link" url="https://www.ulaval.ca/fileadmin/Secretaire_general/Reglements/Reglement_des_etudes.pdf"><m-icon-file class="m-u--margin-right--s" size="16px" extension="default"></m-icon-file>Fichier non reconnu</m-link>
```

</modul-demo>


### Pastilles
Une pastille est un petit disque de couleur que l'on superpose à une icône pour illustrer un état parmi les suivants&nbsp;:

#### États d'une pastille
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

#### Positionnement de la pastille
Par défaut, la pastille est positionnée automatiquement à l'emplacement adéquat. Si cette position ne convient pas, il est possible de l'ajuster.

<modul-demo>

```html
<h5>Position par défaut</h5>
<m-icon name="clock" v-m-badge="{ state: 'completed'}" size="48px"></m-icon>
<h5>Après ajustement</h5>
<m-icon name="clock" v-m-badge="{ state: 'completed', offsetX: '-4px', offsetY: '-2px'}" size="48px"></m-icon>

```

</modul-demo>



