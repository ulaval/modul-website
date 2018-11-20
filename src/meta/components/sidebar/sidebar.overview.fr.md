Une *fenêtre coulissante* permet d'afficher de l'information par-dessus une portion du contenu principal. Il est possible de paramètrer l'ouverture de la fenêtre selon des points d'origine.
### Options d'ouverture

**Ouverture du haut vers le bas**

<modul-demo>

```html
<m-sidebar origin="top">
    <m-button slot="trigger">Ouvrir</m-button>
    <h2 slot="header">Titre</h2>
    <p>Consectetur dolore commodo voluptate est laborum ex nulla. Amet nisi quis minim dolor voluptate est nisi anim elit duis enim. Sint veniam tempor occaecat irure nostrud eiusmod. Fugiat nostrud laborum pariatur dolor tempor in in nostrud reprehenderit minim culpa incididunt.</p>
    <span slot="footer">Consectetur dolore commodo voluptate est laborum ex nulla.</span>
</m-sidebar>
```

</modul-demo>

**Ouverture du bas vers le haut (par défaut)**

<modul-demo>

```html
<m-sidebar origin="bottom">
    <m-button slot="trigger">Ouvrir</m-button>
    <h2 slot="header">Titre</h2>
    <p>Consectetur dolore commodo voluptate est laborum ex nulla. Amet nisi quis minim dolor voluptate est nisi anim elit duis enim. Sint veniam tempor occaecat irure nostrud eiusmod. Fugiat nostrud laborum pariatur dolor tempor in in nostrud reprehenderit minim culpa incididunt.</p>
    <span slot="footer">Consectetur dolore commodo voluptate est laborum ex nulla.</span>
</m-sidebar>
```

</modul-demo>

**Ouverture de la gauche vers la droite**

<modul-demo>

```html
<m-sidebar origin="left">
    <m-button slot="trigger">Ouvrir</m-button>
    <h2 slot="header">Titre</h2>
    <p>Consectetur dolore commodo voluptate est laborum ex nulla. Amet nisi quis minim dolor voluptate est nisi anim elit duis enim. Sint veniam tempor occaecat irure nostrud eiusmod. Fugiat nostrud laborum pariatur dolor tempor in in nostrud reprehenderit minim culpa incididunt.</p>
    <span slot="footer">Consectetur dolore commodo voluptate est laborum ex nulla.</span>
</m-sidebar>
```

</modul-demo>

**Ouverture de la droite vers la gauche**

<modul-demo>

```html
<m-sidebar origin="right">
    <m-button slot="trigger">Ouvrir</m-button>
    <h2 slot="header">Titre</h2>
    <p>Consectetur dolore commodo voluptate est laborum ex nulla. Amet nisi quis minim dolor voluptate est nisi anim elit duis enim. Sint veniam tempor occaecat irure nostrud eiusmod. Fugiat nostrud laborum pariatur dolor tempor in in nostrud reprehenderit minim culpa incididunt.</p>
    <span slot="footer">Consectetur dolore commodo voluptate est laborum ex nulla.</span>
</m-sidebar>
```

</modul-demo>