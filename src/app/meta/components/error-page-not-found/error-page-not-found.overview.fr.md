Des erreurs techniques sont affichées à l'utilisateur lorsque le système n'est pas capable de répondre à une demande ou qu'il n'est pas configuré correctement. Différentes situations vont produire différentes erreurs :
<!-- * système temporairement indisponible (panne); -->
* problème technique;
* page non trouvée;
* privilèges insuffisants;
* problèmes liés à la configuration du poste de l'utilisateur (version de navigateur incompatible, javascript désactivé, cookies désactivés, etc.)

En fonction de la situation, ces messages peuvent s'afficher selon l'une ou l'autre des façons suivantes :

* dans la page entière (le menu et l'entête ne sont pas affichés);
* dans le corps de la page (le menu et l'entête sont affichés);
* dans une fenêtre de dialogue;
* dans une section de la page;

### Problème technique
Le message concernant un problème technique s'affiche lorsque le serveur ne peut répondre à une requête et retourne l'un des codes suivants au navigateur :

* HTTP 400 : Bad Request
* HTTP 500 : Internal Server Error
* HTTP 502 : Bad Gateway
* HTTP 504 : Gateway Timeout

Ce message s'affiche également pour toute autre erreur technique telle qu'une erreur javascript, une erreur HTTP 404 retournée par un service, etc. Il peut également s'afficher lorsque le réseau est indisponible ou tout autre problème technique.

Sauf exception, ce message n'empêche pas l'utilisateur d'accomplir la plupart de ses tâches. Toutefois, si le problème persiste, il est suggéré de contacter le soutien technique.

À noter que le gabarit est fait en javascript afin de pouvoir afficher le message même si le réseau est indisponible.

En général, ce message s'affiche dans une fenêtre de dialogue. Si le l'erreur empêche le bon fonctionnement d'une section complète, le message s'affiche dans la page, à la place du contenu.

<modul-demo>

```html
<m-error-technical-difficulty>Bouton primaire</m-error-technical-difficulty>
```
</modul-demo>

### Page non trouvée
La page non trouvée s'affiche lorsque la page demandée par l'utilisateur n'existe pas sur le serveur (code d'erreur HTTP 404). La page peut avoir été déplacée ou supprimée ou encore il peut s'agir d'une erreur dans l'URL.

Il est à noter que si un service retourne une erreur HTTP 404, on affichera plutôt le message concernant un problème technique.

<modul-demo>

```html
<m-error-page-not-found>Bouton primaire</m-error-page-not-found>
```
</modul-demo>

### Privilèges insuffisants
Lorsque l'utilisateur n'a pas les privilèges suffisants pour l'affichage d'une page ou pour l'exécution d'un service, le message de privilèges insuffisants s'affiche. Les privilèges sont déterminés en fonction des accès de l'utilisateur, obtenus par les services offerts par mpo-identité.

<modul-demo>

```html
<m-error-access-denied>Bouton primaire</m-error-access-denied>
```
</modul-demo>

### Problèmes liés à la configuration du client
Puisque plusieurs problèmes liés à la configuration du poste client peuvent se produire, différentes pages d'erreurs sont prévues pour pallier à ces situations :

* Version de navigateur incompatible
* Version de navigateur non optimale
* Javascript désactivé
* Cookies désactivés

#### Version de navigateur incompatible
La librairie MODUL est compatible avec tous les navigateurs récents. Seuls IE8, IE9 et IE10 sont considérés incompatibles. Il est possible que votre application exige une configuration différente, mais dans tous les cas, la page d'erreur affichée devrait être celle ci-dessous.

##### Ordinateur
Lorsqu'un ordinateur est utilisé pour accéder à l'application et que le navigateur utilisé n'est pas compatible, on affiche un message à l'utilisateur lui indiquant qu'il doit mettre son naviageur à niveau. Un lien permet de le rediriger vers la page <m-link type="link" href="http://outdatedbrowser.com/fr">Outdated Browser</m-link>. Il s'agit d'une page externe permettant à l'utilisateur de sélectionner une version plus récente de son navigateur préféré.

##### Appareil mobile
Lorsqu'un appareil mobile est utilisé pour accéder à l'application et que le navigateur utilisé n'est pas compatible, on affiche un message lui indiquant qu'il doit se rendre sur la boutique de téléchargement d'applications de son appareil pour effectuer la mise à jour de son navigateur.

Dans les deux cas, ce message d'erreur est affiché dans la page entière, l'utilisateur doit corriger la situation avant de pouvoir continuer.

#### Version de navigateur non optimale
Lorsqu'un navigateur n'est pas officiellement supporté, mais assez récent pour espérer un fonctionnement acceptable, il est possible d'afficher un message indiquant à l'utilisateur que l'application pourrait ne pas se comporter correctement.

Ce message devrait s'afficher uniquement lors de la première visite de l'utilisateur qui utilise une version de navigateur non optimale. Chaque fois qu'une nouvelle version de navigateur non optimale est détectée, le message s'affiche de nouveau.

#### Javascript désactivé

<modul-demo>

```html
<m-error-javascript-not-supported>Bouton primaire</m-error-javascript-not-supported>
```
</modul-demo>

Ce message d'erreur est affiché dans la page entière, l'utilisateur doit corriger la situation avant de pouvoir continuer.

#### Cookies désactivés

<modul-demo>

```html
<m-error-cookies-not-supported>Bouton primaire</m-error-cookies-not-supported>
```
</modul-demo>

Ce message d'erreur est affiché dans la page entière, l'utilisateur doit corriger la situation avant de pouvoir continuer.

### Autre pages d'erreur
La librairie met à votre disposition les pages d'erreur les plus courantes, mais il est possible de créer vos propres page en utilisant le gabarit
