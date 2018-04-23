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

<modul-demo>

```html
<m-progress value="75"></m-progress>
<m-progress value="75" :circle="true"></m-progress>
```

```css
.m-progress {
    margin-top: 12px;
}
```

</modul-demo>

### Indéterminé
La *barre de progression* peut représenter une valeur déterminée ou indéterminée. Lorsque la *barre de progression* est indéterminée, il demande à l'utilisateur d'attendre que quelque chose se termine sans qu'il soit nécessaire d'indiquer la progression.

<modul-demo>

```html
<m-progress value="50" :indeterminate="true"></m-progress>
<m-progress value="50" :circle="true" :indeterminate="true"></m-progress>
```

```css
.m-progress {
    margin-top: 12px;
}
```

</modul-demo>

### Dimension
La *barre de progression* en mode barre horizontale a une hauteur de 6 pixels et prend la pleine largeur de son conteneur. Il est possible de modifier la hauteur au besoin. L'indicateur de progression en mode cercle a un diamètre de 50 pixels et la largeur de son trait est de 4 pixels par défaut.
Il est également possible de modifier les dimensions du cercle.

<modul-demo>

```html
<m-progress value="75" size="18"></m-progress>
<m-progress value="75" :circle="true" diameter="100" stroke="10"></m-progress>
```

```css
.m-progress {
    margin-top: 12px;
}
```

</modul-demo>

### État
Différents états de *barre de progression* sont disponibles en fonction du type d'information à transmettre. L'état de la *barre de progression* affiché se distingue par sa couleur.

#### Complété
Cet état est utilisé lorsque le travail a été effectué avec succès.

<modul-demo>

```html
<m-progress value="75" state="completed"></m-progress>
<m-progress value="75" :circle="true" state="completed"></m-progress>
```

```css
.m-progress {
    margin-top: 12px;
}
```

</modul-demo>

#### En cours
Cet état est utilisé lorsque le travail est en cours de progression.

<modul-demo>

```html
<m-progress value="75" state="in-progress"></m-progress>
<m-progress value="75" :circle="true" state="in-progress"></m-progress>
```

```css
.m-progress {
    margin-top: 12px;
}
```

</modul-demo>

#### Erreur
Cet état est utilisé lorsque la progression a rencontré une erreur.

<modul-demo>

```html
<m-progress value="75" state="error"></m-progress>
<m-progress value="75" :circle="true" state="error"></m-progress>
```

```css
.m-progress {
    margin-top: 12px;
}
```

</modul-demo>
