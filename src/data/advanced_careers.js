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
    name: `Bandit de grand chemin`,
    description: `Les Bandits de grand chemin s'attaquent aux diligences qui sillonnent les routes du Vieux Monde, dépouillant malles et passagers de leurs biens de valeur. Ces brigands affectent les manières de la noblesse en portant des masques élaborés et en respectant les convenances car ils se prennent pour d'audacieux coquins et non pour de simples voleurs. Les Bandits de grand chemin sont de bons cavaliers, capables de pousser leur monture au galop en milieu accidenté. Ce sont également d'excellents tireurs puisqu'ils doivent faire face à des cibles mouvantes et aux dangereux habitants des forêts.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commérage`,
        `Connaissances générales (Empire)`,
        `Déplacement silencieux`,
        `Dressage`,
        `Equitation`,
        `Evaluation`,
        `Soins des animaux`,
      ],
    },
    talents: {
      mandatory: [
        `Acrobatie équestre`,
        `Adresse au tir`,
        `Ambidextre`,
        `Combattant virevoltant`,
        `Etiquette`,
        `Maître artilleur`,
        `Maîtrise (armes d'escrime)`,
        `Maîtrise (armes à feu)`,
        `Tir en puissance`,
      ],
    },
    dotation: {
      mandatory: [
        `2 pistolets accompagnés de poudre et de munitions pour 20 tirs`,
        `Atours de noble`,
        `Cheval de selle avec selle et harnais`,
      ],
      choice: [
        {       
          options: [`Capuchon`, `Masque`],
          quantity: 1,
        },
      ]
    },
    access: [
      `Cocher`,
      `Collecteur de taxes`,
      `Diestro estalien`,
      `Duelliste`,
      `Eclaireur`,
      `Hors-la-loi`,
      `Ménestrel`,
      `Passeur`,
      `Patrouilleur`,
    ],
    advanced: [
      `Agitateur`,
      `Chef de bande`,
      `Duelliste`,
      `Prince des voleurs`,
      `Sergent`,
    ],
    stats: {
      CC: 20,
      CT: 20,
      F: 10,
      E: 10,
      Ag: 30,
      Int: 20,
      FM: 15,
      Soc: 25,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Baron du crime`,
    description: `La plupart des villes du Vieux Monde abritent une ou plusieurs organisations criminelles, comme une guilde de voleurs ou d'assassins. Les Barons du crime sont les chefs de ces groupes et ils constituent de dangereux individus. Pour compter parmi leurs rangs, il est nécessaire de faire montre d'ingéniosité, d'ambition et d'une nature impitoyable. Beaucoup partent du bas de l'échelle et apprennent les vilains tours du métier en gravissant les échelons. Les Barons du crime ne font confiance à personne. Ils sont particulièrement doués pour ce qui est de tirer le meilleur parti d'un individu ou d'une situation. Beaucoup s'impliquent sur la scène politique locale pour accroître leur influence.`,
    skills: {
      mandatory: [
        `Alphabet secret (voleur)`,
        `Charisme`,
        `Commandement`,
        `Commérage`,
        `Connaissances générales (Empire)`,
        `Esquive`,
        `Evaluation`,
        `Intimidation`,
        `Langage secret (langage des voleurs)`,
        `Marchandage`,
        `Perception`,
        `Torture`,
      ],
    },
    talents: {
      mandatory: [
        `Code de la rue`,
        `Eloquence`,
        `Menaçant`,
        `Résistance aux poisons`,
        `Sixième sens`,
      ],
      choice: [
        {
          options: [`Dur en affaires`, `Intrigant`],
          quantity:1,
        },
        {
          options: [`Maîtrise (arbalètes)`, `Maîtrise (armes de parade)`],
          quantity:1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Vêtements confortables`,
        `Nécessaire antipoison`,
        `100 co`,
        `Organisation criminelle`,
      ],
      choice: [
        {       
          options: [`Arbalète de poing avec 10 carreaux`, `Brise-lame`],
          quantity: 1,
        },
      ]
    },
    access: [
      `Chef de bande`,
      `Démagogue`,
      `Intendant`,
      `Maître de guilde`,
      `Monte-en-l'air`,
      `Politicien`,
      `Prince des voleurs`,
      `Receleur`,
    ],
    advanced: [
      `Chef de bande`,
      `Démagogue`,
      `Politicien`,
      `Prince des voleurs`,
    ],
    stats: {
      CC: 20,
      CT: 20,
      F: 15,
      E: 15,
      Ag: 20,
      Int: 25,
      FM: 20,
      Soc: 30,
      A: 1,
      B: 6,
    },
  },
  {
    name: `Bourreau`,
    description: `Un Bourreau sait comment faire parler les gens. Il recourt à de désagréables méthodes psychologiques et physiques pour extirper des informations à ses «protégés». Les Bourreaux travaillent pour le compte de répurgateurs, de nobles et parfois de l'Église. Ils s'enorgueillissent de leur efficacité mais font parfois preuve d'une grande brutalité. Les meilleurs Bourreaux pensent que la découverte de la vérité est une forme d'art. Souvent, les gens mentent et disent n'importe quoi pour que l'on mette un terme à leurs souffrances. Il est facile d'obtenir une confession, mais la vérité est une tout autre affaire.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Intimidation`,
        `Perception`,
        `Soins`,
        `Torture`,
      ],
    },
    talents: {
      mandatory: [
        `Lutte`,
        `Maîtrise (fléaux)`,
        `Menaçant`,
      ],
    },
    dotation: {
      mandatory: [
        `5 dagues`,
        `Fléau d'armes`,
        `3 paires de menottes`,
      ],
    },
    access: [
      `Chirurgien barbier`,
      `Coupe-jarret`,
      `Flagellant`,
      `Garde du corps`,
      `Geôlier`,
    ],
    advanced: [
      `Médecin`,
      `Racketteur`,
      `Voleur`,
    ],
    stats: {
      CC: 15,
      F: 20,
      E: 10,
      Ag: 10,
      Int: 10,
      FM: 20,
      Soc: 15,
      B: 4,
    },
  },
  {
    name: `Capitaine`,
    description: `Les Capitaines sont les chefs de guerre d'un Vieux Monde en proie à d'incessants conflits. Ils mènent soldats, miliciens, mercenaires et autres patrouilleurs sur des champs de bataille couverts de sang mais également dans des rues remplies de cadavres, dans l'Empire comme à l'étranger. La plupart des Capitaines sont de robustes soldats professionnels qui ont survécu à des dizaines de batailles pour arriver là où ils en sont. Il n'est donc pas surprenant de constater qu'ils n'apprécient guère de servir sous les ordres de nobles inexpérimentés, un sort qui leur est trop souvent réservé. Les Capitaines respectent l'expérience et le talent avant tout, et attachent moins d'importance à l'extraction et au statut social. Ils savent parfaitement ce qui compte sur un champ de bataille.`,
    skills: {
      mandatory: [
        `Commandement`,
        `Commérage`,
        `Connaissances académiques (stratégie/tactique)`,
        `Equitation`,
        `Esquive`,
        `Langage secret (langage de bataille)`,
        `Lire/écrire`,
        `Soins des animaux`,
      ],
      choice: [
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`,  `Connaissances générales (Kislev)`,`Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Pays Perdu)`, `Connaissances générales (halflings)`, `Connaissances générales (elfes)`, `Connaissances générales (nains)`,`Connaissances générales (Norsca)`, `Connaissances générales (Norsca)`,`Connaissances générales (ogres)`, `Connaissances générales (Principautés Frontalières)`],
          quantity: 3,
        },
        {
          options: [`Langue (kislevien)`, `Langue (tiléen)`],
          quantity: 1,
        },
      ]
    },
    talents: {
      mandatory: [
        `Parade éclair`,
      ],
      choice: [
        {
          options: [`Désarmement`, `Sur ses gardes`],
          quantity: 1,
        },
        {
          options: [`Maîtrise (armes de cavalerie)`, `Maîtrise (armes lourdes)`],
          quantity: 1,
        },
        {
          options: [`Maîtrise (armes de parade)`, `Maîtrise (fléaux)`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Armure moyenne (armure de mailles complète)`,
        `Bouclier`,
        `Destrier avec selle et harnais`,
        `Unité de troupes`,
      ],
      choice: [
        {
          options: [`Brise-lame`, `Fléau d'armes`],
          quantity: 1,
        },
        {
          options: [`Arme à deux mains`, `Lance de cavalerie`],
          quantity: 1,
        },
      ]
    },
    access: [
      `Aristocrate`,
      `Chef de bande`,
      `Chevalier`,
      `Chevalier du Cercle Intérieur`,
      `Explorateur`,
      `Répurgateur`,
      `Rôdeur fantôme`,
      `Sergent`,
    ],
    advanced: [
      `Agitateur`,
      `Chef de bande`,
      `Explorateur`,
      `Marchand`,
      `Politicien`,
    ],
    stats: {
      CC: 30,
      CT: 20,
      F: 20,
      E: 20,
      Ag: 20,
      Int: 15,
      FM: 15,
      Soc: 25,
      A: 2,
      B: 7,
    },
  },
  {
    name: `Capitaine de navire`,
    description: `Les Capitaines de navire sillonnent les océans du Vieux Monde en quête de profit et d'aventure. Les plus honorables d'entre eux sont des commerçants qui prennent la mer dans le but de dénicher les marchés les plus lucratifs. Cependant, les plus dangereux sont des pirates sanguinaires qui détroussent les navires et ne laissent derrière eux aucun survivant. La plupart des Capitaines de navire se situent néanmoins entre ces deux extrêmes. Sur une embarcation maritime, le verbe du Capitaine a force de loi. Toutefois, les marins se montrent parfois grincheux. Le Capitaine de navire doit donc faire montre d'ingéniosité, de détermination et de fermeté s'il souhaite rester aux commandes. Les plus célèbres Capitaines de navire viennent de Marienburg, de Tilée et de l'île elfique d'Ulthuan.`,
    skills: {
      mandatory: [
        `Commandement`,
        `Connaissances académiques (stratégie/tactique)`,
        `Dressage`,
        `Esquive`,
        `Natation`,
        `Navigation`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`,  `Connaissances générales (Kislev)`,`Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Pays Perdu)`, `Connaissances générales (halflings)`, `Connaissances générales (elfes)`, `Connaissances générales (nains)`,`Connaissances générales (Norsca)`, `Connaissances générales (Norsca)`,`Connaissances générales (ogres)`, `Connaissances générales (Principautés Frontalières)`],
          quantity: 3,
        },
        {
          options: [`Langue (kislevien)`, `Langue (tiléen)`, `Langue (bretonnien)`, `Langue (reikspiel)`, `Langue (estalien)`, `Langue (khazalid)`, `Langue (eltharin)`, `Langue (norse)`, `Langue (halfling)`, `Langue (grumbarth)`,],
          quantity: 3,
        },
      ]
    },
    talents: {
      mandatory: [
        `Coups puissants`,
        `Désarmement`,
        `Grand voyageur`,
        `Maîtrise (armes d'escrime)`,
      ],
      choice: [
        {
          options: [`Combattant virevoltant`, `Parade éclair`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Rapière`,
        `Armure légère (veste de cuir)`,
        `Longue-vue`,
        `Navire`,
      ],
    },
    access: [
      `Aristocrate`,
      `Explorateur`,
      `Navigateur`,
      `Officier en second`,
    ],
    advanced: [
      `Aristocrate`,
      `Erudit`,
      `Espion`,
      `Explorateur`,
    ],
    stats: {
      CC: 25,
      CT: 20,
      F: 15,
      E: 20,
      Ag: 20,
      Int: 20,
      FM: 25,
      Soc: 30,
      A: 2,
      B: 6,
    },
  },
  {
    name: `Champion`,
    description: `Les Champions sont des guerriers qui consacrent leur vie au combat et qui n'ont pas leur pareil au champ de bataille. Ce ne sont pas des meneurs d'hommes, mais des combattants hors pair. Ils vivent pour ces rares instants où leurs talents sont mis à rude épreuve car c'est alors seulement qu'ils prennent conscience de ce qu'ils valent véritablement. De nombreux Champions servent au sein d'une armée, d'une compagnie ou de quelque ordre militaire, mais d'autres parcourent l'Empire, louant leur épée au plus offrant. Leurs armes comptent parmi les meilleures du Vieux Monde.`,
    skills: {
      mandatory: [
        `Esquive`,
        `Evaluation`,
        `Intimidation`,
        `Perception`,
      ],
    },
    talents: {
      mandatory: [
        `Lutte`,
        `Maître artilleur`,
        `Parade éclair`,
        `Rechargement rapide`,
        `Sur ses gardes`,
        `Tir en puissance`,
      ],
      choice: [
        {
          options: [`Course à pied`, `Réflexes éclair`],
          quantity: 1,
        },
        {
          options: [`Maîtrise (armes lourdes)`, `Maîtrise (armes d'escrime)`, `Maîtrise (armes de parade)`, `Maîtrise (fléaux)`, `Maîtrise (hallebarde)`, `Maîtrise (lance)`, `Maîtrise (arc)`, `Maîtrise (arbalète)`, `Maîtrise (arquebuse)`],
          quantity: 3,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Six armes au choix (toutes de qualité exceptionnelle)`,
        `Armure moyenne (gilet de mailles et veste de cuir)`,
      ],
    },
    access: [
      `Assassin`,
      `Champion de justice`,
      `Chevalier du Cercle Intérieur`,
      `Duelliste`,
      `Franc-archer`,
      `Répurgateur`,
      `Vétéran`,
    ],
    advanced: [
      `Assassin`,
      `Pisteur`,
      `Répurgateur`,
      `Sergent`,
    ],
    stats: {
      CC: 40,
      CT: 40,
      F: 25,
      E: 25,
      Ag: 30,
      FM: 20,
      A: 2,
      B: 8,
    },
  },
  {
    name: `Champion de justice`,
    description: `Certains pays du Vieux Monde permettent en toute légalité à un accusé de prouver son innocence en acceptant de se battre. Habituellement, il est confronté au Champion de justice local, un guerrier professionnel dont le travail consiste à vaincre un adversaire aussi rapidement que possible. Nombre des lois autorisant de tels combats précisent également la nature des armes utilisables, ce qui signifie que le Champion de justice est formé au maniement d'un véritable arsenal. Les Champions de justice sont donc des combattants craints et respectés,souvent précédés par leur réputation. Les accusés les plus riches ont parfois les moyens de louer les services d'un Champion de justice pour se battre en leur nom.`,
    skills: {
      mandatory: [
        `Esquive`,
        `Perception`,
      ],
    },
    talents: {
      mandatory: [
        `Maîtrise (armes lourdes)`,
        `Maîtrise (armes d'escrime)`,
        `Maîtrise (armes de parade)`,
        `Maîtrise (fléaux)`,
        `Parade éclair`,
      ],
    },
    dotation: {
      mandatory: [
        `Arme à deux mains`,
        `10 mètres de corde`,
      ],
      choice: [
        {
          options: [`Fléau d'armes `, `Morgenstern`],
          quantity: 1,
        },
        {
          options: [`Rapière`, `Fleuret`],
          quantity: 1,
        },
        {
          options: [`Rondache`, `Main gauche`],
          quantity: 1,
        },
      ]
    },
    access: [
      `Sergent`,
      `Vétéran`,
    ],
    advanced: [
      `Assassin`,
      `Champion`,
      `Fanatique`,
      `Répurgateur`,
      `Sergent`,
    ],
    stats: {
      CC: 35,
      F: 15,
      E: 15,
      Ag: 20,
      Int: 10,
      FM: 15,
      A: 2,
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
  {
    name: `Chasseur de vampires`,
    description: `Les Chasseurs de vampires sont des individus obnubilés par l'anéantissement des mortsvivants de tout poil. En effet, beaucoup ont perdu des amis ou de la famille aux griffes des non-morts,souvent pour rallier leurs rangs. Les morts-vivants constituant un véritable sujet tabou au sein de l'Empire, les Chasseurs de vampires sont donc des autodidactes. Ils se réunissent en toute discrétion, partagent les maigres connaissances qu'ils parviennent à glaner lors de leurs rencontres avec les morts errants dans l'espoir de trouver un jour le moyen de tuer les plus puissants d'entre eux, les vampires.`,
    skills: {
      mandatory: [
        `Connaissances générales (Empire)`,
        `Déplacement silencieux`,
        `Dissimulation`,
        `Escalade`,
        `Esquive`,
        `Filature`,
        `Fouille`,
        `Langue (classique)`,
        `Perception`,
        `Pistage`,
      ],
      choice: [
        {
          options: [`Connaissances académiques (histoire)`, `Connaissances académiques (nécromancie)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Camouflage souterrain`,
        `Coups précis`,
        `Coups puissants`,
        `Maîtrise (arbalètes)`,
        `Valeureux`,
      ],
      choice: [
        {
          options: [`Rechargement rapide`, `Tir en puissance`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arbalète à répétition avec 10 carreaux`,
        `Armure moyenne (armure de mailles complète)`,
        `Eau bénite`,
        `4 pieux`,
      ],
    },
    access: [
      `Chasseur de primes`,
      `Chevalier`,
      `Pilleur de tombes`,
      `Pisteur`,
      `Rôdeur fantôme`,
      `Sentinelle halfling`,
    ],
    advanced: [
      `Chevalier`,
      `Démagogue`,
      `Franc-archer`,
      `Initié`,
      `Répurgateur`,
    ],
    stats: {
      CC: 20,
      CT: 20,
      F: 10,
      E: 20,
      Ag: 15,
      Int: 15,
      FM: 20,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Chef de bande`,
    description: `Toutes les bandes de brigands ont besoin d'un chef.Ainsi, le hors-laloi qui fait montre de courage et d'ingéniosité peut s'élever au rang de Chef de bande. Cependant, prendre la tête d'un groupe d'hommes sans foi ni loi n'est pas chose aisée, d'autant que les dangereuses forêts du Vieux Monde ne facilitent pas la tâche. Les Chefs de bande ont la part du lion des butins acquis par le groupe, mais ils sont également responsables des échecs de la bande, ce qui peut parfois leur coûter leur place, et leur vie. Les groupes de hors-la-loi sont connus pour ne pas laisser leurs membres prendre leur retraite,si bien que les Chefs de bande ont parfois du mal à quitter leur fonction.`,
    skills: {
      mandatory: [
        `Commandement`,
        `Connaissances académiques (stratégie/tactique)`,
        `Connaissances générales (Empire)`,
        `Déplacement silencieux`,
        `Dissimulation`,
        `Equitation`,
        `Escalade`,
        `Langage secret (langage de bataille)`,
        `Langage secret (langage des voleurs)`,
        `Perception`,
        `Pistage`,
      ],
      choice: [
        {
          options: [`Alphabet secret (pisteur)`, `Alphabet secret (voleur)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Parade éclair`,
        `Rechargement rapide`,
        `Sur ses gardes`,
        `Tir de précision`,
        `Tir en puissance`,
      ],
    },
    dotation: {
      mandatory: [
        `Armure moyenne (chemise de mailles et veste de cuir)`,
        `Cheval de selle avec selle et harnais`,
        `Groupe de hors-la-loi`,
      ],
      choice: [
        {
          options: [`Arc avec 10 flèches`, `Arbalète avec 10 carreaux`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Bandit de grand chemin`,
      `Baron du crime`,
      `Démagogue`,
      `Pisteur`,
      `Prince des voleurs`,
      `Racketteur`,
      `Rôdeur fantôme`,
      `Vétéran`,
    ],
    advanced: [
      `Assassin`,
      `Baron du crime`,
      `Capitaine`,
      `Démagogue`,
    ],
    stats: {
      CC: 20,
      CT: 30,
      F: 10,
      E: 20,
      Ag: 10,
      Int: 10,
      FM: 10,
      Soc: 20,
      A: 2,
      B: 6,
    },
  },
  {
    name: `Chevalier`,
    description: `Les Chevaliers sont des soldats professionnels, généralement des nobles. Ils combattent en armure lourde et manient des armes de grande taille,souvent à cheval, et constituent les troupes d'élite de toute armée. De nombreux Chevaliers ont juré de protéger les classes populaires, mais ce n'est pas le cas de tous. Nombre d'ordres de chevalerie sont originaires de Bretonnie et de l'Empire, parmi lesquels les Chevaliers du Loup Blanc, les Chevaliers Panthères, les Chevaliers de Reiksguard et les Chevaliers du Graal. Les Chevaliers issus d'ordres religieux sont connus sous le nom de templiers.`,
    skills: {
      mandatory: [
        `Connaissances académiques (stratégie/tactique)`,
        `Equitation`,
        `Esquive`,
        `Langage secret (langage de bataille)`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Connaissances académiques (généalogie/héraldique)`, `Connaissances académiques (religion)`],
          quantity: 1,
        },
        {
          options: [`Langue (reikspiel)`, `Langue (bretonnien)`, `Langue (kislévien)`, `Langue (tiléen)`, `Langue (estalien)`, `Langue (norse)`, `Langue (khazalid)`, `Langue (eltharin)`],
          quantity: 2,
        },
      ],
    },
    talents: {
      mandatory: [
        `Coups puissants`,
        `Maîtrise (armes de cavalerie)`,
        `Maîtrise (armes lourdes)`,
        `Maîtrise (fléaux)`,
      ],
    },
    dotation: {
      mandatory: [
        `Lance de cavalerie`,
        `Armure lourde (armure de plaques complète)`,
        `Bouclier`,
        `Symbole religieux`,
        `25 co`,
        `Destrier avec selle et harnais`,
      ],
      choice: [
        {
          options: [`Fléau d'armes`, `Morgenstern`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Aristocrate`,
      `Chasseur de vampires`,
      `Ecuyer`,
      `Pistolier`,
      `Sergent`,
    ],
    advanced: [
      `Aristocrate`,
      `Capitaine`,
      `Chasseur de vampires`,
      `Chevalier du Cercle Intérieur`,
      `Initié`,
    ],
    stats: {
      CC: 25,
      F: 15,
      E: 15,
      Ag: 15,
      Int: 5,
      FM: 15,
      Soc: 5,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Chevalier du Cercle Intérieur`,
    description: `Au sein de chaque ordre de chevalerie, les meilleurs combattants se regroupent dans la même unité.Ces hommes ont prouvé leur vaillance et leur loyauté à maintes reprises et font désormais partie du cercle intérieur de leur ordre.Ils mènent leurs frères chevaliers sur le terrain,représentent leur ordre à la cour et prennent d'importantes décisions. Ils comptent parmi les plus grands guerriers que le Vieux Monde puisse offrir. Beaucoup apprennent de terribles secrets sur le Vieux Monde, ce qui leur permet de mieux connaître leurs ennemis. Les plus valeureux d'entre eux prétendent par la suite à des postes de grande importance, et surtout à la place tant convoitée de grand maître des chevaliers.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commandement`,
        `Connaissances académiques (stratégie/tactique)`,
        `Dressage`,
        `Equitation`,
        `Esquive`,
        `Langage secret (langage de bataille)`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Alphabet secret (pisteur)`, `Alphabet secret (templier)`],
          quantity: 1,
        },
        {
          options: [`Connaissances académiques (généalogie/héraldique)`, `Connaissances académiques (religion)`],
          quantity: 1,
        },
        {
          options: [`Langue (reikspiel)`, `Langue (bretonnien)`, `Langue (kislévien)`, `Langue (tiléen)`, `Langue (estalien)`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`, `Connaissances générales (Kislev)`, `Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Norsca)`, `Connaissances générales (nains)`, `Connaissances générales (elfes)`],
          quantity: 3,
        },
      ],
    },
    talents: {
      mandatory: [
        `Coups assommants`,
        `Coups précis`,
        `Etiquette`,
        `Grand voyageur`,
        `Maîtrise (armes d'escrime')`,
        `Maîtrise (armes de parade)`,
        `Parade éclair`,
        `Valeureux`,
      ],
    },
    dotation: {
      mandatory: [
        `Armure lourde (armure de plaques complète de qualité exceptionnelle)`,
        `Symbole religieux`,
        `25 co`,
      ],
      choice: [
        {
          options: [`Rondache`, `Main gauche`],
          quantity: 1,
        },
        {
          options: [`Rapière`, `Fleuret`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Chevalier`,
      `Répurgateur`,
    ],
    advanced: [
      `Aristocrate`,
      `Capitaine`,
      `Champion`,
      `Répurgateur`,
    ],
    stats: {
      CC: 35,
      CT: 10,
      F: 20,
      E: 20,
      Ag: 20,
      Int: 15,
      FM: 25,
      Soc: 15,
      A: 2,
      B: 8,
    },
  },
  {
    name: `Compagnon sorcier`,
    description: `Les Compagnons sorciers humains ont achevé leur apprentissage et rejoint les ordres de magie.Ils ont désormais accès à tous les sorts de leur domaine, mais ils doivent encore trouver un juste équilibre entre leurs pouvoirs et leurs facultés de contrôle naissantes. La majorité des Compagnons doivent des sommes considérables à leur collège pour leur enseignement, et ils partent souvent à l'aventure pour rembourser leur dette. En échange d'or, de connaissances ou de soutien politique, ils louent leurs services au plus offrant, souvent à la demande de l'ordre. Bien entendu, les elfes œuvrent en dehors du système de collèges et ne doivent rien.`,
    note: `si vous êtes humain, vous devez payer 40 co au moment d'entreprendre cette carrière.Cette somme vous permet d'obtenir votre licence.À moins d'être riche, vous devez également verser 1 couronne au collège chaque fois que vous en gagnez 10, et ce pour la durée de cette carrière.Rien ne vous empêche de tenter de vous soustraire à cette obligation, mais rares sont les individus qui parviennent à frauder l'ordre bien longtemps.`,
    skills: {
      mandatory: [
        `Commérage`,
        `Connaissances académiques (magie)`,
        `Focalisation`,
        `Langage mystique (magick)`,
        `Lire/écrire`,
        `Sens de la magie`,
      ],
      choice: [
        {
          options: [`Charisme`, `Intimidation`],
          quantity: 1,
        },
        {
          options: [`Connaissances académiques (généalogie/héraldique)`, `Connaissances académiques (religion)`, `Connaissances académiques (histoire)`, `Connaissances académiques (astronomie)`, `Connaissances académiques (démonologie)`, `Connaissances académiques (nécromancie)`, `Connaissances académiques (runes)`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`, `Connaissances générales (Kislev)`, `Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Norsca)`, `Connaissances générales (nains)`, `Connaissances générales (elfes)`],
          quantity: 2,
        },
        {
          options: [`Langue (reikspiel)`, `Langue (bretonnien)`, `Langue (kislévien)`, `Langue (tiléen)`, `Langue (norse)`, `Langue (eltharin)`, `Langue (khazalid)`],
          quantity: 2,
        },
      ],
    },
    talents: {
      mandatory: [
        `Coups assommants`,
        `Coups précis`,
        `Etiquette`,
        `Grand voyageur`,
        `Maîtrise (armes d'escrime')`,
        `Maîtrise (armes de parade)`,
        `Parade éclair`,
        `Valeureux`,
      ],
      choice :[
        {
          options: [`Harmonie aethyrique`, `Magie Noire`],
          quantity: 1,
        },
        {
          options: [`Magie mineure (alarme magique)`, `Magie mineure (arme consacrée)`, `Magie mineure (armure aethyrique)`, `Magie mineure (dissipation)`, `Magie mineure (manipulation distante)`, `Magie mineure (marche dans les airs)`, `Magie mineure (silence)`, `Magie mineure (verrou magique)`],
          quantity: 2,
        },
        {
          options: [`Mains agiles`, `Résistance accrue`],
          quantity: 1,
        },
        {
          options: [`Méditation`, `Projectile puissant`],
          quantity: 1,
        },
        {
          options: [`Science de la magie (bête)`, `Science de la magie (cieux)`, `Science de la magie (feu)`, `Science de la magie (lumière)`, `Science de la magie (métal)`, `Science de la magie (mort)`, `Science de la magie (ombre)`, `Science de la magie (vie)`, `Sombre savoir (Chaos)`, `Sombre savoir (nécromancie)`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Grimoire`,
        `Accessoires de calligraphie`,
      ],
    },
    access: [
      `Apprenti sorcier`,
    ],
    advanced: [
      `Charlatan`,
      `Erudit`,
      `Maître sorcier`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      E: 5,
      Ag: 10,
      Int: 20,
      FM: 25,
      Soc: 10,
      B: 3,
      Mag: 2,
    },
  },
  {
    name: `Courtisan`,
    description: `Les Courtisans flattent les seigneurs et les dames de la noblesse dans l'espoir de connaître une ascension sociale. Leurs rangs regroupent des flagorneurs qui cherchent à plaire à tout prix mais également des intrigants en quête de richesse et de prestige. Généralement, les Courtisans sont cultivés et font de bons orateurs. Les nobles font souvent appel à eux car ils ont un avis d'érudit sur tous les sujets. Cependant, quel que soit son talent, aucun Courtisan n'occupe une place sûre et chacun a un rival qui ne souhaite qu'une chose, assurer sa chute. Les femmes qui entreprennent cette carrière sont généralement qualifiées de dames d'honneur.`,
    skills: {
      mandatory: [
        `Baratin`,
        `Charisme`,
        `Commérage`,
        `Equitation`,
        `Evaluation`,
        `Langue (reikspiel)`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Commandement`, `Expression artistique (acrobate)`,  `Expression artistique (acteur)`, `Expression artistique (bouffon)`, `Expression artistique (chanteur)`, `Expression artistique (chiromancien)`, `Expression artistique (clown)`, `Expression artistique (comédien)`, `Expression artistique (conteur)`, `Expression artistique (cracheur de feu)`, `Expression artistique (danseur)`, `Expression artistique (jongleur)`, `Expression artistique (mime)`, `Expression artistique (musicien)`],
          quantity: 1,
        },
        {
          options: [`Connaissances académiques (arts)`, `Connaissances académiques (histoire)`, `Jeu`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Bretonnie)`, `Connaissances générales (Tilée)`],
          quantity: 1,
        },
        {
          options: [ `Langue (bretonnien)`, `Langue (tiléen)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Eloquence`,
      ],
      choice :[
        {
          options: [`Dur en affaires`, `Etiquette`],
          quantity: 1,
        },
        {
          options: [`Intelligent`, `Sociable`],
          quantity: 1,
        },
        {
          options: [`Intrigant`, `Maîtrise (armes d'escrime)`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `4 atours de noble`,
        `100 co`,
        `Valet`,
      ],
    },
    access: [
      `Héraut`,
      `Noble`,
      `Pistolier`,
      `Politicien`,
    ],
    advanced: [
      `Aristocrate`,
      `Charlatan`,
      `Duelliste`,
      `Espion`,
      `Intendant`,
      `Politicien`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      Ag: 10,
      Int: 20,
      FM: 20,
      Soc: 20,
      B: 4,
    },
  },
  {
    name: `Démagogue`,
    description: `Les Démagogues sont les agitateurs les plus populaires, des orateurs tellement doués qu'ils sont capables d'ébranler des nations entières à l'aide de leur verbe. Ils comptent toujours parmi les meneurs de la cause dont ils se font les champions. Les autorités se méfient toujours d'eux car ils sont susceptibles de semer le vent de la révolte et de la discorde contre le gouvernement ou l'Église. Cependant, quand on les guide à bon escient, ils sont utiles pour rallier le peuple contre le Chaos et toute autre menace. Les autorités traitent donc les Démagogues populaires avec prudence et tentent parfois de s'attirer leurs grâces.`,
    skills: {
      mandatory: [
        `Baratin`,
        `Charisme`,
        `Commandement`,
        `Commérage`,
        `Connaissances académiques (droit)`,
        `Connaissances académiques (histoire)`,
        `Connaissances générales (Empire)`,
        `Déguisement`,
        `Dissimulation`,
        `Esquive`,
        `Intimidation`,
        `Langue (reikspiel)`,
        `Perception`,
      ],
    },
    talents: {
      mandatory: [
        `Combat de rue`,
        `Eloquence`,
        `Orateur né`,
      ],
      choice :[
        {
          options: [`Code de la rue`, `Etiquette`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir et calotte de cuir)`,
      ],
    },
    access: [
      `Agitateur`,
      `Baron du crime`,
      `Charlatan`,
      `Chasseur de vampires`,
      `Chef de bande`,
      `Escroc`,
      `Flagellant`,
      `Hors-la-loi`,
      `Initié`,
      `Maître-artisan`,
      `Ménestrel`,
      `Moine`,
      `Politicien`,
      `Prêtre consacré`,
      `Répurgateur`,
    ],
    advanced: [
      `Baron du crime`,
      `Chef de bande`,
      `Mercenaire`,
      `Moine`,
      `Politicien`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      E: 10,
      Ag: 15,
      Int: 20,
      FM: 15,
      Soc: 30,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Duelliste`,
    description: `Un système de duel parfaitement légal fut institué au sein de l'Empire il y a bien longtemps. Les Duellistes manient l'épée et le pistolet avec une efficacité redoutable. Ils s'enorgueillissent de défendre l'honneur d'autrui, mais beaucoup sont de jeunes nobles qui se contentent de défendre leurs intérêts. Il existe deux types de duellistes: les fanfarons qui ne voient que l'aventure dans leurs exploits et les combattants aguerris qui n'hésitent pas à laver le plus petit affront dans le sang.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commandement`,
        `Commérage`,
        `Escamotage`,
        `Esquive`,
        `Intimidation`,
        `Jeu`,
        `Perception`,
      ],
    },
    talents: {
      mandatory: [
        `Adresse au tir`,
        `Combattant virevoltant`,
        `Coups précis`,
        `Coups puissants`,
        `Etiquette`,
        `Maître artilleur`,
        `Maîtrise (armes d'escrime)`,
        `Maîtrise (armes à feu)`,
        `Maîtrise (armes de parade)`,
        `Sur ses gardes`,
        `Tir en puissance`,
      ],
      choice :[
        {
          options: [`Ambidextre`, `Désarmement`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Main gauche`,
        `Pistolet avec poudre et munitions pour 10 tirs`,
        `Rapière`,
      ],
    },
    access: [
      `Bandit de grand chemin`,
      `Courtisan`,
      `Diestro estalien`,
      `Franc-archer`,
      `Pistolier`,
      `Sergent`,
      `Spadassin`,
    ],
    advanced: [
      `Assassin`,
      `Bandit de grand chemin`,
      `Champion`,
      `Escroc`,
      `Sergent`,
    ],
    stats: {
      CC: 20,
      CT: 20,
      F: 10,
      E: 20,
      Ag: 20,
      Int: 15,
      FM: 15,
      Soc: 10,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Erudit`,
    description: `Les Érudits sont des académiciens qui consacrent leur existence à la recherche de connaissances. On trouve parmi eux des sages qui explorent des théories philosophiques et scientifiques, des moines qui se spécialisent en savoir théologique et des précepteurs qui s'efforcent d'instruire les enfants de riches marchands et nobles. Certains Érudits se mettent également en quête de connaissances ésotériques ou proscrites. Une telle voie requiert néanmoins une grande force mentale et a de grandes chances d'attirer les foudres de répurgateurs et autres fanatiques. Dans le Vieux Monde, Ceux qui étudient la loi, comme les clercs et les juristes,sont considérés comme des Érudits spécialisés.`,
    skills: {
      mandatory: [
        `Langue (classique)`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Connaissances académiques (généalogie/héraldique)`, `Connaissances académiques (religion)`, `Connaissances académiques (histoire)`, `Connaissances académiques (astronomie)`, `Connaissances académiques (arts)`, `Connaissances académiques (droit)`, `Connaissances académiques (ingénierie)`, `Connaissances académiques (philosophie)`, `Connaissances académiques (science)`, `Connaissances académiques (théologie)`, `Connaissances académiques (démonologie)`, `Connaissances académiques (nécromancie)`, `Connaissances académiques (runes)`],
          quantity: 3,
        },
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`, `Connaissances générales (Kislev)`, `Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Norsca)`, `Connaissances générales (nains)`, `Connaissances générales (elfes)`],
          quantity: 3,
        },
        {
          options: [`Langue (kislevien)`, `Langue (tiléen)`, `Langue (bretonnien)`, `Langue (reikspiel)`, `Langue (estalien)`, `Langue (khazalid)`, `Langue (eltharin)`, `Langue (norse)`, `Langue (halfling)`, `Langue (grumbarth)`],
          quantity: 3,
        },
      ],
    },
    talents: {
      mandatory: [
        `Linguistique`,
      ],
    },
    dotation: {
      mandatory: [
        `Accessoires de calligraphie`,
      ],
    },
    access: [
      `Apprenti sorcier`,
      `Aristocrate`,
      `Capitaine de navire`,
      `Compagnon sorcier`,
      `Etudiant`,
      `Grand prêtre`,
      `Maître sorcier`,
      `Médecin`,
      `Moine`,
      `Navigateur`,
      `Prêtre`,
      `Prêtre consacré`,
      `Scribe`,
    ],
    advanced: [
      `Apprenti sorcier`,
      `Explorateur`,
      `Intendant`,
      `Marchand`,
      `Médecin`,
      `Moine`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      F: 5,
      E: 5,
      Ag: 10,
      Int: 30,
      FM: 15,
      Soc: 15,
      B: 4,
    },
  },
  {
    name: `Espion`,
    description: `Les Espions sont des agents secrets chargés de recueillir des informations pour le compte de leur employeur ou du plus offrant. Ils sont passés maîtres dans l'art du déguisement et risquent souvent leur vie en travaillant clandestinement en territoire ennemi. Certains infiltrent même des groupes subversifs et les étudient pendant des mois de l'intérieur. Un Espion qui ose se joindre à une secte du Chaos risque bien plus que la mort, mais nombre de groupes d'influence du Vieux Monde ont besoin des informations que ces courageux individus peuvent offrir.Toutes les nations du Vieux Monde ont recours aux services d'Espions, généralement pour surveiller les manœuvres militaires et politiques de leurs rivaux.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commérage`,
        `Crochetage`,
        `Déguisement`,
        `Déplacement silencieux`,
        `Dissimulation`,
        `Escamotage`,
        `Expression artistique (acteur)`,
        `Filature`,
        `Lecture sur les lèvres`,
      ],
      choice: [
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`, `Connaissances générales (Kislev)`, `Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Norsca)`, `Connaissances générales (nains)`, `Connaissances générales (elfes)`],
          quantity: 2,
        },
        {
          options: [`Langage secret (langage de bataille)`, `Langage secret (langage de guilde)`, `Langage secret (langage des rôdeurs)`, `Langage secret (langage des voleurs)`],
          quantity: 1,
        },
        {
          options: [`Langue (kislevien)`, `Langue (tiléen)`, `Langue (bretonnien)`, `Langue (reikspiel)`, `Langue (estalien)`, `Langue (khazalid)`, `Langue (eltharin)`, `Langue (norse)`, `Langue (halfling)`, `Langue (grumbarth)`],
          quantity: 3,
        },
      ],
    },
    talents: {
      mandatory: [
        `Fuite`,
        `Intrigant`,
        `Linguistique`,
      ],
      choice: [
        {
          options: [`Sixième sens`, `Sociable`],
          quantity: 1,
        }
      ]
    },
    dotation: {
      mandatory: [
        `Accessoires de déguisement`,
        `4 pigeons voyageurs`,
      ],
    },
    access: [
      `Capitaine de navire`,
      `Charlatan`,
      `Courtisan`,
      `Explorateur`,
      `Marchand`,
      `Médecin`,
      `Ménestrel`,
      `Mercanti`,
      `Serviteur`,
    ],
    advanced: [
      `Assassin`,
      `Explorateur`,
      `Prince des voleurs`,
      `Racketteur`,
    ],
    stats: {
      CC: 15,
      CT: 15,
      F: 5,
      E: 10,
      Ag: 20,
      Int: 20,
      FM: 35,
      Soc: 20,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Explorateur`,
    description: `Les Explorateurs ont la manie des voyages et parcourent le Vieux Monde. Ils assouvissent leur soif de découverte en dénichant de nouvelles contrées et des routes commerciales jusqu'alors inexploitées. Les Explorateurs s'aventurent régulièrement dans l'inconnu, ce qui fait d'eux de fins guerriers et diplomates ou des morts en sursis.Ni la mer ni la terre ne leur font peur.Ce sont habituellement des individus compétents dans ce qu'ils entreprennent. En effet, la diversité des rôles qu'il leur faut jouer leur confère une grande polyvalence, la faculté de mener des troupes et de négocier au moyen de langues qu'ils connaissent à peine.`,
    skills: {
      mandatory: [
        `Alphabet secret (pisteur)`,
        `Commandement`,
        `Conduite d'attelages`,
        `Equitation`,
        `Escalade`,
        `Evaluation`,
        `Langage secret (langage des rôdeurs)`,
        `Lire/écrire`,
        `Métier (cartographe)`,
        `Natation`,
        `Orientation`,
        `Perception`,
        `Pistage`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Connaissances académiques (droit)`, `Connaissances académiques (histoire)`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`, `Connaissances générales (Kislev)`, `Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Norsca)`, `Connaissances générales (nains)`, `Connaissances générales (elfes)`, `Connaissances générales (ogres)`, `Connaissances générales (Cathay)`, `Connaissances générales (Ind)`],
          quantity: 3,
        },
        {
          options: [`Langage secret (langage de bataille)`, `Langage secret (langage de guilde)`, `Langage secret (langage des rôdeurs)`, `Langage secret (langage des voleurs)`],
          quantity: 1,
        },
        {
          options: [`Langue (kislevien)`, `Langue (tiléen)`, `Langue (bretonnien)`, `Langue (reikspiel)`, `Langue (estalien)`, `Langue (khazalid)`, `Langue (eltharin)`, `Langue (norse)`, `Langue (halfling)`, `Langue (grumbarth)`, `Langue (cathayan)`],
          quantity: 3,
        },
      ],
    },
    talents: {
      mandatory: [
        `Grand voyageur`,
      ],
      choice: [
        {
          options: [`Linguistique`, `Sens de l'orientation`],
          quantity: 1,
        }
      ]
    },
    dotation: {
      mandatory: [
        `Arme à une main`,
        `Armure moyenne (gilet de mailles et veste de cuir)`,
        `Bouclier`,
        `6 cartes`,
        `1000 co en pièces et marchandises`,
        `Cheval de selle avec selle et harnais`,
      ],
      choice: [
        {
          options: [`Arc avec 10 flèches`, `Arbalète avec 10 carreaux`],
          quantity: 1,
        }
      ]
    },
    access: [
      `Capitaine`,
      `Capitaine de navire`,
      `Erudit`,
      `Espion`,
      `Héraut`,
      `Ingénieur`,
      `Maître sorcier`,
      `Navigateur`,
      `Officier en second`,
      `Pisteur`,
      `Prince des voleurs`,
      `Seigneur sorcier`,
    ],
    advanced: [
      `Capitaine`,
      `Capitaine de navire`,
      `Espion`,
      `Marchand`,
    ],
    stats: {
      CC: 20,
      CT: 20,
      F: 10,
      E: 15,
      Ag: 15,
      Int: 25,
      FM: 20,
      Soc: 15,
      A: 1,
      B: 6,
    },
  },
  {
    name: `Flagellant`,
    description: `Les Flagellants sont des fanatiques religieux qui sont prêts à sacrifier leur vie pour porter un coup au Chaos et à tout ce qu'ils apparentent au mal. Habituellement, il s'agit d'individus très charismatiques qui prennent la tête de malheureux, leur personnalité et leurs incroyables convictions religieuses attirant à eux de nombreux fanatiques. Ils s'équipent toujours d'armes lourdes pour infliger un maximum de dégâts à leurs ennemis, mais ils renoncent au port de l'armure car ils ont le sentiment que leur dieu les protégera jusqu'à ce que sonne leur heure. Les gens sains d'esprit tendent à fuir leur compagnie.`,
    note: `vous devez être atteint d'au moins une folie pour
    entreprendre cette carrière.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Connaissances académiques (théologie)`,
        `Intimidation`,
        `Langue (classique)`,
        `Soins`,
      ],
    },
    talents: {
      mandatory: [
        `Coups puissants`,
        `Sans peur`,
      ],
      choice: [
        {
          options: [`Maîtrise (armes lourdes)`, `Maîtrise (fléaux)`],
          quantity: 1,
        }
      ]
    },
    dotation: {
      mandatory: [
        `Bouteille d'alcool fort de bonne qualité`,
        `Symbole religieux`,
        `Relique religieuse`,
      ],
      choice: [
        {
          options: [`Arme à deux mains`, `Fléau d'armes`],
          quantity: 1,
        }
      ]
    },
    access: [
      `Fanatique`,
      `Moine`,
      `Prêtre`,
      `Prêtre consacré`,
    ],
    advanced: [
      `Bourreau`,
      `Démagogue`,
      `Prêtre`,
      `Soldat`,
      `Vétéran`,
    ],
    stats: {
      CC: 15,
      F: 10,
      E: 15,
      Ag: 5,
      FM: 20,
      Soc: 10,
      A: 1,
      B: 6,
    },
  },
  {
    name: `Franc-archer`,
    description: `Les Francs-archers perfectionnent leur adresse au tir. Habituellement, ils manient le redoutable arc long, mais certains se tournent vers l'arbalète. Ils voyagent de foire en foire, divertissant les foules au moyen de démonstrations et mesurant leur adresse lors d'épreuves organisées au pied levé. De nombreux nobles organisent des tournois de tir à l'arc, le gagnant remportant généralement une bourse bien remplie. Du reste, c'est ainsi que certains Francs-archers gagnent leur vie. En cette sinistre époque, les Francs-archers sont prisés auprès des armées et autres compagnies de mercenaires.`,
    skills: {
      mandatory: [
        `Commérage`,
        `Connaissances générales (Empire)`,
        `Escamotage`,
        `Fouille`,
        `Perception`,
        `Survie`,
      ],
    },
    talents: {
      mandatory: [
        `Adresse au tir`,
        `Maîtrise (arcs longs)`,
        `Rechargement rapide`,
        `Tir de précision`,
        `Tir en puissance`,
      ],
      choice: [
        {
          options: [`Maîtrise (arbalètes)`, `Maîtrise (armes de jet)`],
          quantity: 1,
        }
      ]
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
      ],
      choice: [
        {
          options: [`Arbalète avec 10 carreaux`, `Arc long avec 10 flèches`],
          quantity: 1,
        }
      ]
    },
    access: [
      `Chasseur`,
      `Chasseur de primes`,
      `Prince des voleurs`,
      `Rôdeur fantôme`,
      `Vétéran`,
    ],
    advanced: [
      `Assassin`,
      `Champion`,
      `Duelliste`,
      `Sergent`,
    ],
    stats: {
      CT: 35,
      F: 10,
      E: 10,
      Ag: 25,
      Int: 10,
      FM: 20,
      Soc: 15,
      A: 1,
      B: 4,
    },
  },
  {
    name: `Grand prêtre`,
    description: `Dans le Vieux Monde, le Grand prêtre est l'incarnation d'un dieu. Ces personnages sont rares car peu d'individus ont la force de caractère et la foi nécessaire pour occuper une telle position. À quelques exceptions près, les Grands prêtres opèrent généralement à l'écart des centres religieux de leur foi. Certains pèlerins sont prêts à traverser l'Empire pour parler à un tel personnage pendant quelques secondes. Les Grands prêtres ont tendance à rejeter en bloc le monde matériel et se retirent souvent dans un monastère. D'autres se tournent néanmoins vers le pouvoir temporel et deviennent des personnages importants dans les affaires séculières.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commérage`,
        `Connaissances académiques (théologie)`,
        `Focalisation`,
        `Intimidation`,
        `Langage mystique (magick)`,
        `Sens de la magie`,
        `Soins`,
      ],
      choice: [
        {
          options: [`Connaissances académiques (généalogie/héraldique)`, `Connaissances académiques (religion)`, `Connaissances académiques (histoire)`, `Connaissances académiques (astronomie)`, `Connaissances académiques (arts)`, `Connaissances académiques (droit)`, `Connaissances académiques (ingénierie)`, `Connaissances académiques (philosophie)`, `Connaissances académiques (science)`, `Connaissances académiques (démonologie)`, `Connaissances académiques (nécromancie)`, `Connaissances académiques (runes)`],
          quantity: 3,
        },
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Bretonnie)`, `Connaissances générales (Kislev)`, `Connaissances générales (Tilée)`, `Connaissances générales (Estalie)`, `Connaissances générales (Norsca)`, `Connaissances générales (nains)`, `Connaissances générales (elfes)`, `Connaissances générales (ogres)`],
          quantity: 2,
        },
        {
          options: [`Langue (kislevien)`, `Langue (tiléen)`, `Langue (bretonnien)`, `Langue (reikspiel)`, `Langue (estalien)`, `Langue (khazalid)`, `Langue (eltharin)`, `Langue (norse)`, `Langue (halfling)`, `Langue (grumbarth)`],
          quantity: 3,
        },
      ],
    },
    talents: {
      mandatory: [
        `Etiquette`,
      ],
      choice: [
        {
          options: [`Harmonie aethyrique`, `Méditation`],
          quantity: 1,
        },
        {
          options: [`Incantation de bataille`, `Projectile puissant`],
          quantity: 1,
        },
        {
          options: [`Magie mineure (alarme magique)`, `Magie mineure (arme consacrée)`, `Magie mineure (armure aethyrique)`, `Magie mineure (dissipation)`, `Magie mineure (manipulation distante)`, `Magie mineure (marche dans les airs)`, `Magie mineure (silence)`, `Magie mineure (verrou magique)`],
          quantity: 2,
        },
        {
          options: [`Mains agiles`, `Sain d'esprit`],
          quantity: 1,
        },
      ]
    },
    dotation: {
      mandatory: [
        `Relique sacrée`,
      ],
    },
    access: [
      `Prêtre consacré`,
    ],
    advanced: [
      `Erudit`,
      `Politicien`,
      `Répurgateur`,
    ],
    stats: {
      CC: 20,
      CT: 20,
      F: 15,
      E: 15,
      Ag: 15,
      Int: 20,
      FM: 30,
      Soc: 25,
      A: 1,
      B: 6,
    },
  },
];

export { advanced_careers };