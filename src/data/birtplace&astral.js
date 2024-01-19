
//////////////////////////////////   Human   /////////////////////////////////

const birthplace_human = [

    //////// Empire
    {name: 'Altdorf', origin: 'empire'},
    {name: 'Nuln', origin: 'empire'},
    {name: 'Middenheim', origin: 'empire'},
    {name: 'Talabheim', origin: 'empire'},
    {name: 'Averheim', origin: 'empire'},
    {name: 'Salzenmund', origin: 'empire'},
    {name: 'Hergig', origin: 'empire'},
    {name: 'Wissenburg', origin: 'empire'},
    {name: 'Bechafen', origin: 'empire'},
    {name: 'Dietershafen ', origin: 'empire'},
    {name: 'Ubersreik ', origin: 'empire'},
    {name: 'Grunburg ', origin: 'empire'},
    {name: 'Kemperbad ', origin: 'empire'},
    {name: 'Carroburg ', origin: 'empire'},
    {name: 'Aarnau ', origin: 'empire'},
    {name: 'Norden ', origin: 'empire'},
    {name: 'Bokenhof ', origin: 'empire'},
    {name: 'Ferlangen ', origin: 'empire'},
    {name: 'Wolfenburg ', origin: 'empire'},
    {name: 'Grenzburg ', origin: 'empire'},
    {name: 'Grunwald ', origin: 'empire'},
    {name: 'Wurtbad ', origin: 'empire'},
    {name: 'Pfeildorf ', origin: 'empire'},
    {name: 'Gorssel ', origin: 'empire'},

    /////// Bretonnia
    {name: 'Couronne', origin: 'bretonien'},
    {name: 'Lyonesse', origin: 'bretonien'},
    {name: 'Bordeleaux', origin: 'bretonien'},
    {name: 'Larret', origin: 'bretonien'},
    {name: 'Quenelles', origin: 'bretonien'},
    {name: 'Parravon ', origin: 'bretonien'},
    {name: 'Brionne', origin: 'bretonien'},
    {name: 'Gasconnie', origin: 'bretonien'},
    {name: 'Montfort', origin: 'bretonien'},
    {name: 'Gisoreux', origin: 'bretonien'},
    {name: 'Bastogne', origin: 'bretonien'},
    {name: 'Aquitaine', origin: 'bretonien'},
    {name: 'Moussillon', origin: 'bretonien'},
    {name: 'Salignac la Rouge', origin: 'bretonien'},
    {name: 'Embrun', origin: 'bretonien'},
    {name: 'Chinon', origin: 'bretonien'},
    {name: 'Derrevin Libre', origin: 'bretonien'},
    {name: 'Marguilles', origin: 'bretonien'},
    {name: `L'Anguille`, origin: 'bretonien'},

    //////////// Kislev /////////////
    {name: 'Kislev', origin: 'kislévite'},
    {name: 'Erengrad', origin: 'kislévite'},
    {name: 'Praag', origin: 'kislévite'},
    {name: 'Enisov', origin: 'kislévite'},
    {name: 'Murmagrad', origin: 'kislévite'},
    {name: 'Nekoltra', origin: 'kislévite'},
    {name: 'Krasicyno', origin: 'kislévite'},
    {name: 'Bolgasgrad', origin: 'kislévite'},
    {name: 'Volksgrad', origin: 'kislévite'},
    {name: 'Leblya', origin: 'kislévite'},

    //////////// Estalia /////////////
    {name: 'Magritta', origin: 'estalien'},
    {name: 'Bilbali', origin: 'estalien'},
    {name: 'Diamenterra', origin: 'estalien'},
    {name: 'Larhgoz', origin: 'estalien'},
    {name: 'Monteñas', origin: 'estalien'},
    {name: 'Nerja', origin: 'estalien'},
    {name: 'Zaragoz', origin: 'estalien'},
    {name: 'Geulata', origin: 'estalien'},
    {name: 'Aguilas', origin: 'estalien'},

    //////////// Tilea /////////////
    {name: 'Tobaro', origin: 'tiléen'},
    {name: 'Luccini', origin: 'tiléen'},
    {name: 'Pavona', origin: 'tiléen'},
    {name: 'Sartosa', origin: 'tiléen'},
    {name: 'Remas', origin: 'tiléen'},
    {name: 'Miragliano', origin: 'tiléen'},
    {name: 'Verezzo', origin: 'tiléen'},
    {name: 'Trantio', origin: 'tiléen'},
    {name: 'Urbino', origin: 'tiléen'},
    
    //////////// Norsca /////////////
    {name: 'Stromstaad', origin: 'norse'},
    {name: 'Aarvik', origin: 'norse'},
    {name: 'Olricstaad', origin: 'norse'},
    {name: 'Swerbog', origin: 'norse'},
    {name: 'Stavgard', origin: 'norse'},
    {name: 'Iskvard', origin: 'norse'},
    {name: 'Trolbo', origin: 'norse'},
    {name: 'Steinvik', origin: 'norse'},
    {name: 'Thorshafn', origin: 'norse'},
    {name: 'Skraevold', origin: 'norse'},
];

//////////////////////////////////   Elf   /////////////////////////////////

const birthplace_elf = [

    {name: 'Ulthuan'},
    {name: 'Forêt de Laurelorn'},
    {name: 'Athel Loren'},
    {name: 'Forêt de Reikwald'},
    {name: 'Grande Forêt'},
    {name: 'Altdorf'},
    {name: 'Marienburg'},
    {name: `L'Anguille`},
];

//////////////////////////////////   Dwarf   /////////////////////////////////

const birthplace_dwarf = [

    {name: 'Karak Norn'},
    {name: 'Karak Izor'},
    {name: 'Karak Hirn'},
    {name: 'Karak Kadrin'},
    {name: 'Karaz-a-Karak'},
    {name: 'Zhufbar'},
    {name: 'Barak Varr'},
];

///////////////////////////////////   Astral Signs //////////////////////////////

const astral_signs = [

    {name: `Wymund l'Anachorète`, desc: `Signe de l'Endurance`},
    {name: `La Grande Croix`, desc: `Signe de Clairvoyance`},
    {name: `Le Trai du Peintre`, desc: `Signe de Précision et de Perfection`},
    {name: `Gnuthus le Buffle`, desc: `Signe du Dévouement et de la Loyauté`},
    {name: `Dragomas le Dragon`, desc: `Signe de Bravoure`},
    {name: `Le Crépuscule`, desc: `Signe d'Illusion et de Mystère`},
    {name: `Le Fourreau de Grungni`, desc: `Signe des Armes et de la Guerre`},
    {name: `Mammit le Sage`, desc: `Signe de Sagesse`},
];

export { astral_signs, birthplace_dwarf, birthplace_elf, birthplace_human };