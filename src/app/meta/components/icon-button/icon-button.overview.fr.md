L'icône cliquable est un contrôle qui a comme seul libellé l'icône elle-même. Le choix de l'icône est donc essentiel afin de bien représenter l'action ou le contenu qui sera accessible lorsque l'utilisateur interagira avec lui. Elle est plus discrête qu'un bouton standard, tout en offrant le même type de fonctionnalité.

<modul-do>
<ul>
<li>Utiliser une icône cliquable pour ouvrir une fenêtre contextuelle, comme une liste de notifications.</li>
<li> Utiliser l'icône cliquable pour effectuer une action, comme la modification d'un élément.
<li>Utiliser l'icône cliquable pour ouvrir une palette d'outils.</li>
</ul>
</modul-do>

## Caractéristiques
### Traitements visuels
Le composant *icône cliquable* offre plusieurs traitements visuels.


<modul-demo>

```css
.icon-list-item-no-bullet {
    list-style-type: none;
}
.icon-list-item-no-bullet>li {
    padding: 2px 0px;
}

.icon-list-padding {
    padding: 12px 6px;
}

.dark {
    background: #000;
}
```

```html
<ul class="icon-list-item-no-bullet">
    <li>
        <span class="icon-list-padding">
            <m-icon-button class="icon-list-padding" skin="light" icon-name="search"  title="Rechercher une personne">Recherche</m-icon-button>
        </span>
        <span class="m-u--font-weight--bold m-u--margin-left">Lumineux&nbsp;:</span> traitement par defaut utilisé lorsque l'arrière-plan est pâle.
    </li>
    <li>
        <span class="icon-list-padding dark">
            <m-icon-button skin="dark" icon-name="search"  title="Rechercher une personne">Recherche</m-icon-button>
        </span>
        <span class="m-u--font-weight--bold m-u--margin-left">Sombre&nbsp;:</span> utilisé lorsque l'arrière-plan est foncé.
    </li>
    <li>
        <span class="icon-list-padding">
            <m-icon-button skin="primary" icon-name="search"  title="Rechercher une personne">Recherche</m-icon-button>
        </span>
        <span class="m-u--font-weight--bold m-u--margin-left">Primaire&nbsp;:</span> utilisé pour mettre l'emphase sur la tâche ou l'action principale.
    </li>
    <li>
        <span class="icon-list-padding">
            <m-icon-button skin="secondary" icon-name="search"  title="Rechercher une personne">Recherche</m-icon-button>
        </span>
        <span class="m-u--font-weight--bold m-u--margin-left">Secondaire&nbsp;:</span> utilisé pour une des tâches ou actions secondaires.
    </li>
</ul>

```

</modul-demo>

### Taille
Bien qu'il soit préférable de ne pas modifier la taille du bouton icône, il est tout de même possible de modifier la taille de la zone cliquable ou la taille de l'icône.

<modul-demo>

```html
<m-icon-button iconSize="16px" icon-name="calendar" title="Afficher le calendrier">Calendrier</m-icon-button>
<m-icon-button iconSize="24px" icon-name="calendar" title="Afficher le calendrier">Calendrier</m-icon-button>
<m-icon-button iconSize="32px" icon-name="calendar" title="Afficher le calendrier">Calendrier</m-icon-button>
```

</modul-demo>

### Accessibilité
Il est obligatoire de définir un libellé qui sera affiché au survol de l'icône et lu aux personnes utilisant un lecteur vocal. Comme pour un <modul-go name="m-button"></modul-go>, le libellé devrait être un verbe d'action à l'infinitif désignant l'action effectuée lorsque l'utilisateur clique sur l'icône.