
const base_main_characteristics = [

    {
        name: `Capacité de Combat`,
        short_name: `CC`,
        desc: `Cette caractéristique représente l'aptitude de votre personnage en combat rapproché, aussi bien armé qu'à mains nues.`,
        stats: {
          humain: 20,
          elfe: 20,
          nain: 30,
        },
      },
    {
     name: `Capacité de Tir`,
     short_name: `CT`,
     desc: `Cette caractéristique représente l'aptitude de votre personnage à se servir d'armes à projectiles, comme les arcs, les arbalètes et les pistolets.`,
     stats: {
        humain: 20,
        elfe: 30,
        nain: 20,
      },
    },
    {
     name: `Force`,
     short_name: `F`,
     desc: `Cette caractéristique représente la puissance musculaire brute de votre personnage.`,
     stats: {
        humain: 20,
        elfe: 20,
        nain: 20,
      },
    },
    {
     name: `Endurance`,
     short_name: `E`,
     desc: `Cette caractéristique représente la capacité de votre personnage à supporter les blessures, la maladie et le poison.`,
     stats: {
        humain: 20,
        elfe: 20,
        nain: 30,
      },
    },
    {
     name: `Agilité`,
     short_name: `Ag`,
     desc: `Cette caractéristique représente la vélocité physique de votre personnage, son adresse manuelle et sa vitesse de réaction.`,
     stats: {
        humain: 20,
        elfe: 30,
        nain: 10,
      },
    },
    {
     name: `Intelligence`,
     short_name: `Int`,
     desc: `Cette caractéristique représente l'intellect de votre personnage, sa perspicacité et sa capacité de raisonnement'.`,
     stats: {
        humain: 20,
        elfe: 20,
        nain: 20,
      },
    },
    {
     name: `Force Mentale`,
     short_name: `FM`,
     desc: `Cette caractéristique représente la résistance mentale de votre personnage et sa persévérance'.`,
     stats: {
        humain: 20,
        elfe: 20,
        nain: 20,
      },
    },
    {
     name: `Socialbilité`,
     short_name: `Soc`,
     desc: `Cette caractéristique représente le charisme de votre personnage et sa capacité à intéragir socialement'.`,
     stats: {
        humain: 20,
        elfe: 20,
        nain: 10,
      },
    },
];


const base_secondary_characteristics = [

    {
     name: `Attaques`,
     short_name: `A`,
     desc: `Cette caractéristique représente la vitesse des attaques de votre personnage. Le nombre indique le maximum d'attaques que le personnage peut effectuer en l'espace de 10 secondes.`,
     stats: {
        humain: 1,
        elfe: 1,
        nain: 1,
      },
    },
    {
     name: `Points de Blessures`,
     short_name: `B`,
     desc: `Cette caractéristique représente la vitalité globale de votre personnage. Elle indique la quantité de dégâts qu'il peut subir avant de se retrouver dans un état critique.`,
     stats: {
        humain: [ 10, 11, 12, 13 ],
        elfe: [ 9, 10, 11, 12 ],
        nain: [ 11, 12, 13, 14 ],
      },
    },
    {
     name: `Bonus de Force`,
     short_name: `BF`,
     desc: `Cette caractéristique, dérivée de la Force, détermine les dégâts infligés au combat.`,
     stats: `Chiffre des dizaines de la Force de votre personnage.`,
    },
    {
     name: `Bonus d'Endurance`,
     short_name: `BE`,
     desc: `Cette caractéristique, dérivée de l'Endurance, détermine la résistance aux dégâts.`,
     stats: `Chiffre des dizaines de l'Endurance de votre personnage.`,
    },
    {
     name: `Mouvement`,
     short_name: `M`,
     desc: `Cette caractéristique représente la vitésse de déplacement au sol de base de votre personnage.`,
     stats: {
        humain: 4,
        elfe: 5,
        nain: 3,
      },
    },
    {
     name: `Magie`,
     short_name: `Mag`,
     desc: `Cette caractéristique représente l'aptitude magique de votre personnage.`,
     stats: {
        humain: 0,
        elfe: 0,
        nain: 0,
      },
    },
    {
     name: `Points de Folie`,
     short_name: `PF`,
     desc: `Cette caractéristique représente le statut de la santé mentale de votre personnage. Les PJ débutent avec 0 Point de Folie mais ils peuvent acquérir en cours de partie à la suite d'expériences traumatisantes ou de souffrances particulièrement insupportables.`,
     stats: {
        humain: 0,
        elfe: 0,
        nain: 0,
      },
    },
    {
     name: `Points de Destin`,
     short_name: `PD`,
     desc: `Cette caractéristique représente la chance et, dans une certaine mesure, la destinée de votre personnage. Les Points de Destin peuvent servir à éviter uen mort certaine.`,
     stats: {
        humain: [ 2, 3, 3 ],
        elfe: [ 1, 2, 2 ],
        nain: [ 1, 2, 3 ],
      },
    },
];

export { base_main_characteristics, base_secondary_characteristics };