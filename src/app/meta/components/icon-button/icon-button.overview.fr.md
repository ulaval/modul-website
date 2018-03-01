Le bouton icône est représenté par une image seulement. Il permet généralement d'ouvrir des outils, des fenêtres contextuelles ou d'effectuer des actions.

## Caractéristiques
### Traitements visuels
Le composant *bouton icône* pemet plusieurs traitements visuels:
* **Lumineux&nbsp;:** traitement par defaut utilisé lorsque l'arrière-plan est pale.
* **Sombre&nbsp;:** utilisé lorsque l'arrière-plan est foncé.
* **Primaire&nbsp;:** traitement visuel semblable au <modul-go name="m-button"></modul-go>.
* **Secondaire&nbsp;:** traitement visuel semblable au <modul-go name="m-button"></modul-go>.

<modul-demo>

```html
<m-icon-button skin="light" icon-name="calendar">Calendrier</m-icon-button>
<span class="dark">
    <m-icon-button skin="dark" icon-name="clock">Temps</m-icon-button>
</span>
<m-icon-button skin="primary" icon-name="search">Recherche</m-icon-button>
<m-icon-button skin="secondary" icon-name="default">Fermer</m-icon-button>
```

```css
.dark {
    background: #000;
    padding: 12px 6px;
}
```

</modul-demo>

### Taille
Bien qu'il soit préférable de ne pas modifier la taille du bouton icône, il est tout de même possible de modifier la taille de la zone cliquable ou la taille de l'icône.

<modul-demo>

```html
<m-icon-button iconSize="24px" icon-name="calendar">Calendrier</m-icon-button>
<m-icon-button iconSize="36px" icon-name="clock">Temps</m-icon-button>
<m-icon-button iconSize="44px" icon-name="search">Recherche</m-icon-button>
```

</modul-demo>