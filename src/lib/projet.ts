export interface Projet {
    id: number;
    name: string;
    description: string;
    retrospective: string;
}


export const projets: Projet[] = [
    {
        id: 1,
        name: "Seinen Jump",
        description: "Description dernier projet, voir comment mettre dernier de la liste car -1 ne fonctionne pas, peut etre faire id le plus grand",
        retrospective: "fcvgbhnj"
    },
    {
        id: 2,
        name: "Portrait de Madame Samazeuilh",
        description: "Guillaume Alaux - 1904",
        retrospective: "fcvgbhnj"
    }
]