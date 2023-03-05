export interface Projet {
    id: number;
    name: string;
    description: string;
    retrospective: string;
    imgUrl: string;
    language: string;
    time: string;
}


export const projets: Projet[] = [
    {
        id: 1,
        name: "Seinen Jump",
        description: "Description dernier projet, voir comment mettre dernier de la liste car -1 ne fonctionne pas, peut etre faire id le plus grand",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    },
    {
        id: 2,
        name: "Hélo Vélo",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    },
    {
        id: 3,
        name: "Mission Goroskhova",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    },
    {
        id: 4,
        name: "Greener",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    },
    {
        id: 5,
        name: "Louna C. Portfolio",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    },
    {
        id: 6,
        name: "Yurushi",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    },
    {
        id: 7,
        name: "Embrouille au musée",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj",
        imgUrl: "../static/images/boulder.jpg",
        language: "Ruby On Rails",
        time: "1 semaine",
    }
]