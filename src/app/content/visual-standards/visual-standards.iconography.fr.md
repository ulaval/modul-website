Les icônes réduisent la densité informationnelle d’une page et  améliorent ainsi l’ergonomie d’une interface. Pour être efficaces, les icônes doivent être significatives, reconnaissables, distinguables, intuitives et comprises rapidement par tout utilisateur. Le principe est d’utiliser un objet connu qui suggère sa propre utilisation. En imitant le fonctionnement d’un objet familier, l’icône permet à l’utilisateur de comprendre plus facilement l’utilisation d’une fonction de l’interface. Par exemple, la loupe suggère une action de recherche, la poubelle suggère une action de suppression . Les icônes de modUL  illustrent majoritairement une action que l’utilisateur peut poser. Elles doivent donc jouer un rôle fonctionnel dans tout composant. Il est recommandé de garder une uniformité et une cohérence dans l’utilisation des icônes.

## Caractéristiques
### Les icônes par défaut

Les icônes par défaut sont :
<ul>
    <li>filaires</li>
    <li>cliquables</li>
    <li>d’une seule couleur (voir la section Couleurs des icônes pour les exceptions à cette règle) :
        <ul>
            <li>état normal : #666</li>
            <li>état hover ou actif : #000</li>
            <li>état au clic, cercle gris : #e8e8e8</li>
        </ul>
    </li>
</ul>

### Dimensions des icônes
Sur appareils mobiles, comme sur les postes de bureau, la zone cliquable de l’icône est de 44 pixels. L’icône peut être de taille variable à l’intérieur de cette zone, mais doit demeurer reconnaissable.

### Couleurs de icônes
Une icône peut être en couleur uniquement si :
<ul>
    <li>elle accompagne un lien cliquable, par exemple une icône PDF accompagnant le nom d’un fichier de type PDF</li>
    <li>elle est superposée par une pastille de couleur illustrant un état parmi les suivants :
        <ul>
            <li>publié</li>
            <li>non publié</li>
            <li>complété/Succès </li>
            <li>partiellement publié </li>
            <li>avertissement </li>
            <li>erreur</li>
            <li>nouveauté/nouvel item</li>
        </ul>
    </li>
</ul>

### Format SVG
Il est recommandé d’utiliser le format SVG (Scalable Vector Graphics) plutôt qu’une police d'icône pour les raisons suivantes :
<ul>
    <li>format facilement redimensionnable</li>
    <li>grande variété  de couleurs</li>
    <li>contrôle de chaque tracé (path) qui compose l’icône</li>
    <li>contrôle de l’épaisseur du trait</li>
    <li>possibilité d’animer les icônes</li>
</ul>

### Sélection des icônes
La librairie d'icônes vectorielles Streamline est la banque d'icônes officielle à utiliser. Cette librairie contient plus de 5000 icônes optimisées aux dimensions recommandées par les standards d'iOS et d'Android.

Insérer une <a href="https://ulaval.github.io/modul/composants/indicateurs/m-icon/portrait">icône de la librairie</a> à une application

### Icônes personnalisées
Bien que l'utilisation d'icônes de la librairie existante soit à privilégier, de nouvelles icônes peuvent être créées pour répondre à des besoins spécifiques. Ces nouvelles icônes devront être créées en respectant une grille de 30 par 30 pixels, puis enregistrées en format SVG.
