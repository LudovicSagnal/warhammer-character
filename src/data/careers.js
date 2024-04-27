import { races } from "./races";

const careers = [
  {
    name: `Agitateur`,
    description: `Habituellement, les citoyens de l'Empire n'ont pas véritablement leur mot à dire en matière de politique. L'Empereur et les Comtes Électeurs promulguent les lois et se chargent de leur application avec le concours des diverses Églises (comme celles de Sigmar et d'Ulric). Les villes de l'Empire abritent néanmoins de nombreux activistes virulents.Ces Agitateurs se mobilisent au nom de causes variées, distribuant des tracts,faisant des discours enflammés et soulevant parfois les foules. Les extrémistes sont généralement ignorés, mais ceux qui remportent l'adhésion de leur auditoire, en attisant notamment le ressentiment qu'éprouvent paysans et bourgeois, acquièrent rapidement le statut de menace d'État.Ils deviennent alors la proie de la milice locale ou sont accusés d'hérésie par les représentants de l'Église, voire obligés de se soumettre à la miséricorde des répurgateurs. Malgré les risques, les Agitateurs poursuivent néanmoins leurs activités.Certains croient dur comme fer en leur cause, mais d'autres sont de cyniques sycophantes aussi corrompus que ceux contre lesquels ils se répandent en invectives.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Dissimulation`,
        `Langue(reikspiel)`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Commérage`, `Connaissances académiques (histoire)`],
          quantity: 1,
        },
        {
          options: [
            `Connaissances académiques (droit)`,
            `Connaissances générales (Empire)`,
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
      mandatory: [`Eloquence`, `Fuite`],
      choice: [
        {
          options: [`Combat de rue`, `Sang-froid`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `Vêtements confortables`,
        `2d10 tracts de diverses causes`,
      ],
    },
    access: [
      `Bandit de grand chemin`,
      `Bourgeois`,
      `Capitaine`,
      `Etudiant`,
      `Fanatique`,
      `Héraut`,
      `Scribe`,
      `Serviteur`,
    ],
    advanced: [
      `Charlatan`,
      `Démagogue`,
      `Escroc`,
      `Fanatique`,
      `Hors-la-loi`,
      `Politicien`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      Ag: 5,
      Int: 10,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Apprenti sorcier`,
    description: `Les humains dotés de facultés magiques sont des individus dangereux et redoutés. En effet, le sorcier en herbe laisse parfois dans son sillage démons et catastrophes. Pour faire face à cette menace, l'Empire envoie ces individus dans l'un des huit ordres de magie. Durant leur apprentissage, les jeunes sorciers apprennent à manipuler la magie en toute sécurité et choisissent l'ordre qu'ils rejoindront définitivement. Certains apprentis sont voués à servir le sorcier qui a découvert leurs talents, mais d'autres partent à l'aventure pour gagner suffisamment d'argent et passer sous la tutelle des collèges de magie. Les elfes sont doués de talents magiques innés et se passent des services des institutions humaines puisqu'ils apprennent auprès de leurs propres maîtres.`,
    skills: {
      mandatory: [
        `Connaissances académiques (magie)`,
        `Focalisation`,
        `Fouille`,
        `Langage mystique (magick)`,
        `Langue (classique)`,
        `Lire/écrire`,
        `Perception`,
        `Sens de la magie`,
      ],
    },
    talents: {
      mandatory: [`Magie commune (occulte)`],
      choice: [
        {
          options: [`Harmonie aethyrique`, `Mains agiles`],
          quantity: 1,
        },
        {
          options: [`Intelligent`, `Résistance accrue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Bâton`, `Sac à dos`, `Livre imprimé`],
    },
    access: [`Erudit`, `Etudiant`, `Scribe`, `Sorcier de village`],
    advanced: [`Compagnon sorcier`, `Erudit`, `Scribe`],
    stats: {
      Ag: 5,
      Int: 10,
      FM: 15,
      Soc: 5,
      B: 2,
      Mag: 1,
    },
    races: {
      names: [`humain`, `elfe`],
    },
  },
  {
    name: `Artisan`,
    description: `Les Artisans sont des ouvriers expérimentés. Bien qu'ils se réunissent habituellement en ville, on en trouve également dans tous les villages de l'Empire. Ils créent des biens que les marchands revendent ensuite et jouent un rôle important dans l'économie de l'Empire. Les Artisans incluent apothicaires, arquebusiers, brasseurs, calligraphes, camelots, cartographes, charpentiers, charpentiers navals, cristalliers, fabricant d'arcs, fabricants d'armes, fabricants d'armures, forgerons, herboristes, maçons et tailleurs. Chaque métier dispose de sa guilde, mais toutes les guildes ne disposent pas de chapitres à l'échelon local.`,
    skills: {
      mandatory: [
        `Conduite d'attelages`,
        `Evaluation`,
        `Langage secret (langage de guilde)`,
        `Lire/écrire`,
        `Marchandage`,
        `Perception`,
        `Métier (deux au choix)`,
      ],
      choice: [
        {
          options: [`Commérage`, `Soin des animaux`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Dur en affaire`, `Intelligent`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Armure légère (gilet de cuir)`, `1d10 co`],
    },
    access: [`Bourgeois`, `Chirurgien barbier`, `Garde`, `Mercanti`, `Paysan`],
    advanced: [
      `Emissaire elfe`,
      `Fanatique`,
      `Ingénieur`,
      `Maître-artisan`,
      `Marchand`,
      `Milicien`,
    ],
    stats: {
      F: 5,
      E: 5,
      Ag: 10,
      Int: 5,
      FM: 10,
      B: 2,
    },
  },
  {
    name: `Bateleur`,
    description: `Acrobates, lanceurs de couteaux, hypnotiseurs, danseurs et ventriloques, l'Empire est plein de Bateleurs. Certains entreprennent cette carrière pour le simple frisson que procure la clameur d'une foule, mais d'autres le font pour vivre. Nombre de Bateleurs souhaitent avant tout échapper à une morne vie de villageois impérial. Ces individus voyagent beaucoup, parfois seuls mais généralement au sein d'une troupe qui se produit dans les communautés qui se situent sur son chemin. Les troupes les plus chanceuses ne cessent jamais de travailler et passent parfois plusieurs mois d'affilée dans la même ville. Les autres vivotent bon gré mal gré et sont en quête permanente d'un public susceptible de reconnaître leur talent. Les meilleurs Bateleurs sont parrainés par des nobles et gagnent de coquettes sommes quand ils donnent une représentation devant l'élite de la société.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Connaissances générales (Empire)`,
        `Expression artistique (deux au choix)`,
        `Perception`,
        `Langue (reikspiel)`,
      ],
      choice: [
        {
          options: [`Commérage`, `Evaluation`],
          quantity: 1,
        },
        {
          options: [`Natation`, `Soins des animaux`],
          quantity: 1,
        },
        {
          options: [
            `Baratin`,
            `Emprise sur les animaux`,
            `Dressage`,
            `Equitation`,
            `Escalade`,
            `Escamotage`,
            `Hypnotisme`,
            `Ventriloquie`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [
            `Acrobatie équestre`,
            `Adresse au tir`,
            `Eloquence`,
            `Force accrue`,
            `Imitation`,
            `Lutte`,
            `Maîtrise (armes de jet)`,
            `Réflexes éclair`,
            `Sur ses gardes`,
          ],
          quantity: 2,
        },
      ],
    },
    dotation: {
      mandatory: [`Armure légère (gilet de cuir)`],
      choice: [
        {
          options: [
            `Instrument de musique (un au choix)`,
            `outils d'artisan (exression artistique)`,
            `3 dagues de jet`,
            `2 haches de jet`,
          ],
          quantity: 1,
        },
        {
          options: [`costume de scène`, `vêtements confortables`],
          quantity: 1,
        },
      ],
    },
    access: [`Escroc`, `Héraut`, `Vagabond`, `Voleur`],
    advanced: [`Charlatan`, `Escroc`, `Ménestrel`, `Vagabond`, `Voleur`],
    stats: {
      CC: 5,
      CT: 10,
      Ag: 10,
      FM: 5,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Batelier`,
    description: `Les cours d'eau de l'Empire sont des voies de communication et de commerce de première importance. Ils assurent un transport rapide et relient la plupart des grandes villes du royaume. Les Bateliers sillonnent ces voies navigables encombrées, transbahutant passagers et biens au travers de l'Empire et parfois même jusqu'à Kislev. Bien que les rivières soient plus sûres que certaines routes qui traversent d'épaisses forêts, elles ne sont pas sans dangers. De nombreux cours d'eau passent par des régions sauvages et inexplorées. Le Batelier se doit donc d'être toujours prêt à protéger sa marchandise des pillards et autres brigands.Ainsi, les Bateliers les plus expérimentés sont aussi coriaces qu'ingénieux. Du reste, ce sont de bons combattants et d'excellents navigateurs.`,
    skills: {
      mandatory: [
        `Canotage`,
        `Natation`,
        `Navigation`,
        `Orientation`,
        `Perception`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Commérage`, `Résistance à l'alcool`],
          quantity: 1,
        },
        {
          options: [
            `Connaissances générales (Empire)`,
            `Connaissances générales (Kislev)`,
          ],
          quantity: 1,
        },
        {
          options: [
            `Langage secret (langage des rôdeurs)`,
            `Langue (kislévien)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Grand voyageur`, `Sens de l'orientation`],
    },
    dotation: {
      mandatory: [`Armure légère (veste de cuir)`, `bâteau à rames`],
    },
    access: [`Contrebandier`, `Passeur`],
    advanced: [`Contrebandier`, `Marin`, `Matelot`, `Navigateur`, `Pêcheur`],
    stats: {
      CC: 10,
      CT: 5,
      F: 5,
      E: 5,
      Ag: 10,
      Int: 5,
      B: 2,
    },
  },
  {
    name: `Berserk norse`,
    description: `La Norsca est une contrée nordique austère et remplie de monstres cruels comme les trolls des glaces et les enfants du Chaos, mais elle accouche également de solides guerriers. Les Berserks norses constituent une organisation de combattants redoutés, et ce à juste titre. Pour montrer leur courage, ils combattent sans armure. Leur comportement donne tout lieu de croire qu'ils sont enragés. Les sagas content nombre de leurs exploits et ils occupent une place importante dans les récits des soldats impériaux qui ont eu l'occasion de les affronter. Certains Berserks se rendent dans l'Empire parce qu'on les a exilés ou tout simplement parce qu'ils souhaitent découvrir le monde. Il est rare qu'ils restent longtemps au même endroit, car les gardes ont tendance à chasser ces lunatiques enragés. Les Berserks sont cependant des mercenaires prisés en raison de leur rareté et de leur efficacité.`,
    skills: {
      mandatory: [
        `Connaissance générales (Norsca)`,
        `Expression artistique (conteur)`,
        `Intimidation`,
        `Natation`,
        // `Langue (norse)`,
        `Résistance à l'alcool`,
      ],
    },
    talents: {
      mandatory: [
        `Frénésie`,
        `Maîtrise (armes lourdes)`,
        `Menaçant`,
        `Sur ses gardes`,
      ],
    },
    dotation: {
      mandatory: [`Armure légère (gilet de cuir)`, `bouteille d'alcool fort`],
      choice: [
        {
          options: [`armes à deux mains`, `bouclier`],
          quantity: 1,
        },
      ],
    },
    access: [`Aucun`],
    advanced: [`Gladiateur`, `Marin`, `Mercenaire`, `Sergent`, `Vétéran`],
    stats: {
      CC: 15,
      F: 15,
      E: 10,
      FM: 10,
      B: 2,
    },
    races: {
      name: `humain`,
      origin: `norse`,
    },
  },
  {
    name: `Bourgeois`,
    description: `Les grandes villes de l'Empire prenant de plus en plus d'importance, une nouvelle classe de citoyen, le Bourgeois, a fait son apparition. Les Bourgeois et leurs ancêtres se sont extraits de la masse paysanne et se sont installés en ville. Aujourd'hui, ils constituent un véritable ciment social qui assure la cohésion de la société urbaine. Ce sont des propriétaires d'échoppe, de petits marchands, des négociants et autres fonctionnaires locaux. Ils ne s'attirent pas autant de mépris que la paysannerie, mais n'occupent pas non plus la même place que la noblesse.Vivant au sein de quartiers bondés, ils sont généralement les premières victimes des épidémies, mais ils préféreraient mourir plutôt que de travailler la terre à la campagne. Selon eux, la vie citadine engendre davantage d'opportunités que de problèmes.`,
    skills: {
      mandatory: [
        `Conduite d'attelages`,
        `Evaluation`,
        `Fouille`,
        `Langue (reikspiel)`,
        `Marchandage`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Commérages`, `Lire/écrire`],
          quantity: 1,
        },
        {
          options: [
            `Connaissances générales (Empire)`,
            `Résistance à l'alcool`,
          ],
          quantity: 1,
        },
        {
          options: [
            `Langue (bretonnien)`,
            `Langue (kislévien)`,
            `Langue (tiléen)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Dur en affaires`],
      choice: [
        {
          options: [`Intelligent`, `Sociable`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`bouclier`, `lanterne`, `vêtements confortables`],
    },
    access: [`Aubergiste`, `Serviteur`],
    advanced: [
      `Agriculteur`,
      `Artisan`,
      `Aubergiste`,
      `Marchand`,
      `Milicien`,
      `Receleur`,
      `Valet`,
    ],
    stats: {
      CC: 5,
      Ag: 5,
      Int: 10,
      FM: 5,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Bûcheron`,
    description: `Les Bûcherons vivent dans les vastes forêts de l'Empire et abattent des arbres destinés à la construction. Les plus chanceux travaillent dans de grands domaines pour des familles de la noblesse, mais les plus courageux vivent en marge de la civilisation et contribuent à l'élargissement des régions colonisées. Ces derniers ont affaire aux dangers de la forêt, qu'il s'agisse de pièges, de bandits, d'animaux sauvages ou d'hommes-bêtes. Ils gardent toujours leur hache à portée de main et pas seulement pour couper du bois. Les Bûcherons se heurtent parfois aux elfes car ces derniers n'apprécient guère que l'on s'attaque à leurs précieuses forêts.`,
    skills: {
      mandatory: [
        `Alphabet secret (rôdeur)`,
        `Déplacement silencieux`,
        `Dissimulation`,
        `Langage secret (langage des rôdeurs)`,
        `Perception`,
        `Escalade`,
      ],
      choice: [
        {
          options: [`Braconnage`, `Pistage`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Camouflage rural`, `Maîtrise (armes lourdes)`],
      choice: [
        {
          options: [`Course à pied`, `Résistance accrue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arme à deux mains (hache à deux mains)`,
        `Armure légère (veste de cuir)`,
        `Nécessaire antipoison`,
      ],
    },
    access: [`Charbonnier`, `Vagabond`],
    advanced: [`Chasseur`, `Hors-la-loi`, `Milicien`, `Pisteur`, `Vagabond`],
    stats: {
      CC: 10,
      F: 10,
      Ag: 5,
      FM: 10,
      B: 3,
    },
  },
  {
    name: `Charbonnier`,
    description: `On trouve des Charbonniers dans tous les villages de l'Empire. Ils brûlent du bois pour en faire du charbon, combustible des plus vitaux pendant les mois d'hiver. Leur travail étant à la fois salissant et dangereux, ils travaillent à l'extérieur des villages, privilégiant l'orée des forêts pour y trouver leur outil de travail. Cependant, cet isolement en fait un travail risqué car le Charbonnier est une proie facile pour les créatures maléfiques des forêts. En conséquence, les Charbonniers disposent toujours d'une arme sous la main, même s'il s'agit d'un simple gourdin.`,
    skills: {
      mandatory: [
        `Alphabet secret (rôdeur)`,
        `Escalade`,
        `Fouille`,
        `Marchandage`,
        `Perception`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Commérage`, `Conduite d'attelages`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Empire)`, `Dissimulation`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Fuite`],
      choice: [
        {
          options: [`Force accrue`, `Intelligent`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`3 torches`, `boîte d'amadou`, `arme à une main (hachette)`],
    },
    access: [`Chasseur`, `Mercanti`, `Mineur`, `Paysan`],
    advanced: [`Bûcheron`, `Chasseur`, `Mineur`, `Pisteur`, `Vagabond`],
    stats: {
      CC: 5,
      F: 5,
      E: 5,
      Ag: 5,
      Int: 5,
      FM: 5,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Chasseur`,
    description: `Bien que l'Empire soit loin des tribus qui le fondèrent il y a 2 500 ans, certaines choses n'ont pas vraiment changé depuis. Si les paysans cultivent une partie des terres, de vastes régions impériales sont encore couvertes de forêts ou tout simplement hostiles à l'agriculture. C'est sur ces terres que les Chasseurs et autres trappeurs prospèrent. Qu'il s'agisse de pièges ou de tirs bien placés, ils utilisent les mêmes techniques que leurs ancêtres pour capturer le gibier. Il est nécessaire de disposer d'un certain talent pour traquer un animal sauvage tout en évitant les sinistres créatures des bois. Vêtu de peaux et de fourrures, le Chasseur passe parfois pour un sauvage auprès des citadins, mais il se soucie rarement de ce qu'on pense de lui.`,
    skills: {
      mandatory: [
        `Alphabet secret (rôdeur)`,
        `Dissimulation`,
        `Perception`,
        `Pistage`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Braconnage`, `Déplacement silencieux`],
          quantity: 1,
        },
        {
          options: [`Fouille`, `Natation`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Rechargement rapide`],
      choice: [
        {
          options: [`Camouflage rural`, `Tireur d'élite`],
          quantity: 1,
        },
        {
          options: [`Dur à cuire`, `Maîtrise (arcs longs)`],
          quantity: 1,
        },
        {
          options: [`Réflexes éclair`, `Résistance accrue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arc long et 10 flèches`,
        `2 collets`,
        `nécessaire antipoison`,
      ],
    },
    access: [`Bûcheron`, `Charbonnier`, `Gardien tribal`],
    advanced: [
      `Charbonnier`,
      `Chasseur de primes`,
      `Franc-archer`,
      `Gardien tribal`,
      `Mineur`,
      `Pisteur`,
      `Sentinelle halfling`,
      `Soldat`,
    ],
    stats: {
      CT: 15,
      E: 5,
      Ag: 10,
      Int: 5,
      B: 3,
    },
  },
  {
    name: `Chasseur de primes`,
    description: `Les Chasseurs de primes gagnent leur vie en traquant les criminels, les bandits et autres fugitifs pour les livrer à la justice. Un Chasseur de primes travaillant seul arrive parfois à se frayer un chemin jusqu'à des endroits inaccessibles pour des unités militaires. Cela explique que ces hommes font de bons auxiliaires pour le guet ou la milice. Dirigeants locaux, guildes et autres conseils se chargent de régler leurs primes. Il leur arrive de trouver leurs employés des plus déplaisants, mais ceux-ci n'en sont pas moins efficaces contre les brigands, les troupes de gobelins et autres menaces. Les Chasseurs de primes sont des tueurs professionnels qui font peu de cas de la vie d'autrui. Usant de leurs formidables talents pour traquer et éliminer leur gibier, ils se montrent généralement impitoyables. Les plus démuni...`,
    skills: {
      mandatory: [
        `Déplacement silencieux`,
        `Filature`,
        `Fouille`,
        `Intimidation`,
        `Perception`,
        `Pistage`,
        `Survie`,
      ],
    },
    talents: {
      mandatory: [`Camouflage rural`, `Maîtrise (armes paralysantes)`],
      choice: [
        {
          options: [`Adresse au tir`, `Coups puissants`],
          quantity: 1,
        },
        {
          options: [`Tireur d'élite`, `Coups assommants`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arbalète et 10 carreaux`,
        `filet`,
        `armure légère (gilet de cuir et calotte de cuir)`,
        `menottes`,
        `10 mètres de corde`,
      ],
    },
    access: [
      `Chasseur`,
      `Garde du corps`,
      `Gladiateur`,
      `Kossar kislevite`,
      `Mercenaire`,
      `Sentinelle halfling`,
    ],
    advanced: [
      `Chasseur de vampires`,
      `Franc-archer`,
      `Mercenaire`,
      `Pisteur`,
      `Spadassin`,
    ],
    stats: {
      CC: 5,
      CT: 10,
      F: 5,
      Ag: 10,
      FM: 5,
      B: 2,
    },
  },
  {
    name: `Chiffonnier`,
    description: `Les Chiffonniers sont des charognards qui vivent grâce aux déchets d'autrui. Leur carriole les entraîne dans des villes et des villages où ils ramassent les ordures, les haillons et autres vieilleries dont ils disposent contre quelques pièces ou une simple babiole. Ils sont bien évidemment répandus dans les villes de l'Empire, qui génèrent de grandes quantités de déchets. Vu le nombre de biens qui leur passent entre les mains, les Chiffonniers sont également de petits commerçants. En effet, les ordures d'un riche bourgeois constituent parfois un véritable trésor pour un malheureux paysan.`,
    skills: {
      mandatory: [
        `Conduite d'attelages`,
        `Connaissances générales (Empire)`,
        `Évaluation`,
        `Fouille`,
        `Marchandage`,
        `Perception`,
        `Soins des animaux`,
      ],
      choice: [
        {
          options: [`Charisme`, `Commérage`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Code de la rue`, `Sang-froid`],
          quantity: 1,
        },
        {
          options: [`Dur à cuire`, `Résistance aux maladies`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Carriole`, `3 besaces`],
    },
    access: [`Paysan`, `Ratier`, `Vagabond`],
    advanced: [
      `Contrebandier`,
      `Mercanti`,
      `Monte-en-l'air`,
      `Receleur`,
      `Trafiquant de cadavres`,
    ],
    stats: {
      CC: 5,
      F: 5,
      E: 10,
      Ag: 5,
      FM: 5,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Chirurgien barbier`,
    description: `Les Chirurgiens barbiers offrent des soins efficaces, mais parfois douloureux, aux braves gens de l'Empire. Ils ne sont pas aussi savants que les médecins, ce qui explique que ces derniers disposent d'une guilde distincte, mais ils en connaissent un rayon en matière d'anatomie. Bien qu'ils taillent barbes et cheveux, ils sont avant tout connus pour les saignées, les opérations chirurgicales et les amputations qu'ils pratiquent à tour de bras. Les Chirurgiens barbiers se dotent d'un éventail très large d'outils, parmi lesquels de petits scalpels et de redoutables scies. Ils disposent cependant d'instruments encore plus menaçants pour leur passe-temps le plus craint: la dentisterie. La plupart des embarcations de grande taille abritent un tel personnage au sein de leur équipage. On les trouve tout aussi fréquemment dans les villes.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Lire/écrire`,
        `Marchandage`,
        `Métier (apothicaire)`,
        `Perception`,
        `Soins`,
      ],
      choice: [
        {
          options: [`Conduite d'attelages`, `Natation`],
          quantity: 1,
        },
        {
          options: [
            `Langue (bretonnien)`,
            `Langue (reikspiel)`,
            `Langue (tiléen)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Chirurgie`],
      choice: [
        {
          options: [`Intelligent`, `Résistance aux maladies`],
          quantity: 1,
        },
        {
          options: [`Sociable`, `Résistance accrue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Outils d'artisan (chirurgien barbier)`],
    },
    access: [`Étudiant`, `Initié`],
    advanced: [
      `Artisan`,
      `Bourreau`,
      `Médecin`,
      `Trafiquant de cadavres`,
      `Vagabond`,
    ],
    stats: {
      CC: 5,
      Ag: 10,
      Int: 10,
      FM: 10,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Cocher`,
    description: `Si l'Empire est une puissante nation, ses terres sont loin d'être sûres. En effet, de vastes régions ne sont pas cultivées et n'ont jamais été pacifiées. Un système de routes des plus précaires relie les villages et les villes, ce qui permet aux Cochers de gagner leur vie en travaillant pour l'une des nombreuses compagnies de diligence impériales. Souvent, les routes sont en mauvais état ou sous la menace de gobelins, d'hommesbêtes et de brigands. Les Cochers n'en risquent cependant pas moins leur vie pour conduire passagers et marchandises à destination en empruntant les routes impériales. Chaque jour qui passe est une course visant à atteindre le village ou le relais suivant avant la tombée de la nuit. En effet, nul ne souhaite passer la nuit dehors,surtout quand la lune du Chaos fait son apparition dans le ciel`,
    skills: {
      mandatory: [
        `Alphabet secret (rôdeur)`,
        `Conduite d'attelages`,
        `Orientation`,
        `Perception`,
        `Soins des animaux`,
      ],
      choice: [
        {
          options: [`Commérage`, `Marchandage`],
          quantity: 1,
        },
        {
          options: [`Equitation`, `Soins`],
          quantity: 1,
        },
        {
          options: [
            `Langue (bretonnien)`,
            `Langue (kislévien)`,
            `Langue (tiléen)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Maîtrise (armes à feu)`],
      choice: [
        {
          options: [`Grand voyageur`, `Sur ses gardes`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Tromblon avec poudre et munitions pour 10 tirs`,
        `Armure moyenne (gilet de mailles et veste de cuir)`,
        `Instrument de musique (corne de cocher)`,
      ],
    },
    access: [`Eclaireur`, `Messager`],
    advanced: [
      `Bandit de grand chemin`,
      `Collecteur de taxes`,
      `Contrebandier`,
      `Hors-la-loi`,
      `Passeur`,
      `Patrouilleur`,
      `Pisteur`,
    ],
    stats: {
      CC: 5,
      CT: 10,
      Ag: 10,
      FM: 5,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Collecteur de taxes`,
    description: `La collecte d'argent pour le compte du gouvernement est un travail ingrat, mais le faire en milieu sauvage est synonyme de peine de mort. Les Collecteurs de taxes vivent dans de petites maisons isolées,sur le bord des routes, et encaissent l'argent des voyageurs. L'argent perçu est alloué à l'entretien des routes, mais cela n'empêche pas les voyageurs de protester, de frapper ou de tuer les Collecteurs de taxes qui tentent simplement de faire leur travail. Comme si cela ne suffisait pas, leurs maisons font des cibles de choix pour les bandits. La vie de Collecteur de taxes présente tellement de dangers que peu d'individus s'attardent à ce poste malgré le salaire élevé qu'il propose`,
    skills: {
      mandatory: [
        `Esquive`,
        `Evaluation`,
        `Fouille`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [
            `Langue (bretonnien)`,
            `Langue (kislévien)`,
            `Langue (tiléen)`,
          ],
          quantity: 1,
        },
        {
          options: [`Commérage`, `Marchandage`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Réflexes éclair`, `Tireur d'élite`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Coffre`,
        `Arbalète et 10 carreaux`,
        `Armure moyenne (gilet de mailles et gilet de cuir)`,
        `Bouclier`,
        `1d10 co`,
      ],
    },
    access: [`Cocher`, `Patrouilleur`, `Régisseur`],
    advanced: [
      `Bandit de grand chemin`,
      `Hors-la-loi`,
      `Passeur`,
      `Politicien`,
      `Sentinelle halfling`,
      `Soldat`,
      `Voleur`,
    ],
    stats: {
      CC: 10,
      CT: 5,
      F: 5,
      E: 10,
      Ag: 5,
      FM: 10,
      B: 2,
    },
  },
  {
    name: `Combattant des tunnels`,
    description: `Au fil des siècles, les incursions du Chaos et des peaux-vertes ont balayé de nombreuses forteresses naines des Montagnes du Bord du Monde. Pour protéger leurs dernières cités fortifiées, les nains ont formé des soldats d'élite spécialisés dans le combat en souterrain. Ces hommes, les Combattants des tunnels, sont de vaillants guerriers qui cherchent à juguler l'avancée du mal et à protéger leur peuple. Bien que la plupart des Combattants des tunnels soient nains, des membres d'autres races se joignent parfois à leurs rangs en échange d'or. De jeunes nains de l'Empire entreprennent souvent cette carrière afin de prouver leur courage et de montrer leur solidarité vis-à-vis de leurs cousins des montagnes.`,
    skills: {
      mandatory: [
        `Escalade`,
        `Esquive`,
        `Filature`,
        `Orientation`,
        `Perception`,
      ],
    },
    talents: {
      mandatory: [
        `Coups assommants`,
        `Coups précis`,
        `Coups puissants`,
        `Sens de l'orientation`,
      ],
      choice: [
        {
          options: [`Acuité auditive`, `Sang-froid`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arbalète et 10 carreaux`,
        `Armure moyenne (manteau de mailles, veste de cuir et jambières de cuir)`,
        `Bouclier`,
        `Grappin, 10 mètres de corde,`,
        `Outre`,
      ],
    },
    access: [
      `Contrebandier`,
      `Kossar kislévite`,
      `Mercenaire`,
      `Mineur`,
      `Pilleur de tombes`,
      `Porterune`,
      `Ratier`,
    ],
    advanced: [
      `Contrebandier`,
      `Gladiateur`,
      `Pilleur de tombes`,
      `Porterune`,
      `Sergent`,
      `Vétéran`,
    ],
    stats: {
      CC: 10,
      F: 5,
      E: 5,
      Ag: 10,
      FM: 5,
      A: 1,
      B: 2,
    },
    races: {
      names: [`nain`],
    }
  },
  {
    name: `Contrebandier`,
    description: `La plupart des routes et des mers du Vieux Monde sont soumises à des droits et autres impôts. Les collecteurs de taxes impériaux, les agents de recouvrement locaux, les petits seigneurs et quelques gros bras fixent des frais sur les mouvements de marchandises. Les taxes légales sont déjà élevées, mais de nombreux pirates et chefs de bande exigent une part du gâteau en échange d'un passage sans encombres. Dans les ports de grande taille comme Marienburg, presque tout ce qui entre ou sort est taxé. Étant donné la situation, la contrebande est une activité lucrative. Bien qu'elle soit illégale, la plupart des citoyens de l'Empire n'hésitent pas à y recourir et à rogner sur les taxes. À leurs yeux, les percepteurs et les bureaucrates sont les vrais voleurs.`,
    skills: {
      mandatory: [
        `Canotage`,
        `Conduite d'attelages`,
        `Déplacement silencieux`,
        `Évaluation`,
        `Fouille`,
        `Marchandage`,
        `Natation`,
        `Perception`,
      ],
      choice: [
        {
          options: [
            `Alphabet secret (voleur)`,
            `Langue (bretonnien)`,
            `Langue (kislévien)`,
          ],
          quantity: 1,
        },
        {
          options: [`Alphabet secret (voleur)`, `Commérage`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Code de la rue`, `Dur en affaires`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Armure légère (veste de cuir)`, `2 torches`],
      choice: [
        {
          options: [`Mule et carriole`, `Bâteau à rames`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Aubergiste`,
      `Batelier`,
      `Chiffonnier`,
      `Cocher`,
      `Combattant des tunnels`,
      `Ingénieur`,
      `Marin`,
      `Matelot`,
      `Mercanti`,
      `Mineur`,
      `Passeur`,
      `Régisseur`,
    ],
    advanced: [
      `Batelier`,
      `Charlatan`,
      `Combattant des tunnels`,
      `Marin`,
      `Passeur`,
      `Receleur`,
      `Voleur`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      Ag: 10,
      Int: 10,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Coupe-jarret`,
    description: `Dans les milieux criminels, force et brutalité sont des vertus appréciées et aucune profession ne les illustre mieux que le Coupe-jarret. Quand il s'agit de récupérer de l'argent, de faire taire un agitateur ou d'empêcher des rivaux d'aller trop loin, on fait appel au Coupe-jarret. Quelques coups de bâton suffisent généralement à faire passer le message, mais les cas les plus sensibles ont droit à la totale. Dans ce cas, mieux vaut prendre la poudre d'escampette, d'autant que les cimetières sont pleins de ceux qui pensaient s'en sortir grâce à leur jugeote.Toutes les guildes de voleurs et les organisations criminelles abritent des Coupe-jarrets.`,
    skills: {
      mandatory: [
        `Esquive`,
        `Intimidation`,
        `Jeu`,
        `Langage secret (langage des voleurs)`,
        `Résistance à l'alcool`,
      ],
    },
    talents: {
      mandatory: [`Coups assomants`, `Désarmement`],
      choice: [
        {
          options: [`Coups précis`, `Lutte`],
          quantity: 1,
        },
        {
          options: [`Réflexes éclair`, `Sang-froid`],
          quantity: 1,
        },
        {
          options: [`Résistance aux poisons`, `Sur ses gardes`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Coups-de-poing`,
        `Armure moyenne (gilet de mailles et gilet de cuir)`,
      ],
    },
    access: [`Matelot`, `Spadassin`],
    advanced: [
      `Bourreau`,
      `Garde du corps`,
      `Gladiateur`,
      `Mercenaire`,
      `Racketteur`,
    ],
    stats: {
      CC: 10,
      F: 5,
      E: 5,
      FM: 5,
      Soc: 5,
      A: 1,
      B: 2,
    },
  },
  {
    name: `Diestro estalien`,
    description: `Les Royaumes Estaliens se situent au sud-est de l'Empire, où la menace du Chaos semble lointaine. En effet, les Désolations du Chaos se dressent bien loin de cette contrée ensoleillée qui, contrairement à l'Empire et à Kislev, n'a jamais été confrontée aux hordes sanguinaires. Son peuple s'attache à d'autres activités, de la science à l'art du crime et de la vendetta en passant par l'érudition. Les Estaliens adorent croiser le fer. Du reste, les villes du pays abritent de nombreuses écoles d'escrime, chacune enseignant un style différent des autres. Nombre de ces styles découlent directement des enseignements de maître Figueroa, épéiste légendaire qui appliquait diverses théories scientifiques à son jeu, pour un résultat spectaculaire. Les disciples du style Figueroa, connus sous le nom de Diestro, se battent en duel à travers tout le pays. Certains, las de leur patrie, cherchent l'aventure ailleurs, plus particulièrement en Tilée et en Bretonnie. Les plus courageux se rendent dans le nord de l'Empire pour mesurer leur rapière à des adversaires de valeur, mais également pour voir à quoi ressemble une région située aux avant-postes de la lutte contre le Chaos.`,
    skills: {
      mandatory: [
        `Connaissances académiques (science)`,
        `Connaissances générales (Estalie)`,
        `Esquive`,
        `Langue (estalien)`,
        `Lire/écrire`,
      ],
    },
    talents: {
      mandatory: [`Coups puissants`, `Maîtrise (armes d'escrime)`, ``],
      choice: [
        {
          options: [`Combattant virevoltant`, `Réflexes éclair`],
          quantity: 1,
        },
        {
          options: [`Coups précis`, `Sur ses gardes`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Beaux atours`, `Parfum`, `Potion de soins`],
      choice: [
        {
          options: [`Fleuret`, `Rapière`],
          quantity: 1,
        },
      ],
    },
    access: [`aucun`],
    advanced: [
      `Bandit de grand chemin`,
      `Duelliste`,
      `Escroc`,
      `Garde du corps`,
      `Spadassin`,
    ],
    stats: {
      CC: 15,
      F: 5,
      E: 5,
      Ag: 10,
      Int: 5,
      A: 1,
      B: 2,
    },
  },
  {
    name: `Eclaireur`,
    description: `Les Éclaireurs sont habitués à évoluer en extérieur et effectuent des missions de reconnaissance pour l'armée, les caravanes et autres voyageurs. Constamment à l'affût d'embuscades et autres dangers, ce sont leurs yeux et leurs oreilles. Opérant en aval du groupe qu'ils accompagnent, ils doivent faire montre d'autonomie et de jugement. Il leur faut faire confiance à leur instinct et savoir prendre les bonnes décisions, d'autant qu'ils n'ont personne vers qui se tourner quand ils évoluent seuls dans une région sauvage. Les Éclaireurs travaillent dans leur région natale et tirent le meilleur parti de leurs connaissances. Certains font figure de pionniers et s'aventurent sur des terres inconnues ou hostiles. Ces Éclaireurs gagnent alors plus d'argent, mais leur espérance de vie s'en trouve réduite d'autant.`,
    skills: {
      mandatory: [
        `Déplacement silencieux`,
        `Equitation`,
        `Fouille`,
        `Orientation`,
        `Perception`,
        `Pistage`,
        `Soins des animaux`,
        `Survie`,
      ],
    },
    talents: {
      mandatory: [`Maîtrise (armes paralysantes)`, `Sens de l'orientation`],
      choice: [
        {
          options: [`Force accrue`, `Sang-froid`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Filet`,
        `Armure légère (veste de cuir)`,
        `Bouclier`,
        `10 mètres de corde`,
        `Cheval de selle avec selle et harnais`,
      ],
      choice: [
        {
          options: [`Arc et 10 flèches`, `Arbalète et 10 carreaux`],
          quantity: 1,
        },
        {
          options: [`Fouet`, `Lasso`],
          quantity: 1,
        },
      ],
    },
    access: [`Gardien tribal`, `Messager`, `Patrouilleur`, `Soldat`],
    advanced: [
      `Bandit de grand chemin`,
      `Cocher`,
      `Mercenaire`,
      `Patrouilleur`,
      `Pisteur`,
    ],
    stats: {
      CC: 5,
      CT: 10,
      Ag: 10,
      Int: 10,
      FM: 5,
      B: 2,
    },
  },
  {
    name: `Ecuyer`,
    description: `Les Écuyers sont des chevaliers en cours de formation. Souvent de noble extraction, ils assistent les chevaliers, à la ville comme au champ de bataille. Bien qu'ils ne soient parfois rien de plus que des domestiques,servant à manger et à boire à leur seigneur ou s'occupant de l'armure et du cheval de celuici, ce travail éreintant est censé les endurcir et les préparer à la chevalerie. En retour, leurs seigneurs doivent leur apprendre à se battre, mais certains semblent faire montre de laxisme en la matière. Les enfants chéris des nobles entreprennent cette carrière pendant quelques mois au pire, mais les moins fortunés s'y embourbent pendant des années avant de pouvoir faire leurs preuves.`,
    skills: {
      mandatory: [`Dressage`, `Equitation`, `Esquive`, `Soins des animaux`],
      choice: [
        {
          options: [`Charisme`, `Commérage`],
          quantity: 1,
        },
        {
          options: [
            `Connaissances académiques (généalogie/héraldique)`,
            `Connaissances générales (Bretonnie)`,
          ],
          quantity: 1,
        },
        {
          options: [`Langue (bretonnien)`, `Langue (reikspiel)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Coups puissants`,
        `Etiquette`,
        `Maîtrise (armes de cavalerie)`,
      ],
    },
    dotation: {
      mandatory: [
        `Demi-lance`,
        `Armure moyenne (gilet de mailles, cagoule de mailles et veste de cuir)`,
        `Bouclier`,
        `Cheval de selle avec selle et harnais`,
      ],
    },
    access: [`Héraut`, `Noble`, `Valet`],
    advanced: [`Chevalier`, `Hors-la-loi`, `Noble`, `Sergent`, `Vétéran`],
    stats: {
      CC: 10,
      CT: 5,
      F: 5,
      E: 5,
      Ag: 5,
      Soc: 5,
      A: 1,
      B: 2,
    },
  },
  {
    name: `Emissaire elfe`,
    description: `Les doyens des grandes familles marchandes elfes sont à des lieues des affaires qui agitent l'Empire au quotidien. À leurs yeux, les humains ont une espérance de vie si courte qu'il leur est difficile de rester au courant des orientations politiques du Vieux Monde. Quand il leur faut réactualiser leurs informations, ils ont recours aux services d'Émissaires. Ces jeunes elfes constituent en quelque sorte la façade des maisons marchandes. Ils sont chargés de négocier les contrats, de conclure les affaires et de maintenir la paix avec les humains des grands comptoirs commerciaux comme Altdorf, Nuln et Marienburg. Cependant, la patience des elfes a ses limites et beaucoup d'Émissaires finissent par quitter leur famille pour mener une vie d'aventurier.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Commérage`,
        `Evaluation`,
        `Langage secret (langage de guilde)`,
        `Lire/écrire`,
        `Marchandage`,
        `Métier (marchand)`,
        `Natation`,
        `Perception`,
      ],
      choice: [
        {
          options: [
            `Connaissances générales (Empire)`,
            `Connaissances générales (Pays Perdu)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Dur en affaires`, `Grand voyageur`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `2 vêtements confortables`,
        `Accessoires de calligraphie`,
      ],
    },
    access: [`Artisan`, `Etudiant`],
    advanced: [
      `Charlatan`,
      `Escroc`,
      `Etudiant`,
      `Marchand`,
      `Marin`,
      `Vagabond`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      Ag: 5,
      Int: 10,
      FM: 5,
      Soc: 10,
      B: 2,
    },
    races: {
      names: [`elfe`],
    }
  },
  {
    name: `Escroc`,
    description: `Si les Escrocs avaient un proverbe, ce serait le suivant: ne travaille pas honnêtement si tu peux l'éviter. Ces arnaqueurs à la langue bien pendue recourent à leur charisme et à leur chance pour se tailler une place dans le monde. Certains exercent le métier d'entremetteur, qui consiste à guider les clients dans les repaires du vice et de l'iniquité qu'abrite toute ville. Les autres sont des joueurs ou des conteurs professionnels.Tous les Escrocs préfèrent user de leur cervelle que de leur épée, ce qui explique qu'ils ont toujours une bonne histoire au bord des lèvres. Bien que les Escrocs élisent souvent domicile en ville, certains n'hésitent pas à voyager, tirant profit de machinations complexes avant de changer d'air. Les Escrocs les plus talentueux ne se font jamais prendre. Leurs mensonges sont tellement convaincants que même leurs victimes ne réalisent pas l'arnaque.`,
    skills: {
      mandatory: [
        `Baratin`,
        `Charisme`,
        `Evaluation`,
        `Langage (reikspiel)`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Alphabet secret (voleur)`, `Jeu`],
          quantity: 1,
        },
        {
          options: [`Commérage`, `Marchandage`],
          quantity: 1,
        },
        {
          options: [
            `Expression artistique (acteur)`,
            `Expression artistique (conteur)`,
          ],
          quantity: 1,
        },
        {
          options: [`Fouille`, `Langage secret (langage des voleurs)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Eloquence`],
      choice: [
        {
          options: [`Chance`, `Sixième sens`],
          quantity: 1,
        },
        {
          options: [`Code de la rue`, `Fuite`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`1d10 co`],
      choice: [
        {
          options: [`Beaux atours`, `Dés (os)`, `Paquet de cartes`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Agitateur`,
      `Assassin`,
      `Bateleur`,
      `Diestro estalien`,
      `Duelliste`,
      `Emissaire elfe`,
      `Marin`,
      `Noble`,
      `Valet`,
      `Voleur`,
    ],
    advanced: [
      `Bateleur`,
      `Charlatan`,
      `Démagogue`,
      `Hors-la-loi`,
      `Serviteur`,
      `Voleur`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      Ag: 10,
      Int: 5,
      FM: 5,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Etudiant`,
    description: `Les grandes villes de l'Empire abritent un certain nombre d'universités. À l'instar de l'école impériale des ingénieurs, la plupart sont financées par l'État. La première université de l'Empire fut fondée à Nuln, ville aujourd'hui encore réputée pour ses institutions pédagogiques (et, ironie du sort, pour l'école impériale d'artillerie). Les Étudiants de l'Empire ont le choix entre de nombreux cours, de l'histoire à l'anatomie en passant par la science. Évidemment, beaucoup préfèrent s'amuser avec leurs camarades dans les tavernes aux alentours de l'université et se font recaler en moins d'un an. Les Étudiants elfes ne se rendent pas aux universités impériales mais apprennent auprès de leurs propres maîtres. Les Étudiants halflings sont tolérés dans les universités en raison d'une obscure ordonnance impériale demandée par l'Ancien du Moot il y a bien longtemps de cela.`,
    skills: {
      mandatory: [
        `Connaissances académiques (une au choix)`,
        `Langue (classique)`,
        `Langage (reikspiel)`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Charisme`, `Résistance à l'alcool`],
          quantity: 1,
        },
        {
          options: [`Commérage`, `Connaissances académiques (une au choix)`],
          quantity: 1,
        },
        {
          options: [`Fouille`, `Soins`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Calcul mental`, `Grand voyageur`],
          quantity: 1,
        },
        {
          options: [`Etiquette`, `Linguistique`],
          quantity: 1,
        },
        {
          options: [`Intelligent`, `Sociable`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Deux livres scolaires correspondant aux compétences de Connaissances choisies`,
        `Accessoires de calligraphie`,
      ],
    },
    access: [
      `Emissaire elfe`,
      `Ménestrel`,
      `Noble`,
      `Pilleur de tombes`,
      `Valet`,
    ],
    advanced: [
      `Agitateur`,
      `Apprenti sorcier`,
      `Chirurgien barbier`,
      `Emissaire elfe`,
      `Érudit`,
      `Ingénieur`,
      `Initié`,
      `Médecin`,
    ],
    stats: {
      Ag: 10,
      Int: 10,
      FM: 5,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Fanatique`,
    description: `Les Fanatiques ont tout perdu. Peutêtre leur famille a-t-elle été massacrée par des hommes-bêtes, peut-être leur village a-t-il été rasé par des orques. Mais il est également possible que leur entreprise ait été anéantie par un marchand ou que leurs filles aient été enlevées par un noble envieux. Quel que soit le cas, ces hommes et ces femmes n'ont plus rien si ce n'est la religion. Ils ont trouvé le salut dans les sermons enflammés des prêtresguerriers de Sigmar ou d'Ulric.Aujourd'hui, ils parcourent l'Empire vêtus de guenilles, cherchant à punir les minions du mal et du Chaos. Ils souhaitent trouver la rédemption dans le sang, qu'il s'agisse du leur ou de celui de leurs ennemis. Ils n'ont pas l'entraînement de soldats, mais la flamme de la foi couve en eux et il s'agit assurément d'une arme puissante.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Connaissances académiques (théologie)`,
        `Connaissances générales (Empire)`,
        `Intimidation`,
        `Lire/écrire`,
      ],
    },
    talents: {
      mandatory: [`Éloquence`, `Maîtrise (fléaux)`],
      choice: [
        {
          options: [`Dur à cuire`, `Sociable`],
          quantity: 1,
        },
        {
          options: [`Force accrue`, `Sang-froid`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `Bouteille d'alcool fort de bonne qualité`,
      ],
      choice: [
        {
          options: [`Fléau d'armes`, `Morgenstern`],
          quantity: 1,
        },
      ],
    },
    access: [`Agitateur`, `Artisan`, `Champion de justice`, `Initié`, `Paysan`],
    advanced: [`Agitateur`, `Flagellant`, `Hors-la-loi`, `Initié`, `Moine`],
    stats: {
      CC: 10,
      F: 5,
      E: 10,
      FM: 10,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Garde`,
    description: `À l'origine, les villes étaient responsables du recrutement et de l'entraînement de leur guet, mais la corruption était telle que l'Empereur confia cette tâche à l'armée régulière. Aujourd'hui, certains régiments menant une vie de garnison font office de guet. Cela a eu pour effet de réduire sensiblement la corruption, mais l'armée elle-même n'est pas à l'abri de ce genre de tentation. Les Gardes sont responsables du maintien de l'ordre et ont le droit de procéder à des arrestations. Dans les petites villes, ils jouent également le rôle de soldats du feu. Pour certains soldats, le guet est une affectation temporaire. Pour d'autres, cela devient la carrière de toute une vie.`,
    skills: {
      mandatory: [
        `Commérage`,
        `Connaissances académiques (droit)`,
        `Esquive`,
        `Fouille`,
        `Intimidation`,
        `Perception`,
        `Pistage`,
      ],
    },
    talents: {
      mandatory: [`Coups assommants`, `Coups puissants`],
      choice: [
        {
          options: [`Combat de rue`, `Désarmement`],
          quantity: 1,
        },
        {
          options: [`Intelligent`, `Sang-froid`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `Lanterne et perche`,
        `Huile pour lampe`,
        `Uniforme`,
      ],
    },
    access: [`Geôlier`, `Soldat`],
    advanced: [`Artisan`, `Mercenaire`, `Racketteur`, `Sergent`, `Soldat`],
    stats: {
      CC: 10,
      CT: 5,
      F: 5,
      Ag: 5,
      Int: 10,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Garde du corps`,
    description: `Selon les habitants du Vieux Monde, les marchands d'Altdorf sont tellement malhonnêtes qu'il leur faut louer les services de Gardes du corps pour veiller sur leur vie et leurs intérêts. Bien évidemment, le Vieux Monde est une région dangereuse et les villes qu'il abrite ne font pas exception à la règle. En effet, il n'est pas rare de se faire poignarder dans les rues bondées de métropoles comme Nuln ou Middenheim. Les nantis ont donc recours aux services de Gardes du corps pour les protéger des voleurs et autres bandits. Si beaucoup ont tout l'air de canailles, d'autres arborent les couleurs du noble ou du marchand qui les emploie. Certaines compagnies de Gardes du corps ont pris une importance telle qu'il s'agit quasiment d'armées privées.`,
    skills: {
      mandatory: [`Esquive`, `Intimidation`, `Perception`, `Soins`],
    },
    talents: {
      mandatory: [
        `Combat de rue`,
        `Coups assommants`,
        `Maîtrise (armes de jet)`,
        `Maîtrise (armes de parade)`,
      ],
      choice: [
        {
          options: [`Désarmement`, `Sur ses gardes`],
          quantity: 1,
        },
        {
          options: [`Forece accrue`, `Résistance accrue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `Rondache`,
        `Coups-de-poing`,
      ],
      choice: [
        {
          options: [`2 haches de jet`, `2 dagues de jet`],
          quantity: 1,
        },
      ],
    },
    access: [`Coupe-jarret`, `Diestro estalien`, `Geôlier`, `Mercenaire`],
    advanced: [
      `Bourreau`,
      `Chasseur de primes`,
      `Geôlier`,
      `Mercenaire`,
      `Racketteur`,
      `Régisseur`,
      `Spadassin`,
    ],
    stats: {
      CC: 10,
      F: 5,
      E: 5,
      Ag: 5,
      A: 1,
      B: 3,
    },
  },
  {
    name: `Gardien tribal`,
    description: `Certains elfes vivent dans des clairières reculées, au sein de grandes forêts. Pendant que les forces du Chaos grandissaient dans le Vieux Monde, les terres des elfes n'ont fait que décliner. De fait, il ne reste plus beaucoup de communautés elfes au sein de l'Empire, la plus grande étant celle de Laurelorn. Sous les branches de la forêt des elfes se joue une bataille de l'ombre contre les hommes-bêtes et autres créatures nées de la corruption. De petites unités de combattants, les Gardiens tribaux,se portent à la rencontre de l'ennemi. Ces soldats sont issus de familles plus ou moins proches et combattant sous la même bannière de clan. Ce sont des archers expérimentés qui protègent les tribus elfes des créatures de la forêt. Dans cette quête visant à empêcher la disparition des derniers elfes de l'Empire, chaque arc bandé est une lueur d'espoir.`,
    skills: {
      mandatory: [
        `Déplacement silencieux`,
        `Dissimulation`,
        `Escalade`,
        `Esquive`,
        `Perception`,
        `Pistage`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Fouille`, `Soins`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Camouflage rural`, `Tireur d'élite`],
          quantity: 1,
        },
        {
          options: [`Guerrier né`, `Rechargement rapide`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Armure légère (veste de cuir)`, `Arc elfique et 10 flèches`],
    },
    access: [`Chasseur`, `Messager`],
    advanced: [`Chasseur`, `Eclaireur`, `Pisteur`, `Vagabond`, `Vétéran`],
    stats: {
      CC: 5,
      CT: 5,
      Ag: 10,
      Int: 10,
      FM: 5,
      B: 2,
    },
    races: {
      names: [`elfe`],
    }
  },
  {
    name: `Geôlier`,
    description: `L'Empire est un état de droit, ce qui signifie qu'il abrite de nombreuses prisons. Malgré les efforts que déploie le clergé de Verena, la déesse de la justice, des innocents ont autant de chance de finir au cachot que les criminels. En effet,selon la loi, mieux vaut faire montre de sévérité que de laxisme. Les geôles impériales sont des cachots nauséabonds où règne en permanence une odeur infecte d'excréments et de sueur rance. Usant de brutalité et d'humiliation, les Geôliers maintiennent l'ordre sur leurs terres. Généralement, ils sont dépourvus de tout sens de la justice et de la miséricorde. En outre, ils semblent totalement hermétiques aux supplications mais n'ont rien contre un bon pot-devin. Les pires sont de véritables sadiques qui exultent à la simple pensée du pouvoir qu'ils exercent sur leurs détenus.`,
    skills: {
      mandatory: [
        `Commandement`,
        `Esquive`,
        `Fouille`,
        `Intimidation`,
        `Perception`,
        `Résistance à l'alcool`,
      ],
      choice: [
        {
          options: [`Escamotage`, `Soins`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [
        `Lutte`,
        `Maîtrise (armes paralysantes)`,
        `Résistance aux maladies`,
        `Résistance aux poisons`,
      ],
    },
    dotation: {
      mandatory: [`Bouteille de vin de table`, `Chope`],
      choice: [
        {
          options: [`Bolas`, `Lasso`, `Filet`],
          quantity: 1,
        },
      ],
    },
    access: [`Garde du corps`, `Ratier`],
    advanced: [`Bourreau`, `Garde`, `Garde du corps`, `Ratier`, `Régisseur`],
    stats: {
      CC: 10,
      F: 10,
      E: 10,
      FM: 5,
      B: 3,
    },
  },
  {
    name: `Gladiateur`,
    description: `Selon les rumeurs, le sport auquel les Gladiateurs se livrent trouverait son origine dans les royaumes ogres situés à l'est de l'Empire. En effet, il n'est pas bien difficile de croire qu'une race aussi sauvage a offert ces types de combat à mort à la culture du Vieux Monde. Jadis, la plupart des Gladiateurs étaient des criminels et des prisonniers de guerre. On les jetait dans une arène avec une poignée d'armes et seul le gagnant avait la vie sauve.Aujourd'hui, il existe des Gladiateurs professionnels qui combattent aux côtés des condamnés. Ces individus en quête de gloire et d'adrénaline n'y gagnent généralement qu'une mort brutale sous les hurlements d'une foule surexcitée par la vue du sang. Les meilleurs Gladiateurs deviennent rapidement riches (grâce à leurs trophées et aux paris dont ils font l'objet), ce qui permet à certains esclaves d'acheter leur liberté.`,
    skills: {
      mandatory: [`Esquive`, `Intimidation`],
    },
    talents: {
      mandatory: [
        `Coups puissants`,
        `Maîtrise (armes lourdes)`,
        `Maîtrise (armes de parade)`,
        `Maîtrise (fléaux)`,
      ],
      choice: [
        {
          options: [`Coups précis`, `Sur ses gardes`],
          quantity: 1,
        },
        {
          options: [`Désarmement`, `Lutte`],
          quantity: 1,
        },
        {
          options: [`Force accrue`, `Sain d'esprit`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Coups-de-poing`,
        `Armure moyenne (gilet de mailles et veste de cuir)`,
      ],
      choice: [
        {
          options: [`Fléau d'armes`, `Arme à deux mains`],
          quantity: 1,
        },
        {
          options: [`Bouclier`, `Rondache`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Berserk norse`,
      `Combattant des tunnels`,
      `Coupe-jarret`,
      `Spadassin`,
    ],
    advanced: [
      `Chasseur de primes`,
      `Mercenaire`,
      `Spadassin`,
      `Tueur de trolls`,
      `Vétéran`,
    ],
    stats: {
      CC: 15,
      E: 10,
      Ag: 10,
      FM: 10,
      B: 2,
    },
  },
  {
    name: `Hors-la-loi`,
    description: `La justice de l'Empire est expéditive et implacable. Il n'est pas étonnant que tant d'individus fuient la garde et mènent une vie de Hors-la-loi. De ce fait, les collines et forêts du Vieux Monde sont pleines de ces individus. Leur existence est d'autant plus précaire qu'il leur faut composer avec les patrouilles, les soldats et autres agents du maintien de l'ordre, mais également avec les sombres créatures des régions sauvages. Si de nombreux Hors-la-loi ne sont rien de plus que de simples brigands détroussant diligences et caravanes, d'autres se posent en champions de la paysannerie et combattent «pour la justice, non pour les lois».Tant qu'ils se contentent de s'en prendre aux nantis, les paysans les aident en leur remettant de la nourriture et des renseignements, mais également en les cachant. Ce soutien, et les régions dans lesquelles les Hors-la-loi évoluent, explique que l'état a du mal à se charger d'eux. La noblesse locale s'en remet généralement aux chasseurs de primes pour mettre un terme aux activités de banditisme.`,
    skills: {
      mandatory: [
        `Déplacement silencieux`,
        `Dissimulation`,
        `Escalade`,
        `Esquive`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Alphabet secret (voleur)`, `Commérage`],
          quantity: 1,
        },
        {
          options: [`Braconnage`, `Natation`],
          quantity: 1,
        },
        {
          options: [`Conduite d'attelages`, `Equitation`],
          quantity: 1,
        },
        {
          options: [`, Connaissances générales (Empire)`, `Soins des animaux`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Adresse au tir`, `Coups assomants`],
          quantity: 1,
        },
        {
          options: [`Camouflage rural`, `Code de la rue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arc et 10 flèches`,
        `Armure legère (gilet de cuir)`,
        `Bouclier`,
      ],
    },
    access: [
      `Agitateur`,
      `Aubergiste`,
      `Bûcheron`,
      `Charlatan`,
      `Cocher`,
      `Collecteur de taxes`,
      `Ecuyer`,
      `Escroc`,
      `Fanatique`,
      `Matelot`,
      `Mercenaire`,
      `Milicien`,
      `Paysan`,
      `Patrouilleur`,
      `Sorcier de village`,
    ],
    advanced: [
      `Bandit de grand chemin`,
      `Mercenaire`,
      `Démagogue`,
      `Vagabond`,
      `Vétéran`,
      `Voleur`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      Ag: 10,
      Int: 5,
      A: 1,
      B: 2,
    },
  },
  {
    name: `Initié`,
    description: `La religion occupe aujourd'hui une place secondaire dans le cœur de nombreux habitants duVieux Monde,mais cela n'empêche pas de jeunes hommes et femmes de consacrer leur existence aux dieux.Pour devenir prêtre,il faut développer des trésors de dévouement et de discipline.Mais avant de pouvoir prétendre devenir prêtre,il faut avoir été un Initié. Des professeurs des plus stricts leur donnent une instruction rigoureuse, mais ils n'ont pas le droit de prêcher ou de conduire l'office avant d'être officiellement ordonnés. Leur instruction inclut littérature, calligraphie, étude des textes sacrés et art du sermon.Ils apprennent également les bases du maniement des armes pour être capables de défendre leur temple en cas de besoin. Note : au titre d'Initié, vous devez choisir une divinité tutélaire et une Église.Comme le précise la ligne Compétences et talents de la description de votre dieu, ce choix confère un talent ou une compétence supplémentaire.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Connaissances académiques (théologie)`,
        `Langue (classique)`,
        `Langue (reikspiel)`,
        `Lire/écrire`,
        `Perception`,
        `Soins`,
      ],
      choice: [
        {
          options: [
            `Connaissances académiques (astronomie)`,
            `Connaissances académiques (histoire)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Eloquence`],
      choice: [
        {
          options: [`Force accrue`, `Réflexes éclairs`],
          quantity: 1,
        },
        {
          options: [`Guerrier né`, `Sociable`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Symbole religieux`],
    },
    access: [
      `Chasseur de vampires`,
      `Chevalier`,
      `Etudiant`,
      `Fanatique`,
      `Répurgateur`,
      `Scribe`,
      ,
      `Sorcier de village`,
    ],
    advanced: [
      `Chirurgien barbier`,
      `Démagogue`,
      `Fanatique`,
      `Moine`,
      `Prêtre`,
      `Scribe`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      E: 5,
      Int: 10,
      FM: 10,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Kossar kislévite`,
    description: `Les Kossars sont originaires d'une tribu ungol qui vivait jadis dans le nord-est de l'Empire. Un peuple oriental, les Gospodars, envahit la région,soumit les Ungols et fonda la nation de Kislev. Durant ce conflit, les Kossars louèrent leurs services de mercenaires aux Gospodars et combattirent les autres tribus ungols. Leur style de combat sans pareil impressionna grandement la noblesse gospodar et depuis cette époque, des régiments de Kossars servent les tzars de Kislev. Aujourd'hui, les Kossars ne constituent plus une tribu, mais une vaste unité militaire étendue sur l'ensemble de Kislev. Ces hommes sont armés d'arcs et de grandes haches, ce qui les rend très polyvalents sur le champ de bataille. Las des guerres incessantes qui agitent leur patrie, nombre de Kossars se sont rendus dans l'Empire pour y mener une vie de mercenaires ou d'aventuriers.`,
    skills: {
      mandatory: [
        `Connaissances générales (Kislev)`,
        `Esquive`,
        `Fouille`,
        `Langue (kislévien)`,
        `Perception`,
        `Résistance à l'alcool`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Commérage`, `Jeu`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Coups précis`, `Maîtrise (armes lourdes)`],
    },
    dotation: {
      mandatory: [
        `Arc et 10 flèches`,
        `Arme à deux mains (hache à deux mains)`,
        `Armure moyenne (manteau de mailles, veste de cuir et jambières de cuir)`,
      ],
    },
    access: [`Aucun`],
    advanced: [
      `Chasseur de primes`,
      `Combattant des tunnels`,
      `Mercenaire`,
      `Sergent`,
      `Vétéran`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      E: 10,
      FM: 10,
      B: 2,
    },
    races: {
      name: `humain`,
      origin: `kislévite`,
    },
  },
  {
    name: `Marin`,
    description: `La plupart des Marins impériaux sont originaires de la province du Nordland dont la côte s'ouvre sur la Mer des Griffes. Les caraques, loups impériaux et galères de la flotte impériale patrouillent ces eaux, protégeant l'Empire des drakkars norses, des flibustiers bretonniens et des terribles vaisseaux du Chaos. Des Marins endurcis travaillent à bord de ces navires pendant que leurs compatriotes manœuvrent des bateaux marchands, des vaisseaux pirates et autres embarcations privées. La Mer des Griffes abrite également des Marins elfes qui travaillent pour les grandes maisons marchandes. L'activité de la région tourne autour de Marienburg, le plus grand port du Vieux Monde.Cette ville et ses environs (connus sous le nom de Pays Perdu) faisaient jadis partie de la province impériale du Westerland, mais le port a acheté son indépendance il y a des années. Bien que Marienburg soit un terrain neutre d'un point de vue politique, la Mer des Griffes est le théâtre d'affrontements quotidiens. Sur les ponts couverts de sang, les Marins gagnent leur butin et leur ration de rhum journalière.`,
    skills: {
      mandatory: [`Canotage`, `Escalade`, `Esquive`, `Natation`, `Navigation`],
      choice: [
        {
          options: [
            `Connaissances générales (Bretonnie)`,
            `Connaissances générales (Norsca)`,
            `Connaissances générales (Pays Perdu)`,
            `Connaissances générales (Tilée)`,
          ],
          quantity: 1,
        },
        {
          options: [`Langue (bretonnien)`, `Langue (norse)`, `Langue (tiléen)`],
          quantity: 1,
        },
        {
          options: [`Perception`, `Résistance à l'alcool`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Grand voyageur`],
      choice: [
        {
          options: [`Combat de rue`, `Dur à cuire`],
          quantity: 1,
        },
        {
          options: [`Combattant virevoltant`, `Coups puissants`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (gilet de cuir)`,
        `Bouteille d'alcool fort de qualité médiocre`,
      ],
    },
    access: [
      `Batelier`,
      `Berserk norse`,
      `Contrebandier`,
      `Emissaire elfe`,
      `Passeur`,
      `Pêcheur`,
    ],
    advanced: [
      `Contrebandier`,
      `Escroc`,
      `Matelot`,
      `Navigateur`,
      `Officier en second`,
    ],
    stats: {
      CC: 10,
      CT: 5,
      F: 10,
      Ag: 10,
      A: 1,
      B: 2,
    },
  },
  {
    name: `Matelot`,
    description: `Les Matelots font office de soldats au sein de la flotte impériale mais également à bord de grands vaisseaux privés. Ils protègent leur navire des pirates, maraudeurs norses et autres pillards. Contrairement aux marins, dont le travail principal est d'assurer la bonne marche du navire, les Matelots sont formés au combat. À terre, ce sont de véritables sergents recruteurs qui se chargent de trouver un nouvel équipage. Leurs méthodes sont telles qu'il n'est pas rare qu'un citoyen imprudent se réveille en pleine mer après avoir reçu un bon coup de gourdin sur la nuque. En raison de ces activités et de leur propension à déclencher des bagarres quand ils sont ivres, les Matelots sont mal vus dans de nombreuses communautés côtières. Cependant, quand des pillards passent à l'attaque, ces mêmes citoyens sont les premiers à accepter l'aide des Matelots endurcis.`,
    skills: {
      mandatory: [
        `Canotage`,
        `Esquive`,
        `Intimidation`,
        `Natation`,
        `Résistance à l'alcool`,
      ],
      choice: [
        {
          options: [`Commérage`, `Langage secret (langage de bataille)`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Pays Perdu)`, `Jeu`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Coups assomants`, `Coups puissants`],
      choice: [
        {
          options: [`Désarmement`, `Sur ses gardes`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `Bouclier`,
        `Grappin`,
        `10 mètres de corde`,
      ],
      choice: [
        {
          options: [`Arc et 10 flèches`, `Arbalète et 10 carreaux`],
          quantity: 1,
        },
      ],
    },
    access: [`Batelier`, `Marin`, `Pêcheur`],
    advanced: [
      `Contrebandier`,
      `Coupe-jarret`,
      `Hors-la-loi`,
      `Officier en second`,
      `Sergent`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      F: 10,
      Ag: 5,
      A: 1,
      B: 3,
    },
  },
  {
    name: `Mercanti`,
    description: `Au sein de l'Empire, des armées sont en mouvement en permanence. Parmi ces forces, on trouve aussi bien des unités de milice locale qui parcourent les bois à la recherche de bandits que les armées de l'Empereur qui affrontent les peaux-vertes ou les forces du Chaos. Cependant, aucune armée ne voyage véritablement seule et chacune traîne dans son sillage une caravane de Mercantis. Ceux-ci incluent petits commerçants désireux d'arrondir leurs fins de mois, veuves de guerre tentant de louer leurs services de cuisinières ou de couturières et autres détrousseurs de cadavres espérant faire fortune sur les champs de bataille encore fumants. Si les nobles de nombreuses armées n'ont que mépris pour les Mercantis, ceuxci apportent un soutien indéniable aux troupes engagées sur le terrain.`,
    skills: {
      mandatory: [`Commérage`, `Fouille`, `Marchandage`, `Perception`],
      choice: [
        {
          options: [`Charisme`, `Evaluation`],
          quantity: 1,
        },
        {
          options: [`Conduite d'attelages`, `Soins des animaux`],
          quantity: 1,
        },
        {
          options: [
            `Escamotage`,
            `Langue (bretonnien)`,
            `Langue (kislévien)`,
            `Langue (tiléen)`,
            `Métier (arquebusier)`,
            `Métier (cartographe)`,
            `Métier (cuisinier)`,
            `Métier (fabricant d'arcs)`,
            `Métier (fabricant d'armes)`,
            `Métier (fabricant d'armures)`,
            `Métier (forgeron)`,
            `Métier (herboriste)`,
            `Métier (marchand)`,
            `Métier (tailleur)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Fuite`],
      choice: [
        {
          options: [`Combat de rue`, `Dur en affaires`],
          quantity: 1,
        },
        {
          options: [`Dur à cuire`, `Sociable`],
          quantity: 1,
        },
        {
          options: [`Grand voyageur`, `Resistance aux maladies`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [`Petit sac`, `Tente`],
      choice: [
        {
          options: [`Porte-bonheur`, `Outils d'artisan`],
          quantity: 1,
        },
      ],
    },
    access: [`Chiffonnier`, `Serviteur`],
    advanced: [
      `Artisan`,
      `Charbonnier`,
      `Charlatan`,
      `Contrebandier`,
      `Espion`,
      `Serviteur`,
      `Vagabond`,
    ],
    stats: {
      E: 5,
      Ag: 10,
      Int: 5,
      FM: 5,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Mercenaire`,
    description: `Le Vieux Monde est en proie à des guerres incessantes et a par conséquent besoin de combattants. Bien que l'Empire dispose d'une armée régulière,ses forces sont très souvent accompagnées de Mercenaires. Nobles et riches marchands louent également les services de tels individus pour protéger leurs intérêts, certains disposants même de véritables armées privées. Le Mercenaire va du jeune homme en quête d'aventures au vétéran grisonnant qui a participé à de nombreux conflits. Les Mercenaires viennent de toutes les régions du monde, mais les compagnies de Tilée sont les plus réputées.Tout Mercenaire rêve de richesses fabuleuses, mais pour la plupart d'entre eux, la réalité prend souvent la forme d'une mort précoce et d'une pierre tombale anonyme.`,
    skills: {
      mandatory: [`Esquive`, `Langage secret (langage de bataille)`],
      choice: [
        {
          options: [`Commérage`, `Marchandage`],
          quantity: 1,
        },
        {
          options: [`Conduite d'attelages`, `Equitation`],
          quantity: 1,
        },
        {
          options: [
            `Connaissances générales (Bretonnie)`,
            `Connaissances générales (Kislev)`,
            `Connaissances générales (Tilée)`,
          ],
          quantity: 1,
        },
        {
          options: [`Fouille`, `Perception`],
          quantity: 1,
        },
        {
          options: [`Jeu`, `Soins des animaux`],
          quantity: 1,
        },
        {
          options: [`Langue (tiléen)`, `Natation`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Adresse au tir`, `Coups assommants`],
          quantity: 1,
        },
        {
          options: [`Coups puissants`, `Rechargement rapide`],
          quantity: 1,
        },
        {
          options: [`Désarmement`, `Sur ses garde`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arbalète et 10 carreaux`,
        `Bouclier`,
        `Armure moyenne (gilet de mailles et veste de cuir)`,
        `Potion de soins`,
      ],
    },
    access: [
      `Berserk norse`,
      `Chasseur de primes`,
      `Coupe-jarret`,
      `Démagogue`,
      `Eclaireur`,
      `Garde`,
      `Garde du corps`,
      `Gladiateur`,
      `Kossar kislevite`,
      `Milicien`,
      `Mineur`,
      `Sentinelle halfling`,
      `Soldat`,
    ],
    advanced: [
      `Chasseur de primes`,
      `Combattant des tunnels`,
      `Garde du corps`,
      `Hors-la-loi`,
      `Sergent`,
      `Véteran`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      F: 5,
      E: 5,
      Ag: 5,
      FM: 5,
      A: 1,
      B: 2,
    },
  },
  {
    name: `Messager`,
    description: `Les distances séparant les villes et châteaux de l'Empire étant importantes, les Messagers constituent des moyens de communication indispensables. Nobles, marchands et officiers militaires y ont énormément recours,surtout quand il s'agit de Messagers montés. Ces courageux cavaliers parcourent seuls les routes de l'Empire, comptant sur leur célérité pour éviter le danger. Des patrouilleurs prêtent leur concours aux Messagers officiels aussi souvent que possible, mais il existe de vastes régions dans lesquelles ils ne doivent s'attendre à aucune aide. Enfin, après avoir évité de nombreuses embûches, il arrive qu'un Messager connaisse une triste fin en délivrant une missive particulièrement désagréable à son destinataire…`,
    skills: {
      mandatory: [
        `Alphabet secret (pisteur)`,
        `Équitation`,
        `Langue (reikspiel)`,
        `Natation`,
        `Orientation`,
        `Perception`,
        `Soins des animaux`,
        `Survie`,
      ],
      choice: [
        {
          options: [
            `Commérage`,
            `Connaissances générales (Empire)`,
            `Connaissances générales (Pays Perdu)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Grand voyageur`, `Sens de l'orientation`],
    },
    dotation: {
      mandatory: [`Armure légère (veste de cuir)`, `Etui à cartes`, `Bouclier`],
      choice: [
        {
          options: [
            `Cheval de selle avec selle et harnais`,
            `Poney avec selle et harnais`,
          ],
          quantity: 1,
        },
      ],
    },
    access: [`Milicien`, `Patrouilleur`, `Serviteur`],
    advanced: [
      `Cocher`,
      `Eclaireur`,
      `Gardien tribal`,
      `Héraut`,
      `Patrouilleur`,
      `Pisteur`,
      `Soldat`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      E: 5,
      Ag: 10,
      Int: 5,
      FM: 5,
      B: 2,
    },
  },
  {
    name: `Milicien`,
    description: `Les Miliciens font partie des forces de protection locales et sont en grande partie issus de la paysannerie. Chacun accepte de sacrifier un peu de son temps tous les ans (en général, il s'agit de sept jours) pour s'entraîner. Cette formation, aussi brève soit-elle, peut faire la différence sur les champs de bataille ensanglantés du Vieux Monde. Les capitaines de milice sont des responsables civils ou des militaires à la retraite. Certains Miliciens doivent se procurer leur équipement, mais il arrive que l'administration locale le leur fournisse.Ainsi, certaines unités de Miliciens disposent de beaux uniformes et d'un équipement entretenu, alors que d'autres n'ont rien de plus que leurs vêtements et un arc habituellement réservé à la chasse.`,
    skills: {
      mandatory: [
        `Esquive`,
        `Fouille`,
        `Perception`,
        `Soins des animaux`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Commérage`, `Jeu`],
          quantity: 1,
        },
        {
          options: [`Conduite d'attelages`, `Natation`],
          quantity: 1,
        },
        {
          options: [
            `Métier (arquebusier)`,
            `Métier (cartographe)`,
            `Métier (cuisinier)`,
            `Métier (fabricant d'arcs)`,
            `Métier (fabricant d'armes)`,
            `Métier (fabricant d'armures)`,
            `Métier (forgeron)`,
            `Métier (herboriste)`,
            `Métier (marchand)`,
            `Métier (tailleur)`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Coups puissants`],
      choice: [
        {
          options: [`Maîtrise (armes lourdes)`, `Rechargement rapide`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir et calotte de cuir)`,
        `Uniforme`,
      ],
      choice: [
        {
          options: [`Hallebarde`, `Arc et 10 flèches`],
          quantity: 1,
        },
      ],
    },
    access: [
      `Artisan`,
      `Bourgeois`,
      `Bûcheron`,
      `Maître-artisan`,
      `Marchand`,
      `Paysan`,
      `Pêcheur`,
      `Régisseur`,
    ],
    advanced: [
      `Hors-la-loi`,
      `Maître-artisan`,
      `Mercenaire`,
      `Messager`,
      `Sentinelle hafling`,
      `Sergent`,
      `Voleur`,
    ],
    stats: {
      CC: 10,
      CT: 5,
      F: 5,
      E: 5,
      Ag: 10,
      B: 2,
    },
  },
  {
    name: `Mineur`,
    description: `L'Empire est flanqué de larges chaînes de montagnes. À l'est se dressent les Montagnes du Bord du Monde, au sud s'élèvent les Montagnes Noires et à l'est apparaissent les Montagnes Grises. Malgré les attaques permanentes de gobelins et autres monstruosités souterraines, nains et humains exploitent ces montagnes depuis des temps immémoriaux. Les Mineurs bravent ces conditions pour extraire du fer, de l'argent, de l'or, des gemmes et autres minerais précieux. D'autres préfèrent prospecter en surface, plus particulièrement dans les Monts du Milieu, qui chevauchent les provinces d'Ostland et d'Hochland. Bien que ces montagnes couvertes de forêt s'élèvent au sein de l'Empire, elles constituent un véritable nid à trolls, hommes-bêtes et autres créatures immondes. Il faut faire preuve d'un grand talent et d'une robustesse certaine pour survivre dans un tel environnement.`,
    skills: {
      mandatory: [`Escalade`, `Orientation`, `Perception`, `Soins des animaux`],
      choice: [
        {
          options: [`Conduite d'attelages`, `Dissimulation`],
          quantity: 1,
        },
        {
          options: [`Evaluation`, `Survie`],
          quantity: 1,
        },
        {
          options: [`Métier (mineur)`, `Métier (prospecteur)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Maîtrise (armes lourdes)`, `Sens de l'orientation`],
      choice: [
        {
          options: [`Résistance accrue`, `Guerrier né`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arme à deux mains (piolet à deux mains)`,
        `Armure légère (veste de cuir)`,
        `Piolet`,
        `Pelle`,
        `Lampe-tempête`,
        `Huile pour lampe`,
      ],
    },
    access: [`Charbonnier`, `Chasseur`],
    advanced: [
      `Charbonnier`,
      `Combattant des tunnels`,
      `Contrebandier`,
      `Ingénieur`,
      `Mercenaire`,
      `Pisteur`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      F: 10,
      E: 5,
      Int: 5,
      FM: 5,
      B: 2,
    },
  },
  {
    name: `Noble`,
    description: `Les Nobles constituent la classe dirigeante de l'Empire. Ils détiennent le pouvoir, contrôlent les terres et promulguent les lois. Les familles de Nobles les plus importantes sont celles des Électeurs impériaux et de l'Empereur. Il en existe évidemment des centaines d'autres, qui toutes se disputent argent et pouvoir. Certaines font fortune grâce à la guerre, d'autres dans les affaires ou en politique.Aucune ne se salirait les mains en exerçant un métier ordinaire. Les Nobles les plus méprisables ne font rien et vivent de leurs rentes, réceptions, danses et galas constituant l'ordinaire de leurs journées. Cependant, les choses ne sont pas toujours aussi faciles pour les enfants cadets des nobles maisons. L'héritage allant à l'aîné, il leur faut souvent se tailler une place dans le monde, même s'ils doivent pour cela côtoyer les classes populaires et frayer avec des aventuriers et autres vauriens.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Connaissances générales (Empire)`,
        `Equitation`,
        `Langue (reikspiel)`,
        `Lire/écrire`,
      ],
      choice: [
        {
          options: [`Baratin`, `Commandement`],
          quantity: 1,
        },
        {
          options: [`Commérage`, `Jeu`],
          quantity: 1,
        },
        {
          options: [
            `Expression artistique (musicien)`,
            `Résistance à l'alcool`,
          ],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory: [`Étiquette`],
      choice: [
        {
          options: [`Chance`, `Éloquence`],
          quantity: 1,
        },
        {
          options: [`Intelligence`, `Maîtrise (armes d'escrime)`],
          quantity: 1,
        },
        {
          options: [`Intrigant`, `Maîtrise (armes de parade)`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Fleuret`,
        `Main gauche`,
        `Atours de noble`,
        `Cheval de selle avec selle et harnais`,
        `1d10 co`,
        `Bijoux d'une valeur de 6d10 co`,
      ],
    },
    access: [
      `Ecuyer`,
      `Intendant`,
    ],
    advanced: [
      `Courtisan`,
      `Ecuyer`,
      `Escroc`,
      `Etudiant`,
      `Pistolier`,
      `Politicien`,
    ],
    stats: {
      CC: 10,
      CT: 5,
      Ag: 5,
      Int: 5,
      FM: 5,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Passeur`,
    description: `Des cours d'eau de toute taille quadrillent l'Empire. Bien qu'il soit possible d'en traverser certains à gué, d'autres sont infranchissables sans embarcation. Les Passeurs gagnent donc leur vie en transportant personnes et marchandises au gré des rivières et des fleuves de l'Empire. Ils apprécient plus particulièrement les barges à fond plat car elles présentent un faible tirant d'eau et offrent un grand espace. Les Passeurs qui travaillent dans les régions reculées ont un faible pour le tromblon. En effet, les bandits sont une menace permanente et cette arme les invite à passer leur chemin. Beaucoup de Passeurs sont également des extorqueurs de première qui modifient leurs tarifs selon la fortune apparente de leurs passagers et le désespoir qui anime ceux-ci.`,
    skills: {
      mandatory: [
        `Canotage`,
        `Charisme`,
        `Connaissances générales (Empire)`,
        `Marchandage`,
        `Natation`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Commérage`, `Intimidation`],
          quantity: 1,
        },
        {
          options: [`Evaluation`, `Langage secret (langue des rôdeurs)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Combat de rue`, `Maîtrise (armes à feu)`],
          quantity: 1,
        },
        {
          options: [`Sociable`, `Tireur d'élite`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
      ],
      choice: [
        {
          options: [`Arbalète et 10 carreaux`, `Tromblon et poudre et munitions pour 10 tir`],
          quantity: 1,
        }
      ],
    },
    access: [
      `Cocher`,
      `Collecteur de taxes`,
      `Contrebandier`,
    ],
    advanced: [
      `Bandit de grand chemin`,
      `Batelier`,
      `Contrebandier`,
      `Marin`,
      `Patrouilleur`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      F: 10,
      E: 5,
      Ag: 5,
      Int: 5,
      B: 2,
    },
  },
  {
    name: `Patrouilleur`,
    description: `L'Empire est constitué de poches de civilisation vaguement reliées par des routes et des cours d'eau. La majeure partie du pays est recouverte de forêts denses qui abritent bandits, mutants, hommesbêtes et gobelins.Voyager d'une ville à une autre constitue une aventure en soi malgré la vigilance permanente des Patrouilleurs. Ces représentants de l'autorité parcourent les routes et les pistes de l'Empire, protégeant biens et voyageurs. Leur nombre restant modeste, ils œuvrent conjointement avec la milice locale et les soldats dès que se présente une menace sérieuse. Cependant, les dangers courants sont réglés par de petites unités de Patrouilleurs.`,
    skills: {
      mandatory: [
        `Conduite d'attelages`,
        `Équitation`,
        `Fouille`,
        `Orientation`,
        `Perception`,
        `Soins des animaux`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Alphabet secret (pisteur)`, `Pistage`],
          quantity: 1,
        },
        {
          options: [`Commérage`, `Connaissances générales (Empire)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      mandatory : [`Maîtrise (armes à feu)`],
      choice: [
        {
          options: [`Rechargement rapide`, `Sur ses gardes`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Pistolet avec 10 balles et poudre`,
        `Armure moyenne (gilet de mailles et veste de cuir)`,
        `Bouclier`,
        `10 mètres de corde`,
        `Cheval de guerre avec selle et harnais (ou poney pour les halflings)`,
      ],
    },
    access: [
      `Cocher`,
      `Eclaireur`,
      `Garde`,
      `Messager`,
      `Passeur`,
    ],
    advanced: [
      `Bandit de grand chemin`,
      `Collecteur de taxes`,
      `Eclaireur`,
      `Hors-la-loi`,
      `Messager`,
      `Pisteur`,
      `Sergent`,
    ],
    stats: {
      CC: 10,
      CT: 10,
      F: 5,
      Ag: 10,
      Int: 5,
      FM: 5,
      B: 2,
    },
  },
  {
    name: `Paysan`,
    description: `La paysannerie constitue le gros de la population de l'Empire. Pendant que les nobles règnent et que les bourgeois commercent, les Paysans eux travaillent dur. Cette carrière regroupe les fermiers, les laboureurs et les gardiens de troupeaux en général. En temps de guerre, ils combattent et meurent pour le compte de l'Empire. De nombreux Paysans tentent de trouver une vie meilleure en ville, mais ils finissent généralement parmi les légions de mendiants affamés. La plupart des Paysans passent leur vie dans le village où ils sont nés, généralement entouré par une contrée hostile, et les nouvelles qu'ils reçoivent du monde extérieur sont rares. Bien qu'ils soient provinciaux et superstitieux, ils constituent le cœur de l'Empire.`,
    skills: {
      mandatory: [
        `Dissimulation`,
      ],
      choice: [
        {
          options: [`Braconnage`, `Canotage`],
          quantity: 1,
        },
        {
          options: [`Charisme`, `Soins des animaux`],
          quantity: 1,
        },
        {
          options: [`Conduite d'attelages`, `Métier (fabricant d'arcs)`],
          quantity: 1,
        },
        {
          options: [`Déplacement silencieux`, `Escalade`],
          quantity: 1,
        },
        {
          options: [`Dressage`, `Natation`],
          quantity: 1,
        },
        {
          options: [`Emprise sur les animaux `, `Métier (cuisinier)`],
          quantity: 1,
        },
        {
          options: [`Expression artistique (chanteur)`, `Expression artistique (danseur)`, `Jeu`],
          quantity: 1,
        },
        {
          options: [`Métier (fermier)`, `Survie`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Camouflage rural`, `Dur à cuire`],
          quantity: 1,
        },
        {
          options: [`Fuite`, `Maîtrise (lance-pierres)`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Flasque de cuir`,
      ],
      choice: [
        {
          options: [`Fronde`, `Bâton`],
          quantity: 1,
        }
      ],
    },
    access: [
      `Aucun`,
    ],
    advanced: [
      `Artisan`,
      `Charbonnier`,
      `Chiffonnier`,
      `Fanatique`,
      `Hors-la-loi`,
      `Milicien`,
      `Pêcheur`,
      `Politicien`,
      `Serviteur`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      F: 5,
      E: 10,
      Ag: 5,
      FM: 5,
      B: 2,
    },
  },
  {
    name: `Pêcheur`,
    description: `Les Pêcheurs s'en remettent à la générosité de la mer. Les nombreux villages de la côte du Nordland en abritent évidemment une multitude. Malgré la menace permanente que représentent les pirates et les pillards originaires de Norsca, ces individus robustes bravent les dangers de la Mer des Griffes dans de petites embarcations.Il existe également des communautés de pêche sur le continent, au bord de lacs et de cours d'eau, mais ces villages vivent également de l'agriculture. Les Pêcheurs sont des gens indépendants.Ils travaillent en petites équipes et toutes les décisions leur reviennent quand ils sillonnent les flots. Cette nature fougueuse explique que les tavernes situées sur les docks sont toujours animées.`,
    skills: {
      mandatory: [
        `Canotage`,
        `Natation`,
        `Navigation`,
        `Perception`,
        `Survie`,
      ],
      choice: [
        {
          options: [`Connaissances générales (Empire)`, `Connaissances générales (Pays Perdu)`],
          quantity: 1,
        },
        {
          options: [`Langue (reikspiel)`, `Langue (norse)`],
          quantity: 1,
        },
        {
          options: [`Marchandage`, `Résistance à l'alcool`],
          quantity: 1,
        },
        {
          options: [`Métier (marchand)`, `Orientation`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Combat de rue`, `Sens de l'orientation`],
          quantity: 1,
        },
        {
          options: [`Dur à cuire`, `Intelligent`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Hameçon et ligne`,
        `Lance`,
      ],
    },
    access: [
      `Batelier`,
      `Paysan`,
    ],
    advanced: [
      `Marchand`,
      `Marin`,
      `Matelot`,
      `Milicien`,
      `Navigateur`,
    ],
    stats: {
      CT: 5,
      F: 10,
      E: 5,
      Ag: 10,
      Int: 5,
      B: 2,
    },
  },
  {
    name: `Pilleur de tombes`,
    description: `Le Pilleur de tombes diffère du trafiquant de cadavres dans le sens où il s'intéresse davantage aux objets précieux que l'on trouve dans les cimetières qu'aux corps eux-mêmes. Bien que de moins en moins de tombes du Vieux Monde abritent des biens de valeur, d'anciens lieux de sépulture abritent encore des trésors fabuleux. Les Pilleurs de tombes sont passés maîtres dans l'art de dénicher de tels sites et de les dépouiller de leurs richesses. Cependant, les tombeaux secrets se trouvent généralement dans des régions dangereuses et inaccessibles. Ceux qui se trouvent au sein de l'Empire sont vénérés et protégés par les autochtones, et ils sont tout aussi dangereux. Des pièges ingénieux protègent les sépultures les plus riches et les Pilleurs de tombes doivent apprendre à les désamorcer ou à les franchir. Peu d'entre eux survivent à l'exploration de leur première tombe.`,
    skills: {
      mandatory: [
        `Escalade`,
        `Evaluation`,
        `Fouille`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Alphabet secret (voleur)`, `Connaissances générales (Empire)`],
          quantity: 1,
        },
        {
          options: [`Crochetage`, `Déplacement silencieux`],
          quantity: 1,
        },
        {
          options: [`Dissimulation`, `Survie`],
          quantity: 1,
        },
        {
          options: [`Langue (classique)`, `Langue (khazalid)`, `Langue (eltharin)`],
          quantity: 1,
        },
      ],
    },
    talents: {
      choice: [
        {
          options: [`Camouflage souterrain`, `Connaissance des pièges`],
          quantity: 1,
        },
        {
          options: [`Chance`, `Sixième sens`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir)`,
        `Pied-de-biche`,
        `Lanterne`,
        `Huile pour lanterne`,
        `10 mètres de corde`,
        `2 besaces`,
      ],
    },
    access: [
      `Combattant des tunnels`,
      `Porterune`,
      `Voleur`,
    ],
    advanced: [
      `Chasseur de vampires`,
      `Combattant des tunnels`,
      `Etudiant`,
      `Ratier`,
      `Receleur`,
      `Voleur`,
    ],
    stats: {
      CC: 10,
      Ag: 10,
      Int: 10,
      FM: 10,
      Soc: 5,
      B: 2,
    },
  },
  {
    name: `Porterune`,
    description: `Undgrin Ankor, un réseau complexe de tunnels qui parcourait jadis les entrailles des Montagnes du Bord du Monde,relie les forteresses naines situées à l'est de l'Empire. La communication entre les royaumes nains est assurée par les Porterunes, de jeunes nains entraînés à cet effet qui risquent leur vie pour délivrer leurs messages (écrits dans la langue runique des nains). Lors des siècles derniers, de nombreuses forteresses naines sont tombées aux mains des gobelinoïdes et des tunnels ont été détruits, ce qui a rendu la tâche des Porterunes encore plus difficile. Ils doivent emprunter de nombreux détours, tous plus dangereux au fur et à mesure où leurs ennemis les découvrent. Souvent, les Porterunes quittent carrément les tunnels et font un crochet par les montagnes et les vallées de la surface. Les Porterunes spécialisés en longues distances portent parfois des messages entre les communautés naines de l'Empire et celles des montagnes.`,
    skills: {
      mandatory: [
        `Alphabet secret (pisteur)`,
        `Esquive`,
        `Natation`,
        `Orientation`,
        `Perception`,
        `Survie`,
      ],
    },
    talents: {
      mandatory: [
        `Fuite`,
        `Rechargement rapide`,
        `Sens de l'orientation`,
      ],
      choice: [
        {
          options: [`Course à pied`, `Sixième sens`],
          quantity: 1,
        },
        {
          options: [`Force accrue`, `Résistance accrue`],
          quantity: 1,
        },
      ],
    },
    dotation: {
      mandatory: [
        `Arbalète et 10 carreaux`,
        `Armure légère (gilet de cuir)`,
        `Potion de soins`,
        `Porte-bonheur`,
      ],
    },
    access: [`Combattant des tunnels`],
    advanced: [
      `Combattant des tunnels`,
      `Pilleur de tombes`,
      `Pisteur`,
      `Ratier`,
      `Vétéran`,
    ],
    stats: {
      CC: 10,
      F: 5,
      E: 5,
      Ag: 10,
      Int: 5,
      FM: 5,
      B: 2,
      M: 1,
    },
    races: {
      names: [`nain`],
    }
  },
  {
    name: `Ratier`,
    description: `Le Ratier est un personnage bien connu au travers de l'Empire puisqu'on le trouve aussi bien dans les villages que dans les grandes villes. Ce curieux personnage gagne sa vie en éliminant la vermine qui infeste l'ensemble des communautés en cette ère insalubre. Les Ratiers sont généralement des voyageurs, mais les plus grandes villes en abritent de véritables contingents permanents. Les rats constituent bien évidemment leurs ennemis principaux, mais ils se chargent également des taupes, des souris et d'animaux tout aussi nuisibles. Les Ratiers citadins passent le plus clair de leur temps dans les égouts, évoluant dans des ruisseaux d'ordures pour traquer leurs proies. Certes, il s'agit d'un travail dégoûtant, mais il a le mérite de prévenir les épidémies.`,
    skills: {
      mandatory: [
        `Braconnage`,
        `Déplacement silencieux`,
        `Dissimulation`,
        `Dressage`,
        `Fouille`,
        `Perception`,
        `Soins des animaux`,
      ],
    },
    talents: {
      mandatory: [
        `Camouflage souterrain`,
        `Maîtrise (lance-pierres)`,
        `Résistance aux maladies`,
        `Résistance aux poisons`,
      ],
    },
    dotation: {
      mandatory: [
        `Fronde et munitions`,
        `4 collets`,
        `Perche et 1d10 rats morts`,
        `Petit chien méchant`,
      ],
    },
    access: [
      `Geôlier`,
      `Pilleur de tombes`,
      `Porterune`,
      `Trafiquant de cadavres`,
    ],
    advanced: [
      `Chiffonnier`,
      `Combattant des tunnels`,
      `Geôlier`,
      `Monte-en-l'air`,
      `Trafiquant de cadavres`,
      `Voleur`,
    ],
    stats: {
      CC: 5,
      CT: 10,
      E: 5,
      Ag: 10,
      FM: 10,
      B: 2,
    },
  },
  {
    name: `Régisseur`,
    description: `Les Régisseurs sont des administrateurs au service d'aristocrates. Bien qu'ils soient chargés de l'entretien des terres et des ressources de leur seigneur, ils jouent un rôle très différent aux yeux de la paysannerie. En effet, les Régisseurs sont chargés de collecter les divers impôts dans les villages qui entourent le manoir de leur maître. En outre, ils font en sorte que les paysans s'acquittent de leurs devoirs. Leur charge les rend donc fortement impopulaires auprès des villageois,surtout durant les périodes de vache maigre. Synonymes d'imposition seigneuriale, ils sont les premiers à tomber lorsque les paysans se soulèvent.`,
    skills: {
      mandatory: [
        `Charisme`,
        `Connaissances académiques (droit)`,
        `Equitation`,
        `Lire/écrire`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Commandement`, `Orientation`],
          quantity: 1,
        },
        {
          options: [`Commérage`, `Soin des animaux`],
          quantity: 1,
        },
        {
          options: [`Connaissances générales (Empire)`, `Intimidation`],
          quantity: 1,
        },
      ]
    },
    talents: {
      mandatory: [
        `Eloquence`,
      ],
      choice: [
        {
          options: [`Calcul mental`, `Etiquette`],
          quantity:1,
        }
      ]
    },
    dotation: {
      mandatory: [
        `Armure légère (veste de cuir et calotte de cuir)`,
        `Cheval de selle avec selle et harnais`,
        `Vêtements confortables`,
      ],
    },
    access: [
      `Garde du corps`,
      `Geôlier`,
    ],
    advanced: [
      `Collecteur de taxes`,
      `Contrebandier`,
      `Milicien`,
      `Politicien`,
      `Racketteur`,
      `Spadassin`,
    ],
    stats: {
      CC: 5,
      CT: 5,
      F: 5,
      Int: 10,
      FM: 5,
      Soc: 10,
      B: 2,
    },
  },
  {
    name: `Scribe`,
    description: `La plupart des citoyens de l'Empire étant illettrés, les services des Scribes sont très demandés.Tous les gouvernements, civils ou militaires, et les institutions religieuses engagent des Scribes à des fins d'archivage. Il existe également des Scribes publics qui gagnent leur vie en écrivant et en lisant des lettres pour les gens du peuple. Les Scribes sont cultivés et beaucoup deviennent des érudits ou des juristes. Enfin, certains se lassent de lire les aventures d'autrui et décident de vivre les leurs. Grâce à leurs grandes connaissances linguistiques, ils font de parfaits interprètes lors d'expéditions menées à l'étranger.`,
    skills: {
      mandatory: [
        `Langage secret (langage de guilde)`,
        `Langue (bretonnien)`,
        `Langue (classique)`,
        `Lire/écrire`,
        `Métier (calligraphe)`,
        `Perception`,
      ],
      choice: [
        {
          options: [`Commérage`, `Connaissances générales (Empire)`],
          quantity: 1,
        },
        {
          options: [`Connaissances académiques (Arts)`, `Connaissances académiques (Astronomie)`, `Connaissances académiques (Démonologie )`, `Connaissances académiques (Généalogie/Héraldique)`, `Connaissances académiques (Histoire)`, `Connaissances académiques (Ingénierie)`, `Connaissances académiques (Loi)`, `Connaissances académiques (Magie)`, `Connaissances académiques (Philosophie)`, `Connaissances académiques (Religion)`, `Connaissances académiques (Runes)`, `Connaissances académiques (Science)`, `Connaissances académiques (Théologie)`],
          quantity: 1,
        },
        {
          options: [`Langue (reikspiel)`, `Langue (tiléen)`],
          quantity: 1,
        },
      ]
    },
    talents: {
      mandatory: [
        `Linguistique`,
      ],
    },
    dotation: {
      mandatory: [
        `Dague`,
        `2 bougies de cire`,
        `5 allumettes`,
        `Livre enluminé`,
        `Accessoires de calligraphie`,
      ],
    },
    access: [
      `Apprenti sorcier`,
      `Initié`,
    ],
    advanced: [
      `Agitateur`,
      `Apprenti sorcier`,
      `Erudit`,
      `Initié`,
      `Navigateur`,
    ],
    stats: {
      Ag: 10,
      Int: 10,
      FM: 10,
      Soc: 5,
      B: 2,
    },
  },
];

export { careers };
