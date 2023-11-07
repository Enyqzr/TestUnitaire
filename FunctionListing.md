Cahier des tests : 
-

----
Fonction : 
-
AddTask : Ajout d'une tâche a l'aide d'un label.


DeleteTask : Supprime une tâche grace a son index.


ModifyTask : Modifie une tâche grace a son index.


DoneTask : Passe une tâche en "réalisée" (true).


CheckIndex : Vérifie l'index renseigné, appelée dans ModifyTask et DeleteTask.

---

Tests : 
-


```
Nom du test : Test Ajout Réussi

ID du test : 1

Objectif : Ajout d'une tâche a la liste.

Conditions préalables : Posséder un tableau vide ou rempli, avoir une fonction AddTask.

Étapes de test : 

1 : Création d'un objet avec les clés valeurs label : 'tâche en question' et done : false.
2 : Ajout de l'objet au tableau.

Résultat attendu : Ajout d'une tâche au tableau.


```
````                         
Nom du test : Ajout d'une tâche sans label renseigné.

ID du test : 2

Objectif : Vérifier que l'on ne peut pas ajouter une tâche au tableau sans renseigné une clé label.

Conditions préalables : Posséder un tableau vide ou rempli, avoir une fonction AddTask.

Étapes de test : 

1 : Création d'un objet avec les clés label : null et done : false 
2 : Tentative d'ajout de l'objet au tableau.

Résultat attendu : Erreur lors de l'ajout de la tâche au tableau.


````

````
Nom du test : Ajout d'une tâche avec la clé done : true.

ID du test : 3

Objectif : Vérifier le comportement de ma fonction en cas d'ajout d'une tache considéré réalisée.

Conditions préalables : Posséder un tableau vide ou rempli, avoir une fonction AddTask.

Étapes de test : 

1 : Création d'un objet avec les clés label : 'label renseigné' et done : true 
2 : Tentative d'ajout de l'objet au tableau.

Résultat attendu : Ajout d'une tâche au tableau.

````

````
Nom du test : Supprimer une tache existante grace a son index das le tableau.

ID du test : 4 

Objectif : Vérifier si la suppression d'une tâche éxistante grace a son index fonctionne.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test : 

1 : Renseigner l'index visé.
2 : Suppression de l'objet assigné a l'index.

Résultat attendu : Confirmation du changement du tableau.

````
````
Nom du test : Supprimer une tache inexistante grace a son index das le tableau.

ID du test : 5

Objectif : Vérifier si la suppression d'une tâche inexistante grace a son index est bien reconnu comme une erreur.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test :

1 : Renseigner l'index visé (inexistant).
2 : Aucun changement dans le tableau.

Résultat attendu : Aucun changement dans le tableau.

````

````

Nom du test : Modifier une tâche existante grace a son index dans le tableau.

ID du test : 6

Objectif : Vérifier le bon fonctionnement de la modification d'une tâche.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test : 

1 : Renseigner l'index visé.
2 : Rentrer les modification souhaité dans le label.
3 : Constater le changement de la tâche dans le tableau.

Résultat attendu : La tâche a bien étée modifié dans le tableau.

````

````

Nom du test : Modifier une tâche inexistante dans le tableau.

ID du test : 7 

Objectif : Vérifier le comportement du programme en cas de modification d'une tache inexistante dans le tableau.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test : 

1 : Renseigner l'index inexistant visé.
2 : Constater l'erreur.

Résultat attendu : Impossible de modifier une tâche inexistante dans le tableau.

````

````

Nom du test : Validation d'une tâche.

ID du test : 8

Objectif : Vériier le bon fonctionnement de la fonctionnalité de validation.

Conditions préalables : Posséder un tableau qui contient une ou plusieurs taches.

Étapes de test : 

1 : Renseigner l'index de la tâche a marquer comme réalisée.
2 : Modifier la valeur du done en true.
3 : Constater que la tâche est bien affiché comme réalisée.

Résultat attendu : La tâche est bien marqué comme réalisée.

````

````

Nom du test : Validation d'une tâche inexistante.

ID du test : 9 

Objectif : Vérifier si il est possible de marqué une tâche comme réalisée alors qu'elle n'éxiste pas.

Conditions préalables : Posséder un tableau vide ou rempli.

Étapes de test : 

1 : Renseigner l'index visé (inexistant).
2 : Constater le message d'erreur.

Résultat attendu : Constater l'erreur.

````

````

Nom du test : Validation d'une tâche déja indiquée comme validée.

ID du test : 10 

Objectif : Vérifier si il est possible de marquer une tâche comme validé alors qu'elle est déja validé.

Conditions préalables : Posséder un tableau avec au moins une tache, posséder une tache marqué comme validée.

Étapes de test : 

1 : Renseigner l'index d'une tâches déja marqué comme validé (valeur du done : true).
2 : Modifier la valeur du done en true.
3 : Constater l'erreur.

Résultat attendu  : Constater l'erreur.

````

````

Nom du test : Vérification de l'index renseigné

ID du test : 11

Objectif : Vérifier si la vérification d'index fonctionne.

Conditions préalables : Posséder un tableau non vide.

Étapes de test : 

1 : Rentrer l'index que l'on veut vérifier.
2 : Constater que l'index séléctionné est bien le bon.


Résultat attendu : L'index renseigné est le même que celui qui est séléctionné.

````

````

Nom du test : Vérification d'un index non existant

ID du test : 12

Objectif : Vérifier que la séléction d'un index non existant est impossible.

Conditions préalables : Posséder un tableau vide, ou rempli.

Étapes de test : 

1 : Rentrer un index inexistant.
2 : Constater l'erreur.

Résultat attendu : Impossible de séléctionné un index inexistant.


```

