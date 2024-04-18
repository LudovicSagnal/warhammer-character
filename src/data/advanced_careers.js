import { races } from "./races";

const advanced_careers = [
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
          options: [`Connaissances générales (Bretonnie)`, `Connaissances générales (Tilée)`,
          ],
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