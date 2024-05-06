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
        `Equitation`,
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
    name: `Assassin`,
    description: `Dans le Vieux Monde, il n'est pas rare de tuer pour de l'argent. Les mercenaires et les soldats le font quotidiennement. Cependant, peu sont aussi meurtriers que les Assassins. Ces tueurs, qui louent leurs services au plus offrant,sont parfaitement entraînés au maniement d'un très large éventail d'armes. De plus, beaucoup usent de poison. Les meilleurs Assassins se débarrassent de leur victime en quelques secondes et ne laissent derrière eux aucune trace de leur passage. Leurs services sont particulièrement recherchés auprès des institutions politiques et religieuses. Peu d'Assassins se soucient de l'identité de leur commanditaire. En fait, ils cherchent avant tout à remplir leur bourse en s'acquittant de missions difficiles. Si la plupart travaillent seuls, certains se regroupent sous la forme de guildes.`,
    skills: {
      mandatory: [
        `Alphabet secret (voleur)`,
        `Commérage`,
        `Déguisement`,
        `Déplacement silencieux`,
        `Dissimulation`,
        `Escalade`,
        `Filature`,
        `Perception`,
        `Préparation de poisons`,
      ],
    },
    talents: {
      mandatory: [
        `Adresse au tir`,
        `Code de la rue`,
        `Combat de rue`,
        `Combattant virevoltant`,
        `Maîtrise (armes de jet)`,
        `Maîtrise (armes de parade)`,
        `Maîtrise (armes paralysantes)`,
        `Parade éclair`,
        `Sur ses gardes`,
      ],
    },
    dotation: {
      mandatory: [
        `Filet`,
        `4 dagues de jet`,
        `Grappin`,
        `10 mètres de corde`,
        `1 dose de poison (au choix)`,
      ],
    },
    access: [
      `Champion`,
      `Champion de justice`,
      `Chef de bande`,
      `Duelliste`,
      `Espion`,
      `Franc-archer`,
    ],
    advanced: [
      `Champion`,
      `Chef de bande`,
      `Escroc`,
      `Répurgateur`,
      `Sergent`,
    ],
    stats: {
      CC: 25,
      CT: 25,
      F: 10,
      E: 10,
      Ag: 30,
      Int: 20,
      FM: 10,
      Soc: 20,
      A: 2,
      B: 4,
    },
  },
  {
    name: `Aubergiste`,
    description: `Les Aubergistes possèdent et dirigent des établissements qui assurent la prospérité économique du Vieux Monde. Beaucoup de familles d'Aubergistes possèdent leur établissement depuis des générations. Ils satisfont aux besoins de tous les clients, quel que soit leur statut social, du moins tant qu'ils payent. Aujourd'hui, comme les gens ne voyagent plus trop, les Aubergistes ont compris qu'une information vaut parfois de l'or et ils apprécient d'autant plus les nouvelles venues de l'étranger. Certains Aubergistes arrondissent leurs fins de mois en jouant les intermédiaires entre leurs clients. Leur travail consiste alors à trouver de la compagnie à leur clientèle ou à mettre en contact des gens aux intérêts communs.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commérage`,
        `Connaissances générales (Empire)`,
        `Evaluation`,
        `Marchandage`,
        `Métier (cuisinier)`,
        `Perception`,
        `Résistance à l'alcool`,
      ],
      choice: [
        {
          options:[`Baratin`, `Lecture sur les lèvres`],
          quantity: 1,
        },
        {
          options:[`Escamotage`, `Lire/écrire`],
          quantity: 1,
        },
        {
          options:[`Langue (bretonnien)`, `Langue (kislevien)`, `Langue (reikspiel)`, `Langue (tiléen)`],
          quantity: 1,
        },
      ]
    },
    talents: {
      mandatory: [
        `Coups assommants`,
      ],
      choice: [
        {
          options:[`Code de la rue`, `Etiquette`],
          quantity: 1,
        },
        {
          options:[`Combat de rue`, `Dur en affaires`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Auberge`,
        `Un ou plusieurs serviteurs`,
      ],
    },
    access: [
      `Bourgeois`,
      `Serviteur`,
    ],
    advanced: [
      `Bourgeois`,
      `Contrebandier`,
      `Hors-la-loi`,
      `Marchand`,
      `Receleur`,
    ],
    stats: {
      CC: 10,
      CT: 5,
      F: 5,
      E: 10,
      Ag: 20,
      Int: 10,
      FM: 10,
      Soc: 20,
      B: 4,
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