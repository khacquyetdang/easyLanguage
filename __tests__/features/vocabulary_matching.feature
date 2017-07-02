# language: fr
Fonctionnalité: Un apprenant vietnamien veut tester son vocabulaire
  En tant qu'apprenant vietnamien
  Dans le but de tester mon vocabulaire
  Je veux être interrogé sur une liste de mots

  Scénario: Equivalence stricte
    La réponse devrait être correcte lorsqu'elle est strictement équivalente
    à sa traduction dans le dictionnaire
   
    Etant donné qu'un apprenant est interrogé sur l'équivalent français de "Hello"
      Et que "Bonjour" est l'équivalent de "Hello"
    Lorsque l'apprenant répond "Bonjour"
    Alors la réponse devrait être correcte


  Plan du scénario: Insensible à la casse  
    La réponse devrait être correcte lorsque la casse est la seule différence avec l'équivalent
    
    Etant donné qu'un apprenant est interrogé sur l'équivalent français de "Hello"
      Et que "Bonjour" est l'équivalent de "Hello"
    Lorsque l'apprenant répond "<cette réponse>"
    Alors la réponse devrait être correcte
    Exemples:
    | cette réponse |
    | bonjour       |
    | bonJOur       |
    | BONJOUR       |


  Plan du scénario: Insensible aux caractères blancs  
    La réponse devrait être correcte lorsque des caractères blancs précèdent ou suivent la réponse
    
    Etant donné qu'un apprenant est interrogé sur l'équivalent français de "Hello"
      Et que "Bonjour" est l'équivalent de "Hello"
    Lorsque l'apprenant répond <cette réponse>
    Alors la réponse devrait être correcte
    Exemples:
    | cette réponse |
    | " Bonjour"    |
    | "Bonjour "    |
    | "  Bonjour  " |

 Plan du scénario: Mots composés
   La réponse devrait être correcte lorsque le mot correspond à un équivalent composé

   Etant donné qu'un apprenant est interrogé sur l'équivalent français de <mot à traduire>
      Et que <cette réponse> est l'équivalent de <mot à traduire>
    Lorsque l'apprenant répond <cette réponse>
    Alors la réponse devrait être correcte
    Exemples:
    | description                 | mot à traduire |   cette réponse   |
    | mot composé unifié          | "Hello"        | "portemanteau"    |
    | mot composé à apostrophe    | "Hello"        | "aujourd'hui"     |
    | mot composé à trait d'union | "Hello"        | "après-midi"      |
    | mot composé détaché         | "Hello"        | "pommes de terre" |


 Plan du scénario: Erreur d'orthographe
    La réponse devrait être incorrecte lorsqu'il y a une faute d'orthographe.
    La casse sensitive ne fait pas partie des erreurs

    Etant donné qu'un apprenant est interrogé sur l'équivalent français de "Hello"
      Et que "Bonjour" est l'équivalent de "Hello"
    Lorsque l'apprenant répond "<cette réponse>"
    Alors la réponse devrait être incorrecte
    Exemples:
    | cette réponse |
    | xBonjour      |
    | Bxonjour      |
    | Bonjourx      |


  Scénario: Mauvais équivalent
    La réponse devrait être incorrecte lorsque la réponse n'est pas le bon équivalent
    
    Etant donné qu'un apprenant est interrogé sur l'équivalent français de "Hello"
      Et que "Bonjour" est l'équivalent de "Hello"
      Et que "Bien" est un mot français
    Lorsque l'apprenant répond "Bien"
    Alors la réponse devrait être incorrecte



  Scénario: 100% de bonnes réponses à un exercice
    Un exercice devrait être réussi lorsque que le seuil de bonnes réponses est atteint
    
    Etant donné qu'un apprenant passe un exercice comportant ces mots:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      #Et que le seuil de l'exercice est de 80% de réponses correctes
    Lorsque l'apprenant répond
      | Réponse  |
      | bonjour  |
      | bien     |
      | mauvais  |
      | correcte |
      | faux     |
    Alors l'exerice devrait être réussi

  Scénario: 100% de mauvaises réponses à un exercice
    Un exercice devrait être réussi lorsque que le seuil de bonnes réponses est atteint
    
    Etant donné qu'un apprenant passe un exercice comportant ces mots:
      | Mot vietnamien | Equivalent français |
      | hello          | bonjour             |
      | good           | bien                |
      | bad            | mauvais             |
      | right          | correcte            |
      | wrong          | faux                |
      #Et que le seuil de l'exercice est de 80% de réponses correctes
    Lorsque l'apprenant répond
      | Réponse          |
      | Mauvaise réponse |
      | Mauvaise réponse |
      | Mauvaise réponse |
      | Mauvaise réponse |
      | Mauvaise réponse |
    Alors l'exerice ne devrait pas être réussi

  Scénario: Génération du challenge
    Un exercice devrait être généré lorqu'un apprenant challenge son vocabulaire
    
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
