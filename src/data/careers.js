const careers = [
    { 
        name: `Agitateur`, 
        description: `Description Habituellement, les citoyens de l'Empire n'ont pas véritablement leur mot à dire en matière de politique. L'Empereur et les Comtes Électeurs promulguent les lois et se chargent de leur application avec le concours des diverses Églises (comme celles de Sigmar et d'Ulric). Les villes de l'Empire abritent néanmoins de nombreux activistes virulents.Ces Agitateurs se mobilisent au nom de causes variées, distribuant des tracts,faisant des discours enflammés et soulevant parfois les foules. Les extrémistes sont généralement ignorés, mais ceux qui remportent l'adhésion de leur auditoire, en attisant notamment le ressentiment qu'éprouvent paysans et bourgeois, acquièrent rapidement le statut de menace d'État.Ils deviennent alors la proie de la milice locale ou sont accusés d'hérésie par les représentants de l'Église, voire obligés de se soumettre à la miséricorde des répurgateurs. Malgré les risques, les Agitateurs poursuivent néanmoins leurs activités.Certains croient dur comme fer en leur cause, mais d'autres sont de cyniques sycophantes aussi corrompus que ceux contre lesquels ils se répandent en invectives.`,
        skills: {
            mandatory: [
                `Charisme`, 
                `Dissimulation`, 
                `Langue(reikspiel)`, 
                `Lire/écrire`, 
                `Perception`
            ],
            choice: [
                {
                    options: [`Commérage`, `Connaissances académiques (histoire)`],
                    quantity: 1
                },
                {
                    options: [`Connaissances académiques (droit)`, `Connaissances générales (Empire)`],
                    quantity: 1
                },
                {
                    options: [`Langue(bretonnien)`, `Langue(tiléen)`],
                    quantity: 1
                },
            ]
        },
        talents: {
            mandatory: [
                `Eloquence`,
                `Fuite`
            ],
            choice: [
                {
                    options: [`Combat de rue`, `Sang-froid`],
                    quantity: 1
                }
            ]
        },
        dotation: {
            mandatory: [
                `Armure légère (veste de cuir)`,
                `vêtements confortables`,
                `2d10 tracts de diverses causes`
            ],
        },
        access: [`Bandit de grand chemin`, `Bourgeois`, `Capitaine`, `Étudiant`, `Fanatique`, `Héraut`, `Scribe`, `Serviteur`],
        advanced: [`Charlatan`, `Démagogue`, `Escroc`, `Fanatique`, `Hors-la-loi`, `Politicien`],
        stats: {
            CC: `+5%`,
            CT: `+5%`,
            Ag: `+5%`,
            Int: `+10%`,
            Soc: `+10%`,
            B: `+2`,
        }
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
                `Sens de la magie`
            ],
        },
        talents: {
            mandatory: [
                `Magie commune (occulte)`,
            ],
            choice: [
                {
                    options: [`Harmonie aethyrique`, `Mains agiles`],
                    quantity: 1
                },
                {
                    options: [`Intelligent`, `Résistance accrue`],
                    quantity: 1
                }
            ]
        },
        dotation: {
            mandatory: [
                `bâton`,
                `sac à dos`,
                `livre imprimé`
            ],
        },
        access: [ `Érudit`, `Étudiant`, `Scribe`, `Sorcier de village` ],
        advanced: [ `Compagnon sorcier`, `Érudit`, `Scribe` ],
        stats: {
            Ag: `+5%`,
            Int: `+10%`,
            FM: `+15%`,
            Soc: `+5%`,
            B: `+2`,
            Mag: `+1`,
        },
        races: {
            name: `humain`,
            name: `elfe`,
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
                `Métier (deux au choix)`
            ],
            choice: [
                {
                    options: [`Commérage`, `Soin des animaux`],
                    quantity: 1
                }
            ]
        },
        talents: {
            choice: [
                {
                    options: [`Dur en affaire`, `Intelligent`],
                    quantity: 1
                },
            ]
        },
        dotation: {
            mandatory: [
                `Armure légère (gilet de cuir)`,
                `1d10 co`,
            ],
        },
        access: [ `Bourgeois`, `Chirurgien barbier`, `Garde`, `Mercanti`, `Paysan`],
        advanced: [ `Émissaire elfe`, `Fanatique`, `Ingénieur`, `Maître-artisan`, `Marchand`, `Milicien` ],
        stats: {
            F: `+5%`,
            E: `+5%`,
            Ag: `+10%`,
            Int: `+5%`,
            FM: `+10%`,
            B: `+2`,
        }
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
                    quantity: 1
                },
                {
                    options: [`Natation`, `Soins des animaux`],
                    quantity: 1
                },
                {
                    options: [`Baratin`, `Emprise sur les animaux`, `Dressage`, `Equitation`, `Escalade`, `Escamotage`, `Hypnotisme`, `Ventriloquie`],
                    quantity: 1
                },
            ]
        },
        talents: {
            choice: [
                {
                    options: [ `Acrobatie équestre`, `Adresse au tir`, `Eloquence`, `Force accrue`, `Imitation`, `Lutte`, `Maîtrise (armes de jet)`, `Réflexes éclair`, `Sur ses gardes`],
                    quantity: 2
                },
            ]
        },
        dotation: {
            mandatory: [
                `Armure légère (gilet de cuir)`,
            ],
            choice: [
                {
                    options: [`Instrument de musique (un au choix)`, `outils d'artisan (exression artistique)`, `3 dagues de jet`, `2 haches de jet`],
                    quantity: 1
                },
                {
                    options: [`costume de scène`, `vêtements confortables`],
                    quantity: 1
                },
            ]
        },
        access: [`Escroc`, `Héraut`, `Vagabond`, `Voleur`],
        advanced: [`Charlatan`, `Escroc`, `Ménestrel`, `Vagabond`, `Voleur`],
        stats: {
            CC: `+5%`,
            CT: `+10%`,
            Ag: `+10%`,
            FM: `+5%`,
            Soc: `+10%`,
            B: `+2`,
        }
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
                    options: [`Connaissances générales (Empire)`, `Connaissances générales (Kislev)`],
                    quantity: 1,
                },
                {
                    options: [`Langage secret (langage des rôdeurs)`, `Langue (kislévien)`],
                    quantity: 1,
                },
            ],
        },
        talents: {
            mandatory: [
                `Grand voyageur`,
                `Sens de l'orientation`,
            ],
        },
        dotation: {
            mandatory: [
                `Armure légère (veste de cuir)`,
                `bâteau à rames`,
            ],
        },
        access: [`Contrebandier`, `Passeur`],
        advanced: [`Contrebandier`, `Marin`, `Matelot`, `Navigateur`, `Pêcheur`],
        stats: {
            CC: `+10%`,
            CT: `+5%`,
            F: `+5%`,
            E: `+5%`,
            Ag: `+10%`,
            Int: `+5%`,
            B: `+2`,
        }
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
            mandatory: [
                `Armure légère (gilet de cuir)`,
                `bouteille d'alcool fort`,
            ],
            choice: [
                {
                    options: [`armes à deux mains`, `bouclier`],
                    quantity: 1,
                }
            ],
        },
        access: [`Aucun`],
        advanced: [`Gladiateur`, `Marin`, `Mercenaire`, `Sergent`, `Vétéran`],
        stats: {
            CC: `+15%`,
            F: `+15%`,
            E: `+10%`,
            FM: `+10%`,
            B: `+2`,
        },
        races: {
            name: `humain`, origin: `norse`,
        }
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
                    options: [`Connaissances générales (Empire)`, `Résistance à l'alcool`],
                    quantity: 1,
                },
                {
                    options: [`Langue (bretonnien)`, `Langue (kislévien)`, `Langue (tiléen)`],
                    quantity: 1,
                }
            ],
        },
        talents: {
            mandatory: [
                `Dur en affaires`,
            ],
            choice: [
                {
                    options: [`Intelligent`, `Sociable`],
                    quantity: 1,
                }
            ],
        },
        dotation: {
            mandatory: [
                `bouclier`,
                `lanterne`,
                `vêtements confortables`,
            ],
        },
        access: [`Aubergiste`, `Serviteur`],
        advanced: [`Agriculteur`, `Artisan`, `Aubergiste`, `Marchand`, `Milicien`, `Receleur`, `Valet`],
        stats: {
            CC: `+5%`,
            Ag: `+5%`,
            Int: `+10%`,
            FM: `+5%`,
            Soc: `+5%`,
            B: `+2`,
        }
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
                `Escalade`
            ],
            choice: [
                {
                    options: [`Braconnage`, `Pistage`],
                    quantity: 1,
                },
            ],
        },
        talents: {
            mandatory: [
                `Camouflage rural`,
                `Maîtrise (armes lourdes)`
            ],
            choice: [
                {
                    options: [`Course à pied`, `Résistance accrue`],
                    quantity: 1,
                },
            ],
        },
        dotation: [
            `Arme à deux mains (hache à deux mains)`,
            `Armure légère (veste de cuir)`,
            `Nécessaire antipoison`
        ],
        access: [`Charbonnier`, `Vagabond`],
        advanced: [`Chasseur`, `Hors-la-loi`, `Milicien`, `Pisteur`, `Vagabond`],
        stats: {
            CC: `+10%`,
            F: `+10%`,
            Ag: `+5%`,
            FM: `+10%`,
            B: `+3`,
        }
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
                `Survie`
            ],
            choice: [
                {
                    options: [`Commérage`, `Conduite d'attelages`],
                    quantity: 1
                },
                {
                    options: [`Connaissances générales (Empire)`, `Dissimulation`],
                    quantity: 1
                }
            ]
        },
        talents: {
            mandatory: [
                `Fuite`
            ],
            choice: [
                {
                    options: [`Force accrue`, `Intelligent`],
                    quantity: 1
                },
            ],
        },
        dotation: {
            mandatory: [
                `3 torches`,
                `boîte d'amadou`,
                `arme à une main (hachette)`
            ]
        },
        access: [`Chasseur`, `Mercanti`, `Mineur`, `Paysan`],
        advanced: [`Bûcheron`, `Chasseur`, `Mineur`, `Pisteur`, `Vagabond`],
        stats: {
            CC: `+5%`,
            F: `+5%`,
            E: `+5%`,
            Ag: `+5%`,
            Int: `+5%`,
            FM: `+5%`,
            Soc: `+5%`,
            B: `+2`
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
                `Survie`
            ],
            choice: [
                {
                    options: [`Braconnage`, `Déplacement silencieux`],
                    quantity: 1
                },
                {
                    options: [`Fouille`, `Natation`],
                    quantity: 1
                }
            ]
        },
        talents: {
            mandatory: [
                `Rechargement rapide`,
            ],
            choice: [
                {
                    options: [`Camouflage rural`, `Tireur d'élite`],
                    quantity: 1
                },
                {
                    options: [`Dur à cuire`, `Maîtrise (arcs longs)`],
                    quantity: 1
                },
                {
                    options: [`Réflexes éclair`, `Résistance accrue`],
                    quantity: 1
                }
            ]
        },
        dotation: {
            mandatory: [
                `Arc long et 10 flèches`,
                `2 collets`,
                `nécessaire antipoison`
            ]
        },
        access: [`Bûcheron`, `Charbonnier`, `Gardien tribal`],
        advanced: [`Charbonnier`, `Chasseur de primes`, `Franc-archer`, `Gardien tribal`, `Mineur`, `Pisteur`, `Sentinelle halfling`, `Soldat`],
        stats: {
            CT: `+15%`,
            E: `+5%`,
            Ag: `+10%`,
            Int: `+5%`,
            B: `+3`
        }
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
                `Survie`
            ],
        },
        talents: {
            mandatory: [
                `Camouflage rural`,
                `Maîtrise (armes paralysantes)`
            ],
            choice: [
                {
                    options: [`Adresse au tir`, `Coups puissants`],
                    quantity: 1
                },
                {
                    options: [`Tireur d'élite`, `Coups assommants`],
                    quantity: 1
                },
            ]
        },
        dotation: {
            mandatory: [
                `Arbalète et 10 carreaux`,
                `filet`,
                `armure légère (gilet de cuir et calotte de cuir)`,
                `menottes`,
                `10 mètres de corde`
            ]
        },
        access: [`Chasseur`, `Garde du corps`, `Gladiateur`, `Kossar kislevite`, `Mercenaire`, `Sentinelle halfling`],
        advanced: [`Chasseur de vampires`, `Franc-archer`, `Mercenaire`, `Pisteur`, `Spadassin`],
        stats: {
            CC: `+5%`,
            CT: `+10%`,
            F: `+5%`,
            Ag: `+10%`,
            FM: `+5%`,
            B: `+2`
        }
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
                `Soins des animaux`
            ],
            choice: [
                {
                    options: [`Charisme`, `Commérage`],
                    quantity: 1
                },
            ]
        },
        talents: {
            choice: [
                {
                    options: [`Code de la rue`, `Sang-froid`],
                    quantity: 1
                },
                {
                    options: [`Dur à cuire`, `Résistance aux maladies`],
                    quantity: 1
                },
            ]
        },
        dotation: {
            mandatory: [
                `Carriole`,
                `3 besaces`
            ]
        },
        access: [`Paysan`, `Ratier`, `Vagabond`],
        advanced: [`Contrebandier`, `Mercanti`, `Monte-en-l'air`, `Receleur`, `Trafiquant de cadavres`],
        stats: {
            CC: `+5%`,
            F: `+5%`,
            E: `+10%`,
            Ag: `+5%`,
            FM: `+5%`,
            Soc: `+5%`,
            B: `+2`
        }
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
                `Soins`
            ],
            choice: [
                {
                    options: [`Conduite d'attelages`, `Natation`],
                    quantity: 1
                },
                {
                    options: [`Langue (bretonnien)`, `Langue (reikspiel)`, `Langue (tiléen)`],
                    quantity: 1
                }
            ]
        },
        talents: {
            mandatory: [
                `Chirurgie`,
            ],
            choice: [
                {
                    options: [`Intelligent`, `Résistance aux maladies`],
                    quantity: 1
                },
                {
                    options: [`Sociable`, `Résistance accrue`],
                    quantity: 1
                },
            ]
        },
        dotation: {
            mandatory: [
                `Outils d'artisan (chirurgien barbier)`
            ]
        },
        access: [`Étudiant`, `Initié`],
        advanced: [`Artisan`, `Bourreau`, `Médecin`, `Trafiquant de cadavres`, `Vagabond`],
        stats: {
            CC: `+5%`,
            Ag: `+10%`,
            Int: `+10%`,
            FM: `+10%`,
            Soc: `+5%`,
            B: `+2`
        }
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
                `Soins des animaux`
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
                    options: [`Langue (bretonnien)`, `Langue (kislévien)`, `Langue (tiléen)`],
                    quantity: 1,
                },
            ],
        },
        talents: {
            mandatory: [
                `Maîtrise (armes à feu)`,
            ],
            choice: [
                {
                    options: [`Grand voyageur`, `Sur ses gardes`],
                    quantity: 1,
                }
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
        advanced: [`Bandit de grand chemin`, `Collecteur de taxes`, `Contrebandier`, `Hors-la-loi`, `Passeur`, `Patrouilleur`, `Pisteur`],
        stats: {
            CC: `+5%`,
            CT: `+10%`,
            Ag: `+10%`,
            FM: `+5%`,
            Soc: `+5%`,
            B: `+2`,
        }
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
                    options: [`Langue (bretonnien)`, `Langue (kislévien)`, `Langue (tiléen)`],
                    quantity: 1,
                },
                {
                    options: [`Commérage`, `Marchandage`],
                    quantity: 1,
                }
            ],
        },
        talents: {
            choice: [
                {
                    options: [`Réflexes éclair`, `Tireur d'élite`],
                    quantity: 1,
                }
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
        advanced: [`Bandit de grand chemin`, `Hors-la-loi`, `Passeur`, `Politicien`, `Sentinelle halfling`, `Soldat`, `Voleur`],
        stats: {
            CC: `+10%`,
            CT: `+5%`,
            F: `+5%`,
            E: `+10%`,
            Ag: `+5%`,
            FM: `+10%`,
            B: `+2`,
        }
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
                }
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
        access: [`Contrebandier`, `Kossar kislévite`, `Mercenaire`, `Mineur`, `Pilleur de tombes`, `Porterune`, `Ratier`],
        advanced: [`Contrebandier`, `Gladiateur`, `Pilleur de tombes`, `Porterune`, `Sergent`, `Vétéran`],
        stats: {
            CC: `+10%`,
            F: `+5%`,
            E: `+5%`,
            Ag: `+10%`,
            FM: `+5%`,
            A: `+1`,
            B: `+2`,
        },
        races: {
            name: `nain`,
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
                    options: [`Alphabet secret (voleur)`, `Langue (bretonnien)`, `Langue (kislévien)`],
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
                }
            ],
        },
        dotation: {
            mandatory: [
                `Armure légère (veste de cuir)`,
                `2 torches`,
            ],
            choice: [
                {
                    options: [`Mule et carriole`, `Bâteau à rames`],
                    quantity: 1,
                }
            ],
        },
        access: [`Aubergiste`, `Batelier`, `Chiffonnier`, `Cocher`, `Combattant des tunnels`, `Ingénieur`, `Marin`, `Matelot`, `Mercanti`, `Mineur`, `Passeur`, `Régisseur`],
        advanced: [`Batelier`, `Charlatan`, `Combattant des tunnels`, `Marin`, `Passeur`, `Receleur`, `Voleur`],
        stats: {
            CC: `+5%`,
            CT: `+5%`,
            Ag: `+10%`,
            Int: `+10%`,
            Soc: `+10%`,
            B: `+2`,
        }
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
            mandatory: [
                `Coups assomants`,
                `Désarmement`,
            ],
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
        advanced: [`Bourreau`, `Garde du corps`, `Gladiateur`, `Mercenaire`, `Racketteur`],
        stats: {
            CC: `+10%`,
            F: `+5%`,
            E: `+5%`,
            FM: `+5%`,
            Soc: `+5%`,
            A: `+1`,
            B: `+2`,
        }
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
            mandatory: [
                `Coups puissants`,
                `Maîtrise (armes d'escrime)`,
                ``,
            ],
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
            mandatory: [
                `Beaux atours`,
                `Parfum`,
                `Potion de soins`,
            ],
            choice: [
                {
                    options: [`Fleuret`, `Rapière`],
                    quantity: 1,
                }
            ],
        },
        access: [`aucun`],
        advanced: [`Bandit de grand chemin`, `Duelliste`, `Escroc`, `Garde du corps`, `Spadassin`],
        stats: {
            CC: `+15%`,
            F: `+5%`,
            E: `+5%`,
            Ag: `+10%`,
            Int: `+5%`,
            A: `+1`,
            B: `+2`,
        }
    },
    {
        name: ``,
        description: ``,
        skills: {
            mandatory: [
                ``,
            ],
            choice: [
                {
                    options: [``, ``],
                    quantity: 1,
                }
            ],
        },
        talents: {
            mandatory: [
                ``,
            ],
            choice: [
                {
                    options: [``, ``],
                    quantity: 1,
                }
            ],
        },
        dotation: {
            mandatory: [
                ``,
            ],
            choice: [
                {
                    options: [``, ``],
                    quantity: 1,
                }
            ],
        },
        access: [],
        advanced: [],
        stats: {
            CC: `+5%`,
            CT: `+5%`,
            Ag: `+5%`,
            Int: `+10%`,
            Soc: `+10%`,
            B: `+2`,
        }
    },

];


export { careers };