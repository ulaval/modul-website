Le composant *boîte* est utilisée pour grouper et mettre en évidence du contenu de même nature. Il est possible de changer son apparence selon le contexte où il est employée. Par exemple, changer sa couleur, ajouter des bordures, modifier ses marges internes, etc.

<modul-do>
    <ul>
        <li>S'assurer de la cohérence du traitement visuel des boîtes lorsque plusieurs boîtes cohabitent dans la même interface.<li>
        <li>Lorsque la couleur d'arrière-plan du conteneur parent de la boîte est blanche, l'ombre portée devrait être retirée.</li>
    </ul>
</modul-do>

<modul-dont>
    <ul>
        <li>Éviter d'utiliser le composant *boîte* comme le gabarit d'une page, car il doit servir à grouper et mettre en évidence du contenu et non à accueillir le contenu entier d'une page.</li>
        <li>Éviter d'abuser du style <em>mise en évidence</em>.</li>
    </ul>
</modul-dont>

## Caractéristiques

### Entête
Il est possible d'utiliser le composant *boite* avec un entête et un titre, mais ce n'est pas obligatoire. Le style du titre n'est pas normé et est à la discrétion de l'analyste.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Marges internes (padding)
La largeur des marges internes est ajustée selon les points de rupture. Par exemple, pour les petits écrans, les marges seront automatiquement réduites. Il est également possible de retirer les marges internes de la boîte, lorsque celles-ci ne répondent pas au besoin.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Mise en évidence
Pour attirer l'attention sur une boîte en particulier, il est possible d'ajouter une bordure orange qui mettra en évidence la boîte.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Couleurs
Le composant *boîte* offre trois couleurs&nbsp;: blanc, gris pâle et gris foncé.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Bordures et ombre portée
Les bordures et l'ombre portée permettent à la boîte d'obtenir un plus grand contraste avec son environnement. Les bordures possèdent également deux largeurs&nbsp;: régulière et large.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>