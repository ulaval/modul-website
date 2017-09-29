:: Script permettant de détruire une instance de ena2-exemple dans OpenShift
:: Ex: delete-env.cmd <nom du projet> <nom de l'environnement> <token>
@echo off

set nomProjet=%1
set nomEnv=%2
set token=%3

echo Suppression de l'environnement %nomProjet%/%nomEnv%...
oc delete all -n=%nomProjet% -l app=%nomEnv% --token=%token%