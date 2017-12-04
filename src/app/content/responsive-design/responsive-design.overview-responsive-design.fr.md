De nos jours, une foule d'appareils permettent de naviguer sur le Web et se déclinent en différentes tailles d'écran. Depuis peu, l'utilisation combinée de téléphones intelligents et de tablettes a surpassé l'utilisation des ordinateurs. L'approche adaptative consiste donc à concevoir un site web, de façon à ce qu'il soit modulaire et puisse s'adapter à la taille de l'écran ainsi qu'aux fonctionnalités de l'appareil afin de faciliter la consultation et d'améliorer l'expérience utilisateur.

Pour ce faire, le contenu et/ou la disposition de la page sont modifiés en fonction de la taille et des fonctionnalités offertes par le navigateur. Cette approche permet entre autres d'éviter l'utilisation du défilement horizontal sur de petits appareils et de faciliter l'utilisation d'appareils tactiles.

Un site adaptatif est donc conçu à l'aide d'une grille et de points de rupture (breakpoints) définis en fonction de différentes largeurs d'écrans. Lorsque la taille de l'écran correspond à une largeur X, la disposition de la page ou le comportement d'un composant est modifié en conséquence.

## Liste des *Media Queries*
<table>
    <thead>
        <tr>
            <th>Largeur minimale</th>
            <th>Déclaré par</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>>= 480px</td>
            <td>**isMqMinXS**</td>
        </tr>
        <tr>
            <td>>= 768</td>
            <td>**isMqMinS**</td>
        </tr>
        <tr>
            <td>>= 1024</td>
            <td>**isMqMinM**</td>
        </tr>
        <tr>
            <td>>= 1200</td>
            <td>**isMqMinL**</td>
        </tr>
        <tr>
            <td>>= 1600</td>
            <td>**isMqXL**</td>
        </tr>
    </tbody>
</table>