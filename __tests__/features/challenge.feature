# language: fr
Fonctionnalité: Challenge de vocabulaire
  En tant qu'apprenant vietnamien
  Dans le but de tester mon vocabulaire
  Je veux être interrogé sur une liste de mots


  Scénario: Génération du challenge
    Un challenge devrait être généré lorqu'un apprenant challenge son vocabulaire
    
    Etant donné ce dictionnaire:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      | fast           | rapide              |
      | slow           | lent                |
      | tall           | grand               |
      | small          | petit               |
      | black          | noir                |
      | yellow         | jaune               |
    Lorsque l'apprenant challenge son vocabulaire
    Alors le challenge devrait contenir 10 questions aléatoires


  Scénario: Généreration d'une liste de propositions
    L'apprenant devrait choisir une réponse parmis 4 propositions

    Etant donné ce dictionnaire:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      | fast           | rapide              |
      | slow           | lent                |
      | tall           | grand               |
      | small          | petit               |
      | black          | noir                |
      | yellow         | jaune               |
    Lorsque l'apprenant challenge son vocabulaire
    Alors chaque question devrait comporter 4 propositions différentes
      Et chaque question devrait comporter 1 proposition correcte
      Et chaque question devrait comporter 3 propositions incorrectes


  Scénario: Sélection de la bonne réponse
    L'apprenant devrait savoir qu'il a sélectionné la bonne réponse

    Etant donné ce dictionnaire:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      | fast           | rapide              |
      | slow           | lent                |
      | tall           | grand               |
      | small          | petit               |
      | black          | noir                |
      | yellow         | jaune               |
    Lorsque l'apprenant challenge son vocabulaire
    Alors chaque question devrait comporter 4 propositions différentes
      Et chaque question devrait comporter 1 proposition correcte
      Et chaque question devrait comporter 3 propositions incorrectes


  Scénario: 100% de bonnes réponses à un challenge
    Un challenge devrait être réussi lorsque que le seuil de bonnes réponses est atteint
    
    Etant donné qu'un apprenant passe un challenge comportant ces mots:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      #Et que le seuil du challenge est de 80% de réponses correctes
    Lorsque l'apprenant répond
      | Réponse  |
      | bonjour  |
      | bien     |
      | mauvais  |
      | correcte |
      | faux     |
    Alors le challenge devrait être réussi


  Scénario: 100% de mauvaises réponses à un challenge
    Un challenge devrait être réussi lorsque que le seuil de bonnes réponses est atteint
    
    Etant donné qu'un apprenant passe un challenge comportant ces mots:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      #Et que le seuil du challenge est de 80% de réponses correctes
    Lorsque l'apprenant répond
      | Réponse          |
      | Mauvaise réponse |
      | Mauvaise réponse |
      | Mauvaise réponse |
      | Mauvaise réponse |
      | Mauvaise réponse |
    Alors le challenge ne devrait pas être réussi