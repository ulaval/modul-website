L'édition sur place permet à l'utilisateur de modifier un texte dans son contexte, sans effectuer de navigation supplémentaire. Il peut en tout temps se référer au reste de l'interface et s'assurer du rendu visuel du texte qu'il est en train d'éditer.

Il est possible de modifier plusieurs textes en même temps lorsqu'ils appartiennent à un petit regroupement logique. Par exemple, le titre et la description d'une section.

<modul-do>
    <ul>
        <li>Utiliser ce composant lorsque le nombre de champs à éditer est limité (de 1 à 3).</li>
        <li>Utiliser ce composant lorsque l'utilisateur a besoin de se référer au reste de la page pour réaliser sa tâche. Par exemple, lorsqu'il édite un texte faisant partie d'une série.</li>
    </ul>
</modul-do>

<modul-dont>
    <ul>
        <li>Lorsqu'un regroupement logique contient trop de champs, il est alors préférable de présenter tous les champs éditables d'emblée dans un formulaire classique.</li>
    </ul>
</modul-dont>

### Donner accès au mode édition

Lorsque l'on décide d'utiliser l'édition sur place dans un système de gestion de contenu, il est recommandé de suivre le comportement habituel du système. Par exemple, dans les sites de cours, le menu d'options est privilégié pour donner accès au mode édition.<br />

<modul-demo>

```javascript
{
    data: {
        editMode: false,
        errorPresent: false
    }
}
```

```css
.modul-demo__inplace-edit-component.modul-demo__inplace-edit-component {
    padding: 10px;
}
.modul-demo__inplace-edit-read-mode {
    position: relative;
}
.modul-demo__inplace-edit-title {
    padding-right: 44px;
}
.modul-demo__inplace-edit-button.modul-demo__inplace-edit-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
```

```html
<m-inplace-edit :editMode="editMode" @confirm="editMode = false" @cancel="editMode = false" class="modul-demo__inplace-edit-component">
    <div slot="readMode" class="modul-demo__inplace-edit-read-mode">
        <p class="modul-demo__inplace-edit-title">La déforestation des espaces protégés</p>
        <m-menu placement="bottom-end" class="modul-demo__inplace-edit-button">
            <m-menu-item @click="editMode = true" title="Modifier le titre de la section">Modifier</m-menu-item>
            <m-menu-item>Supprimer</m-menu-item>
        </m-menu>
    </div>
    <div slot="editMode">
        <m-textfield max-width="none" value="La déforestation des espaces protégés"></m-textfield>
    </div>
</m-inplace-edit>

```

</modul-demo>

Dans les autres cas, il faut évaluer l'importance de l'action d'éditer par rapport à la clarté de l'interface. Si l'action d'édition est prioritaire, l'utilisation d'un bouton pourrait être justifié. Au contraire, s'il y a beaucoup d'élément éditables, et que l'on souhaite préserver la clarté de l'interface, un bouton icône pourrait être une meilleure option. L'apparition au survol est déconseillée, puisque le survol est non supporté par les écrans tactiles, en plus de présenter un obstacle à l'accessibilité.

<modul-demo>

```javascript
{
    data: {
        editMode: false,
        errorPresent: false,
        text: "Depuis une dizaine d’années, les surfaces déforestées en Amazonie diminuent chaque année et le déboisement en 2014 a représenté moins de 20 % de celui de 2004. Doit-on en déduire que le Brésil maîtrise désormais le phénomène de déforestation ? Répondre à cette question implique d’exposer la complexité du phénomène de déforestation."
    }
}
```

```css
.modul-demo__inplace-edit-component.modul-demo__inplace-edit-component {
    padding: 10px;
}
.modul-demo__inplace-edit-read-mode {
    position: relative;
}
.modul-demo__inplace-edit-title {
    padding-right: 44px;
}
.modul-demo__inplace-edit-button.modul-demo__inplace-edit-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
```

```html
<m-inplace-edit :editMode="editMode" @confirm="editMode = false" @cancel="editMode = false" class="modul-demo__inplace-edit-component">
    <div slot="readMode">
        <div class="modul-demo__inplace-edit-read-mode">
            <m-icon-button class="modul-demo__inplace-edit-button" @click="editMode = true" icon-name="m-edit" title="Modifier la section"></m-icon-button>
            <h3 class="modul-demo__inplace-edit-title m-u--no-margin">La déforestation des espaces protégés</h3>
        </div>
        <div class="m-u--margin-top">
            <p>Depuis une dizaine d’années, les surfaces déforestées en Amazonie diminuent chaque année et le déboisement en 2014 a représenté moins de 20 % de celui de 2004. Doit-on en déduire que le Brésil maîtrise désormais le phénomène de déforestation ? Répondre à cette question implique d’exposer la complexité du phénomène de déforestation.</p>
        </div>
    </div>
    <div slot="editMode">
        <m-textfield max-width="none" value="La déforestation des espaces protégés" tag-style="h3"></m-textfield>
        <m-textarea max-width="none" class="m-u--margin-top" :value="text"></m-textarea>
    </div>
</m-inplace-edit>

```

</modul-demo>

#### Accessibilité
Les utilisateurs ayant recours à une assistance technique pour la lecture d'écran doivent être informés du type de contenu qu'ils pourront éditer.

### Petits écrans
Sur petits écrans, la notion de page est beaucoup moins omniprésente, et la navigation vers un nouvel écran est plus naturelle. Elle permet d'isoler la tâche, de réduire la charge mentale et facilite ainsi l'édition. Lorsque sur grand écran, l'édition se fait sur place, elle se fera automatiquement dans une fenêtre secondaire sur petit écran. Le titre de la fenêtre secondaire portera alors le nom de l'élément, ou du regroupement d'éléments à éditer.

### Enregistrement et validation
Lorsque des validations s'appliquent, elles sont traitées comme pour un formulaire classique : au sortir du champs et après avoir cliqué sur le bouton *Enregistrer*.
Quelque soit le nombre de champs utilisés (il devrait être de 3 ou moins), les messages d'erreur sont toujours placés en dessous de chaque champ, jamais dans un message global.

<modul-demo>

```javascript
{
    data: {
        editMode: true,
        errorPresent: true
    }
}
```

```css
.modul-demo__inplace-edit-read-mode {
    position: relative;
}
.modul-demo__inplace-edit-title {
    padding-right: 44px;
}
.modul-demo__inplace-edit-button.modul-demo__inplace-edit-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
```

```html
<m-inplace-edit :editMode="editMode" @confirm="editMode" @cancel="editMode" :error="errorPresent">
    <div slot="readMode" class="modul-demo__inplace-edit-read-mode">
        <p class="modul-demo__inplace-edit-title"></p>
        <m-icon-button class="modul-demo__inplace-edit-button" @click="editMode" icon-name="m-edit" title="Modifier le courriel"></m-icon-button>
    </div>
    <div slot="editMode">
        <m-textfield max-width="none" value="" :required-marker="true" label="Courriel" :error="errorPresent" error-message="Le courriel est obligatoire."></m-textfield>
    </div>
</m-inplace-edit>

```

</modul-demo>

Pour éviter la perte de donnée, un message d'avertissement est affiché lorsque l'utilisateur décide de naviguer vers une autre page avant d'avoir enregistré (ou annulé) ses modifications.

### Cas particuliers
#### Champ vide
Lors de l'édition d'un champ vide, il est recommandé d'utiliser un texte de remplissage pour assurer une transition fluide entre le mode de consultation et le mode d’édition. Le texte par défaut du champ en mode consultation et placé comme texte de remplissage en mode édition.

<modul-demo>

```javascript
{
    data: {
        editMode: false,
        errorPresent: false
    }
}
```

```css
.modul-demo__inplace-edit-component.modul-demo__inplace-edit-component {
    padding: 10px;
}
.modul-demo__inplace-edit-read-mode {
    position: relative;
}
.modul-demo__inplace-edit-title {
    padding-right: 44px;
}
.modul-demo__inplace-edit-button.modul-demo__inplace-edit-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
```

```html
<m-inplace-edit :editMode="editMode" @confirm="editMode = false" @cancel="editMode = false" class="modul-demo__inplace-edit-component">
    <div slot="readMode" class="modul-demo__inplace-edit-read-mode">
        <h3 class="modul-demo__inplace-edit-title m-u--no-margin">Je suis un sous-titre</h3>
        <m-icon-button @click="editMode = true" icon-name="m-edit" title="Modifier le sous-titre" class="modul-demo__inplace-edit-button"></m-icon-button>
    </div>
    <div slot="editMode">
        <m-textfield max-width="none" placeholder="Je suis un sous-titre" tag-style="h3" :focus="true"></m-textfield>
    </div>
</m-inplace-edit>

```

</modul-demo>

#### Champ facultatif
Lors de l'édition de plusieurs éléments dont un est facultatif , le champ peut-être masqué en consultation. Si c'est le cas, il devrait apparaître à sa place en mode édition.

<modul-demo>

```javascript
{
    data: {
        editMode: false,
        errorPresent: false,
        text: "Depuis une dizaine d’années, les surfaces déforestées en Amazonie diminuent chaque année et le déboisement en 2014 a représenté moins de 20 % de celui de 2004. Doit-on en déduire que le Brésil maîtrise désormais le phénomène de déforestation ? Répondre à cette question implique d’exposer la complexité du phénomène de déforestation."
    }
}
```

```css
.modul-demo__inplace-edit-read-mode {
    position: relative;
}
.modul-demo__inplace-edit-title {
    padding-right: 44px;
}
.modul-demo__inplace-edit-button.modul-demo__inplace-edit-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
```

```html
<m-inplace-edit :editMode="editMode" @confirm="editMode = false" @cancel="editMode = false">
    <div slot="readMode" class="modul-demo__inplace-edit-read-mode">
        <m-icon-button class="modul-demo__inplace-edit-button" @click="editMode = true" icon-name="m-edit" title="Modifier le titre de la section"></m-icon-button>
        <p class="modul-demo__inplace-edit-title m-u--padding">Depuis une dizaine d’années, les surfaces déforestées en Amazonie diminuent chaque année et le déboisement en 2014 a représenté moins de 20 % de celui de 2004. Doit-on en déduire que le Brésil maîtrise désormais le phénomène de déforestation ? Répondre à cette question implique d’exposer la complexité du phénomène de déforestation.</p>
    </div>
    <div slot="editMode">
        <m-textfield max-width="none" placeholder="Je suis un sous-titre" tag-style="h3"></m-textfield>
        <m-textarea max-width="none" class="m-u--margin-top" :value="text"></m-textarea>
    </div>
</m-inplace-edit>

```

</modul-demo>