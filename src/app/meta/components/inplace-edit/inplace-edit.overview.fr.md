L'édition sur place permet à l'utilisateur de basculer entre le mode lecture et édition sans avoir à passer par un formulaire complexe.

<modul-do>
    <ul>
        <li>Il est recommendé d'appliquer le même formattage sur le champs d'édition que celui appliqué sur le champs en mode lecture seulement lors que l'édition est en mode desktop, sinon appliquer le style par défaut des zones d'édition.</li>
        <li>Laisser les comportement par défaut des champs de saisie et utiliser leur fonctionnalité de gestion des erreurs.</li>
    </ul>
</modul-do>

<modul-dont>
<ul>
        <li>Quoiqu'il soit possible de passer plusieurs champs dans la "slot" associée aux modes lecture et écriture, il ne faut pas dépasser 3 champs à la fois pour respecter le concept derrière l'édition rapide, si plus de champs doivent être édités en même temps, faire un formulaire complet.</li>
        <li>Ne pas effectuer d'action liées à la confirmation/enregistrement et annulation de la saisie lors d'événement clavier comme "entrée" et "échappe".</li>
    </ul>
</modul-dont>

## Caractéristiques

### Mode
La propriété "editMode" est ce qui contrôle le basculement entre le mode édition et le mode lecture. Cette propriété n'est pas géré par le composant et la valeur doit être maintenue par le parent lors des différents événements levés.

<modul-demo>

```javascript
{
    data: {
        editMode: false,
        errorPresent: false
    }
}
```

```html
<m-button @click="editMode = !editMode" style="margin-bottom: 20px;">Basculer mode lecture/écriture</m-button>
<m-button @click="errorPresent = !errorPresent" style="margin-bottom: 20px;">Basculer mode erreur/sans erreur</m-button>
<m-inplace-edit :editMode="editMode" @confirm="editMode = false" @cancel="editMode = false">
<div slot="readMode">Mon contenu</div>
<m-textfield slot="editMode" value="Mon contenu"></m-textfield>
</m-inplace-edit>
```

</modul-demo>

### États et messages de validation
Ce composent ne gère pas les états (en attente, désactivé, erreur, valide) ni les messages de validation, ils doivent être gérés par le parent fournissant le contenu.

### Initialisation par défault
<modul-demo>

```html
<m-inplace-edit @cancel="" @confirm="">
    <m-textfield slot="editMode" value="Contenu Slot écriture"></m-textfield>
    <h2 slot="readMode">Contenu Slot lecture</h2>
</m-inplace-edit>
```

</modul-demo>

### Initialisation en mode lecture
<modul-demo>

```html
<m-inplace-edit :editMode="false" @cancel="" @confirm="">
    <m-textfield slot="editMode">Contenu Slot écriture</m-textfield>
    <h2 slot="readMode">Contenu Slot lecture</h2>
</m-inplace-edit>
```

</modul-demo>

### Initialisation en mode écriture avec titre par défaut
<modul-demo>

```html
<m-inplace-edit :editMode="true" @cancel="" @confirm="">
    <m-textfield slot="editMode">Contenu Slot écriture</m-textfield>
    <h2 slot="readMode">Contenu Slot lecture</h2>
</m-inplace-edit>
```

</modul-demo>

### Initialisation en mode écriture avec titre de modale spécifié
<modul-demo>

```html
<m-inplace-edit :editMode="true" title="Titre fenêtre dialog mobile"  @cancel="" @confirm="">
    <m-textfield slot="editMode">Contenu Slot écriture</m-textfield>
    <h2 slot="readMode">Contenu Slot lecture</h2>
</m-inplace-edit>
```

</modul-demo>