La directive de pastille permet à l'utilisateur d'ajouter une icône en superposition à une autre icône. Ça permet à l'utilisateur de visualiser un état différent à l'élément principal.

## Caractéristiques

### État

Lorsque la pastille est utilisée afin d'associer un état à une icône, les états listés suivant sont présentement disponibles:

* **completed**: L'élément représenté par l'icône est dans une situation de réussite.
* **failed**: L'élément représenté par l'icône est en erreur.
* **wait**: L'élément représenté par l'icône est en attente.
* **warning**: Un avertissement se rattache à l'élément représenté par l'icône.

<modul-demo>

```html
<m-icon-file v-m-badge="{ state: 'completed' }" size="30px" extension="pdf"></m-icon-file>
<m-icon-file v-m-badge="{ state: 'failed' }" size="30px" extension="pdf"></m-icon-file>
<m-icon-file v-m-badge="{ state: 'wait' }" size="30px" extension="pdf"></m-icon-file>
<m-icon-file v-m-badge="{ state: 'warning' }" size="30px" extension="pdf"></m-icon-file>
```

</modul-demo>

### Positionnement
Les coordonnées d'une pastille varient en fonction de la forme et de l'orientation de l'icône (carré, paysage, portrait, etc.). Dans tous les cas, le coin en haut à gauche représente le point d'origine, et le concepteur peut déterminer la position exacte de la pastille en fonction de ce point, toujours pour une icône de 24x24 pixel. Le nombre de pixel peut être décimal. Les coordonnées de la pastille sont définies à même l'élément symbol du SVG, à l'aide de l'attribut data-badge-origin. Sa valeur contient la position sur l'axe horizontal (X) en première position, suivi d'une virgule et de la position sur l'axe vertical (Y) en seconde position (**data-badge-origin="20.5,23.5"**).

#### Ajustement de la position par le développeur
La position de la pastille peut être ajustée en tout temps à l'aide des propriété Décalage horizontal et Décalage vertical.

<modul-demo>

```html
<m-icon-file v-m-badge="{ state: 'completed', offsetX: '-5px', offsetY: '-5px' }" size="30px" extension="pdf"></m-icon-file>
```

</modul-demo>