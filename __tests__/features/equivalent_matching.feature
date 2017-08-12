# language: fr
Fonctionnalité: Vérification des bonnes réponses
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