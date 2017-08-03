:: Script permettant de créer un environnement avec une image dans OpenShift
:: Ex: create-env.cmd <nom du projet> <nom de l'environnement> <token>
@echo off

set nomProjet=%1
set nomEnv=%2
set token=%3

echo Creation de l'environnement %nomProjet%/%nomEnv%...
oc process -f template.yaml -n=%nomProjet% -l=app=%nomEnv% -p=NOMENV=%nomEnv% --token=%token% | oc create -n=%nomProjet% --token=%token% -f -