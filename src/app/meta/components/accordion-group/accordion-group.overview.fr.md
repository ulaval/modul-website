Un *accordéon* permet de grouper du contenu sous différentes rubriques d'un même sujet et permet d'afficher ou masquer le contenu selon les besoins de l'utilisateur.

Ce composant doit être utilisé avec le composant <modul-go name="m-accordion">*accordéon*</modul-go> (m-accordion).

<modul-do>
    <ul>
        <li>L'utilisation d'un accordéon est recommandée lorsque le contenu de la page se sépare bien en rubriques et qu'il est pertinent de faire afficher seulement les éléments clés, afin de permettre aux utilisateurs de se concentrer sur l'information qui leur importe.</li>
        <li>Pour les grands écrans, il est préférable d'ouvrir toutes les rubriques lorsque qu'elles sont toutes susceptibles d'être consultées par l'utilisateur, même si le contenu est long.</li>
        <li>Pour les petits écrans, même si la plupart des rubriques risquent d'être consultées par l'utilisateur, il est préférable de fermer les rubriques par défaut, afin d'offir aux utilisateurs une vue d'ensemble des rubriques disponibles. L'accordéon peut-être également utilisé pour remplacer les onglets. Cette solution doit être privilégiée lorsqu'il y a trop d'onglets (8 onglets ou plus).</li>
        <li>Lorsque la plupart des rubriques risquent d'êtres utiles à l'utilisateur, il est préférable de permettre l'ouverture simultanée des rubriques.</li>
    </ul>
</modul-do>

<modul-dont>Pour les grands écrans, lorsque le contenu de la page est très long, il peut être intéressant de revoir la navigation et de favoriser l'utilisation du composant <modul-go name="m-tabs">onglets</modul-go>.</modul-dont>

## Caractéristiques
### Ouverture non simultanée
L'option **Tout ouvrir** est disponible dès qu'il y a plus d'une rubrique dans l'accordéon et que les rubriques peuvent être ouvertes simultanément. Elle est visible tant et aussi longtemps que toutes les rubriques ne sont pas toutes ouvertes. Dès qu'elles sont toute ouvertes, cette option est remplacée par **Tout fermer**.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Ouverture simultanée
Si un accordéon est ouvert et que l'utilisateur ouvre un second accordéon du même groupe, l'accordéon déjà ouvert ce fermera. Les rubriques d'un groupe d'accordéon ne peuvent donc pas être ouvertes simultanément.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Traitement visuel
Le traitement visuel de l'accordéon peut être&nbsp;:
* **Regulier&nbsp;:** utiliser pour regrouper plusieurs accordéon.
* **AlLéger&nbsp;:** utiliser lorsqu'il y a qu'un seul accordéon.
* **Nul&nbsp;:** aucun traitement visuel est appliqué sur l'accordéon.

<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

### Icône d'ouverture
Il est possible de changer le traitement visuel de l'icône d'ouverture, soit en ajoutant des bordures, modifiant sa taille et changeant son positionnement.
<m-message class="m-u--margin-top" skin="light" state="information">Exemple à venir</m-message>

<small class="m-u--display--block m-u--margin-top--l">**Source :** <m-link mode="link" url="http://www.nngroup.com/articles/accordions-complex-content/" target="_blank">Nielsen Norman Group</m-link></small>