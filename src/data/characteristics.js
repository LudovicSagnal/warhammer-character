
const base_main_characteristics = [

    {name: `Capacité de Combat (CC)`,
     desc: `Cette caractéristique représente l'aptitude de votre personnage en combat rapproché, aussi bien armé qu'à mains nues.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 20 },
        {race: `nain`, stat: 30 },
    ]},
    {name: `Capacité de Tir (CT)`,
     desc: `Cette caractéristique représente l'aptitude de votre personnage à se servir d'armes à projectiles, comme les arcs, les arbalètes et les pistolets.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 30 },
        {race: `nain`, stat: 20 },
    ]},
    {name: `Force (F)`,
     desc: `Cette caractéristique représente la puissance musculaire brute de votre personnage.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 20 },
        {race: `nain`, stat: 20 },
    ]},
    {name: `Endurance (E)`,
     desc: `Cette caractéristique représente la capacité de votre personnage à supporter les blessures, la maladie et le poison.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 20 },
        {race: `nain`, stat: 30 },
    ]},
    {name: `Agilité (Ag)`,
     desc: `Cette caractéristique représente la vélocité physique de votre personnage, son adresse manuelle et sa vitesse de réaction.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 30 },
        {race: `nain`, stat: 10 },
    ]},
    {name: `Intelligence (Int)`,
     desc: `Cette caractéristique représente l'intellect de votre personnage, sa perspicacité et sa capacité de raisonnement'.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 20 },
        {race: `nain`, stat: 20 },
    ]},
    {name: `Force Mentale (FM)`,
     desc: `Cette caractéristique représente la résistance mentale de votre personnage et sa persévérance'.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 20 },
        {race: `nain`, stat: 20 },
    ]},
    {name: `Socialbilité (Soc)`,
     desc: `Cette caractéristique représente le charisme de votre personnage et sa capacité à intéragir socialement'.`,
     stats: [
        {race: `humain`, stat: 20 },
        {race: `elfe`, stat: 20 },
        {race: `nain`, stat: 10 },
    ]},
];


const base_secondary_characteristics = [

    {name: `Attaques (A)`,
     desc: `Cette caractéristique représente la vitesse des attaques de votre personnage. Le nombre indique le maximum d'attaques que le personnage peut effectuer en l'espace de 10 secondes.`,
     stats: 1,
    },
    {name: `Points de Blessures (B)`,
     desc: `Cette caractéristique représente la vitalité globale de votre personnage. Elle indique la quantité de dégâts qu'il peut subir avant de se retrouver dans un état critique.`,
     stats: [
        {race: `humain`, stat: [ 10, 11, 12, 13 ] },
        {race: `elfe`, stat: [ 9, 10, 11, 12 ] },
        {race: `nain`, stat: [ 11, 12, 13, 14 ] },
     ],
    },
    {name: `Bonus de Force (BF)`,
     desc: `Cette caractéristique, dérivée de la Force, détermine les dégâts infligés au combat.`,
     stats: `Chiffre des dizaines de la Force de votre personnage.`,
    },
    {name: `Bonus d'Endurance (BE)`,
     desc: `Cette caractéristique, dérivée de l'Endurance, détermine la résistance aux dégâts.`,
     stats: `Chiffre des dizaines de l'Endurance de votre personnage.`,
    },
    {name: `Mouvement (M)`,
     desc: `Cette caractéristique représente la vitésse de déplacement au sol de base de votre personnage.`,
     stats: [
        {race: `humain`, stat: 4 },
        {race: `elfe`, stat: 5 },
        {race: `nain`, stat: 3 },
     ],
    },
    {name: `Magie (Mag)`,
     desc: `Cette caractéristique représente l'aptitude magique de votre personnage.`,
     stats: 0,
    },
    {name: `Points de Folie (PF)`,
     desc: `Cette caractéristique représente le statut de la santé mentale de votre personnage. Les PJ débutent avec 0 Point de Folie mais ils peuvent acquérir en cours de partie à la suite d'expériences traumatisantes ou de souffrances particulièrement insupportables.`,
     stats: 0,
    },
    {name: `Points de Destin (PD)`,
     desc: `Cette caractéristique représente la chance et, dans une certaine mesure, la destinée de votre personnage. Les Points de Destin peuvent servir à éviter uen mort certaine.`,
     stats: [
        {race: `humain`, stat: [ 2, 3, 3 ] },
        {race: `elfe`, stat: [ 1, 2, 2 ] },
        {race: `nain`, stat: [ 1, 2, 3 ] },
     ],
    },
];

export { base_main_characteristics, base_secondary_characteristics };