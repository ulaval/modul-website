<p>Les normes d'accessibilité Web permettent un accès aux services et aux contenus en ligne, non seulement pour les personnes handicapées et les seniors, mais aussi pour tous les utilisateurs qui ne disposent pas du confort offert par un ordinateur de bureau situé dans une pièce tranquille. En effet, leur application concernent également les utilisateurs non handicapés placés dans des situations moins confortables, par exemple l'utilisation d'un téléphone mobile, d'une tablette, ou placés en situation particulière de bruit, de dimension d'affichage, etc. L'accessibilité du Web repose sur le respect de règles par l'ensemble des acteurs qui travaillent à la réalisation d'outils Web. L'équipe modUL a regroupé une liste de recommandations générales qui permettent d'offrir des outils Web accessibles.</p>

<h2>Recommandations générales</h2>

<h3>Focus</h3>
<p>Souligner le focus par un changement de style.</p>

<h3>Étiquetage des éléments de formulaire</h3>
<p>Uniformiser l’étiquetage par la "méthode consécutive" :</p>
<ul class="m-u--bullet-list">
    <li> &lt; label for="nom" &gt; Nom complet &lt; /label &gt;</li>
    <li> &lt; input type="text" name="nom" id="nom" / &gt; </li>
</ul>

<h3>Alternatives textuelles pour les boutons iconographiques et les hyperliens en images</h3>
<ul class="m-u--bullet-list">
    <li>S’il s’agit d’une balise &lt; img &gt; dans une balise &lt; a &gt; ou &lt; button &gt;, simplement fournir une alternative textuelle comme valeur de l’attribut alt. L’alternative textuelle doit décrire la cible de l’hyperlien ou l’action commandée par le bouton.</li>
    <li>S’il s’agit d’un svg en ligne, simplement fournir une alternative textuelle dans une balise title au début du svg.</li>
    <li>S’il s’agit d’un caractère remplacé par une police d’icônes, il faudra d’abord caché ce caractère avec l’attribut ariahiden="true" puis, fournir une alternative textuelle dans un autre conteneur html (&lt; span &gt;  par exemple). Ce texte peut être visuellement caché par une classe utilitaire appropriée (Exemple : la classe *visuallyhidden* qu’on peut retrouver dans cette référence : <a href="https://davidwalsh.name/html5-boilerplate" target=_blank>https://davidwalsh.name/html5-boilerplate</a>).</li>
</ul>

<h3>Liens significatifs</h3>
<p>Il est recommandé d'éviter les liens du type "Lire la suite", "Cliquer ici"</p>

<h3>Table des matières des contenus</h3>
<p>S’assurer que les titres et sous-titres constituent une tables des matières représentative des contenus.</p>

<h3>Abréviations</h3>
<p>Lorsque possible, elles devraient être contenus dans une balise <abbr>, accompagnée de l'attribut title.</p>

<h3>Balises HTML 5</h3>
<p>Lorsque possible, utiliser les balises HTML 5 telles &lt; aside &gt;, &lt; menu &gt;, &lt; meuitem &gt;, &lt; section &gt;, etc., car elles ajoutent des éléments sémantiques à la page, ce qui signifie une meilleure accessibilité.  Ce tableau montre le support actuel des différents navigateurs.</p>

<h3>Raccourcis accessibles aux lecteurs vocaux vers les éléments importants en haut de page</h3>
<ul class="m-u--bullet-list">
    <li>contenu de la page</li>
    <li>menu</li>
    <li>pied de page</li>
    <li>formulaire de recherche</li>
</ul>

<h3>Ordre de navigation (tabindex)</h3>
<p>L'attibut tabindex, ajouté aux balises HTML, permet d'indiquer l'ordre de passage lorsque la touche Tab est activée, et ce, quel que soit la position des éléments sur la page.</p>

<h3>Autres recommandations</h3>
<ul class="m-u--bullet-list">
    <li>Indiquer, pour chaque composant, quelle info les analystes doivent fournir aux intégrateurs et/ou aux développeurs frontend</li>
    <li>Indiquer aux analyste les éléments d’accessibilité qu’ils doivent fournir pour chacun des gabarits/pages de l’application</li>
</ul>

<h3>Lecteurs vocaux</h3>
<ul class="m-u--bullet-list">
    <li><a href="https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh" target=_blank>Wave</a></li>
    <li><a href="https://www.nvda-fr.org/download/" target=_blank>NVDA</a></li>
</ul>