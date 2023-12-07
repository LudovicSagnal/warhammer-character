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
        name: "Incantation de bataille",
        description: "Vos prières vous aident à lancer des sorts facilement même si vous portez une armure. Le malus au jet d'incantation est réduit de 3 points quand vous lancez des sorts divins tout en portant une armure.",
    },
    {
        name: "Inspiration divine",
        description: "Votre dévouement envers votre divinité est tel que vos prières peuvent donner lieu à des miracles et de puissants effets magiques. L'Inspiration divine est un talent particulier car il n'est pas unique, il en existe différentes formes. Toutefois, la concentration et la difficulté des études spirituelles nécessaires sont telles qu'on ne peut en maîtriser qu'une seule forme. Chaque talent d'Inspiration divine correspond à la maîtrise d'une forme de magie, cette spécialité étant indiquée entre parenthèses. Par exemple, Inspiration divine (Sigmar) est différent d'Inspiration divine (Ulric). Les Inspirations divines les plus répandues correspondent aux divinités majeures du Vieux Monde: Grungni, Manann, Morr, Myrmidia, Ranald, Sigmar, Shallya, Taal/Rhya, Ulric, et Verena. Si vous connaissez une Inspiration divine, vous pouvez tenter de lancer n'importe quel sort dépendant de cette forme de magie. N'oubliez pas que vous ne pouvez maîtriser qu'un seul domaine divin à la fois.",
    },
    {
        name: "Intelligent",
        description: "Vous bénéficiez d'un bonus permanent de +5% en Intelligence. Modifiez votre profil de départ en conséquence.",
    },
    {
        name: "Intrigant",
        description: "Vous êtes passé maître dans l'art des intrigues personnelles. Vous bénéficiez d'un bonus de +10% aux tests de Charisme liés aux intrigues et aux tests de Force Mentale destinés à résister au Charisme d'autrui.",
    },
    {
        name: ``,
        description: ``,
    },
];

export { talents };