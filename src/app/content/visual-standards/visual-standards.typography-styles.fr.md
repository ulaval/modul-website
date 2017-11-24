<h2>Typographie</h2>
<p>La typographie influence la lisibilité et l’efficacité d’un message et facilite le processus de compréhension et d’assimilation de l’information. Un texte bien formaté permet de mettre l’accent sur le contenu et non sur l’effort nécessaire pour le lire.</p>
<ul class="m-u--bullet-list">
    <li>Disponible sur  Google fonts et libre de droits, la famille de caractères à utiliser dans tout composant est «&nbsp;Source Sans Pro&nbsp;».</li>
    <li>Deux polices de caractères peuvent être utilisées&nbsp;:
        <ul>
            <li>Source Sans Pro, light, 300 pour le texte courant</li>
            <li>Source Sans Pro, normal, 400 pour les titres, les  sous-titres ou la mise en évidence</li>
        </ul>
    </li>
</ul>

<h2>Styles</h2>
<p>L’utilisation des styles CSS permet d’obtenir une mise en forme rapide et automatique du contenu. Ceux-ci sont déjà prédéfinis de manière à respecter le design de monPortail. Ainsi lorsque des modifications sont apportées au styles CSS, elles se répercutent automatiquement dans l’application.</p>

<h3>Texte normal</h3>

<p>Sur tous les appareils, le texte courant doit être défini ainsi :</p>
<ul class="m-u--bullet-list">
    <li>Un corps de 16px (corps = taille du caractère)</li>
    <li>Aucun interlettrage ( à moins qu'il ne soit nécessaire d'utiliser la graisse de caractère «Semi-bold, 600»)</li>
    <li>Un interlignage de 21 px (16px * 1.3  = ~ 21px)</li>
    <li>Paragraphe : .m-u--p</li>
</ul>

<h3>Utilisation des graisses</h3>

<p>La graisse correspond tout simplement à l'épaisseur du trait. Son utilisation permet d’attirer l’attention, de hiérarchiser l’information comme les titres et les sous-titres, les titres des colonnes d’un tableau ou de mettre en valeur certains mots, titres ou paragraphes. L’utilisation de la graisse devrait se faire raisonnablement, sans en abuser.</p>
<ul class="m-u--bullet-list">
    <li>Texte très gras = .m-u--font-weight--black</li>
    <li>Texte gras = .m-u--font-weight--bold</li>
    <li>Graisse normal d’un texte.m-u--font-weight--normal</li>
</ul>

<h3>Utilisation de l'italique</h3>
<p>Lorsqu’un mot étranger, une citation, une note ou une légende sont présents dans une texte, il est permis d’utiliser l’italique. Il devrait cependant être utilisé avec modération, car ce sont des caractères qui se lisent plus lentement.</p>
<ul class="m-u--bullet-list">
    <li>Texte en italique.m-u--font-style--italic</li>
    <li>Texte sans italique.m-u--font-style--normal</li>
</ul>

<h3>Utilisation du soulignement</h3>
<p>Dans toute application, l’utilisation du soulignement se fait uniquement au survol des liens cliquables. Souligné des titres ou des éléments importants dans un contenu pour les mettre en évidence n’est donc pas recommandé.</p>

<h3>Précision</h3>
<p>Il est parfois nécessaire d’ajouter une précision sur la nature d'un champ ou encore afficher un exemple d'utilisation. Cette précision est toujours rattachée à un champ doit être défini ainsi :</p>
<ul class="m-u--bullet-list">
    <li>Texte en italique</li>
    <li>Corps de 13px</li>
    <li>Couleur $gris du nuancier</li>
    <li>Texte en italique et en gris = .m-u--typo--precision</li>
</ul>

<h3>Surlignement</h3>
<p>Il est parfois nécessaire de surligner un texte pour attirer l’attention ou encore mettre en évidence un élément. Ce style doit être défini ainsi :</p>
<ul class="m-u--bullet-list">
    <li>Texte  en gras</li>
    <li>Corps de 14px</li>
    <li>Surlignement en jaune</li>
    <li>Texte surligné = .m-u--typo--highlighting</li>
</ul>