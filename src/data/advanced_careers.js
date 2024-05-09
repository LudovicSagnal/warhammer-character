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
          options: [`Maîtrise (arme à deux mains)`, `Maîtrise (arme à une main)`, `Maîtrise (bouclier)`, `Maîtrise (fléau d'armes)`, `Maîtrise (hallebarde)`, `Maîtrise (lance)`, `Maîtrise (rapière)`, `Maîtrise (arc)`, `Maîtrise (arbalète)`, `Maîtrise (arquebuse)`],
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