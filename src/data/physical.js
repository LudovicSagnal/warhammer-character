const physical = [

    // Humans
        { minHeight: 1.60, maxHeight: 1.85, minWeight: 47, maxWeight: 99, gender: 'male', race: 'humain' },
        { minHeight: 1.52, maxHeight: 1.80, minWeight: 47, maxWeight: 99, gender: 'female', race: 'humain' },

    // Elves
        { minHeight: 1.70, maxHeight: 1.90, minWeight: 36, maxWeight: 79, gender: 'male', race: 'elfe' },
        { minHeight: 1.65, maxHeight: 1.85, minWeight: 36, maxWeight: 79, gender: 'female', race: 'elfe' },

    // Dwarfs
        { minHeight: 1.30, maxHeight: 1.55, minWeight: 40, maxWeight: 83, gender: 'male', race: 'nain' },
        { minHeight: 1.25, maxHeight: 1.50, minWeight: 40, maxWeight: 83, gender: 'female', race: 'nain' },

    // Halflings
        { minHeight: 1, maxHeight: 1.25, minWeight: 34, maxWeight: 65, gender: 'male', race: 'halfling' },
        { minHeight: 0.95, maxHeight: 1.20, minWeight: 34, maxWeight: 65, gender: 'female', race: 'halfling' },
];

const eye_colors = [

    { color: 'Gris clair'},
    { color: 'Gris-bleu'},
    { color: 'Bleu'},
    { color: 'Vert'},
    { color: 'Cuivre'},
    { color: 'Noisette'},
    { color: 'Marron'},
    { color: 'Marron foncé'},
    { color: 'Mauve'},
    { color: 'Noir'},
];

const hair_colors = [

    { color: 'Argenté' },
    { color: 'Blond cendré' },
    { color: 'Blond' },
    { color: 'Auburn' },
    { color: 'Roux' },
    { color: 'Châtain clair' },
    { color: 'Châtain' },
    { color: 'Châtain foncé' },
    { color: 'Brun' },
    { color: 'Noir' },
];

const distinctive_marks = ['Marques de vérole', 'Rougeaud', 'Balafre', 'Tatouage', `Boucle d'oreille`, 'Oreille abîmée', 'Anneau nasal', 'Verrue', 'Nez cassé', 'Dent en moins', 'Dentition crasseuse', 'Strabisme', 'Sourcil(s) manquant(s)', 'Doigt en moins', 'Ongle en moins', 'Démarche atypique', 'Odeur bizarre', 'Gros nez', 'Poireau (grain de beauté)', 'Calvitie', `Couleur étrange d'un oeil`];

const siblings_number = [
    { number: [0, 1, 2, 3, 4, 5], race : 'humain'},
    { number: [0, 1, 1, 2, 2, 3], race : 'elfe'},
    { number: [0, 0, 1, 1, 2, 3], race : 'nain'},
    { number: [1, 2, 3, 4, 5, 6], race : 'halfling'},
]

export { physical, eye_colors, hair_colors, distinctive_marks, siblings_number };