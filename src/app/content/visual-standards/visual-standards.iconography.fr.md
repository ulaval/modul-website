<modul-icon-gallery></modul-icon-gallery>

<p class="m-u--typo--precision m-u--margin-top--l">Pour plus d'informations sur l'utilisation des icônes, veuillez vous référer aux composants <modul-go name="m-icon"></modul-go> et <modul-go name="m-icon-button"></modul-go>.</p>

## Ajout d'icônes personnalisées
Bien que l'utilisation d'icônes de la librairie existante soit à privilégier, de nouvelles icônes peuvent être créées pour répondre à des besoins spécifiques.

### Taille
L'icône doit être créée à l'intérieur d'un cadre de 24x24 pixels, au format SVG. Au minimum, une des deux dimensions  doit être occupée entièrement par l'icône.

### Choix du nom
Le nom d'une icône doit désigner l'action ou la notion qu'elle symbolise. Par exemple, l'icône de crayon représente l'action de modification d'un élément, son nom est  donc <em>m-svg__edit</em>. Les noms d'icônes dans la librairie MOD<strong>UL</strong> sont en anglais.

### Règles de nomenclature
Tous les icônes de la librairie MOD<strong>UL</strong> sont préfixés de <em>m-svg__</em>. Il est également possible d'ajouter un suffixe en utilisant deux tirets avant la dernière partie du nom. Par exemple, pour indiquer la direction d'une même flèche <em>m-svg__arrow--top<em>.

### Pastille
Si vous souhaitez Il est possible de superposer une pastille sur une icône afin d'indiquer un état ou (voir <modul-go name="m-icon"></modul-go>), il est possible de définir ses coordonnées exactes à même le format SVG :
<pre>
<svg>
   <symbol id="m-edit" viewBox="0 0 24 24" data-badge-coordonates="20 23"></symbol>
</svg>
</pre>

### Pourquoi le format SVG ?
Il est recommandé d’utiliser le format SVG (Scalable Vector Graphics) plutôt qu’une police d'icônes pour les raisons suivantes&nbsp;:
* format facilement redimensionnable
* grande variété  de couleurs
* contrôle de chaque tracé (path) qui compose l’icône
* contrôle de l’épaisseur du trait
* possibilité d’animer les icônes