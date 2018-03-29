
<modul-preview>

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
<m-inplace-edit :editMode="editMode" @confirm="editMode = false" @cancel="editMode = false" style="padding:10px;">
    <div slot="readMode">
        <div class="modul-demo__inplace-edit-read-mode">
            <m-button skin="secondary" class="modul-demo__inplace-edit-button" @click="editMode = true" title="Modifier le titre et la description de la section">Modifier le texte</m-button>
            <h3 class="modul-demo__inplace-edit-title m-u--no-margin">La déforestation des espaces protégés</h3>
        </div>
        <div class="m-u--margin-top">
            <p>Depuis une dizaine d’années, les surfaces déforestées en Amazonie diminuent chaque année et le déboisement en 2014 a représenté moins de 20 % de celui de 2004. Doit-on en déduire que le Brésil maîtrise désormais le phénomène de déforestation ? Répondre à cette question implique d’exposer la complexité du phénomène de déforestation.</p>
        </div>
    </div>
    <div slot="editMode">
        <m-textfield max-width="none" value="La déforestation des espaces protégés" tag-style="h3" :focus="true"></m-textfield>
        <m-textarea max-width="none" class="m-u--margin-top" :value="text"></m-textarea>
    </div>
</m-inplace-edit>

```

</modul-preview>