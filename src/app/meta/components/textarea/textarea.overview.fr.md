Une zone de texte permet à l'utilisateur de saisir des texte longs servant généralement à compléter un formulaire.

<modul-do>
    <ul>
        <li>L'utilisation d'une zone de texte est préférable à celle du<!-- <modul-go name="">texte riche</modul-go>--> texte riche lors l'utilisateur doit saisir un long texte et qu'il ne doit pas y inclure de liens ou modifier le style du texte.</li>
    </ul>
</modul-do>

<modul-dont>
    <p>Si l'information saisie dans le champ est généralement court et ne tombe pas sur deux ligne le composant  <modul-go name="m-textfield"></modul-go> devrait être utilisé au lieu de la zone de texte.</p>
</modul-dont>

## Caractéristiques

### Nombre de caractères maximal
Il est possible de limiter le nombre caractères à afficher dans la zone de texte. Si la limite caractère est atteinte ou dépassé, la saisie au clavier est encore fonctionnelle et le champ se met en erreur.

### Hauteur du champ
Le composant gère automatiquement l'ajout et le retrait de la ligne en fonction de la longeur du texte.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>


### États et messages de validation
Ce composent gère les états (en attente, désactivé, erreur, valide) et les messages de validation tout en offrant la possibilité de personaliser chacun de ces paramètres. Lorsque possible, les validations sont effectuées à la sortie de la zone texte.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>