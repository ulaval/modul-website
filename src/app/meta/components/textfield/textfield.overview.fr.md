Un champ de saisie permet à l'utilisateur de saisir de l'information servant généralement à compléter un formulaire.

<modul-do>
    <ul>
        <li>Fournir des étiquettes claires et toujours visibles pour chaque champ de saisie.</li>
        <li>Utiliser des étiquettes courtes et descriptives (un mot ou deux). Si des informations supplémentaires sont nécessaires, utiliser une <modul-go name="m-tooltip"></modul-go>.</li>
        <li>Un champ devrait être suffisamment grand pour que la plupart des valeurs possibles soient visibles, ne pas surdimensionner un champ.</li>
        <li>Lorsque possible, fournir des indices de saisie dans l’espace réservé du champ. Par exemple, fournir un masque de saisie pour le champ du numéro de téléphone.</li>
    </ul>
</modul-do>

## Caractéristiques

### Type de champ
Le type de champ est très important, surtout lors de l'utilisation avec un appareil mobile, puisqu'il permet d'indiquer au navigateur le type de données attendues dans le champ et ainsi afficher le bon type de clavier. Cinq types sont supportés par le composant&nbsp;: **texte**, **mots de passe**, **courriel**, **url** et **téléphone**.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Longueur du champ
La longueur du champ est déterminée par la longueur estimée du contenu que l'on s'attend à recevoir. Par exemple, si on s'attend à un code postal, le champ pourrait afficher 7 caractères. Si on s'attend à un prénom, le champ pourrait, par exemple, afficher jusqu'à 40 caractères.

### États et messages de validation
Ce composent gère les états (en attente, désactivé, erreur, valide) et les messages de validation tout en offrant la possibilité de personaliser chacun de ces paramètres. Lorsque possible, les validations sont effectuées à la sortie du champ.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>
