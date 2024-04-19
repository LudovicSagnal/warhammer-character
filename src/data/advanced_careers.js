import { races } from "./races";

const advanced_careers = [
  {
    name: `Aristocrate`,
    description: `Les Aristocrates sont les membres de la noblesse qui détiennent le pouvoir, à ne pas confondre avec les nombreux dilettantes qui remplissent les cours du Vieux Monde. Certains héritent de leur place, mais d'autres se frayent un chemin jusqu'aux sphères les plus élevées.Tous savent ce qu'ils veulent,sont d'habiles orateurs et de bons guerriers. Ils savent régler les querelles locales, négocier à la cour et mener les troupes au combat. Certains des plus puissants Aristocrates de l'Empire sont les Comtes Électeurs qui choisissent l'Empereur dans leurs rangs.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commandement`,
        `Commérage`,
        `Connaissances académiques (généalogie/héraldique)`,
        `Connaissances générales (Empire)`,
        `Équitation`,
        `Evaluation`,
        `Langue (classique)`,
        `Langue(reikspiel)`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Connaissances académiques (histoire)`, `Connaissances académiques (stratégie/tactique)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Eloquence`,
        `Maîtrise (armes d'escrime)`,
        `Orateur né`,
      ],
    },
    dotation: {
      mandatory: [
        `Atours de noble de qualité exceptionnelle`,
        `500 co`,
        `Bijoux d'une valeur de 500 co`,
        `Destrier avec selle et harnais`,
      ],
      choice: [
        {
          options: [`Rapière`, `Fleuret de qualité exceptionnelle`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Capitaine de navire`,
      `Chevalier`,
      `Chevalier du Cercle Intérieur`,
      `Courtisan`,
      `Politicien`,
    ],
    advanced: [
      `Capitaine`,
      `Capitaine de navire`,
      `Chevalier`,
      `Erudit`,
    ],
    stats: {
      CC: 25,
      CT: 15,
      F: 10,
      E: 10,
      Ag: 10,
      Int: 20,
      FM: 20,
      Soc: 30,
      A: 1,
      B: 6,
    },
  },
  {
    name: `Charlatan`,
    description: `Les Charlatans sont des filous, d'extraordinaires menteurs capables de convaincre autrui de n'importe quoi. Leur langue bien pendue et leur ingéniosité leur permettent de manipuler les individus incrédules et de prendre la fuite avec leur argent. Un Charlatan ment comme il respire. La plupart se contentent de vendre des remèdes miracles et autres babioles sans valeur censés contrer les effets de la magie noire. Cependant, d'autres vont jusqu'à vendre des biens qui ne leur appartiennent pas. Les plus grands Charlatans montent des escroqueries qui plument complètement de riches nobles ou marchands.`,
    skills: {
      mandatory: [
        `Baratin`,
        `Charisme`,
        `Commérage`,
        `Déguisement`,
        `Escamotage`,
        `Evaluation`,
        `Jeu`,
        `Langage secret (langage des voleurs)`,
        `Langue(reikspiel)`,
        `Marchandage`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Connaissances générales (Bretonnie)`, `Connaissances générales (Tilée)`],
          quantity: 1,
        },
        {
          options: [`Langue(bretonnien)`, `Langue(tiléen)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Eloquence`,
        `Fuite`,
        `Grand voyageur`,
        `Imitation`,
      ],
      choice: [
        {
          options: [`Code de la rue`, `Intrigant`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `6 vêtements communs`,
        `4 beaux atours`,
        `Faux documents`,
        `4 bouteilles d'eau colorée`,
        `4 bouteilles de poudre colorée`,
      ],
    },
    access: [
      `Agitateur`,
      `Bateleur`,
      `Compagnon sorcier`,
      `Contrebandier`,
      `Courtisan`,
      `Emissaire elfe`,
      `Escroc`,
      `Ménestrel`,
      `Mercanti`,
      `Receleur`,
      `Sorcier de village`,
      `Voleur`,
    ],
    advanced: [
      `Démagogue`,
      `Espion`,
      `Hors-la-loi`,
      `Monte-en-l'air`,
      `Politicien`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      F: 5,
      E: 10,
      Ag: 15,
      Int: 15,
      FM: 15,
      Soc: 25,
      B: 4,
    },
  },
];

export { advanced_careers };