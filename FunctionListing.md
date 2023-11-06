Cahier des tests : 



Fonction : 

AddTask : Ajout d'une tâche a l'aide d'un label.


DeleteTask : Supprime une tâche grace a son index.


ModifyTask : Modifie une tâche grace a son index.


DoneTask : Passe une tâche en "réalisée" (true).


CheckIndex : Check l'index renseigné, appelée dans ModifyTask et DeleteTask.

```
Nom du test : Test Ajout Réussi

ID du test : 1

Objectif : Ajout d'une tâche a la liste.

Conditions préalable : Posséder un tableau vide ou rempli, avoir une fonction AddTask.

Étapes de test : 

1 : Création d'un objet avec les clés valeurs label : 'tâche en question' et done : false.
2 : Ajout de l'objet au tableau.

Résultat attendu : Ajout d'une tâche au tableau.


```
````                         
Nom du test : Ajout d'une tâche sans label renseigné.

ID du test : 2

Objectif : Vérifier que l'on ne peut pas ajouter une tâche au tableau sans renseigné une clé label.

Conditions préalable : Posséder un tableau vide ou rempli, avoir une fonction AddTask.

Étapes de test : 

1 : Création d'un objet avec les clés label : null et done : false 
2 : Tentative d'ajout de l'objet au tableau.

Résultat attendu : Erreur lors de l'ajout de la tâche au tableau.


````

````
Nom du test : Ajout d'une tâche avec la clé done : true.

ID du test : 3

Objectif : Vérifier le comportement de ma fonction en cas d'ajout d'une tache considéré réalisée.

Conditions préalable : Posséder un tableau vide ou rempli, avoir une fonction AddTask.

Étapes de test : 

1 : Création d'un objet avec les clés label : 'label renseigné' et done : true 
2 : Tentative d'ajout de l'objet au tableau.

Résultat attendu : Ajout d'une tâche au tableau.

````

````
Nom du test : Supprimer une tache existante grace a son index das le tableau.

ID du test : 4 

Objectif : Vérifier si la suppression d'une tâche éxistante grace a son index fonctionne.

Conditions préalable : Posséder un tableau vide ou rempli.

Étapes de test : 

1 : Renseigné l'index visé.
2 : Suppression de l'objet assigné a l'index.

Résultat attendu : Confirmation du changement du tableau.

````
````
Nom du test : Supprimer une tache inexistante grace a son index das le tableau.

ID du test : 5

Objectif : Vérifier si la suppression d'une tâche inexistante grace a son index est bien reconnu comme une erreur.

Conditions préalable : Posséder un tableau vide ou rempli.

Étapes de test :

1 : Renseigné l'index visé.
2 : Aucun changement dans le tableau.

Résultat attendu : Aucun changement dans le tableau.

````

