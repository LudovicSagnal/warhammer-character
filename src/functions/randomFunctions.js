import { useContext, useEffect } from "react";
import { RaceContext } from '../App';
import { races, origins } from "../data/races";
import { names_elf, names_human, firstnames_human, firstnames_elf, firstnames_dwarf, names_dwarf, firstnames_halfling, names_halfling } from '../data/names';
import { physical, eye_colors, hair_colors, distinctive_marks, siblings_number } from '../data/physical';
import { birthplace_human, birthplace_dwarf, birthplace_elf, birthplace_halfling, astral_signs } from '../data/birtplace&astral';

const randomFunctions = () => {

    const { race, setRace, origin, setOrigin, gender, setGender, setName, setFirstname, setAge, setHeight, setWeight, setEyeColor, setHairColor, setBirthplace, setSiblings, setMarks, setAstral } = useContext(RaceContext);

    const genderChoice = [
        { value: 'male', label: 'homme' },
        { value: 'female', label: 'femme' },
    ];
    const selectedGender = genderChoice.find((option) => option.value === gender);
    const genderLabel = selectedGender ? selectedGender.label : '';


        ///////////////////////////  Name, FirstName  //////////////////////////



    const getRandomFirstName = ({ race, origin, gender }) => {
        let firstnames;
        if (race === 'humain') {
        firstnames = firstnames_human.filter(firstname => firstname.gender === gender && firstname.origin === origin);
        } else if (race === 'elfe') {
        firstnames = firstnames_elf.filter(firstname => firstname.gender === gender);
        }else if (race === 'nain') {
        firstnames = firstnames_dwarf.filter(firstname => firstname.gender === gender);
        }else if (race === 'halfling') {
        firstnames = firstnames_halfling.filter(firstname => firstname.gender === gender);
        }
        const randomIndex = Math.floor(Math.random() * firstnames.length);
        const selectedFirstName = firstnames[randomIndex]?.value || ''; 
        
        return selectedFirstName;
    };
    const handleRandomFirstName = () => {
        const randomFirstName = getRandomFirstName({ race, origin, gender });
        setFirstname(randomFirstName);
    };

    const getRandomName = (race, origin) => {
        let names;
        if (race === 'humain') {
        names = names_human.filter(name => name.origin === origin)
        }else if (race === 'elfe') {
        names = names_elf;
        }else if (race === 'nain') {
        names = names_dwarf;
        }else if (race === 'halfling') {
        names = names_halfling;
        }
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex]?.value || '';

        return selectedName;
    }
    const handleRandomName = () => {
        const randomName = getRandomName(race, origin);
        setName(randomName);
    }


    ///////////////////////////  Age, height, weight, eyes, hairs  //////////////////////////


    const getRandomAge = (race) => {
    let minAge;
    let maxAge;
    switch (race) {
        case 'humain':
        minAge = 16;
        maxAge = 50;
        break;
        case 'elfe':
        minAge = 30;
        maxAge = 150;
        break;
        case 'nain':
        minAge = 20;
        maxAge = 115;
        break;
        case 'halfling':
        minAge = 20;
        maxAge = 60;
        break;
        default:
        minAge = 18;
        maxAge = 60;
    }
    let age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

    return age;
    }
    const handleAge = () => {
    const randomAge = getRandomAge(race);
    setAge(randomAge);
    }


    const getRandomHeight = (race, gender) => {
    const filteredHeight = physical.filter(
        (phys) => phys.gender === gender && phys.race === race
    );

    const randomFilteredHeight = filteredHeight[Math.floor(Math.random() * filteredHeight.length)];
    const minHeight = randomFilteredHeight.minHeight;
    const maxHeight = randomFilteredHeight.maxHeight;
    const randomHeight = Math.random() * (maxHeight - minHeight) + minHeight;

    return randomHeight.toFixed(2);
    };
    const handleRandomHeight = () => {
    const randomHeight = getRandomHeight(race, gender);
    setHeight(randomHeight);
    };

    const getRandomWeight = (race) => {
    const filteredWeight = physical.filter(
        (phys) => phys.race === race
    );

    const randomFilteredWeight = filteredWeight[Math.floor(Math.random() * filteredWeight.length)];
    const minWeight = randomFilteredWeight.minWeight;
    const maxWeight = randomFilteredWeight.maxWeight;
    const randomWeight = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight;

    return randomWeight;
    };
    const handleRandomWeight = () => {
    const randomWeight = getRandomWeight(race);
    setWeight(randomWeight);
    };

    const handleRandomEyeColor = () => {

    let eyeColor = eye_colors;
    const randomIndex = Math.floor(Math.random() * eye_colors.length);
    const selectedEyeColor = eyeColor[randomIndex]?.color || '';

    setEyeColor(selectedEyeColor);
    return selectedEyeColor ;
    }

    const handleRandomHairColor = () => {

    let hairColor = hair_colors;
    const randomIndex = Math.floor(Math.random() * hair_colors.length);
    const selectedHairColor = hairColor[randomIndex]?.color || '';

    setHairColor(selectedHairColor);
    return selectedHairColor ;
    }


    ////////////////////  Birthplace, siblings, distinctive marks, astral  ////////////////////////


    const getRandomBirthplace = (race, origin) => {
    let birthplaces;
    if (race === 'humain') {
        birthplaces = birthplace_human.filter(birthplace => birthplace.origin === origin)
    }else if (race === 'elfe') {
        birthplaces = birthplace_elf;
    }else if (race === 'nain') {
        birthplaces = birthplace_dwarf;
    }else if (race === 'halfling') {
        birthplaces = birthplace_halfling;
    }
    const randomIndex = Math.floor(Math.random() * birthplaces.length);
    const selectedBirthplace = birthplaces[randomIndex]?.name || '';

    return selectedBirthplace;
    }
    const handleRandomBirthplace = () => {
    const randomBirthplace = getRandomBirthplace(race, origin);
    setBirthplace(randomBirthplace);
    };

    const handleRandomSiblings = () => {
    const selectedRace = siblings_number.find(sibling => sibling.race === race);
    const numbersForRace = selectedRace?.number || [0];
    const randomIndex = Math.floor(Math.random() * numbersForRace.length);
    const selectedSiblingsNumber = numbersForRace[randomIndex];

    setSiblings(selectedSiblingsNumber);
    };

    const handleRandomMarks = () => {

    let marks = distinctive_marks;
    const randomIndex = Math.floor(Math.random() * distinctive_marks.length);
    const selectedMarks = marks[randomIndex] || '';

    setMarks(selectedMarks)
    return selectedMarks ;
    }

    const handleRandomAstral = () => {

    let astral = astral_signs;
    const randomIndex = Math.floor(Math.random() * astral_signs.length);
    const selectedAstral = astral[randomIndex]?.name || '';

    setAstral(selectedAstral);
    return selectedAstral ;
    }


    /////////////////////////////////////   Random All   ////////////////////////////////////

    const handleRandomAll = () => {
        const randomGender = genderChoice[Math.floor(Math.random() * genderChoice.length)].value;
        setGender(randomGender);
        const randomRace = races[Math.floor(Math.random() * races.length)].value;
        setRace(randomRace);
        if (randomRace === 'humain') {
          const randomOrigin = origins[Math.floor(Math.random() * origins.length)].value;
          setOrigin(randomOrigin);
        };
      };
      useEffect(() => {
        handleRandomName();
        handleRandomFirstName();
        handleAge();
        handleRandomHeight();
        handleRandomWeight();
        handleRandomEyeColor();
        handleRandomHairColor();
        handleRandomMarks();
        handleRandomAstral();
        handleRandomSiblings();
        handleRandomBirthplace();
      }, [race, gender, origin]);


    const handleRandomAllWithSelect = () => {
        handleRandomName();
        handleRandomFirstName();
        handleAge();
        handleRandomHeight();
        handleRandomWeight();
        handleRandomEyeColor();
        handleRandomHairColor();
        handleRandomMarks();
        handleRandomAstral();
        handleRandomSiblings();
        handleRandomBirthplace();
    };

    return {

        genderChoice,
        genderLabel,
        handleRandomName,
        handleRandomFirstName,
        handleAge,
        handleRandomHeight,
        handleRandomWeight,
        handleRandomEyeColor,
        handleRandomHairColor,
        handleRandomMarks,
        handleRandomAstral,
        handleRandomSiblings,
        handleRandomBirthplace,
        handleRandomAll,
        handleRandomAllWithSelect,
      };
};

export default randomFunctions;