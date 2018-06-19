Les icônes augmentent la clarté d’une interface en donnant des repères visuels et en résumant des notions complexes. Pour être efficaces, les icônes doivent être significatives, reconnaissables et comprises rapidement par tout utilisateur. Pour cela, les icônes utilisent des symboles reconnus. Par exemple, la loupe suggère la recherche et la poubelle suggère la suppression.

<modul-do>
    <ul>
        <li>Utiliser une icône pour attirer l'attention, sur un message important par exemple.</li>
        <li>Utiliser une icône pour résumer une notion complexe comme un panier d'achats.</li>
        <li>Utiliser une icône pour donner des repères intuitifs, un crayon pour modifier, une poubelle pour supprimer, etc.</li>
        <li>Toujours utiliser la même icône pour représenter une même notion.</li>
    </ul>
</modul-do>

## Caractéristiques

### Choix
La <m-link mode="link" url='/normes/normes-graphiques/iconographie'>librairie d'icônes</m-link> met à votre disposition un ensemble d'icônes communément utilisées dans la conception d'une interface. Dans un même écosytème, une icône devrait être utilisée pour représenter la même notion. Afin d'encourager cette pratique, chaque icône est nommée en fonction de l'action ou la notion qu'elle représente. Par exemple, l'icône de poubelle est nommée <em>supprimer</em>, la croix en forme de x <em>fermer/vider le champ</em>.

#### Icônes de fichier
Pour illustrer le type d'un fichier, il est recommandé d'utiliser le composant <modul-go name="m-icon-file"></modul-go>, qui associe la bonne icône automatiquement en fonction de l'extension du fichier.

#### Icônes personnalisées
Bien qu'il soit recommandé d'utiliser le plus plus possible les icônes de <m-link mode="link" url='/normes/normes-graphiques/iconographie'>la librairie existante</m-link>, il est possible de créer une nouvelle icône pour un besoin spécifique. La marche à suivre est décrite à la page <m-link mode="link" url='/normes/normes-graphiques/iconographie'>icône personnalisée</m-link>.

### Taille
La taille d'une icône n'est pas normée. Sa valeur par défaut de 18px peut être ajustée en fonction du contexte. Pour des tailles inférieures à 18px, assurez-vous cependant de préserver la lisibilité de l'icône.

### Couleur
De façon générale, les icônes héritent de la couleur de la police de caractères. Par exemple, une icône qui accompagne un lien cliquable sera de la couleur de la police appliquée aux liens. Quelques exceptions confirment cette règle. Par exemple, les icônes de fichiers qui représentent une marque déposée comme les docouments PDF ou Word sont de la couleur originale de la marque. Certaines icônes de création sont bleues. Ces icônes conservent leur couleur originale car elle les rend plus facilement reconnaissables.

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

Les états suivants sont également prévus, mais pas encore réalisés&nbsp;:

* **publié** (cercle vert)
* **partiellement publié** (cercle orange avec point d’exclamation)
* **non publié** (cercle rouge)
* **nouveauté/nouvel item** (pastille orange avec un chiffre)

#### Positionnement de la pastille
Par défaut, la pastille est positionnée automatiquement à l'emplacement désigné par son concepteur. Si cette position ne convient pas, il est possible de l'ajuster.

<modul-demo>

```html
<h5>Position par défaut</h5>
<m-icon name="clock" v-m-badge="{ state: 'completed'}" size="48px"></m-icon>
<h5>Après ajustement</h5>
<m-icon name="clock" v-m-badge="{ state: 'completed', offsetX: '-4px', offsetY: '-2px'}" size="48px"></m-icon>

```

</modul-demo>