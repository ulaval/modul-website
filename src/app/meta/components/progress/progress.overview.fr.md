La *barre de progression* (ou barre de chargement) est un composant graphique qui permet d'indiquer à l'utilisateur l'état d'avancement d'un travail exécuté dans l'application. Au début la barre est complètement vide, puis elle se remplit au fur et à mesure de l'avancement de la tâche pour finir complètement remplie lorsque le travail est terminé.

<modul-do>
    <ul>
        <li>Définir si la valeur de progression est déterminée ou indéterminée</li>
        <li>Établir le mode d'affichage de la barre de progression</li>
    </ul>
</modul-do>

## Caractéristiques

### Mode
La *barre de progression* peut être représentée de 2 manières soit par une barre horizontale ou par un cercle.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Indéterminé
La *barre de progression* peut représenter une valeur déterminée ou indéterminée. Lorsque la *barre de progression* est indéterminée, il demande à l'utilisateur d'attendre que quelque chose se termine sans qu'il soit nécessaire d'indiquer la progression.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Dimension
La *barre de progression* en mode barre horizontale a une hauteur de 6 pixels et prend la pleine largeur de son conteneur. Il est possible de modifier la hauteur au besoin. L'indicateur de progression en mode cercle a un diamètre de 50 pixels et la largeur de son trait est de 4 pixels par défaut.
Il est également possible de modifier les dimensions du cercle.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>


### État
Différents états de *barre de progression* sont disponibles en fonction du type d'information à transmettre. L'état de la *barre de progression* affiché se distingue par sa couleur.

#### Complété
Cet état est utilisé lorsque le travail a été effectué avec succès.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

#### En cours
Cet état est utilisé lorsque le travail est en cours de progression.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

#### Erreur
Cet état est utilisé lorsque la progression a rencontré une erreur.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>