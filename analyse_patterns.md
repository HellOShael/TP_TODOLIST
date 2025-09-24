# Analyse des design patterns

## MVC : présent

- Pour le Modèle : “useTaskManager.js” centralise les données ( soit les états, les actions, la logique, …)
- La Vue : les composants React (“TaskItem”, “Header”, “TaskInput”, ...)
- Contrôleur : “TaskContainer.jsx” relie le modèle aux composants et fait “marcher” le tout

L’architecture du pattern MVC est bien respectée dans la structure du projet.

## Singleton : compatible

Non présent dans le projet

⇒ On pourrait créer un singleton de pour conserver les tâches (la persistance des données) entre les sessions.
Il serait aussi utile si on voulait ajouter une sauvegarde automatique sans dépendre du “useState”


## Abstract factory : compatible

Non présent dans le projet

⇒ On pourrait utiliser une “abstract factory de tâches” si on voulait créer différents types de tâches (“normal”, “urgente”, “avec deadline”...), pour créer automatiquement une tâche avec les bons styles, icônes etc…


## Builder : compatible

Non présent dans le projet (tâches peu complexes)

⇒ Si les tâches devenaient plus complexes (gestion de la priorité, description, principe de sous-tâches ect…), on pourrait utiliser un builder pour les tâches pour construire les objets pas à pas avant l’insertion.


## Decorator : compatible

Non présent dans le projet

⇒ On pourrait utiliser un hook pour customiser un “taskItem” avec des effets comme des animations, icône "urgent" ect...), cela pourrait nous permettre d’ajouter des comportements sans toucher au composant principal.


## Command : présent

Chaque action utilisateur (ajouter, supprimer, terminer, annuler) est encapsulée dans une fonction indépendante et différente dans “useTaskManager”.
⇒ Ces commandes sont ensuite reliées aux composants.

Le pattern est présent et complet, avec une séparation de la logique.


## Observer : présent

“Footer” et “TaskList” observent les changements dans l’état des tâches pour afficher dynamiquement le nombre de tâches restantes ou terminées.

Le pattern est donc présent et complet.


## State : présent

Chaque tâche possède un état “done”, et l’interface s’adapte à cet état : texte barré, couleurs différentes, boutons différents, …

⇒Le système peut passer d’un état à un autre (non fait → fait → annulé) (=undo).

Le pattern est donc, pour résumer, utilisé de façon simple mais il est complet ou en tout cas “fidèle à sa définition”.

# Conclusion

Sur les patterns cités  :

| Pattern           | État         | Commentaire |
|------------------|--------------|-------------|
| MVC         | Présent   | Structure globale de l'app |
| Command     | Présent   | Chaque action est une commande |
| Observer    |  Présent   | Affichages réactifs liés aux états d’une tâche |
| State       |  Présent   | Tâches = machine à états simples |
| Singleton   |  Compatible | Pour conserver les tâches localement |
| Abstract Factory |  Compatible | Pour varier les “types” de tâches |
| Builder     |  Compatible | Pour des plus tâches complexes |
| Decorator   |  Compatible | Pour ajouter des effets visuels/comportementaux |
