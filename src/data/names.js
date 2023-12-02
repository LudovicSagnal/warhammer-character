
/////////////////////////////////   HUMAN   ////////////////////////////////////

const firstnames_human = [

//Empire

    //male
    { value: 'Hans', origin: 'empire', gender: 'male' },
    { value: 'Luthor', origin: 'empire', gender: 'male' },
    //female
    { value: 'Hanna', origin: 'empire', gender: 'female' },
    { value: 'Frida', origin: 'empire', gender: 'female' },

//Bretonnia

    //male
    { value: 'Louis', origin: 'bretonien', gender: 'male' },
    { value: 'Louen', origin: 'bretonien', gender: 'male' },
    //female
    { value: 'Jeanne', origin: 'bretonien', gender: 'female' },
    { value: 'Marie', origin: 'bretonien', gender: 'female' },

//Estalia

    //male
    { value: 'Diego', origin: 'estalien', gender: 'male' },
    { value: 'Ramon', origin: 'estalien', gender: 'male' },
    //female
    { value: 'Consuela', origin: 'estalien', gender: 'female' },
    { value: 'Maria', origin: 'estalien', gender: 'female' },

//Tilea

    //male
    { value: 'Vincenzo', origin: 'tiléen', gender: 'male' },
    { value: 'Giovanni', origin: 'tiléen', gender: 'male' },
    //female
    { value: 'Lucia', origin: 'tiléen', gender: 'female' },
    { value: 'Giulia', origin: 'tiléen', gender: 'female' },

//Kislev

    //male
    { value: 'Ivan', origin: 'kislévite', gender: 'male' },
    { value: 'Dmitri', origin: 'kislévite', gender: 'male' },
    //female
    { value: 'Lena', origin: 'kislévite', gender: 'female' },
    { value: 'Olga', origin: 'kislévite', gender: 'female' },
    { value: 'Ekatarina', origin: 'kislévite', gender: 'female' },

//Norsca

    //male
    { value: 'Björn', origin: 'norse', gender: 'male' },
    { value: 'Hakkon', origin: 'norse', gender: 'male' },
    { value: 'Ludvik', origin: 'norse', gender:'male'},
    //female
    { value: 'Astrid', origin: 'norse', gender: 'female' },
    { value: 'Helga', origin: 'norse', gender: 'female' },

];
const names_human = [

//Empire

    { value: 'Albrecht', origin: 'empire' },
    { value: 'Herzog', origin: 'empire' },
    { value: 'Ehrhard', origin: 'empire' },
    { value: 'Baumann', origin: 'empire' },
    { value: 'Atzwig', origin: 'empire' },
    { value: 'Allenstag', origin: 'empire' },
    { value: 'Atzwig', origin: 'empire' },
    { value: 'Vogel', origin: 'empire' },

//Bretonnia

    { value: 'Louis', origin: 'bretonien' },
    { value: 'Louen', origin: 'bretonien' },
    { value: 'Jeanne', origin: 'bretonien' },
    { value: 'Marie', origin: 'bretonien' },

//Kislev

    { value: 'Ivan', origin: 'kislévite' },
    { value: 'Dmitri', origin: 'kislévite' },
    { value: 'Lena', origin: 'kislévite' },
    { value: 'Olga', origin: 'kislévite' },

//Norsca

    //male
    { value: 'Björn', origin: 'norse' },
    { value: 'Hakkon', origin: 'norse' },
    { value: 'Astrid', origin: 'norse' },
    { value: 'Helga', origin: 'norse' },

];

/////////////////////////////////////   ELF   //////////////////////////////////////

const firstnames_elf = [

    //male
    { value: 'Torrendil', gender: 'male' },
    { value: 'Lorenor', gender: 'male' },
    { value: 'Torrendil', gender: 'male' },
    //female
    { value: 'Liandra', gender: 'female' },
    { value: 'Ilona', gender: 'female' },
];

const names_elf = [

    { value: 'Ailevive' },
    { value: 'Vertefeuille' },
    { value: 'Sombrebois' },
    { value: 'Lunepâle' },
];
/////////////////////////////////////   DWARF   //////////////////////////////////////

const firstnames_dwarf = [

    //male
    { value: 'Bardin', gender: 'male' },
    { value: 'Brokk', gender: 'male' },
    { value: 'Durak', gender: 'male' },
    //female
    { value: 'Anika', gender: 'female' },
    { value: 'Dagmar', gender: 'female' },
    { value: 'Sigrun', gender: 'female' },
];

const names_dwarf = [

    { value: 'Borlokson' },
    { value: 'Crachefer' },
    { value: 'Fièrebarbe' },
    { value: 'Poingmarteau' },
];

export { names_human, names_elf, firstnames_human, firstnames_elf, firstnames_dwarf, names_dwarf };