# language: fr
@QCM
Fonctionnalité: Questionnaire à choix multiples de vocabulaire
  En tant qu'apprenant
  Dans le but d'apprendre de nouveaux mots français
  Je veux découvrir de noueaux mots et les retenir
    Dans le but de retenir les nouveaux mots
    Je veux qu'ils soient présentés parmis des mots de la même famille

  Contexte: 
    Etant donné ce dictionnaire:
      | Mot vietnamien | Equivalent français | Familles  |
      | hello          | bonjour             | politesse |
      | good           | bien                | adjectif  |
      | bad            | mauvais             | adjectif  |
      | right          | correcte            | adjectif  |
      | wrong          | faux                | adjectif  |
      | fast           | rapide              | adjectif  |
      | slow           | lent                | adjectif  |
      | tall           | grand               | adjectif  |
      | small          | petit               | adjectif  |
      | black          | noir                | couleur   |
      | yellow         | jaune               | couleur   | 

  Scénario: Lancement d'un questionnaire à choix multiple
    Chaque tige du QCM devrait contenir une clé et 3 distractions
    
    Lorsque l'apprenant commence un QCM
    Alors toutes ses tiges devraient être générées avec 1 clé et 3 distractions

  
  Scénario: Restriction du qcm à une liste de tags
    L'apprenant devrait cibler son apprentissage sur une famille de mots
    
    Lorsque l'apprenant commence un QCM sur la famille "couleur"
    Alors toutes les tiges créées font parties de la famille sélectionnée
