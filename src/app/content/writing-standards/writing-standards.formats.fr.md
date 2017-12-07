Par souci d'uniformité, certaines informations sont toujours présentées selon des formats prédéfinis.

## Date et heure
### Saisie et modification
Le format de date retenu pour la saisie et la modification est le suivant : **AAAA-MM-JJ**.

<m-panel>2015-01-15</m-panel>

Il doit être utilisé chaque fois qu'une date peut être inscrite ou modifiée par un utilisateur. Ce format est automatiquement appliqué lorsque le type de champ Sélecteur de date est spécifié au dossier fonctionnel.

Le format retenu pour l'heure, lors de la saisie et de la modification est basé sur une période de 24 h. Il est affiché de la façon suivante : **HH:MM**.

<m-panel>07:01<br/>2015-01-15 17:00</m-panel>

### Consultation
Lorsqu'une date est affichée, mais non modifiable, on utilise un format alphanumérique. Lors de l'affichage d'une date dans un tableau, il peut être pertinent d'utiliser le format numérique si l'espace est trop restreint. Toutefois, l'utilisation d'un format alphanumérique est recommandée si possible.

### Format long
Le format long est le suivant : **JJ mois AAAA**. Il s'agit du format privilégié en tout temps, lors d'une situation d'affichage où l'espace n'est pas restreint.

<m-panel>15 janvier 2015</m-panel>

### Format court
Le format court utilise le même modèle que le format long, sauf que le mois est abrégé. Ce format doit être utilisé lorsque l'espace est restreint, mais qu'il demeure pertinent d'afficher la date sous forme alphanumérique.

<m-panel>15 janv. 2015</m-panel>

### Premier du mois
Lorsque la date affichée correspond au premier du mois, on utilise toujours l'exposant <sup>**er**</sup> , peu importe qu'on utilise le format long ou le format court.

<m-panel>1<sup>er</sup> mars 2016</m-panel>

### Heure
Le format utilisé pour afficher l'heure est le suivant : **HH h MM**. Une espace insécable doit précéder et suivre le « h ».

<m-panel>
    <ul>
        <li>7 h</li>
        <li>17 h 05</li>
    </ul>
</m-panel>

Lorsque l'heure est combinée au format de date long, on utilise la préposition « à » pour séparer la date et l'heure. La préposition « à » doit également être suivie d'une espace insécable afin d'éviter que l'heure se retrouve sur une ligne différente. Lorsque le format court est utilisé, la préposition « à » n'est pas affichée.

<m-panel>
    <ul>
        <li>13 août 2015 à 14 h 30</li>
        <li>15 janv. 2015 8 h 30</li>
    </ul>
</m-panel>

### Plage horaire
Dans certains cas, il est pertinent de faire afficher une date sous forme de plage horaire, à l'aide de différentes notations, telles que *du ... au ... , de ... à ...*, etc. Une espace insécable doit suivre l'utilisation de chaque article ou préposition afin d'éviter d'afficher l'heure sur une ligne différente.

<m-panel>Du 12 janvier 2015 au 25 avril 2015</m-panel>

L'affichage d'une plage horaire peut contenir un seul ou une combinaison des éléments suivants :
* la date
* les jours
* l'heure

<m-panel>
    <ul>
        <li>Du 5 janvier au 24 avril</li>
        <li>Du lundi 5 janvier au vendredi 24 avril</li>
        <li>Du 5 janvier au 24 avril, les mardis, de 13 h à 15 h</li>
        <li>Du 5 janvier à 8 h au 7 janvier à 17 h</li>
        <li>Tous les mardis, de 13 h à 15 h</li>
    </ul>
</m-panel>

Si une date de début mais aucune date de fin n'est précisée pour l'activité d'apprentissage :

<m-panel>Débute le 10 mai 2016</m-panel>

Si la date de fin est précisée, mais pas la date de début :

<m-panel>Se termine le 25 mai 2016</m-panel>

Si une date de début et une date de fin sont précisées, et que ces dates ne sont pas dans le même mois :

<m-panel>Du 2 mars au 15 juin 2016</m-panel>

Si une date de début et une date de fin sont précisées, et que ces dates sont dans le même mois :

<m-panel>Du 15 au 20 juin 2006</m-panel>

Si la date de début et la date de fin sont précisées et sont le même jour :

<m-panel>Le 2 juillet 2016</m-panel>

À noter, lors de l'affichage d'une plage horaire, il est suggéré d'afficher les jours et les mois au complet, mais il est possible d'utiliser la version abrégée si l'espace est un enjeu. De plus, l'affichage de l'année est facultatif, mais il est fortement suggéré d'en faire mention à au moins un endroit, afin d'éviter toute ambiguïté.

## Temps écoulé
### Utilisation
Dans certaines situations, il est utile d'afficher le temps écoulé depuis la parution d'une publication ou la réception d'un courriel, d'une notification, etc. Lorsque c'est le cas, le temps écoulé doit être présenté de cette façon :

Moins de 1 minute : À l'instant

Moins de 60 minutes : Affichage en minutes

<m-panel>Il y a 10 minutes</m-panel>

Moins de 24 heure : Affichage en heures

<m-panel>Il y a 2 heures</m-panel>

Plus de 24 heures : Affichage en jours et affichage de la date au survol de l'élément.

<m-panel>Il y a 4 jours</m-panel>

Plus de 30 jours : La date est affichée selon le format court.

<m-panel>23 nov. 2016</m-panel>

## Période de retard
### Utilisation
Lorsque le temps de retard écoulé doit être affiché après une date limite, une date de remise de travaux, etc. Lorsque c'est le cas, le temps écoulé doit être présenté de cette façon :

Moins de 60 minutes : Affichage en minutes

<m-panel>10 minutes</m-panel>

Moins de 24 heure : Affichage en heures et minutes

<m-panel>2 heures et 14 minutes</m-panel>

Plus de 24 heures : Affichage en jours et heures.

<m-panel>jours et 5 heures</m-panel>

Plus de 7 jours : Affichage en semaines et jours.

<m-panel>3 semaines et 3 jours</m-panel>

La durée doit être affichée en rouge.

Il est suggéré d'afficher minutes, heures, jours et semaines au complet, mais il est possible d'utiliser l'abéviation si l'espace est un enjeu.