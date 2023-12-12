const talents = [

    {
        name: `Acrobatie équestre`,
        description: `Vous êtes capable de prouesses quand vous êtes à cheval. Vous pouvez faire de l'équilibre sur une monture lancée au galop, sauter d'un cheval sur un autre, etc. Dans les circonstances les plus extrêmes, il vous suffit de réussir un test d'Équitation, et même alors, vous bénéficiez d'un bonus de +10%.`,
    },
    {
        name: `Acuité auditive`,
        description: `Vous disposez d'une ouïe exceptionnelle. Vous bénéficiez d'un bonus de +20% aux tests de Perception impliquant l'ouïe.`,
    },
    {
        name: `Acuité visuelle`,
        description: `Vous avez des yeux de lynx.Vous bénéficiez d'un bonus
        de +10% aux tests de Perception liés à la vue et aux tests de Lecture sur
        les lèvres.`,
    },
    {
        name: `Adresse au tir`,
        description: `Vous visez avec une précision stupéfiante. Lors d'un
        combat, si vous recourez à l'action visée, votre prochaine attaque à
        distance bénéficie d'un bonus de +20% en Capacité de Tir au lieu
        de +10%.`,
    },
    {
        name: `Ambidextre`,
        description: `Vous savez parfaitement vous servir de vos deux mains.
        Vous ne subissez pas le malus de -20% en CC ou en CT quand vous
        utilisez une arme avec votre main non directrice.`,
    },
    {
        name: `Armes naturelles`,
        description: `: Vous avez des griffes ou des dents pointues qui vous
        permettent de déchirer les chairs de vos adversaires. Quand vous
        réalisez une attaque à mains nues, on considère que vous maniez une
        arme à une main.Vous ne pouvez pas parer à l'aide de vos armes naturelles. Évidemment, vous ne pouvez pas non plus être désarmé.`,
    },
    {
        name: `Calcul mental`,
        description: `Vous avez un don pour les chiffres, et vous pouvez
        trouver la solution de presque n'importe quel problème mathématique, du moment qu'on vous laisse un peu de temps.Vous bénéficiez
        d'un bonus de +10% aux tests de Jeu et d'Orientation, ainsi que d'un
        bonus de +20% aux tests de Perception liés à une estimation.`,
    },
    {
        name: `Camouflage rural`,
        description: `Vous êtes parfaitement dans votre élément dans la nature.Vous bénéficiez d'un bonus de +10% aux tests de Déplacement silencieux et de Dissimulation en milieu rural.`,
    },
    {
        name: `Camouflage souterrain`,
        description: `Les profondeurs de la terre sont votre second foyer. Vous bénéficiez d'un bonus de +10% aux tests de Déplacement silencieux et de Dissimulation dans les environnements souterrains.`,
    },
    {
        name: `Camouflage urbain`,
        description: `Vous êtes à l'aise dans la rue comme un chat de gouttière.Vous bénéficiez d'un bonus de +10% aux tests de Déplacement silencieux et de Dissimulation en milieu urbain.`,
    },
    {
        name: `Chance`,
        description: `La chance vous sourit.Au moment le plus improbable, la situation tourne à votre avantage. Vous gagnez 1 point de Fortune supplémentaire chaque jour.`,
    },
    {
        name: `Chirurgie`,
        description: `Vous êtes au courant des derniers progrès en matière de soins médicaux. Vous bénéficiez d'un bonus de +10% aux tests de Soins. Si vous traitez un patient Gravement blessé, un test réussi lui permet de récupérer 2 points de Blessures au lieu de 1. Si le personnage soigné risque de perdre un membre à la suite d'un coup critique, vous le faites également bénéficier d'un bonus de +20% au test d'Endurance permettant d'éviter l'amputation.`,
    },
    {
        name: `Code de la rue`,
        description: `Vous savez comment vous conduire dans la rue. Vous bénéficiez d'un bonus de +10% aux tests de Charisme et de Commérage dans tous vos rapports avec le milieu du crime.`,
    },
    {
        name: `Combat de rue`,
        description: `Vous avez appris à vous battre dans la rue.Vos attaques à mains nues bénéficient d'un bonus de +10% en Capacité de Combat. Par ailleurs, vous bénéficiez d'un bonus de +1 aux jets de dégâts de telles attaques.`,
    },
    {
        name: `Combattant virevoltant`,
        description: `Vous êtes exceptionnellement agile au combat. Vous pouvez utiliser l'action de saut en tant que demi-action et la portée de tous vos sauts augmente de 1 mètre.`,
    },
    {
        name: `Connaissance des pièges`,
        description: `Vous êtes un expert en pièges. Vous bénéficiez d'un bonus de +10% aux tests de Crochetage et de Perception liés à la localisation et au désamorçage des pièges.`,
    },
    {
        name: `Contorsionniste`,
        description: `Vous pouvez déformer votre corps au-delà des limites physiques possibles au commun des mortels. Vous bénéficiez d'un bonus de +10% aux tests d'Expression artistique en rapport avec ce talent, ainsi que d'un bonus de +20% aux tests d'Agilité destinés à vous libérer de liens serrés, à passer par de petites ouvertures, etc.`
    },
    {
        name: `Coups assommants`,
        description: `Quand vous réussissez une attaque de corps à corps, vous pouvez tenter d'assommer votre adversaire au lieu d'infliger des dégâts. Vous devez tout d'abord effectuer un test de Force. En cas de succès, votre adversaire doit effectuer un test d'Endurance bénéficiant d'un bonus de +10% pour chaque PA à la tête. S'il échoue, votre adversaire est assommé pour 1d10 rounds. Les personnages assommés ne peuvent entreprendre aucune action et ne peuvent pas esquiver.`,
    },
    {
        name: `Coups précis`,
        description: `Vous êtes passé maître dans l'art de frapper le point faible de l'ennemi. La valeur de vos coups critiques augmente de +1.`,
    },
    {
        name: `Coups puissants`,
        description: `Vous savez utiliser les armes de corps à corps pour infliger un maximum de dégâts. Vous bénéficiez d'un bonus de +1 aux jets de dégâts avec les armes de corps à corps.`,
    },
    {
        name: `Course à pied`,
        description: `Vous bénéficiez d'un bonus permanent de +1 en Mouvement. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Désarmement`,
        description: `Quand vous réussissez une attaque au corps à corps, vous pouvez tenter de désarmer votre adversaire au lieu de lui infliger des dégâts. Un test d'Agilité opposé est nécessaire. Si vous l'emportez, votre adversaire est désarmé et son arme tombe au sol. Elle peut être ramassée au prix de l'action dégainer. Si c'est l'adversaire qui l'emporte, il conserve son arme.`,
    },
    {
        name: `Dur à cuire`,
        description: `Vous bénéficiez d'un bonus permanent de +1 en Blessures. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Dur en affaires`,
        description: `Vous avez du bagou et le sens des affaires, et vous savez obtenir le maximum d'une transaction. Vous bénéficiez d'un bonus de +10% aux tests d'Évaluation et de Marchandage.`,
    },
    {
        name: `Effrayant`,
        description: `Vous avez une apparence effrayante. Vous provoquez la Peur.`,
    },
    {
        name: `Éloquence`,
        description: `Vous savez comment émouvoir les foules. Le nombre de personnes que vous pouvez affecter à l'aide de la compétence Charisme est multiplié par 10.`,
    },
    {
        name: `Étiquette`,
        description: `Vous connaissez bien les mœurs de la haute société. Vous bénéficiez d'un bonus de +10% aux tests de Charisme et de Commérage quand vous êtes face à des membres de la noblesse. Ce bonus s'applique également à toutes les situations où la connaissance de l'étiquette est importante (comme se faire passer pour un noble avec la compétence Déguisement, par exemple).`,
    },
    {
        name: `Force accrue`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Force. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Frénésie`,
        description: `Vous pouvez entrer dans une véritable rage destructrice. Vous devez passer 1 round à vous mettre en condition (en hurlant, en mordant votre bouclier, etc.). Au round suivant, vous perdez tout contrôle de vous-même et entrez dans une rage meurtrière, bénéficiant ainsi d'un bonus de +10% en Force et en Force Mentale, mais subissant dans le même temps un malus de –10% en Capacité de Combat et en Intelligence. Vous devez attaquer l'ennemi le plus proche au corps à corps, toutes vos attaques doivent être des attaques brutales ou des charges, et vous ne pouvez ni fuir ni battre en retraite. Vous restez dans cet état de rage jusqu'à la fin du combat.`,
    },
    {
        name: `Fuite`,
        description: `Quand votre vie est en jeu, vous êtes capable de pointes de vitesse incroyables. Quand vous fuyez un combat ou un grave danger, vous bénéficiez d'un bonus de +1 en Mouvement pendant 1d10 rounds.`,
    },
    {
        name: `Fureur vengeresse`,
        description: `votre peuple a accumulé une rancune considérable à l'encontre des diverses races gobelinoïdes. Leurs exactions vous emplissent d'une telle rage que vous bénéficiez d'un bonus de +5% en Capacité de Combat quand vous attaquez des orques, des gobelins ou des hobgobelins.`,
    },
    {
        name: `Grand voyageur`,
        description: `Vos longs voyages ont façonné votre expérience. Vous bénéficiez d'un bonus de +10% aux tests de Connaissances générales et de Langue.`,
    },
    {
        name: `Guerrier né`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Capacité de Combat. Modifiez votre profil de départ en conséquance.`,
    },
    {
        name: `Harmonie aethyrique`,
        description: `Vous êtes en harmonie avec l'Aethyr et manipulez plus facilement les vents de magie. Vous bénéficiez d'un bonus de +10% aux tests de Focalisation et de Sens de la magie.`,
    },
    {
        name: `Imitation`,
        description: `Vous avez une bonne oreille en ce qui concerne les voix et les accents, et vous savez les reproduire fidèlement. Vous bénéficiez d'un bonus de +10% aux tests de Déguisement si vous devez imiter une voix dans le but de vous faire passer pour autrui, aux tests d'Expression artistique (acteur, bouffon, clown, comédien et conteur) et aux tests de Langue quand vous essayez de faire croire que vous êtes originaire d'un autre pays en en parlant la langue.`,
    },
    {
        name: `Incantation de bataille`,
        description: `Vos prières vous aident à lancer des sorts facilement même si vous portez une armure. Le malus au jet d'incantation est réduit de 3 points quand vous lancez des sorts divins tout en portant une armure.`,
    },
    {
        name: `Inspiration divine`,
        description: `Votre dévouement envers votre divinité est tel que vos prières peuvent donner lieu à des miracles et de puissants effets magiques. L'Inspiration divine est un talent particulier car il n'est pas unique, il en existe différentes formes. Toutefois, la concentration et la difficulté des études spirituelles nécessaires sont telles qu'on ne peut en maîtriser qu'une seule forme. Chaque talent d'Inspiration divine correspond à la maîtrise d'une forme de magie, cette spécialité étant indiquée entre parenthèses. Par exemple, Inspiration divine (Sigmar) est différent d'Inspiration divine (Ulric). Les Inspirations divines les plus répandues correspondent aux divinités majeures du Vieux Monde: Grungni, Manann, Morr, Myrmidia, Ranald, Sigmar, Shallya, Taal/Rhya, Ulric, et Verena. Si vous connaissez une Inspiration divine, vous pouvez tenter de lancer n'importe quel sort dépendant de cette forme de magie. N'oubliez pas que vous ne pouvez maîtriser qu'un seul domaine divin à la fois.`,
    },
    {
        name: `Intelligent`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Intelligence. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Intrigant`,
        description: `Vous êtes passé maître dans l'art des intrigues personnelles. Vous bénéficiez d'un bonus de +10% aux tests de Charisme liés aux intrigues et aux tests de Force Mentale destinés à résister au Charisme d'autrui.`,
    },
    {
        name: `Lévitation`,
        description: `Vous pouvez voler sur une courte distance au-dessus du sol.`,
    },
    {
        name: `Linguistique`,
        description: `Vous avez une affinité particulière pour les langues étrangères. Vous bénéficiez d'un bonus de +10% aux tests de Lire/écrire et de Langue.`,
    },
    {
        name: `Lutte`,
        description: `Le pugilat et les prises n'ont pas de secret pour vous. Vous pouvez porter des attaques à mains nues avec un bonus de +10% en Capacité de Combat quand vous tentez une prise. De plus, vous bénéficiez d'un bonus de +10% à vos tests de Force liés à une prise.`,
    },
    {
        name: `Magie commune`,
        description: `Vous connaissez la plus élémentaire des formes de magie. Comme Science de la magie, il ne s'agit pas d'une compétence unique, mais d'un ensemble de compétences. Chaque talent de Magie commune correspond à la maîtrise d'une forme de magie, cette spécialité étant indiquée entre parenthèses. Par exemple, Magie commune (occulte) est différent de Magie commune (divine). Les formes de Magie commune les plus répandues sont les suivantes: divine, occulte et vulgaire. Si vous avez un talent de Magie commune et au moins 1 dans la caractéristique de Magie, vous pouvez tenter de lancer n'importe quel sort dépendant de cette forme de magie.`,
    },
    {
        name: `Magie mineure`,
        description: `Vous connaissez un sort commun à tous les types de magie. La Magie mineure est un talent particulier. En réalité, il en existe plusieurs formes, chacune devant être acquise individuellement. Chaque talent de Magie mineure représente un sort séparé, dont le nom apparaît entre parenthèses. Par exemple, Magie mineure (dissipation) est différent de Magie mineure (marche dans les airs). Les sorts de Magie mineure les plus répandus sont les suivants: alarme magique, arme consacrée, armure aethyrique, dissipation, manipulation distante, marche dans les airs, silence et verrou magique.`,
    },
    {
        name: `Magie noire`,
        description: `Vous pouvez manipuler le Dhar (la magie noire) afin d'alimenter vos sorts. L'utilisation de la magie noire confère davantage de pouvoir, mais elle est bien plus dangereuse. Quand vous lancez un sort, vous pouvez choisir d'utiliser l'énergie du Dhar pour l'alimenter. Quand vous effectuez votre jet d'incantation pour un sort de Magie noire, lancez 1d10 supplémentaire et ignorez le dé qui donne le résultat le plus faible. Cependant, tous les dés sont comptabilisés pour la Malédiction de Tzeentch. Par exemple, un sorcier qui a 2 en Magie et qui jette un sort de Magie noire lance 3d10 et garde les deux meilleurs résultats pour son jet d'incantation. Toutefois, les 3 dés sont utilisés pour déterminer la Malédiction de Tzeentch. Si notre sorcier obtient trois 6, le jet d'incantation est égal à 12 (6+6), mais le sort déclenche un écho majeur du Chaos. Vous devez utiliser la Magie noire quand vous lancez un sort lié à un Sombre savoir.`,
    },
    {
        name: `Magie vulgaire`,
        description: `Vous êtes un lanceur de sorts autodidacte qui a réussi à comprendre comment manipuler la magie à force d'expériences et d'erreurs. Vous pouvez lancer des sorts de Magie commune (vulgaire) sans avoir la compétence Langage mystique. Le talent Magie commune (vulgaire) est cependant indispensable. Vous lancez 1d10 supplémentaire quand vous jetez un sort. Ce dernier ne s'ajoute pas à votre jet d'incantation, mais compte pour ce qui est de la Malédiction de Tzeentch. Une fois que vous apprenez un Langage mystique, vous n'avez plus besoin de lancer ce dé supplémentaire.`,
    },
    {
        name: `Mains agiles`,
        description: `Vous êtes passé maître dans l'art de toucher des adversaires au corps à corps lorsque vous lancez des sorts. Vous bénéficiez d'un bonus de +20% en Capacité de Combat quand vous lancez des sorts de contact.`,
    },
    {
        name: `Maître artilleur`,
        description: `Pour vous, le temps de rechargement des armes à poudre est réduit d'une demi-action. Si vous disposez aussi du talent Rechargement rapide, cet avantage est cumulable (ce qui réduit le temps de rechargement des armes à poudre d'une action complète).`,
    },
    {
        name: `Maîtrise (variable)`,
        description: `Vous êtes capable d'utiliser un type d'armes nécessitant une formation particulière. Le talent Maîtrise est inhabituel dans la mesure où il n'est pas unique, il en existe différentes formes, chacune devant être acquise séparément. Chaque talent de Maîtrise correspond à un type d'armes indiqué entre parenthèses. Par exemple, Maîtrise (armes à deux mains) est un talent différent de Maîtrise (armes de jet). Les types de Maîtrise les plus répandus sont les suivants: arbalètes, arcs longs, armes à feu, armes de cavalerie, armes de jet, armes de parade, armes d'escrime, armes lourdes, armes mécaniques, armes paralysantes, fléaux et lance-pierres.`,
    },
    {
        name: `Méditation`,
        description: `Vous pouvez vous concentrer et ignorer le monde qui vous entoure. Quand vous pratiquez la magie rituelle, vous bénéficiez au jet d'incantation d'un bonus égal à votre caractéristique de Magie.`,
    },
    {
        name: `Menaçant`,
        description: `Votre taille, votre aspect ou votre comportement vous confèrent une présence imposante. Vous bénéficiez d'un bonus de +10% aux tests d'Intimidation et de Torture. `,
    },
    {
        name: `Mort-vivant`,
        description: `Vous êtes un mort-vivant ramené à la vie par la nécromancie. Vous êtes immunisé contre la Peur, la Terreur, les coups assommants, le poison, les maladies et tous les sorts, compétences et effets relatifs à la manipulation des émotions et de l'esprit.`,
    },
    {
        name: `Orateur né`,
        description: `Vous maîtrisez si bien l'art oratoire que vous pouvez enflammer des foules entières. Le nombre de personnes que vous pouvez affecter à l'aide de la compétence Charisme est multiplié par 100. Vous devez disposer du talent Éloquence pour avoir droit à celui-ci.`,
    },
    {
        name: `Parade éclair`,
        description: `Quand vous effectuez une attaque rapide, vous pouvez renoncer à l'une de vos attaques pour bénéficier d'une parade gratuite. Si vous avez 3 en Attaques, par exemple, vous avez droit à deux attaques et une parade avec cette attaque rapide. La limite d'une parade par round doit cependant toujours être respectée.`,
    },
    {
        name: `Projectile puissant`,
        description: `Vous êtes capable d'infliger un maximum de dégâts à l'aide de vos projectiles magiques. Vous bénéficiez d'un bonus de +1 aux jets de dégâts des sorts de projectiles magiques.`,
    },
    {
        name: `Rechargement rapide`,
        description: `Vous rechargez vos armes à distance avec aisance. Le temps de rechargement des armes de tir est réduit d'une demiaction en ce qui vous concerne. Par exemple, vous pouvez recharger une arbalète au prix d'une demi-action, alors qu'il faut normalement une action complète pour y parvenir. Si le temps de rechargement de l'arme est déjà d'une demi-action, il s'agit désormais d'une action gratuite en ce qui vous concerne. Vous rechargez de telles armes presque instantanément, ce qui vous permet de faire des attaques rapides grâce à elles.`,
    },
    {
        name: `Réflexes éclairs`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Agilité. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Résistance accrue`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Endurance. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Résistance à la magie`,
        description: `Vous disposez d'une résistance naturelle contre le pouvoir de la magie. Vous bénéficiez d'un bonus de +10% aux tests de Force Mentale visant à résister à la magie.`,
    },
    {
        name: `Résistance au chaos`,
        description: `Vous disposez d'une résistance naturelle contre le pouvoir corrupteur du Chaos. Vous bénéficiez d'un bonus de +10% aux tests de Force Mentale visant à résister à la magie et aux autres effets du Chaos. De plus, vous êtes immunisé contre les mutations qu'il provoque. Toutefois, vous ne pourrez jamais devenir un lanceur de sorts, quelle que soit la forme de magie utilisée. `,
    },
    {
        name: `Résistance aux maladies`,
        description: `Votre constitution vous immunise contre la plupart des maladies. Vous bénéficiez d'un bonus de +10% aux tests d'Endurance destinés à résister aux maladies`,
    },
    {
        name: `Résistance aux poisons`,
        description: `Votre robustesse vous permet de résister aux effets de nombreux poisons. Vous bénéficiez d'un bonus de +10% aux tests d'Endurance destinés à résister aux poisons.`,
    },
    {
        name: `Robuste`,
        description: `Vous êtes musclé et résistant. Vous ne subissez pas de malus en Mouvement quand vous portez une armure de plaques complète (armure lourde).`,
    },
    {
        name: `Sain d'esprit`,
        description: `Votre détermination est votre rempart contre les chocs psychologiques. Vous n'avez pas besoin d'effectuer de test de Folie avant d'avoir 8 points de Folie (PF) et vous n'en gagnez pas automatiquement une avant d'avoir 14 PF.`,
    },
    {
        name: `Sang-froid`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Force Mentale. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Sans peur`,
        description: `Vous êtes assez brave ou assez fou pour ne pas connaître la peur. Vous êtes immunisé contre la Peur et subissez la Terreur comme s'il s'agissait simplement de Peur. Vous êtes également immunisé contre les effets de la compétence Intimidation et du talent Troublant.`,
    },
        {
        name: `Sang-froid`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Force Mentale. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Savoir-faire nain`,
        description: `Les membres de votre race sont des artisans nés. Vous bénéficiez d'un bonus de +10% aux tests pratiqués conjointement avec les compétences de Métier suivantes: arquebusier, brasseur, cristallier, fabricant d'armes, fabricant d'armures, forgeron, maçon et mineur.`,
    },
    {
        name: `Science de la magie`,
        description: `Vous avez étudié l'une des traditions magiques dans l'un des huit célèbres collèges de magie de l'Empire. Science de la magie est un talent particulier car il n'est pas unique. Il existe différentes formes de ce talent. La concentration et la difficulté des études nécessaires sont telles qu'on ne peut en maîtriser qu'une seule forme. Chaque talent de Science de la magie correspond à la maîtrise d'une forme de magie, cette spécialité étant indiquée entre parenthèses. Par exemple, Science de la magie (bête) est différent de Science de la magie (feu). Les formes de Science de la magie les plus répandues sont connues sous le nom des huit ordres de magie. Ces domaines sont les suivants: de la bête, des cieux, du feu, de la lumière, du métal, de la mort, de l'ombre et de la vie. Si vous maîtrisez l'un de ces savoirs occultes, vous pouvez tenter de lancer n'importe quel sort dépendant de cette forme de magie. N'oubliez pas que vous ne pouvez maîtriser qu'un seul domaine de magie à la fois. `,
    },
    {
        name: `Sens aiguisés`,
        description: `Vos sens sont naturellement aiguisés. Vous bénéficiez d'un bonus de +20% aux tests de Perception`,
    },
    {
        name: `Sens de l'orientation`,
        description: `Vous disposez d'un sens de l'orientation naturel très sûr. Vous vous perdez rarement et savez toujours dans quelle direction se trouve le nord. Vous bénéficiez d'un bonus de +10% aux tests d'Orientation.`,
    },
    {
        name: `Sixème sens`,
        description: `Vous êtes parcouru d'une étrange sensation quand vous êtes en danger, un avertissement qui vous sauve parfois la mise avant que le pire n'advienne. Quand le danger est proche, le MJ effectue un test de Force Mentale secret. En cas de succès, il peut vous dire que vous avez un mauvais pressentiment ou que vous vous sentez observé. Ce talent peut vous éviter d'être pris par surprise tandis que tous vos alliés le seront.`,
    },
    {
        name: `Sociable`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Sociabilité. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Sombre savoir`,
        description: `Vous vous êtes laissé séduire par les arts interdits de la sorcellerie. Sombre savoir est un talent particulier car il n'est pas unique. Il existe différentes formes de ce talent. La concentration et la difficulté des études nécessaires sont telles qu'on ne peut en maîtriser qu'une seule forme. Chaque talent de Sombre savoir correspond à la Antoine Haon (order #1505278) 7 102 Chapitre IV : Compétences & talents maîtrise d'une forme de magie, cette spécialité étant indiquée entre parenthèses. Par exemple, Sombre savoir (Chaos) est différent de Sombre savoir (nécromancie). Les Sombres savoirs les plus répandus sont le Chaos et la nécromancie. De futurs suppléments en décriront de nouveaux en détail, parmi lesquels ceux des puissances du Chaos: Nurgle, Slaanesh et Tzeentch. Si vous connaissez un Sombre savoir, vous pouvez tenter de lancer n'importe quel sort dépendant de cette forme de magie.`,
    },
    {
        name: `Sur ses gardes`,
        description: `Vos réflexes aiguisés vous permettent de dégainer rapidement vos armes et d'autres objets. Une fois par round, vous pouvez utiliser l'action dégainer en tant qu'action gratuite.`,
    },
    {
        name: `Talent artistique`,
        description: `Vous avez une âme d'artiste. Vous bénéficiez d'un bonus de +20% aux tests de Métier (artiste) et aux tests d'Évaluation concernant les œuvres d'art.`,
    },
    {
        name: `Terrifiant`,
        description: ` La simple vue de votre visage monstrueux fait fuir l'ennemi. Vous provoquez la Terreur.`,
    },
    {
        name: `Tir de précision`,
        description: `Vous savez trouver la faille dans l'armure de vos ennemis. Quand vous réussissez une attaque à distance, vous pouvez ignorer 1 point d'Armure. Si votre cible n'a pas d'armure, ce talent n'a aucun effet.`,
    },
    {
        name: `Tir en puissance`,
        description: `Vous êtes capable d'infliger un maximum de dégâts à l'aide de vos tirs. Vous bénéficiez d'un bonus de +1 aux jets de dégâts des armes de tir.`,
    },
    {
        name: `Tireur d'élite`,
        description: `Vous bénéficiez d'un bonus permanent de +5% en Capacité de Tir. Modifiez votre profil de départ en conséquence.`,
    },
    {
        name: `Troublant`,
        description: `Votre simple présence dérange vos adversaires. Vos ennemis doivent réussir un test de Force Mentale quand ils vous voient pour éviter de subir un malus de -10% en Capacité de Combat et en Capacité de Tir. Ils peuvent retenter ce test à chaque round jusqu'à ce qu'ils le réussissent ou que vous soyez hors de vue.`,
    },
    {
        name: `Valeureux`,
        description: `Vous êtes d'une bravoure exceptionnelle. Vous bénéficiez d'un bonus de +10% aux tests de Peur et de Terreur, ainsi qu'aux tests de Force Mentale visant à résister à une tentative d'Intimidation.`,
    },
    {
        name: `Vision nocturne`,
        description: `Vous voyez parfaitement clair dans l'obscurité naturelle jusqu'à une distance de 30 mètres. Ce talent ne fonctionne pas dans l'obscurité totale et requiert l'équivalent de la lumière des étoiles au moins.`,
    },
    {
        name: `Vol`,
        description: `Vous savez voler.`,
    },
];

export { talents };