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
        dotation: [`Armure légère (veste de cuir)`, `vêtements confortables`, `2d10 tracts de diverses causes`],
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
        talents: [],
        dotation: [ `Bâton`, `sac à dos`, `livre imprimé` ],
        access: [ `Érudit`, `Étudiant`, `Scribe`, `Sorcier de village` ],
        advanced: [ `Compagnon sorcier`, `Érudit`, `Scribe` ],
        stats: {
            Ag: `+5%`,
            Int: `+10%`,
            FM: `+15%`,
            Soc: `+5%`,
            B: `+2`,
            Mag: `+1`,
        }
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
        dotation: [ `Armure légère (gilet de cuir)`, `1d10 co`],
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
        description: ``,
        skills: {
            mandatory: [
            ],
            choice: [
                {
                    options: [],
                    quantity: 1
                },
            ]
        },
        talents: {
            mandatory: [
            ],
            choice: [
                {
                    options: [],
                    quantity: 1
                },
            ]
        },
        dotation: [],
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
    {
        name: ``,
        description: ``,
        skills: [],
        talents: [],
        dotation: [],
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
    {
        name: ``,
        description: ``,
        skills: [],
        talents: [],
        dotation: [],
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