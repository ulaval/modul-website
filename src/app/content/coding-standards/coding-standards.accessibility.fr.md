Les normes d'accessibilité Web permettent un accès aux services et aux contenus en ligne, non seulement pour les personnes handicapées et les seniors, mais aussi pour tous les utilisateurs qui ne disposent pas du confort offert par un ordinateur de bureau situé dans une pièce tranquille. En effet, leur application concernent également les utilisateurs non handicapés placés dans des situations moins confortables, par exemple l'utilisation d'un téléphone mobile, d'une tablette, ou placés en situation particulière de bruit, de dimension d'affichage, etc. L'accessibilité du Web repose sur le respect de règles par l'ensemble des acteurs qui travaillent à la réalisation d'outils Web. L'équipe modUL a regroupé une liste de recommandations générales qui permettent d'offrir des outils Web accessibles.

### Recommandations générales

#### Focus
Souligner le focus par un changement de style.

#### Étiquetage des éléments de formulaire
Uniformiser l’étiquetage par la "méthode consécutive" :
* <label for="nom">Nom complet</label>
* <input type="text" name="nom" id="nom" />

#### Alternatives textuelles pour les boutons iconographiques et les hyperliens en images
* S’il s’agit d’une balise <img> dans une balise <a> ou <button>, simplement fournir une alternative textuelle comme valeur de l’attribut alt. L’alternative textuelle doit décrire la cible de l’hyperlien ou l’action commandée par le bouton.
* S’il s’agit d’un svg en ligne, simplement fournir une alternative textuelle dans une balise title au début du svg.
* S’il s’agit d’un caractère remplacé par une police d’icônes, il faudra d’abord caché ce caractère avec l’attribut ariahiden="true" puis, fournir une alternative textuelle dans un autre conteneur html (<span> par exemple). Ce texte peut être visuellement caché par une classe utilitaire appropriée (Exemple : la classe visuallyhidden qu’on peut retrouver dans cette référence : https://davidwalsh.name/html5-boilerplate ).

#### Liens significatifs
Il est recommandé d'éviter les liens du type "Lire la suite", "Cliquer ici"

#### Table des matières des contenus
S’assurer que les titres et sous-titres constituent une tables des matières représentative des contenus.

#### Abréviations
Lorsque possible, elles devraient être contenus dans une balise <abbr>, accompagnée de l'attribut title.

#### Balises HTML 5
Lorsque possible, utiliser les balises HTML 5 telles <aside>, <menu>, <meuitem>, <section>, etc., car elles ajoutent des éléments sémantiques à la page, ce qui signifie une meilleure accessibilité.  Ce tableau montre le support actuel des différents navigateurs.

#### Raccourcis accessibles aux lecteurs vocaux vers les éléments importants en haut de page
* contenu de la page
* menu
* pied de page
* formulaire de recherche

#### Ordre de navigation (tabindex)
L'attibut tabindex, ajouté aux balises HTML, permet d'indiquer l'ordre de passage lorsque la touche Tab est activée, et ce, quel que soit la position des éléments sur la page.

#### Autres recommandations

* Indiquer, pour chaque composant, quelle info les analystes doivent fournir aux intégrateurs et/ou aux développeurs frontend
* Indiquer aux analyste les éléments d’accessibilité qu’ils doivent fournir pour chacun des gabarits/pages de l’application

### Lecteurs vocaux
* Wave : https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh
* NVDA : https://www.nvda-fr.org/download/